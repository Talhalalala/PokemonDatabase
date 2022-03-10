import { PrismaClient } from "@prisma/client";
import csv from "csv-parser";
import fs from "fs";

const getPokemon = async (): Promise<any[]> => {
  return new Promise((resolve, reject) => {
    const results: any = [];
    fs.createReadStream("../data/pokemon.csv")
      .pipe(csv())
      .on("data", (data: any) => results.push(data))
      .on("error", (error: any) => reject(error))
      .on("end", () => {
        resolve(
          results.map((result: any) => ({
            ...result,
            abilities: JSON.parse(result.abilities.replace(/\'/g, '"')),
            against_bug: Number(result.against_bug),
            against_dark: Number(result.against_dark),
            against_dragon: Number(result.against_dragon),
            against_electric: Number(result.against_electric),
            against_fairy: Number(result.against_fairy),
            against_fight: Number(result.against_fight),
            against_fire: Number(result.against_fire),
            against_flying: Number(result.against_flying),
            against_ghost: Number(result.against_ghost),
            against_grass: Number(result.against_grass),
            against_ground: Number(result.against_ground),
            against_ice: Number(result.against_ice),
            against_normal: Number(result.against_normal),
            against_poison: Number(result.against_poison),
            against_psychic: Number(result.against_psychic),
            against_rock: Number(result.against_rock),
            against_steel: Number(result.against_steel),
            against_water: Number(result.against_water),
            attack: Number(result.attack),
            base_egg_steps: Number(result.base_egg_steps),
            base_happiness: Number(result.base_happiness),
            base_total: Number(result.base_total),
            capture_rate: Number(result.capture_rate),
            defense: Number(result.defense),
            experience_growth: Number(result.experience_growth),
            height_m: Number(result.height_m),
            hp: Number(result.hp),
            percentage_male: Number(result.percentage_male),
            pokedex_number: Number(result.pokedex_number),
            sp_attack: Number(result.sp_attack),
            sp_defense: Number(result.sp_defense),
            speed: Number(result.speed),
            types: result.type2 ? [result.type1, result.type2] : [result.type1],
            weight_kg: Number(result.weight_kg),
            generation: Number(result.generation),
            is_legendary: result.is_legendary === "1" ? true : false,
            
          }))
        );
      });
  });
};

const prisma = new PrismaClient();

async function main() {
  const pokemon = await getPokemon();
  // Create the abilities, classifications, generations and types in the db
  const abilities = Array.from(new Set(pokemon.map((p) => p.abilities).flat()));
  await prisma.ability.createMany({
    data: abilities.map((value) => ({ ability: value })),
  });
  const classifications = Array.from(
    new Set(pokemon.map((p) => p.classification))
  );
  await prisma.classification.createMany({
    data: classifications.map((value) => ({ classification: value })),
  });
  const generations = Array.from(new Set(pokemon.map((p) => p.generation)));
  await prisma.generation.createMany({
    data: generations.map((value) => ({ generation: value })),
  });
  const types = Array.from(new Set(pokemon.map((p) => p.types).flat()));
  await prisma.type.createMany({
    data: types.map((value) => ({ type: value })),
  });

  // Get the ids for abilities, classifications, generations and types from the db
  const abilityIds = await prisma.ability.findMany();
  const classificationIds = await prisma.classification.findMany();
  const generationIds = await prisma.generation.findMany();
  const typeIds = await prisma.type.findMany();

  // Add the classificationId and generationId to each pokemon for inserting
  const pokemon2 = pokemon.map((p) => {
    const classificationIndex = classificationIds.findIndex(
      (id) => id.classification === p.classification
    );
    const generationIndex = generationIds.findIndex(
      (id) => id.generation === p.generation
    );
    return {
      ...p,
      generationId: generationIds[generationIndex].id,
      classificationId: classificationIds[classificationIndex].id,
    };
  });

  // Create the pokemon in the db
  await prisma.pokemon.createMany({
    data: pokemon2.map((p) => ({
      name: p.name,
      japanese_name: p.japanese_name,
      percentage_male: p.percentage_male,
      generationId: p.generationId,
      sp_attack: p.sp_attack,
      sp_defense: p.sp_defense,
      speed: p.speed,
      weight_kg: p.weight_kg,
      is_legendary: p.is_legendary,
      against_bug: p.against_bug,
      against_dark: p.against_dark,
      against_dragon: p.against_dragon,
      against_electric: p.against_electric,
      against_fairy: p.against_fairy,
      against_fight: p.against_fight,
      against_fire: p.against_fire,
      against_flying: p.against_flying,
      against_ghost: p.against_ghost,
      against_grass: p.against_grass,
      against_ground: p.against_ground,
      against_ice: p.against_ice,
      against_normal: p.against_normal,
      against_poison: p.against_poison,
      against_psychic: p.against_psychic,
      against_rock: p.against_rock,
      against_steel: p.against_steel,
      against_water: p.against_water,
      attack: p.attack,
      base_egg_steps: p.base_egg_steps,
      base_happiness: p.base_happiness,
      base_total: p.base_total,
      capture_rate: p.capture_rate,
      classificationId: p.classificationId,
      defense: p.defense,
      experience_growth: p.experience_growth,
      height_m: p.height_m,
      hp: p.hp,
    })),
  });
  // Get the pokemon ids from the db
  const pokemonIds = await prisma.pokemon.findMany();

  // Map each pokemon id to its pokedex_number, type ids and ability ids
  const pokemon3 = pokemon2.map((p) => {
    const pokemonIndex = pokemonIds.findIndex((name) => name.name === p.name);
    const pokemonTypeIds = typeIds
      .filter((type) => p.types.includes(type.type))
      .map((type) => type.id);
    const pokemonAbilityIds = abilityIds
      .filter((ability) => p.abilities.includes(ability.ability))
      .map((ability) => ability.id);
    return {
      ...p,
      pokemonId: pokemonIds[pokemonIndex].id,
      typeIds: pokemonTypeIds,
      abilityIds: pokemonAbilityIds,
    };
  });

  // Insert the pokedex_entries into the db
  await prisma.pokedex.createMany({
    data: pokemon3.map((p) => ({
      id: p.pokedex_number,
      pokemonId: p.pokemonId,
    })),
  });

  // Flatten pokemon abilities and pokemon types for insertion
  const pokemonAbilities = pokemon3.flatMap((p) =>
    p.abilityIds.map((q: any) => ({ abilityId: q, pokemonId: p.pokemonId }))
  );
  const pokemonTypes = pokemon3.flatMap((p) =>
    p.typeIds.map((q: any) => ({ typeId: q, pokemonId: p.pokemonId }))
  );

  // Insert the pokemonAbilities and pokemonTypes into the db
  await prisma.pokemonAbilities.createMany({
    data: pokemonAbilities,
  });
  await prisma.pokemonTypes.createMany({
    data: pokemonTypes,
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });