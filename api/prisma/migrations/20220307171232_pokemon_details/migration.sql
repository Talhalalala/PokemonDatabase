/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "Abilities" AS ENUM ('Overgrow', 'Chlorophyll', 'Blaze', 'Solar_Power', 'Torrent', 'Rain_Dish', 'Shield_Dust', 'Run_Away', 'Shed_Skin', 'Compoundeyes', 'Tinted_Lens', 'Swarm', 'Sniper', 'Keen_Eye', 'Tangled_Feet', 'Big_Pecks', 'Guts', 'Hustle', 'Gluttony', 'Thick_Fat', 'Intimidate', 'Unnerve', 'Static', 'Lightningrod', 'Surge_Surfer', 'Sand_Veil', 'Sand_Rush', 'Snow_Cloak', 'Slush_Rush', 'Poison_Point', 'Rivalry', 'Sheer_Force', 'Cute_Charm', 'Magic_Guard', 'Friend_Guard', 'Unaware', 'Flash_Fire', 'Drought', 'Snow_Warning', 'Competitive', 'Frisk', 'Inner_Focus', 'Infiltrator', 'Stench', 'Effect_Spore', 'Dry_Skin', 'Damp', 'Wonder_Skin_', 'Arena_Trap', 'Sand_Force', 'Tangling_Hair', 'Pickup', 'Technician', 'Rattled', 'Limber', 'Fur_Coat', 'Cloud_Nine', 'Swift_Swim', 'Vital_Spirit', 'Anger_Point', 'Defiant', 'Justified', 'Water_Absorb', 'Synchronize', 'No_Guard', 'Steadfast', 'Clear_Body', 'Liquid_Ooze', 'Rock_Head', 'Sturdy', 'Magnet_Pull', 'Galvanize', 'Flame_Body', 'Oblivious', 'Own_Tempo', 'Regenerator', 'Analytic', 'Early_Bird', 'Hydration', 'Ice_Body', 'Sticky_Hold', 'Poison_Touch', 'Power_of_Alchemy', 'Shell_Armor', 'Skill_Link', 'Overcoat', 'Levitate', 'Cursed_Body', 'Weak_Armor', 'Insomnia', 'Forewarn', 'Hyper_Cutter', 'Soundproof', 'Aftermath', 'Harvest', 'Battle_Armor', 'Reckless', 'Unburden', 'Iron_Fist', 'Natural_Cure', 'Serene_Grace', 'Healer', 'Leaf_Guard', 'Scrappy', 'Water_Veil', 'Illuminate', 'Filter', 'Mold_Breaker', 'Moxie', 'Imposter', 'Adaptability', 'Anticipation', 'Volt_Absorb', 'Quick_Feet', 'Trace', 'Download', 'Pressure', 'Immunity', 'Marvel_Scale', 'Multiscale', 'Super_Luck', 'Magic_Bounce', 'Plus', 'Huge_Power', 'Sap_Sipper', 'Drizzle', 'Speed_Boost', 'Prankster', 'Shadow_Tag', 'Telepathy', 'Light_Metal', 'Contrary', 'Pickpocket', 'Honey_Gather', 'Magma_Armor', 'Moody', 'Suction_Cups', 'Sand_Stream', 'Poison_Heal', 'Truant', 'Wonder_Guard', 'Normalize', 'Stall', 'Heavy_Metal', 'Pure_Power', 'Minus', 'Rough_Skin', 'Simple', 'Solid_Rock', 'White_Smoke', 'Toxic_Boost', 'Storm_Drain', 'Forecast', 'Color_Change', 'Protean', 'Air_Lock', 'Flower_Gift', 'Flare_Boost', 'Klutz', 'Heatproof', 'Motor_Drive', 'Slow_Start', 'Bad_Dreams', 'Multitype', 'Victory_Star', 'Zen_Mode', 'Mummy', 'Defeatist', 'Illusion', 'Iron_Barbs', 'Turboblaze', 'Teravolt', 'Bulletproof', 'Magician', 'Battle_Bond', 'Cheek_Pouch', 'Gale_Wings', 'Flower_Veil', 'Symbiosis', 'Grass_Pelt', 'Stance_Change', 'Aroma_Veil', 'Sweet_Veil', 'Tough_Claws', 'Mega_Launcher', 'Strong_Jaw', 'Refrigerate', 'Pixilate', 'Gooey', 'Fairy_Aura', 'Dark_Aura', 'Aura_Break', 'Power_Construct', 'Long_Reach', 'Liquid_Voice', 'Stakeout', 'Battery', 'Dancer', 'Schooling', 'Merciless', 'Stamina', 'Water_Bubble', 'Corrosion', 'Fluffy', 'Queenly_Majesty', 'Triage', 'Receiver', 'Wimp_Out', 'Emergency_Exit', 'Water_Compaction', 'Innards_Out', 'RKS_System', 'Shields_Down', 'Comatose', 'Disguise', 'Dazzling', 'Berserk', 'Steelworker', 'Electric_Surge', 'Psychic_Surge', 'Grassy_Surge', 'Misty_Surge', 'Full_Metal_Body', 'Shadow_Shield', 'Beast_Boost', 'Prism_Armor', 'SoulHeart');

-- CreateEnum
CREATE TYPE "Classifications" AS ENUM ('Seed_Pokemon', 'Lizard_Pokemon', 'Flame_Pokemon', 'Tiny_Turtle_Pokemon', 'Turtle_Pokemon', 'Shellfish_Pokemon', 'Worm_Pokemon', 'Cocoon_Pokemon', 'Butterfly_Pokemon', 'Hairy_Pokemon', 'Poison_Bee_Pokemon', 'Tiny_Bird_Pokemon', 'Bird_Pokemon', 'Mouse_Pokemon', 'Beak_Pokemon', 'Snake_Pokemon', 'Cobra_Pokemon', 'Poison_Pin_Pokemon', 'Drill_Pokemon', 'Fairy_Pokemon', 'Fox_Pokemon', 'Balloon_Pokemon', 'Bat_Pokemon', 'Weed_Pokemon', 'Flower_Pokemon', 'Mushroom_Pokemon', 'Insect_Pokemon', 'Poison_Moth_Pokemon', 'Mole_Pokemon', 'Scratch_Cat_Pokemon', 'Classy_Cat_Pokemon', 'Duck_Pokemon', 'Pig_Monkey_Pokemon', 'Puppy_Pokemon', 'Legendary_Pokemon', 'Tadpole_Pokemon', 'Psi_Pokemon', 'Superpower_Pokemon', 'Flycatcher_Pokemon', 'Jellyfish_Pokemon', 'Rock_Pokemon', 'Megaton_Pokemon', 'Fire_Horse_Pokemon', 'Dopey_Pokemon', 'Hermit_Crab_Pokemon', 'Magnet_Pokemon', 'Wild_Duck_Pokemon', 'Twin_Bird_Pokemon', 'Triple_Bird_Pokemon', 'Sea_Lion_Pokemon', 'Sludge_Pokemon', 'Bivalve_Pokemon', 'Gas_Pokemon', 'Shadow_Pokemon', 'Rock_Snake_Pokemon', 'Hypnosis_Pokemon', 'River_Crab_Pokemon', 'Pincer_Pokemon', 'Ball_Pokemon', 'Egg_Pokemon', 'Coconut_Pokemon', 'Lonely_Pokemon', 'Bone_Keeper_Pokemon', 'Kicking_Pokemon', 'Punching_Pokemon', 'Licking_Pokemon', 'Poison_Gas_Pokemon', 'Spikes_Pokemon', 'Vine_Pokemon', 'Parent_Pokemon', 'Dragon_Pokemon', 'Goldfish_Pokemon', 'Starshape_Pokemon', 'Mysterious_Pokemon', 'Barrier_Pokemon', 'Mantis_Pokemon', 'Humanshape_Pokemon', 'Electric_Pokemon', 'Spitfire_Pokemon', 'Stagbeetle_Pokemon', 'Wild_Bull_Pokemon', 'Fish_Pokemon', 'Atrocious_Pokemon', 'Transport_Pokemon', 'Transform_Pokemon', 'Evolution_Pokemon', 'Bubble_Jet_Pokemon', 'Lightning_Pokemon', 'Virtual_Pokemon', 'Spiral_Pokemon', 'Fossil_Pokemon', 'Sleeping_Pokemon', 'Freeze_Pokemon', 'Genetic_Pokemon', 'New_Species_Pokemon', 'Leaf_Pokemon', 'Herb_Pokemon', 'Fire_Mouse_Pokemon', 'Volcano_Pokemon', 'Big_Jaw_Pokemon', 'Scout_Pokemon', 'Long_Body_Pokemon', 'Owl_Pokemon', 'Five_Star_Pokemon', 'String_Spit_Pokemon', 'Long_Leg_Pokemon', 'Angler_Pokemon', 'Light_Pokemon', 'Tiny_Mouse_Pokemon', 'Star_Shape_Pokemon', 'Spike_Ball_Pokemon', 'Happiness_Pokemon', 'Little_Bird_Pokemon', 'Mystic_Pokemon', 'Wool_Pokemon', 'Aquamouse_Pokemon', 'Aquarabbit_Pokemon', 'Imitation_Pokemon', 'Frog_Pokemon', 'Cottonweed_Pokemon', 'Long_Tail_Pokemon', 'Sun_Pokemon', 'Clear_Wing_Pokemon', 'Water_Fish_Pokemon', 'Moonlight_Pokemon', 'Darkness_Pokemon', 'Royal_Pokemon', 'Screech_Pokemon', 'Symbol_Pokemon', 'Patient_Pokemon', 'Long_Neck_Pokemon', 'Bagworm_Pokemon', 'Land_Snake_Pokemon', 'Flyscorpion_Pokemon', 'Iron_Snake_Pokemon', 'Mold_Pokemon', 'Singlehorn_Pokemon', 'Sharp_Claw_Pokemon', 'Little_Bear_Pokemon', 'Hibernator_Pokemon', 'Lava_Pokemon', 'Pig_Pokemon', 'Swine_Pokemon', 'Coral_Pokemon', 'Jet_Pokemon', 'Delivery_Pokemon', 'Kite_Pokemon', 'Armor_Bird_Pokemon', 'Dark_Pokemon', 'Long_Nose_Pokemon', 'Armor_Pokemon', 'Big_Horn_Pokemon', 'Painter_Pokemon', 'Scuffle_Pokemon', 'Handstand_Pokemon', 'Kiss_Pokemon', 'Live_Coal_Pokemon', 'Milk_Cow_Pokemon', 'Thunder_Pokemon', 'Aurora_Pokemon', 'Rock_Skin_Pokemon', 'Hard_Shell_Pokemon', 'Diving_Pokemon', 'Rainbow_Pokemon', 'Time_Travel_Pokemon', 'Wood_Gecko_Pokemon', 'Forest_Pokemon', 'Chick_Pokemon', 'Young_Fowl_Pokemon', 'Blaze_Pokemon', 'Mud_Fish_Pokemon', 'Bite_Pokemon', 'Tiny_Racoon_Pokemon', 'Rush_Pokemon', 'Water_Weed_Pokemon', 'Jolly_Pokemon', 'Carefree_Pokemon', 'Acorn_Pokemon', 'Wily_Pokemon', 'Wickid_Pokemon', 'TinySwallow_Pokemon', 'Swallow_Pokemon', 'Seagull_Pokemon', 'Water_Bird_Pokemon', 'Feeling_Pokemon', 'Emotion_Pokemon', 'Embrace_Pokemon', 'Pond_Skater_Pokemon', 'Eyeball_Pokemon', 'Slacker_Pokemon', 'Wild_Monkey_Pokemon', 'Lazy_Pokemon', 'Trainee_Pokemon', 'Ninja_Pokemon', 'Shed_Pokemon', 'Whisper_Pokemon', 'Big_Voice_Pokemon', 'Loud_Noise_Pokemon', 'Guts_Pokemon', 'Arm_Thrust_Pokemon', 'Polka_Dot_Pokemon', 'Compass_Pokemon', 'Kitten_Pokemon', 'Prim_Pokemon', 'Deceiver_Pokemon', 'Iron_Armor_Pokemon', 'Meditate_Pokemon', 'Discharge_Pokemon', 'Cheering_Pokemon', 'Firefly_Pokemon', 'Thorn_Pokemon', 'Stomach_Pokemon', 'Poison_Bag_Pokemon', 'Savage_Pokemon', 'Brutal_Pokemon', 'Ball_Whale_Pokemon', 'Float_Whale_Pokemon', 'Numb_Pokemon', 'Eruption_Pokemon', 'Coal_Pokemon', 'Bounce_Pokemon', 'Manipulate_Pokemon', 'Spot_Panda_Pokemon', 'Ant_Pit_Pokemon', 'Vibration_Pokemon', 'Cactus_Pokemon', 'Scarecrow_Pokemon', 'Cotton_Bird_Pokemon', 'Humming_Pokemon', 'Cat_Ferret_Pokemon', 'Fang_Snake_Pokemon', 'Meteorite_Pokemon', 'Whiskers_Pokemon', 'Ruffian_Pokemon', 'Rogue_Pokemon', 'Clay_Doll_Pokemon', 'Sea_Lily_Pokemon', 'Barnacle_Pokemon', 'Old_Shrimp_Pokemon', 'Plate_Pokemon', 'Tender_Pokemon', 'Weather_Pokemon', 'Color_Swap_Pokemon', 'Puppet_Pokemon', 'Marionette_Pokemon', 'Requiem_Pokemon', 'Beckon_Pokemon', 'Fruit_Pokemon', 'Wind_Chime_Pokemon', 'Disaster_Pokemon', 'Bright_Pokemon', 'Snow_Hat_Pokemon', 'Face_Pokemon', 'Clap_Pokemon', 'Ball_Roll_Pokemon', 'Ice_Break_Pokemon', 'Deep_Sea_Pokemon', 'South_Sea_Pokemon', 'Longevity_Pokemon', 'Rendezvous_Pokemon', 'Rock_Head_Pokemon', 'Endurance_Pokemon', 'Iron_Ball_Pokemon', 'Iron_Claw_Pokemon', 'Iron_Leg_Pokemon', 'Rock_Peak_Pokemon', 'Iceberg_Pokemon', 'Iron_Pokemon', 'Eon_Pokemon', 'Sea_Basin_Pokemon', 'Continent_Pokemon', 'Sky_High_Pokemon', 'Wish_Pokemon', 'DNA_Pokemon', 'Tiny_Leaf_Pokemon', 'Grove_Pokemon', 'Chimp_Pokemon', 'Playful_Pokemon', 'Penguin_Pokemon', 'Emperor_Pokemon', 'Starling_Pokemon', 'Predator_Pokemon', 'Plump_Mouse_Pokemon', 'Beaver_Pokemon', 'Cricket_Pokemon', 'Flash_Pokemon', 'Spark_Pokemon', 'Gleam_Eyes_Pokemon', 'Bud_Pokemon', 'Bouquet_Pokemon', 'Head_Butt_Pokemon', 'Shield_Pokemon', 'Moth_Pokemon', 'Tiny_Bee_Pokemon', 'Beehive_Pokemon', 'EleSquirrel_Pokemon', 'Sea_Weasel_Pokemon', 'Cherry_Pokemon', 'Blossom_Pokemon', 'Sea_Slug_Pokemon', 'Blimp_Pokemon', 'Rabbit_Pokemon', 'Magical_Pokemon', 'Big_Boss_Pokemon', 'Catty_Pokemon', 'Tiger_Cat_Pokemon', 'Bell_Pokemon', 'Skunk_Pokemon', 'Bronze_Pokemon', 'Bronze_Bell_Pokemon', 'Bonsai_Pokemon', 'Mime_Pokemon', 'Playhouse_Pokemon', 'Music_Note_Pokemon', 'Forbidden_Pokemon', 'Land_Shark_Pokemon', 'Cave_Pokemon', 'Mach_Pokemon', 'Big_Eater_Pokemon', 'Emanation_Pokemon', 'Aura_Pokemon', 'Hippo_Pokemon', 'Heavyweight_Pokemon', 'Scorpion_Pokemon', 'Ogre_Scorp_Pokemon', 'Toxic_Mouth_Pokemon', 'Bug_Catcher_Pokemon', 'Wing_Fish_Pokemon', 'Neon_Pokemon', 'Frosted_Tree_Pokemon', 'Magnet_Area_Pokemon', 'Thunderbolt_Pokemon', 'Blast_Pokemon', 'Jubilee_Pokemon', 'Ogre_Darner_Pokemon', 'Verdant_Pokemon', 'Fresh_Snow_Pokemon', 'Fang_Scorp_Pokemon', 'Twin_Tusk_Pokemon', 'Blade_Pokemon', 'Gripper_Pokemon', 'Snow_Land_Pokemon', 'Plasma_Pokemon', 'Knowledge_Pokemon', 'Willpower_Pokemon', 'Temporal_Pokemon', 'Spatial_Pokemon', 'Lava_Dome_Pokemon', 'Colossal_Pokemon', 'Renegade_Pokemon', 'Lunar_Pokemon', 'Sea_Drifter_Pokemon', 'Seafaring_Pokemon', 'PitchBlack_Pokemon', 'Gratitude_Pokemon', 'Alpha_Pokemon', 'Victory_Pokemon', 'Grass_Snake_Pokemon', 'Regal_Pokemon', 'Fire_Pig_Pokemon', 'Mega_Fire_Pig_Pokemon', 'Sea_Otter_Pokemon', 'Discipline_Pokemon', 'Formidable_Pokemon', 'Lookout_Pokemon', 'Loyal_Dog_Pokemon', 'BigHearted_Pokemon', 'Devious_Pokemon', 'Cruel_Pokemon', 'Grass_Monkey_Pokemon', 'Thorn_Monkey_Pokemon', 'High_Temp_Pokemon', 'Ember_Pokemon', 'Spray_Pokemon', 'Geyser_Pokemon', 'Dream_Eater_Pokemon', 'Drowsing_Pokemon', 'Tiny_Pigeon_Pokemon', 'Wild_Pigeon_Pokemon', 'Proud_Pokemon', 'Electrified_Pokemon', 'Mantle_Pokemon', 'Ore_Pokemon', 'Compressed_Pokemon', 'Courting_Pokemon', 'Subterrene_Pokemon', 'Hearing_Pokemon', 'Muscular_Pokemon', 'Judo_Pokemon', 'Karate_Pokemon', 'Sewing_Pokemon', 'LeafWrapped_Pokemon', 'Nurturing_Pokemon', 'Centipede_Pokemon', 'Curlipede_Pokemon', 'Megapede_Pokemon', 'Cotton_Puff_Pokemon', 'Windveiled_Pokemon', 'Bulb_Pokemon', 'Flowering_Pokemon', 'Hostile_Pokemon', 'Desert_Croc_Pokemon', 'Intimidation_Pokemon', 'Zen_Charm_Pokemon', 'Blazing_Pokemon', 'Rock_Inn_Pokemon', 'Stone_Home_Pokemon', 'Shedding_Pokemon', 'Hoodlum_Pokemon', 'Avianoid_Pokemon', 'Spirit_Pokemon', 'Coffin_Pokemon', 'Prototurtle_Pokemon', 'First_Bird_Pokemon', 'Trash_Bag_Pokemon', 'Trash_Heap_Pokemon', 'Tricky_Fox_Pokemon', 'Illusion_Fox_Pokemon', 'Chinchilla_Pokemon', 'Scarf_Pokemon', 'Fixation_Pokemon', 'Astral_Body_Pokemon', 'Cell_Pokemon', 'Mitosis_Pokemon', 'Multiplying_Pokemon', 'White_Bird_Pokemon', 'Icy_Snow_Pokemon', 'Snowstorm_Pokemon', 'Season_Pokemon', 'Sky_Squirrel_Pokemon', 'Clamping_Pokemon', 'Cavalry_Pokemon', 'Floating_Pokemon', 'Caring_Pokemon', 'Attaching_Pokemon', 'EleSpider_Pokemon', 'Thorn_Seed_Pokemon', 'Thorn_Pod_Pokemon', 'Gear_Pokemon', 'EleFish_Pokemon', 'Cerebral_Pokemon', 'Candle_Pokemon', 'Lamp_Pokemon', 'Luring_Pokemon', 'Tusk_Pokemon', 'Axe_Jaw_Pokemon', 'Chill_Pokemon', 'Freezing_Pokemon', 'Crystallizing_Pokemon', 'Snail_Pokemon', 'Shell_Out_Pokemon', 'Trap_Pokemon', 'Martial_Arts_Pokemon', 'Automaton_Pokemon', 'Sharp_Blade_Pokemon', 'Sword_Blade_Pokemon', 'Bash_Buffalo_Pokemon', 'Eaglet_Pokemon', 'Valiant_Pokemon', 'Diapered_Pokemon', 'Bone_Vulture_Pokemon', 'Anteater_Pokemon', 'Iron_Ant_Pokemon', 'Irate_Pokemon', 'Torch_Pokemon', 'Iron_Will_Pokemon', 'Cavern_Pokemon', 'Grassland_Pokemon', 'Cyclone_Pokemon', 'Bolt_Strike_Pokemon', 'Vast_White_Pokemon', 'Deep_Black_Pokemon', 'Abundance_Pokemon', 'Boundary_Pokemon', 'Colt_Pokemon', 'Melody_Pokemon', 'Paleozoic_Pokemon', 'Spiky_Nut_Pokemon', 'Spiny_Armor_Pokemon', 'Bubble_Frog_Pokemon', 'Digging_Pokemon', 'Tiny_Robin_Pokemon', 'Scorching_Pokemon', 'Scatterdust_Pokemon', 'Scale_Pokemon', 'Lion_Cub_Pokemon', 'Single_Bloom_Pokemon', 'Garden_Pokemon', 'Mount_Pokemon', 'Daunting_Pokemon', 'Poodle_Pokemon', 'Restraint_Pokemon', 'Constraint_Pokemon', 'Sword_Pokemon', 'Royal_Sword_Pokemon', 'Perfume_Pokemon', 'Fragrance_Pokemon', 'Cotton_Candy_Pokemon', 'Meringue_Pokemon', 'Revolving_Pokemon', 'Overturning_Pokemon', 'TwoHanded_Pokemon', 'Collective_Pokemon', 'Mock_Kelp_Pokemon', 'Water_Gun_Pokemon', 'Howitzer_Pokemon', 'Generator_Pokemon', 'Royal_Heir_Pokemon', 'Despot_Pokemon', 'Tundra_Pokemon', 'Intertwining_Pokemon', 'Wrestling_Pokemon', 'Antenna_Pokemon', 'Jewel_Pokemon', 'Soft_Tissue_Pokemon', 'Key_Ring_Pokemon', 'Stump_Pokemon', 'Elder_Tree_Pokemon', 'Pumpkin_Pokemon', 'Ice_Chunk_Pokemon', 'Sound_Wave_Pokemon', 'Life_Pokemon', 'Destruction_Pokemon', 'Order_Pokemon', 'Mischief_Pokemon', 'Steam_Pokemon', 'Grass_Quill_Pokemon', 'Blade_Quill_Pokemon', 'Arrow_Quill_Pokemon', 'Fire_Cat_Pokemon', 'Heel_Pokemon', 'Pop_Star_Pokemon', 'Soloist_Pokemon', 'Woodpecker_Pokemon', 'Bugle_Beak_Pokemon', 'Cannon_Pokemon', 'Loitering_Pokemon', 'Stakeout_Pokemon', 'Larva_Pokemon', 'Battery_Pokemon', 'Stag_Beetle_Pokemon', 'Boxing_Pokemon', 'Woolly_Crab_Pokemon', 'Dancing_Pokemon', 'Bee_Fly_Pokemon', 'Wolf_Pokemon', 'Small_Fry_Pokemon', 'Brutal_Star_Pokemon', 'Donkey_Pokemon', 'Draft_Horse_Pokemon', 'Water_Bubble_Pokemon', 'Sickle_Grass_Pokemon', 'Bloom_Sickle_Pokemon', 'Illuminating_Pokemon', 'Toxic_Lizard_Pokemon', 'Flailing_Pokemon', 'Strong_Arm_Pokemon', 'Posy_Picker_Pokemon', 'Sage_Pokemon', 'Teamwork_Pokemon', 'Turn_Tail_Pokemon', 'Hard_Scale_Pokemon', 'Sand_Heap_Pokemon', 'Sand_Castle_Pokemon', 'Sea_Cucumber_Pokemon', 'Synthetic_Pokemon', 'Meteor_Pokemon', 'Blast_Turtle_Pokemon', 'RolyPoly_Pokemon', 'Disguise_Pokemon', 'Gnash_Teeth_Pokemon', 'Placid_Pokemon', 'Sea_Creeper_Pokemon', 'Scaly_Pokemon', 'Land_Spirit_Pokemon', 'Nebula_Pokemon', 'Protostar_Pokemon', 'Sunne_Pokemon', 'Moone_Pokemon', 'Parasite_Pokemon', 'Swollen_Pokemon', 'Lissome_Pokemon', 'Glowing_Pokemon', 'Launch_Pokemon', 'Drawn_Sword_Pokemon', 'Junkivore_Pokemon', 'Prism_Pokemon', 'Artificial_Pokemon');

-- CreateEnum
CREATE TYPE "Types" AS ENUM ('grass', 'fire', 'water', 'bug', 'normal', 'poison', 'electric', 'ground', 'fairy', 'fighting', 'psychic', 'rock', 'ghost', 'ice', 'dragon', 'dark', 'steel', 'flying');

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Pokemon" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "japanese_name" TEXT NOT NULL,
    "percentage_male" DOUBLE PRECISION NOT NULL,
    "attack" INTEGER NOT NULL,
    "defense" INTEGER NOT NULL,
    "hp" INTEGER NOT NULL,
    "sp_attack" INTEGER NOT NULL,
    "sp_defense" INTEGER NOT NULL,
    "speed" INTEGER NOT NULL,
    "weight_kg" DOUBLE PRECISION NOT NULL,
    "generationId" INTEGER NOT NULL,
    "classificationId" INTEGER NOT NULL,
    "is_legendary" BOOLEAN NOT NULL,
    "against_bug" DOUBLE PRECISION NOT NULL,
    "against_dark" DOUBLE PRECISION NOT NULL,
    "against_dragon" DOUBLE PRECISION NOT NULL,
    "against_electric" DOUBLE PRECISION NOT NULL,
    "against_fairy" DOUBLE PRECISION NOT NULL,
    "against_fight" DOUBLE PRECISION NOT NULL,
    "against_fire" DOUBLE PRECISION NOT NULL,
    "against_flying" DOUBLE PRECISION NOT NULL,
    "against_ghost" DOUBLE PRECISION NOT NULL,
    "against_grass" DOUBLE PRECISION NOT NULL,
    "against_ground" DOUBLE PRECISION NOT NULL,
    "against_ice" DOUBLE PRECISION NOT NULL,
    "against_normal" DOUBLE PRECISION NOT NULL,
    "against_poison" DOUBLE PRECISION NOT NULL,
    "against_psychic" DOUBLE PRECISION NOT NULL,
    "against_rock" DOUBLE PRECISION NOT NULL,
    "against_steel" DOUBLE PRECISION NOT NULL,
    "against_water" DOUBLE PRECISION NOT NULL,
    "base_egg_steps" INTEGER NOT NULL,
    "base_happiness" INTEGER NOT NULL,
    "base_total" INTEGER NOT NULL,
    "capture_rate" DOUBLE PRECISION,
    "experience_growth" INTEGER NOT NULL,
    "height_m" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Pokemon_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pokedex" (
    "id" SERIAL NOT NULL,
    "pokemonId" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "expiresAt" TIMESTAMP(3),

    CONSTRAINT "Pokedex_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Type" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "expiresAt" TIMESTAMP(3),

    CONSTRAINT "Type_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PokemonTypes" (
    "pokemonId" SERIAL NOT NULL,
    "typeId" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "expiresAt" TIMESTAMP(3),

    CONSTRAINT "PokemonTypes_pkey" PRIMARY KEY ("pokemonId","typeId")
);

-- CreateTable
CREATE TABLE "Ability" (
    "id" SERIAL NOT NULL,
    "ability" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "expiresAt" TIMESTAMP(3),

    CONSTRAINT "Ability_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PokemonAbilities" (
    "pokemonId" SERIAL NOT NULL,
    "abilityId" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "expiresAt" TIMESTAMP(3),

    CONSTRAINT "PokemonAbilities_pkey" PRIMARY KEY ("pokemonId","abilityId")
);

-- CreateTable
CREATE TABLE "Classification" (
    "id" SERIAL NOT NULL,
    "classification" TEXT NOT NULL,

    CONSTRAINT "Classification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Generation" (
    "id" SERIAL NOT NULL,
    "generation" INTEGER NOT NULL,

    CONSTRAINT "Generation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Pokedex_pokemonId_key" ON "Pokedex"("pokemonId");

-- CreateIndex
CREATE UNIQUE INDEX "Type_type_key" ON "Type"("type");

-- CreateIndex
CREATE UNIQUE INDEX "Ability_ability_key" ON "Ability"("ability");

-- CreateIndex
CREATE UNIQUE INDEX "Classification_classification_key" ON "Classification"("classification");

-- CreateIndex
CREATE UNIQUE INDEX "Generation_generation_key" ON "Generation"("generation");

-- AddForeignKey
ALTER TABLE "Pokemon" ADD CONSTRAINT "Pokemon_classificationId_fkey" FOREIGN KEY ("classificationId") REFERENCES "Classification"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pokemon" ADD CONSTRAINT "Pokemon_generationId_fkey" FOREIGN KEY ("generationId") REFERENCES "Generation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pokedex" ADD CONSTRAINT "Pokedex_pokemonId_fkey" FOREIGN KEY ("pokemonId") REFERENCES "Pokemon"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PokemonTypes" ADD CONSTRAINT "PokemonTypes_pokemonId_fkey" FOREIGN KEY ("pokemonId") REFERENCES "Pokemon"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PokemonTypes" ADD CONSTRAINT "PokemonTypes_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "Type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PokemonAbilities" ADD CONSTRAINT "PokemonAbilities_pokemonId_fkey" FOREIGN KEY ("pokemonId") REFERENCES "Pokemon"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PokemonAbilities" ADD CONSTRAINT "PokemonAbilities_abilityId_fkey" FOREIGN KEY ("abilityId") REFERENCES "Ability"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
