import { useQuery, UseQueryOptions } from 'react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables>(query: string, variables?: TVariables) {
  return async (): Promise<TData> => {
    const res = await fetch(process.env.NEXT_PUBLIC_API as string, {
    method: "POST",
    ...({"headers":{"credentials":"include","content-type":"application/json"}}),
      body: JSON.stringify({ query, variables }),
    });

    const json = await res.json();

    if (json.errors) {
      const { message } = json.errors[0];

      throw new Error(message);
    }

    return json.data;
  }
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type Ability = {
  __typename?: 'Ability';
  _count?: Maybe<AbilityCount>;
  ability: Scalars['String'];
  createdAt: Scalars['DateTime'];
  expiresAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  pokemonAbilities: Array<PokemonAbilities>;
  updatedAt: Scalars['DateTime'];
};


export type AbilityPokemonAbilitiesArgs = {
  cursor?: InputMaybe<PokemonAbilitiesWhereUniqueInput>;
  distinct?: InputMaybe<Array<PokemonAbilitiesScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PokemonAbilitiesOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PokemonAbilitiesWhereInput>;
};

export type AbilityAvgAggregate = {
  __typename?: 'AbilityAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type AbilityAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type AbilityCount = {
  __typename?: 'AbilityCount';
  pokemonAbilities: Scalars['Int'];
};

export type AbilityCountAggregate = {
  __typename?: 'AbilityCountAggregate';
  _all: Scalars['Int'];
  ability: Scalars['Int'];
  createdAt: Scalars['Int'];
  expiresAt: Scalars['Int'];
  id: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type AbilityCountOrderByAggregateInput = {
  ability?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  expiresAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type AbilityCreateInput = {
  ability: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  expiresAt?: InputMaybe<Scalars['DateTime']>;
  pokemonAbilities?: InputMaybe<PokemonAbilitiesCreateNestedManyWithoutAbilityInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type AbilityCreateManyInput = {
  ability: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  expiresAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type AbilityCreateNestedOneWithoutPokemonAbilitiesInput = {
  connect?: InputMaybe<AbilityWhereUniqueInput>;
  connectOrCreate?: InputMaybe<AbilityCreateOrConnectWithoutPokemonAbilitiesInput>;
  create?: InputMaybe<AbilityCreateWithoutPokemonAbilitiesInput>;
};

export type AbilityCreateOrConnectWithoutPokemonAbilitiesInput = {
  create: AbilityCreateWithoutPokemonAbilitiesInput;
  where: AbilityWhereUniqueInput;
};

export type AbilityCreateWithoutPokemonAbilitiesInput = {
  ability: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  expiresAt?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type AbilityGroupBy = {
  __typename?: 'AbilityGroupBy';
  _avg?: Maybe<AbilityAvgAggregate>;
  _count?: Maybe<AbilityCountAggregate>;
  _max?: Maybe<AbilityMaxAggregate>;
  _min?: Maybe<AbilityMinAggregate>;
  _sum?: Maybe<AbilitySumAggregate>;
  ability: Scalars['String'];
  createdAt: Scalars['DateTime'];
  expiresAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};

export type AbilityMaxAggregate = {
  __typename?: 'AbilityMaxAggregate';
  ability?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  expiresAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type AbilityMaxOrderByAggregateInput = {
  ability?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  expiresAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type AbilityMinAggregate = {
  __typename?: 'AbilityMinAggregate';
  ability?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  expiresAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type AbilityMinOrderByAggregateInput = {
  ability?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  expiresAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type AbilityOrderByWithAggregationInput = {
  _avg?: InputMaybe<AbilityAvgOrderByAggregateInput>;
  _count?: InputMaybe<AbilityCountOrderByAggregateInput>;
  _max?: InputMaybe<AbilityMaxOrderByAggregateInput>;
  _min?: InputMaybe<AbilityMinOrderByAggregateInput>;
  _sum?: InputMaybe<AbilitySumOrderByAggregateInput>;
  ability?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  expiresAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type AbilityOrderByWithRelationInput = {
  ability?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  expiresAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  pokemonAbilities?: InputMaybe<PokemonAbilitiesOrderByRelationAggregateInput>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type AbilityRelationFilter = {
  is?: InputMaybe<AbilityWhereInput>;
  isNot?: InputMaybe<AbilityWhereInput>;
};

export enum AbilityScalarFieldEnum {
  Ability = 'ability',
  CreatedAt = 'createdAt',
  ExpiresAt = 'expiresAt',
  Id = 'id',
  UpdatedAt = 'updatedAt'
}

export type AbilityScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<AbilityScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<AbilityScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<AbilityScalarWhereWithAggregatesInput>>;
  ability?: InputMaybe<StringWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  expiresAt?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type AbilitySumAggregate = {
  __typename?: 'AbilitySumAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type AbilitySumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type AbilityUpdateInput = {
  ability?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  expiresAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  pokemonAbilities?: InputMaybe<PokemonAbilitiesUpdateManyWithoutAbilityInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type AbilityUpdateManyMutationInput = {
  ability?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  expiresAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type AbilityUpdateOneRequiredWithoutPokemonAbilitiesInput = {
  connect?: InputMaybe<AbilityWhereUniqueInput>;
  connectOrCreate?: InputMaybe<AbilityCreateOrConnectWithoutPokemonAbilitiesInput>;
  create?: InputMaybe<AbilityCreateWithoutPokemonAbilitiesInput>;
  update?: InputMaybe<AbilityUpdateWithoutPokemonAbilitiesInput>;
  upsert?: InputMaybe<AbilityUpsertWithoutPokemonAbilitiesInput>;
};

export type AbilityUpdateWithoutPokemonAbilitiesInput = {
  ability?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  expiresAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type AbilityUpsertWithoutPokemonAbilitiesInput = {
  create: AbilityCreateWithoutPokemonAbilitiesInput;
  update: AbilityUpdateWithoutPokemonAbilitiesInput;
};

export type AbilityWhereInput = {
  AND?: InputMaybe<Array<AbilityWhereInput>>;
  NOT?: InputMaybe<Array<AbilityWhereInput>>;
  OR?: InputMaybe<Array<AbilityWhereInput>>;
  ability?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  expiresAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IntFilter>;
  pokemonAbilities?: InputMaybe<PokemonAbilitiesListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type AbilityWhereUniqueInput = {
  ability?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
};

export type AffectedRowsOutput = {
  __typename?: 'AffectedRowsOutput';
  count: Scalars['Int'];
};

export type AggregateAbility = {
  __typename?: 'AggregateAbility';
  _avg?: Maybe<AbilityAvgAggregate>;
  _count?: Maybe<AbilityCountAggregate>;
  _max?: Maybe<AbilityMaxAggregate>;
  _min?: Maybe<AbilityMinAggregate>;
  _sum?: Maybe<AbilitySumAggregate>;
};

export type AggregateCaptured = {
  __typename?: 'AggregateCaptured';
  _avg?: Maybe<CapturedAvgAggregate>;
  _count?: Maybe<CapturedCountAggregate>;
  _max?: Maybe<CapturedMaxAggregate>;
  _min?: Maybe<CapturedMinAggregate>;
  _sum?: Maybe<CapturedSumAggregate>;
};

export type AggregateClassification = {
  __typename?: 'AggregateClassification';
  _avg?: Maybe<ClassificationAvgAggregate>;
  _count?: Maybe<ClassificationCountAggregate>;
  _max?: Maybe<ClassificationMaxAggregate>;
  _min?: Maybe<ClassificationMinAggregate>;
  _sum?: Maybe<ClassificationSumAggregate>;
};

export type AggregateGeneration = {
  __typename?: 'AggregateGeneration';
  _avg?: Maybe<GenerationAvgAggregate>;
  _count?: Maybe<GenerationCountAggregate>;
  _max?: Maybe<GenerationMaxAggregate>;
  _min?: Maybe<GenerationMinAggregate>;
  _sum?: Maybe<GenerationSumAggregate>;
};

export type AggregatePokedex = {
  __typename?: 'AggregatePokedex';
  _avg?: Maybe<PokedexAvgAggregate>;
  _count?: Maybe<PokedexCountAggregate>;
  _max?: Maybe<PokedexMaxAggregate>;
  _min?: Maybe<PokedexMinAggregate>;
  _sum?: Maybe<PokedexSumAggregate>;
};

export type AggregatePokemon = {
  __typename?: 'AggregatePokemon';
  _avg?: Maybe<PokemonAvgAggregate>;
  _count?: Maybe<PokemonCountAggregate>;
  _max?: Maybe<PokemonMaxAggregate>;
  _min?: Maybe<PokemonMinAggregate>;
  _sum?: Maybe<PokemonSumAggregate>;
};

export type AggregatePokemonAbilities = {
  __typename?: 'AggregatePokemonAbilities';
  _avg?: Maybe<PokemonAbilitiesAvgAggregate>;
  _count?: Maybe<PokemonAbilitiesCountAggregate>;
  _max?: Maybe<PokemonAbilitiesMaxAggregate>;
  _min?: Maybe<PokemonAbilitiesMinAggregate>;
  _sum?: Maybe<PokemonAbilitiesSumAggregate>;
};

export type AggregatePokemonTypes = {
  __typename?: 'AggregatePokemonTypes';
  _avg?: Maybe<PokemonTypesAvgAggregate>;
  _count?: Maybe<PokemonTypesCountAggregate>;
  _max?: Maybe<PokemonTypesMaxAggregate>;
  _min?: Maybe<PokemonTypesMinAggregate>;
  _sum?: Maybe<PokemonTypesSumAggregate>;
};

export type AggregateTrainer = {
  __typename?: 'AggregateTrainer';
  _avg?: Maybe<TrainerAvgAggregate>;
  _count?: Maybe<TrainerCountAggregate>;
  _max?: Maybe<TrainerMaxAggregate>;
  _min?: Maybe<TrainerMinAggregate>;
  _sum?: Maybe<TrainerSumAggregate>;
};

export type AggregateType = {
  __typename?: 'AggregateType';
  _avg?: Maybe<TypeAvgAggregate>;
  _count?: Maybe<TypeCountAggregate>;
  _max?: Maybe<TypeMaxAggregate>;
  _min?: Maybe<TypeMinAggregate>;
  _sum?: Maybe<TypeSumAggregate>;
};

export type BoolFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['Boolean']>;
};

export type BoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type BoolWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedBoolFilter>;
  _min?: InputMaybe<NestedBoolFilter>;
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolWithAggregatesFilter>;
};

export type Captured = {
  __typename?: 'Captured';
  gender?: Maybe<Gender>;
  id: Scalars['Int'];
  level?: Maybe<Scalars['Int']>;
  pokemon: Pokemon;
  pokemonId: Scalars['Int'];
  trainer: Trainer;
  trainerId: Scalars['Int'];
};

export type CapturedAvgAggregate = {
  __typename?: 'CapturedAvgAggregate';
  id?: Maybe<Scalars['Float']>;
  level?: Maybe<Scalars['Float']>;
  pokemonId?: Maybe<Scalars['Float']>;
  trainerId?: Maybe<Scalars['Float']>;
};

export type CapturedAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  level?: InputMaybe<SortOrder>;
  pokemonId?: InputMaybe<SortOrder>;
  trainerId?: InputMaybe<SortOrder>;
};

export type CapturedCountAggregate = {
  __typename?: 'CapturedCountAggregate';
  _all: Scalars['Int'];
  gender: Scalars['Int'];
  id: Scalars['Int'];
  level: Scalars['Int'];
  pokemonId: Scalars['Int'];
  trainerId: Scalars['Int'];
};

export type CapturedCountOrderByAggregateInput = {
  gender?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  level?: InputMaybe<SortOrder>;
  pokemonId?: InputMaybe<SortOrder>;
  trainerId?: InputMaybe<SortOrder>;
};

export type CapturedCreateInput = {
  gender?: InputMaybe<Gender>;
  level?: InputMaybe<Scalars['Int']>;
  pokemon: PokemonCreateNestedOneWithoutCapturedInput;
  trainer: TrainerCreateNestedOneWithoutCapturedInput;
};

export type CapturedCreateManyInput = {
  gender?: InputMaybe<Gender>;
  id?: InputMaybe<Scalars['Int']>;
  level?: InputMaybe<Scalars['Int']>;
  pokemonId: Scalars['Int'];
  trainerId: Scalars['Int'];
};

export type CapturedCreateManyPokemonInput = {
  gender?: InputMaybe<Gender>;
  id?: InputMaybe<Scalars['Int']>;
  level?: InputMaybe<Scalars['Int']>;
  trainerId: Scalars['Int'];
};

export type CapturedCreateManyPokemonInputEnvelope = {
  data: Array<CapturedCreateManyPokemonInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type CapturedCreateManyTrainerInput = {
  gender?: InputMaybe<Gender>;
  id?: InputMaybe<Scalars['Int']>;
  level?: InputMaybe<Scalars['Int']>;
  pokemonId: Scalars['Int'];
};

export type CapturedCreateManyTrainerInputEnvelope = {
  data: Array<CapturedCreateManyTrainerInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type CapturedCreateNestedManyWithoutPokemonInput = {
  connect?: InputMaybe<Array<CapturedWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CapturedCreateOrConnectWithoutPokemonInput>>;
  create?: InputMaybe<Array<CapturedCreateWithoutPokemonInput>>;
  createMany?: InputMaybe<CapturedCreateManyPokemonInputEnvelope>;
};

export type CapturedCreateNestedManyWithoutTrainerInput = {
  connect?: InputMaybe<Array<CapturedWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CapturedCreateOrConnectWithoutTrainerInput>>;
  create?: InputMaybe<Array<CapturedCreateWithoutTrainerInput>>;
  createMany?: InputMaybe<CapturedCreateManyTrainerInputEnvelope>;
};

export type CapturedCreateOrConnectWithoutPokemonInput = {
  create: CapturedCreateWithoutPokemonInput;
  where: CapturedWhereUniqueInput;
};

export type CapturedCreateOrConnectWithoutTrainerInput = {
  create: CapturedCreateWithoutTrainerInput;
  where: CapturedWhereUniqueInput;
};

export type CapturedCreateWithoutPokemonInput = {
  gender?: InputMaybe<Gender>;
  level?: InputMaybe<Scalars['Int']>;
  trainer: TrainerCreateNestedOneWithoutCapturedInput;
};

export type CapturedCreateWithoutTrainerInput = {
  gender?: InputMaybe<Gender>;
  level?: InputMaybe<Scalars['Int']>;
  pokemon: PokemonCreateNestedOneWithoutCapturedInput;
};

export type CapturedGroupBy = {
  __typename?: 'CapturedGroupBy';
  _avg?: Maybe<CapturedAvgAggregate>;
  _count?: Maybe<CapturedCountAggregate>;
  _max?: Maybe<CapturedMaxAggregate>;
  _min?: Maybe<CapturedMinAggregate>;
  _sum?: Maybe<CapturedSumAggregate>;
  gender?: Maybe<Gender>;
  id: Scalars['Int'];
  level?: Maybe<Scalars['Int']>;
  pokemonId: Scalars['Int'];
  trainerId: Scalars['Int'];
};

export type CapturedListRelationFilter = {
  every?: InputMaybe<CapturedWhereInput>;
  none?: InputMaybe<CapturedWhereInput>;
  some?: InputMaybe<CapturedWhereInput>;
};

export type CapturedMaxAggregate = {
  __typename?: 'CapturedMaxAggregate';
  gender?: Maybe<Gender>;
  id?: Maybe<Scalars['Int']>;
  level?: Maybe<Scalars['Int']>;
  pokemonId?: Maybe<Scalars['Int']>;
  trainerId?: Maybe<Scalars['Int']>;
};

export type CapturedMaxOrderByAggregateInput = {
  gender?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  level?: InputMaybe<SortOrder>;
  pokemonId?: InputMaybe<SortOrder>;
  trainerId?: InputMaybe<SortOrder>;
};

export type CapturedMinAggregate = {
  __typename?: 'CapturedMinAggregate';
  gender?: Maybe<Gender>;
  id?: Maybe<Scalars['Int']>;
  level?: Maybe<Scalars['Int']>;
  pokemonId?: Maybe<Scalars['Int']>;
  trainerId?: Maybe<Scalars['Int']>;
};

export type CapturedMinOrderByAggregateInput = {
  gender?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  level?: InputMaybe<SortOrder>;
  pokemonId?: InputMaybe<SortOrder>;
  trainerId?: InputMaybe<SortOrder>;
};

export type CapturedOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type CapturedOrderByWithAggregationInput = {
  _avg?: InputMaybe<CapturedAvgOrderByAggregateInput>;
  _count?: InputMaybe<CapturedCountOrderByAggregateInput>;
  _max?: InputMaybe<CapturedMaxOrderByAggregateInput>;
  _min?: InputMaybe<CapturedMinOrderByAggregateInput>;
  _sum?: InputMaybe<CapturedSumOrderByAggregateInput>;
  gender?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  level?: InputMaybe<SortOrder>;
  pokemonId?: InputMaybe<SortOrder>;
  trainerId?: InputMaybe<SortOrder>;
};

export type CapturedOrderByWithRelationInput = {
  gender?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  level?: InputMaybe<SortOrder>;
  pokemon?: InputMaybe<PokemonOrderByWithRelationInput>;
  pokemonId?: InputMaybe<SortOrder>;
  trainer?: InputMaybe<TrainerOrderByWithRelationInput>;
  trainerId?: InputMaybe<SortOrder>;
};

export enum CapturedScalarFieldEnum {
  Gender = 'gender',
  Id = 'id',
  Level = 'level',
  PokemonId = 'pokemonId',
  TrainerId = 'trainerId'
}

export type CapturedScalarWhereInput = {
  AND?: InputMaybe<Array<CapturedScalarWhereInput>>;
  NOT?: InputMaybe<Array<CapturedScalarWhereInput>>;
  OR?: InputMaybe<Array<CapturedScalarWhereInput>>;
  gender?: InputMaybe<EnumGenderNullableFilter>;
  id?: InputMaybe<IntFilter>;
  level?: InputMaybe<IntNullableFilter>;
  pokemonId?: InputMaybe<IntFilter>;
  trainerId?: InputMaybe<IntFilter>;
};

export type CapturedScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<CapturedScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<CapturedScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<CapturedScalarWhereWithAggregatesInput>>;
  gender?: InputMaybe<EnumGenderNullableWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  level?: InputMaybe<IntNullableWithAggregatesFilter>;
  pokemonId?: InputMaybe<IntWithAggregatesFilter>;
  trainerId?: InputMaybe<IntWithAggregatesFilter>;
};

export type CapturedSumAggregate = {
  __typename?: 'CapturedSumAggregate';
  id?: Maybe<Scalars['Int']>;
  level?: Maybe<Scalars['Int']>;
  pokemonId?: Maybe<Scalars['Int']>;
  trainerId?: Maybe<Scalars['Int']>;
};

export type CapturedSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  level?: InputMaybe<SortOrder>;
  pokemonId?: InputMaybe<SortOrder>;
  trainerId?: InputMaybe<SortOrder>;
};

export type CapturedUpdateInput = {
  gender?: InputMaybe<NullableEnumGenderFieldUpdateOperationsInput>;
  level?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  pokemon?: InputMaybe<PokemonUpdateOneRequiredWithoutCapturedInput>;
  trainer?: InputMaybe<TrainerUpdateOneRequiredWithoutCapturedInput>;
};

export type CapturedUpdateManyMutationInput = {
  gender?: InputMaybe<NullableEnumGenderFieldUpdateOperationsInput>;
  level?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
};

export type CapturedUpdateManyWithWhereWithoutPokemonInput = {
  data: CapturedUpdateManyMutationInput;
  where: CapturedScalarWhereInput;
};

export type CapturedUpdateManyWithWhereWithoutTrainerInput = {
  data: CapturedUpdateManyMutationInput;
  where: CapturedScalarWhereInput;
};

export type CapturedUpdateManyWithoutPokemonInput = {
  connect?: InputMaybe<Array<CapturedWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CapturedCreateOrConnectWithoutPokemonInput>>;
  create?: InputMaybe<Array<CapturedCreateWithoutPokemonInput>>;
  createMany?: InputMaybe<CapturedCreateManyPokemonInputEnvelope>;
  delete?: InputMaybe<Array<CapturedWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CapturedScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CapturedWhereUniqueInput>>;
  set?: InputMaybe<Array<CapturedWhereUniqueInput>>;
  update?: InputMaybe<Array<CapturedUpdateWithWhereUniqueWithoutPokemonInput>>;
  updateMany?: InputMaybe<Array<CapturedUpdateManyWithWhereWithoutPokemonInput>>;
  upsert?: InputMaybe<Array<CapturedUpsertWithWhereUniqueWithoutPokemonInput>>;
};

export type CapturedUpdateManyWithoutTrainerInput = {
  connect?: InputMaybe<Array<CapturedWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CapturedCreateOrConnectWithoutTrainerInput>>;
  create?: InputMaybe<Array<CapturedCreateWithoutTrainerInput>>;
  createMany?: InputMaybe<CapturedCreateManyTrainerInputEnvelope>;
  delete?: InputMaybe<Array<CapturedWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CapturedScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CapturedWhereUniqueInput>>;
  set?: InputMaybe<Array<CapturedWhereUniqueInput>>;
  update?: InputMaybe<Array<CapturedUpdateWithWhereUniqueWithoutTrainerInput>>;
  updateMany?: InputMaybe<Array<CapturedUpdateManyWithWhereWithoutTrainerInput>>;
  upsert?: InputMaybe<Array<CapturedUpsertWithWhereUniqueWithoutTrainerInput>>;
};

export type CapturedUpdateWithWhereUniqueWithoutPokemonInput = {
  data: CapturedUpdateWithoutPokemonInput;
  where: CapturedWhereUniqueInput;
};

export type CapturedUpdateWithWhereUniqueWithoutTrainerInput = {
  data: CapturedUpdateWithoutTrainerInput;
  where: CapturedWhereUniqueInput;
};

export type CapturedUpdateWithoutPokemonInput = {
  gender?: InputMaybe<NullableEnumGenderFieldUpdateOperationsInput>;
  level?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  trainer?: InputMaybe<TrainerUpdateOneRequiredWithoutCapturedInput>;
};

export type CapturedUpdateWithoutTrainerInput = {
  gender?: InputMaybe<NullableEnumGenderFieldUpdateOperationsInput>;
  level?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  pokemon?: InputMaybe<PokemonUpdateOneRequiredWithoutCapturedInput>;
};

export type CapturedUpsertWithWhereUniqueWithoutPokemonInput = {
  create: CapturedCreateWithoutPokemonInput;
  update: CapturedUpdateWithoutPokemonInput;
  where: CapturedWhereUniqueInput;
};

export type CapturedUpsertWithWhereUniqueWithoutTrainerInput = {
  create: CapturedCreateWithoutTrainerInput;
  update: CapturedUpdateWithoutTrainerInput;
  where: CapturedWhereUniqueInput;
};

export type CapturedWhereInput = {
  AND?: InputMaybe<Array<CapturedWhereInput>>;
  NOT?: InputMaybe<Array<CapturedWhereInput>>;
  OR?: InputMaybe<Array<CapturedWhereInput>>;
  gender?: InputMaybe<EnumGenderNullableFilter>;
  id?: InputMaybe<IntFilter>;
  level?: InputMaybe<IntNullableFilter>;
  pokemon?: InputMaybe<PokemonRelationFilter>;
  pokemonId?: InputMaybe<IntFilter>;
  trainer?: InputMaybe<TrainerRelationFilter>;
  trainerId?: InputMaybe<IntFilter>;
};

export type CapturedWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type Classification = {
  __typename?: 'Classification';
  _count?: Maybe<ClassificationCount>;
  classification: Scalars['String'];
  id: Scalars['Int'];
  pokemon: Array<Pokemon>;
};


export type ClassificationPokemonArgs = {
  cursor?: InputMaybe<PokemonWhereUniqueInput>;
  distinct?: InputMaybe<Array<PokemonScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PokemonOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PokemonWhereInput>;
};

export type ClassificationAvgAggregate = {
  __typename?: 'ClassificationAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type ClassificationAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type ClassificationCount = {
  __typename?: 'ClassificationCount';
  pokemon: Scalars['Int'];
};

export type ClassificationCountAggregate = {
  __typename?: 'ClassificationCountAggregate';
  _all: Scalars['Int'];
  classification: Scalars['Int'];
  id: Scalars['Int'];
};

export type ClassificationCountOrderByAggregateInput = {
  classification?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type ClassificationCreateInput = {
  classification: Scalars['String'];
  pokemon?: InputMaybe<PokemonCreateNestedManyWithoutClassificationInput>;
};

export type ClassificationCreateManyInput = {
  classification: Scalars['String'];
  id?: InputMaybe<Scalars['Int']>;
};

export type ClassificationCreateNestedOneWithoutPokemonInput = {
  connect?: InputMaybe<ClassificationWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ClassificationCreateOrConnectWithoutPokemonInput>;
  create?: InputMaybe<ClassificationCreateWithoutPokemonInput>;
};

export type ClassificationCreateOrConnectWithoutPokemonInput = {
  create: ClassificationCreateWithoutPokemonInput;
  where: ClassificationWhereUniqueInput;
};

export type ClassificationCreateWithoutPokemonInput = {
  classification: Scalars['String'];
};

export type ClassificationGroupBy = {
  __typename?: 'ClassificationGroupBy';
  _avg?: Maybe<ClassificationAvgAggregate>;
  _count?: Maybe<ClassificationCountAggregate>;
  _max?: Maybe<ClassificationMaxAggregate>;
  _min?: Maybe<ClassificationMinAggregate>;
  _sum?: Maybe<ClassificationSumAggregate>;
  classification: Scalars['String'];
  id: Scalars['Int'];
};

export type ClassificationMaxAggregate = {
  __typename?: 'ClassificationMaxAggregate';
  classification?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
};

export type ClassificationMaxOrderByAggregateInput = {
  classification?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type ClassificationMinAggregate = {
  __typename?: 'ClassificationMinAggregate';
  classification?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
};

export type ClassificationMinOrderByAggregateInput = {
  classification?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type ClassificationOrderByWithAggregationInput = {
  _avg?: InputMaybe<ClassificationAvgOrderByAggregateInput>;
  _count?: InputMaybe<ClassificationCountOrderByAggregateInput>;
  _max?: InputMaybe<ClassificationMaxOrderByAggregateInput>;
  _min?: InputMaybe<ClassificationMinOrderByAggregateInput>;
  _sum?: InputMaybe<ClassificationSumOrderByAggregateInput>;
  classification?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type ClassificationOrderByWithRelationInput = {
  classification?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  pokemon?: InputMaybe<PokemonOrderByRelationAggregateInput>;
};

export type ClassificationRelationFilter = {
  is?: InputMaybe<ClassificationWhereInput>;
  isNot?: InputMaybe<ClassificationWhereInput>;
};

export enum ClassificationScalarFieldEnum {
  Classification = 'classification',
  Id = 'id'
}

export type ClassificationScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<ClassificationScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<ClassificationScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<ClassificationScalarWhereWithAggregatesInput>>;
  classification?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
};

export type ClassificationSumAggregate = {
  __typename?: 'ClassificationSumAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type ClassificationSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type ClassificationUpdateInput = {
  classification?: InputMaybe<StringFieldUpdateOperationsInput>;
  pokemon?: InputMaybe<PokemonUpdateManyWithoutClassificationInput>;
};

export type ClassificationUpdateManyMutationInput = {
  classification?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ClassificationUpdateOneRequiredWithoutPokemonInput = {
  connect?: InputMaybe<ClassificationWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ClassificationCreateOrConnectWithoutPokemonInput>;
  create?: InputMaybe<ClassificationCreateWithoutPokemonInput>;
  update?: InputMaybe<ClassificationUpdateWithoutPokemonInput>;
  upsert?: InputMaybe<ClassificationUpsertWithoutPokemonInput>;
};

export type ClassificationUpdateWithoutPokemonInput = {
  classification?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ClassificationUpsertWithoutPokemonInput = {
  create: ClassificationCreateWithoutPokemonInput;
  update: ClassificationUpdateWithoutPokemonInput;
};

export type ClassificationWhereInput = {
  AND?: InputMaybe<Array<ClassificationWhereInput>>;
  NOT?: InputMaybe<Array<ClassificationWhereInput>>;
  OR?: InputMaybe<Array<ClassificationWhereInput>>;
  classification?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  pokemon?: InputMaybe<PokemonListRelationFilter>;
};

export type ClassificationWhereUniqueInput = {
  classification?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DateTimeNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedDateTimeNullableFilter>;
  _min?: InputMaybe<NestedDateTimeNullableFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type EnumGenderNullableFilter = {
  equals?: InputMaybe<Gender>;
  in?: InputMaybe<Array<Gender>>;
  not?: InputMaybe<NestedEnumGenderNullableFilter>;
  notIn?: InputMaybe<Array<Gender>>;
};

export type EnumGenderNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedEnumGenderNullableFilter>;
  _min?: InputMaybe<NestedEnumGenderNullableFilter>;
  equals?: InputMaybe<Gender>;
  in?: InputMaybe<Array<Gender>>;
  not?: InputMaybe<NestedEnumGenderNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Gender>>;
};

export type EnumStatusFieldUpdateOperationsInput = {
  set?: InputMaybe<Status>;
};

export type EnumStatusFilter = {
  equals?: InputMaybe<Status>;
  in?: InputMaybe<Array<Status>>;
  not?: InputMaybe<NestedEnumStatusFilter>;
  notIn?: InputMaybe<Array<Status>>;
};

export type EnumStatusWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumStatusFilter>;
  _min?: InputMaybe<NestedEnumStatusFilter>;
  equals?: InputMaybe<Status>;
  in?: InputMaybe<Array<Status>>;
  not?: InputMaybe<NestedEnumStatusWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Status>>;
};

export type FloatFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Float']>;
  divide?: InputMaybe<Scalars['Float']>;
  increment?: InputMaybe<Scalars['Float']>;
  multiply?: InputMaybe<Scalars['Float']>;
  set?: InputMaybe<Scalars['Float']>;
};

export type FloatFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type FloatNullableFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type FloatNullableWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatNullableFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedFloatNullableFilter>;
  _min?: InputMaybe<NestedFloatNullableFilter>;
  _sum?: InputMaybe<NestedFloatNullableFilter>;
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type FloatWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedFloatFilter>;
  _min?: InputMaybe<NestedFloatFilter>;
  _sum?: InputMaybe<NestedFloatFilter>;
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export enum Gender {
  Female = 'Female',
  Male = 'Male',
  Unsexed = 'Unsexed'
}

export type Generation = {
  __typename?: 'Generation';
  _count?: Maybe<GenerationCount>;
  generation: Scalars['Int'];
  id: Scalars['Int'];
  pokemon: Array<Pokemon>;
};


export type GenerationPokemonArgs = {
  cursor?: InputMaybe<PokemonWhereUniqueInput>;
  distinct?: InputMaybe<Array<PokemonScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PokemonOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PokemonWhereInput>;
};

export type GenerationAvgAggregate = {
  __typename?: 'GenerationAvgAggregate';
  generation?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type GenerationAvgOrderByAggregateInput = {
  generation?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type GenerationCount = {
  __typename?: 'GenerationCount';
  pokemon: Scalars['Int'];
};

export type GenerationCountAggregate = {
  __typename?: 'GenerationCountAggregate';
  _all: Scalars['Int'];
  generation: Scalars['Int'];
  id: Scalars['Int'];
};

export type GenerationCountOrderByAggregateInput = {
  generation?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type GenerationCreateInput = {
  generation: Scalars['Int'];
  pokemon?: InputMaybe<PokemonCreateNestedManyWithoutGenerationInput>;
};

export type GenerationCreateManyInput = {
  generation: Scalars['Int'];
  id?: InputMaybe<Scalars['Int']>;
};

export type GenerationCreateNestedOneWithoutPokemonInput = {
  connect?: InputMaybe<GenerationWhereUniqueInput>;
  connectOrCreate?: InputMaybe<GenerationCreateOrConnectWithoutPokemonInput>;
  create?: InputMaybe<GenerationCreateWithoutPokemonInput>;
};

export type GenerationCreateOrConnectWithoutPokemonInput = {
  create: GenerationCreateWithoutPokemonInput;
  where: GenerationWhereUniqueInput;
};

export type GenerationCreateWithoutPokemonInput = {
  generation: Scalars['Int'];
};

export type GenerationGroupBy = {
  __typename?: 'GenerationGroupBy';
  _avg?: Maybe<GenerationAvgAggregate>;
  _count?: Maybe<GenerationCountAggregate>;
  _max?: Maybe<GenerationMaxAggregate>;
  _min?: Maybe<GenerationMinAggregate>;
  _sum?: Maybe<GenerationSumAggregate>;
  generation: Scalars['Int'];
  id: Scalars['Int'];
};

export type GenerationMaxAggregate = {
  __typename?: 'GenerationMaxAggregate';
  generation?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

export type GenerationMaxOrderByAggregateInput = {
  generation?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type GenerationMinAggregate = {
  __typename?: 'GenerationMinAggregate';
  generation?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

export type GenerationMinOrderByAggregateInput = {
  generation?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type GenerationOrderByWithAggregationInput = {
  _avg?: InputMaybe<GenerationAvgOrderByAggregateInput>;
  _count?: InputMaybe<GenerationCountOrderByAggregateInput>;
  _max?: InputMaybe<GenerationMaxOrderByAggregateInput>;
  _min?: InputMaybe<GenerationMinOrderByAggregateInput>;
  _sum?: InputMaybe<GenerationSumOrderByAggregateInput>;
  generation?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type GenerationOrderByWithRelationInput = {
  generation?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  pokemon?: InputMaybe<PokemonOrderByRelationAggregateInput>;
};

export type GenerationRelationFilter = {
  is?: InputMaybe<GenerationWhereInput>;
  isNot?: InputMaybe<GenerationWhereInput>;
};

export enum GenerationScalarFieldEnum {
  Generation = 'generation',
  Id = 'id'
}

export type GenerationScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<GenerationScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<GenerationScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<GenerationScalarWhereWithAggregatesInput>>;
  generation?: InputMaybe<IntWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
};

export type GenerationSumAggregate = {
  __typename?: 'GenerationSumAggregate';
  generation?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

export type GenerationSumOrderByAggregateInput = {
  generation?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type GenerationUpdateInput = {
  generation?: InputMaybe<IntFieldUpdateOperationsInput>;
  pokemon?: InputMaybe<PokemonUpdateManyWithoutGenerationInput>;
};

export type GenerationUpdateManyMutationInput = {
  generation?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type GenerationUpdateOneRequiredWithoutPokemonInput = {
  connect?: InputMaybe<GenerationWhereUniqueInput>;
  connectOrCreate?: InputMaybe<GenerationCreateOrConnectWithoutPokemonInput>;
  create?: InputMaybe<GenerationCreateWithoutPokemonInput>;
  update?: InputMaybe<GenerationUpdateWithoutPokemonInput>;
  upsert?: InputMaybe<GenerationUpsertWithoutPokemonInput>;
};

export type GenerationUpdateWithoutPokemonInput = {
  generation?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type GenerationUpsertWithoutPokemonInput = {
  create: GenerationCreateWithoutPokemonInput;
  update: GenerationUpdateWithoutPokemonInput;
};

export type GenerationWhereInput = {
  AND?: InputMaybe<Array<GenerationWhereInput>>;
  NOT?: InputMaybe<Array<GenerationWhereInput>>;
  OR?: InputMaybe<Array<GenerationWhereInput>>;
  generation?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  pokemon?: InputMaybe<PokemonListRelationFilter>;
};

export type GenerationWhereUniqueInput = {
  generation?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
};

export type IntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']>;
  divide?: InputMaybe<Scalars['Int']>;
  increment?: InputMaybe<Scalars['Int']>;
  multiply?: InputMaybe<Scalars['Int']>;
  set?: InputMaybe<Scalars['Int']>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type IntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type IntNullableWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatNullableFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedIntNullableFilter>;
  _min?: InputMaybe<NestedIntNullableFilter>;
  _sum?: InputMaybe<NestedIntNullableFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type IntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createAbility: Ability;
  createCaptured: Captured;
  createClassification: Classification;
  createGeneration: Generation;
  createManyAbility: AffectedRowsOutput;
  createManyCaptured: AffectedRowsOutput;
  createManyClassification: AffectedRowsOutput;
  createManyGeneration: AffectedRowsOutput;
  createManyPokedex: AffectedRowsOutput;
  createManyPokemon: AffectedRowsOutput;
  createManyPokemonAbilities: AffectedRowsOutput;
  createManyPokemonTypes: AffectedRowsOutput;
  createManyTrainer: AffectedRowsOutput;
  createManyType: AffectedRowsOutput;
  createPokedex: Pokedex;
  createPokemon: Pokemon;
  createPokemonAbilities: PokemonAbilities;
  createPokemonTypes: PokemonTypes;
  createTrainer: Trainer;
  createType: Type;
  deleteAbility?: Maybe<Ability>;
  deleteCaptured?: Maybe<Captured>;
  deleteClassification?: Maybe<Classification>;
  deleteGeneration?: Maybe<Generation>;
  deleteManyAbility: AffectedRowsOutput;
  deleteManyCaptured: AffectedRowsOutput;
  deleteManyClassification: AffectedRowsOutput;
  deleteManyGeneration: AffectedRowsOutput;
  deleteManyPokedex: AffectedRowsOutput;
  deleteManyPokemon: AffectedRowsOutput;
  deleteManyPokemonAbilities: AffectedRowsOutput;
  deleteManyPokemonTypes: AffectedRowsOutput;
  deleteManyTrainer: AffectedRowsOutput;
  deleteManyType: AffectedRowsOutput;
  deletePokedex?: Maybe<Pokedex>;
  deletePokemon?: Maybe<Pokemon>;
  deletePokemonAbilities?: Maybe<PokemonAbilities>;
  deletePokemonTypes?: Maybe<PokemonTypes>;
  deleteTrainer?: Maybe<Trainer>;
  deleteType?: Maybe<Type>;
  updateAbility?: Maybe<Ability>;
  updateCaptured?: Maybe<Captured>;
  updateClassification?: Maybe<Classification>;
  updateGeneration?: Maybe<Generation>;
  updateManyAbility: AffectedRowsOutput;
  updateManyCaptured: AffectedRowsOutput;
  updateManyClassification: AffectedRowsOutput;
  updateManyGeneration: AffectedRowsOutput;
  updateManyPokedex: AffectedRowsOutput;
  updateManyPokemon: AffectedRowsOutput;
  updateManyPokemonAbilities: AffectedRowsOutput;
  updateManyPokemonTypes: AffectedRowsOutput;
  updateManyTrainer: AffectedRowsOutput;
  updateManyType: AffectedRowsOutput;
  updatePokedex?: Maybe<Pokedex>;
  updatePokemon?: Maybe<Pokemon>;
  updatePokemonAbilities?: Maybe<PokemonAbilities>;
  updatePokemonTypes?: Maybe<PokemonTypes>;
  updateTrainer?: Maybe<Trainer>;
  updateType?: Maybe<Type>;
  upsertAbility: Ability;
  upsertCaptured: Captured;
  upsertClassification: Classification;
  upsertGeneration: Generation;
  upsertPokedex: Pokedex;
  upsertPokemon: Pokemon;
  upsertPokemonAbilities: PokemonAbilities;
  upsertPokemonTypes: PokemonTypes;
  upsertTrainer: Trainer;
  upsertType: Type;
};


export type MutationCreateAbilityArgs = {
  data: AbilityCreateInput;
};


export type MutationCreateCapturedArgs = {
  data: CapturedCreateInput;
};


export type MutationCreateClassificationArgs = {
  data: ClassificationCreateInput;
};


export type MutationCreateGenerationArgs = {
  data: GenerationCreateInput;
};


export type MutationCreateManyAbilityArgs = {
  data: Array<AbilityCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyCapturedArgs = {
  data: Array<CapturedCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyClassificationArgs = {
  data: Array<ClassificationCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyGenerationArgs = {
  data: Array<GenerationCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyPokedexArgs = {
  data: Array<PokedexCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyPokemonArgs = {
  data: Array<PokemonCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyPokemonAbilitiesArgs = {
  data: Array<PokemonAbilitiesCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyPokemonTypesArgs = {
  data: Array<PokemonTypesCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyTrainerArgs = {
  data: Array<TrainerCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyTypeArgs = {
  data: Array<TypeCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreatePokedexArgs = {
  data: PokedexCreateInput;
};


export type MutationCreatePokemonArgs = {
  data: PokemonCreateInput;
};


export type MutationCreatePokemonAbilitiesArgs = {
  data: PokemonAbilitiesCreateInput;
};


export type MutationCreatePokemonTypesArgs = {
  data: PokemonTypesCreateInput;
};


export type MutationCreateTrainerArgs = {
  data: TrainerCreateInput;
};


export type MutationCreateTypeArgs = {
  data: TypeCreateInput;
};


export type MutationDeleteAbilityArgs = {
  where: AbilityWhereUniqueInput;
};


export type MutationDeleteCapturedArgs = {
  where: CapturedWhereUniqueInput;
};


export type MutationDeleteClassificationArgs = {
  where: ClassificationWhereUniqueInput;
};


export type MutationDeleteGenerationArgs = {
  where: GenerationWhereUniqueInput;
};


export type MutationDeleteManyAbilityArgs = {
  where?: InputMaybe<AbilityWhereInput>;
};


export type MutationDeleteManyCapturedArgs = {
  where?: InputMaybe<CapturedWhereInput>;
};


export type MutationDeleteManyClassificationArgs = {
  where?: InputMaybe<ClassificationWhereInput>;
};


export type MutationDeleteManyGenerationArgs = {
  where?: InputMaybe<GenerationWhereInput>;
};


export type MutationDeleteManyPokedexArgs = {
  where?: InputMaybe<PokedexWhereInput>;
};


export type MutationDeleteManyPokemonArgs = {
  where?: InputMaybe<PokemonWhereInput>;
};


export type MutationDeleteManyPokemonAbilitiesArgs = {
  where?: InputMaybe<PokemonAbilitiesWhereInput>;
};


export type MutationDeleteManyPokemonTypesArgs = {
  where?: InputMaybe<PokemonTypesWhereInput>;
};


export type MutationDeleteManyTrainerArgs = {
  where?: InputMaybe<TrainerWhereInput>;
};


export type MutationDeleteManyTypeArgs = {
  where?: InputMaybe<TypeWhereInput>;
};


export type MutationDeletePokedexArgs = {
  where: PokedexWhereUniqueInput;
};


export type MutationDeletePokemonArgs = {
  where: PokemonWhereUniqueInput;
};


export type MutationDeletePokemonAbilitiesArgs = {
  where: PokemonAbilitiesWhereUniqueInput;
};


export type MutationDeletePokemonTypesArgs = {
  where: PokemonTypesWhereUniqueInput;
};


export type MutationDeleteTrainerArgs = {
  where: TrainerWhereUniqueInput;
};


export type MutationDeleteTypeArgs = {
  where: TypeWhereUniqueInput;
};


export type MutationUpdateAbilityArgs = {
  data: AbilityUpdateInput;
  where: AbilityWhereUniqueInput;
};


export type MutationUpdateCapturedArgs = {
  data: CapturedUpdateInput;
  where: CapturedWhereUniqueInput;
};


export type MutationUpdateClassificationArgs = {
  data: ClassificationUpdateInput;
  where: ClassificationWhereUniqueInput;
};


export type MutationUpdateGenerationArgs = {
  data: GenerationUpdateInput;
  where: GenerationWhereUniqueInput;
};


export type MutationUpdateManyAbilityArgs = {
  data: AbilityUpdateManyMutationInput;
  where?: InputMaybe<AbilityWhereInput>;
};


export type MutationUpdateManyCapturedArgs = {
  data: CapturedUpdateManyMutationInput;
  where?: InputMaybe<CapturedWhereInput>;
};


export type MutationUpdateManyClassificationArgs = {
  data: ClassificationUpdateManyMutationInput;
  where?: InputMaybe<ClassificationWhereInput>;
};


export type MutationUpdateManyGenerationArgs = {
  data: GenerationUpdateManyMutationInput;
  where?: InputMaybe<GenerationWhereInput>;
};


export type MutationUpdateManyPokedexArgs = {
  data: PokedexUpdateManyMutationInput;
  where?: InputMaybe<PokedexWhereInput>;
};


export type MutationUpdateManyPokemonArgs = {
  data: PokemonUpdateManyMutationInput;
  where?: InputMaybe<PokemonWhereInput>;
};


export type MutationUpdateManyPokemonAbilitiesArgs = {
  data: PokemonAbilitiesUpdateManyMutationInput;
  where?: InputMaybe<PokemonAbilitiesWhereInput>;
};


export type MutationUpdateManyPokemonTypesArgs = {
  data: PokemonTypesUpdateManyMutationInput;
  where?: InputMaybe<PokemonTypesWhereInput>;
};


export type MutationUpdateManyTrainerArgs = {
  data: TrainerUpdateManyMutationInput;
  where?: InputMaybe<TrainerWhereInput>;
};


export type MutationUpdateManyTypeArgs = {
  data: TypeUpdateManyMutationInput;
  where?: InputMaybe<TypeWhereInput>;
};


export type MutationUpdatePokedexArgs = {
  data: PokedexUpdateInput;
  where: PokedexWhereUniqueInput;
};


export type MutationUpdatePokemonArgs = {
  data: PokemonUpdateInput;
  where: PokemonWhereUniqueInput;
};


export type MutationUpdatePokemonAbilitiesArgs = {
  data: PokemonAbilitiesUpdateInput;
  where: PokemonAbilitiesWhereUniqueInput;
};


export type MutationUpdatePokemonTypesArgs = {
  data: PokemonTypesUpdateInput;
  where: PokemonTypesWhereUniqueInput;
};


export type MutationUpdateTrainerArgs = {
  data: TrainerUpdateInput;
  where: TrainerWhereUniqueInput;
};


export type MutationUpdateTypeArgs = {
  data: TypeUpdateInput;
  where: TypeWhereUniqueInput;
};


export type MutationUpsertAbilityArgs = {
  create: AbilityCreateInput;
  update: AbilityUpdateInput;
  where: AbilityWhereUniqueInput;
};


export type MutationUpsertCapturedArgs = {
  create: CapturedCreateInput;
  update: CapturedUpdateInput;
  where: CapturedWhereUniqueInput;
};


export type MutationUpsertClassificationArgs = {
  create: ClassificationCreateInput;
  update: ClassificationUpdateInput;
  where: ClassificationWhereUniqueInput;
};


export type MutationUpsertGenerationArgs = {
  create: GenerationCreateInput;
  update: GenerationUpdateInput;
  where: GenerationWhereUniqueInput;
};


export type MutationUpsertPokedexArgs = {
  create: PokedexCreateInput;
  update: PokedexUpdateInput;
  where: PokedexWhereUniqueInput;
};


export type MutationUpsertPokemonArgs = {
  create: PokemonCreateInput;
  update: PokemonUpdateInput;
  where: PokemonWhereUniqueInput;
};


export type MutationUpsertPokemonAbilitiesArgs = {
  create: PokemonAbilitiesCreateInput;
  update: PokemonAbilitiesUpdateInput;
  where: PokemonAbilitiesWhereUniqueInput;
};


export type MutationUpsertPokemonTypesArgs = {
  create: PokemonTypesCreateInput;
  update: PokemonTypesUpdateInput;
  where: PokemonTypesWhereUniqueInput;
};


export type MutationUpsertTrainerArgs = {
  create: TrainerCreateInput;
  update: TrainerUpdateInput;
  where: TrainerWhereUniqueInput;
};


export type MutationUpsertTypeArgs = {
  create: TypeCreateInput;
  update: TypeUpdateInput;
  where: TypeWhereUniqueInput;
};

export type NestedBoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type NestedBoolWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedBoolFilter>;
  _min?: InputMaybe<NestedBoolFilter>;
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolWithAggregatesFilter>;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedDateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedDateTimeNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedDateTimeNullableFilter>;
  _min?: InputMaybe<NestedDateTimeNullableFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedDateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedEnumGenderNullableFilter = {
  equals?: InputMaybe<Gender>;
  in?: InputMaybe<Array<Gender>>;
  not?: InputMaybe<NestedEnumGenderNullableFilter>;
  notIn?: InputMaybe<Array<Gender>>;
};

export type NestedEnumGenderNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedEnumGenderNullableFilter>;
  _min?: InputMaybe<NestedEnumGenderNullableFilter>;
  equals?: InputMaybe<Gender>;
  in?: InputMaybe<Array<Gender>>;
  not?: InputMaybe<NestedEnumGenderNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Gender>>;
};

export type NestedEnumStatusFilter = {
  equals?: InputMaybe<Status>;
  in?: InputMaybe<Array<Status>>;
  not?: InputMaybe<NestedEnumStatusFilter>;
  notIn?: InputMaybe<Array<Status>>;
};

export type NestedEnumStatusWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumStatusFilter>;
  _min?: InputMaybe<NestedEnumStatusFilter>;
  equals?: InputMaybe<Status>;
  in?: InputMaybe<Array<Status>>;
  not?: InputMaybe<NestedEnumStatusWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Status>>;
};

export type NestedFloatFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type NestedFloatNullableFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type NestedFloatNullableWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatNullableFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedFloatNullableFilter>;
  _min?: InputMaybe<NestedFloatNullableFilter>;
  _sum?: InputMaybe<NestedFloatNullableFilter>;
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type NestedFloatWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedFloatFilter>;
  _min?: InputMaybe<NestedFloatFilter>;
  _sum?: InputMaybe<NestedFloatFilter>;
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedIntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedIntNullableWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatNullableFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedIntNullableFilter>;
  _min?: InputMaybe<NestedIntNullableFilter>;
  _sum?: InputMaybe<NestedIntNullableFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedIntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NullableDateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']>;
};

export type NullableEnumGenderFieldUpdateOperationsInput = {
  set?: InputMaybe<Gender>;
};

export type NullableFloatFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Float']>;
  divide?: InputMaybe<Scalars['Float']>;
  increment?: InputMaybe<Scalars['Float']>;
  multiply?: InputMaybe<Scalars['Float']>;
  set?: InputMaybe<Scalars['Float']>;
};

export type NullableIntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']>;
  divide?: InputMaybe<Scalars['Int']>;
  increment?: InputMaybe<Scalars['Int']>;
  multiply?: InputMaybe<Scalars['Int']>;
  set?: InputMaybe<Scalars['Int']>;
};

export type Pokedex = {
  __typename?: 'Pokedex';
  createdAt: Scalars['DateTime'];
  expiresAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  pokemon: Pokemon;
  pokemonId: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};

export type PokedexAvgAggregate = {
  __typename?: 'PokedexAvgAggregate';
  id?: Maybe<Scalars['Float']>;
  pokemonId?: Maybe<Scalars['Float']>;
};

export type PokedexAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  pokemonId?: InputMaybe<SortOrder>;
};

export type PokedexCountAggregate = {
  __typename?: 'PokedexCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  expiresAt: Scalars['Int'];
  id: Scalars['Int'];
  pokemonId: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type PokedexCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  expiresAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  pokemonId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type PokedexCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  expiresAt?: InputMaybe<Scalars['DateTime']>;
  pokemon?: InputMaybe<PokemonCreateNestedOneWithoutPokedex_NumberInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type PokedexCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  expiresAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  pokemonId?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type PokedexCreateNestedOneWithoutPokemonInput = {
  connect?: InputMaybe<PokedexWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PokedexCreateOrConnectWithoutPokemonInput>;
  create?: InputMaybe<PokedexCreateWithoutPokemonInput>;
};

export type PokedexCreateOrConnectWithoutPokemonInput = {
  create: PokedexCreateWithoutPokemonInput;
  where: PokedexWhereUniqueInput;
};

export type PokedexCreateWithoutPokemonInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  expiresAt?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type PokedexGroupBy = {
  __typename?: 'PokedexGroupBy';
  _avg?: Maybe<PokedexAvgAggregate>;
  _count?: Maybe<PokedexCountAggregate>;
  _max?: Maybe<PokedexMaxAggregate>;
  _min?: Maybe<PokedexMinAggregate>;
  _sum?: Maybe<PokedexSumAggregate>;
  createdAt: Scalars['DateTime'];
  expiresAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  pokemonId: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};

export type PokedexMaxAggregate = {
  __typename?: 'PokedexMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  expiresAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  pokemonId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PokedexMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  expiresAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  pokemonId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type PokedexMinAggregate = {
  __typename?: 'PokedexMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  expiresAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  pokemonId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PokedexMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  expiresAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  pokemonId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type PokedexOrderByWithAggregationInput = {
  _avg?: InputMaybe<PokedexAvgOrderByAggregateInput>;
  _count?: InputMaybe<PokedexCountOrderByAggregateInput>;
  _max?: InputMaybe<PokedexMaxOrderByAggregateInput>;
  _min?: InputMaybe<PokedexMinOrderByAggregateInput>;
  _sum?: InputMaybe<PokedexSumOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  expiresAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  pokemonId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type PokedexOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  expiresAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  pokemon?: InputMaybe<PokemonOrderByWithRelationInput>;
  pokemonId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type PokedexRelationFilter = {
  is?: InputMaybe<PokedexWhereInput>;
  isNot?: InputMaybe<PokedexWhereInput>;
};

export enum PokedexScalarFieldEnum {
  CreatedAt = 'createdAt',
  ExpiresAt = 'expiresAt',
  Id = 'id',
  PokemonId = 'pokemonId',
  UpdatedAt = 'updatedAt'
}

export type PokedexScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<PokedexScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<PokedexScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<PokedexScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  expiresAt?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  pokemonId?: InputMaybe<IntWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type PokedexSumAggregate = {
  __typename?: 'PokedexSumAggregate';
  id?: Maybe<Scalars['Int']>;
  pokemonId?: Maybe<Scalars['Int']>;
};

export type PokedexSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  pokemonId?: InputMaybe<SortOrder>;
};

export type PokedexUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  expiresAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  pokemon?: InputMaybe<PokemonUpdateOneRequiredWithoutPokedex_NumberInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PokedexUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  expiresAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PokedexUpdateOneWithoutPokemonInput = {
  connect?: InputMaybe<PokedexWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PokedexCreateOrConnectWithoutPokemonInput>;
  create?: InputMaybe<PokedexCreateWithoutPokemonInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<PokedexUpdateWithoutPokemonInput>;
  upsert?: InputMaybe<PokedexUpsertWithoutPokemonInput>;
};

export type PokedexUpdateWithoutPokemonInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  expiresAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PokedexUpsertWithoutPokemonInput = {
  create: PokedexCreateWithoutPokemonInput;
  update: PokedexUpdateWithoutPokemonInput;
};

export type PokedexWhereInput = {
  AND?: InputMaybe<Array<PokedexWhereInput>>;
  NOT?: InputMaybe<Array<PokedexWhereInput>>;
  OR?: InputMaybe<Array<PokedexWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  expiresAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IntFilter>;
  pokemon?: InputMaybe<PokemonRelationFilter>;
  pokemonId?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type PokedexWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
  pokemonId?: InputMaybe<Scalars['Int']>;
};

export type Pokemon = {
  __typename?: 'Pokemon';
  Captured: Array<Captured>;
  _count?: Maybe<PokemonCount>;
  abilities: Array<PokemonAbilities>;
  against_bug: Scalars['Float'];
  against_dark: Scalars['Float'];
  against_dragon: Scalars['Float'];
  against_electric: Scalars['Float'];
  against_fairy: Scalars['Float'];
  against_fight: Scalars['Float'];
  against_fire?: Maybe<Scalars['Float']>;
  against_flying: Scalars['Float'];
  against_ghost: Scalars['Float'];
  against_grass?: Maybe<Scalars['Float']>;
  against_ground: Scalars['Float'];
  against_ice: Scalars['Float'];
  against_normal?: Maybe<Scalars['Float']>;
  against_poison: Scalars['Float'];
  against_psychic: Scalars['Float'];
  against_rock: Scalars['Float'];
  against_steel: Scalars['Float'];
  against_water?: Maybe<Scalars['Float']>;
  attack: Scalars['Int'];
  base_egg_steps: Scalars['Int'];
  base_happiness: Scalars['Int'];
  base_total: Scalars['Int'];
  capture_rate?: Maybe<Scalars['Float']>;
  classification: Classification;
  classificationId: Scalars['Int'];
  defense: Scalars['Int'];
  experience_growth: Scalars['Int'];
  generation: Generation;
  generationId: Scalars['Int'];
  height_m: Scalars['Float'];
  hp: Scalars['Int'];
  id: Scalars['Int'];
  is_legendary: Scalars['Boolean'];
  japanese_name: Scalars['String'];
  name: Scalars['String'];
  percentage_male: Scalars['Float'];
  pokedex_number?: Maybe<Pokedex>;
  sp_attack: Scalars['Int'];
  sp_defense: Scalars['Int'];
  speed: Scalars['Int'];
  status: Status;
  types: Array<PokemonTypes>;
  weight_kg: Scalars['Float'];
};


export type PokemonCapturedArgs = {
  cursor?: InputMaybe<CapturedWhereUniqueInput>;
  distinct?: InputMaybe<Array<CapturedScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CapturedOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CapturedWhereInput>;
};


export type PokemonAbilitiesArgs = {
  cursor?: InputMaybe<PokemonAbilitiesWhereUniqueInput>;
  distinct?: InputMaybe<Array<PokemonAbilitiesScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PokemonAbilitiesOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PokemonAbilitiesWhereInput>;
};


export type PokemonTypesArgs = {
  cursor?: InputMaybe<PokemonTypesWhereUniqueInput>;
  distinct?: InputMaybe<Array<PokemonTypesScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PokemonTypesOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PokemonTypesWhereInput>;
};

export type PokemonAbilities = {
  __typename?: 'PokemonAbilities';
  ability: Ability;
  abilityId: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  expiresAt?: Maybe<Scalars['DateTime']>;
  pokemon: Pokemon;
  pokemonId: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};

export type PokemonAbilitiesAvgAggregate = {
  __typename?: 'PokemonAbilitiesAvgAggregate';
  abilityId?: Maybe<Scalars['Float']>;
  pokemonId?: Maybe<Scalars['Float']>;
};

export type PokemonAbilitiesAvgOrderByAggregateInput = {
  abilityId?: InputMaybe<SortOrder>;
  pokemonId?: InputMaybe<SortOrder>;
};

export type PokemonAbilitiesCountAggregate = {
  __typename?: 'PokemonAbilitiesCountAggregate';
  _all: Scalars['Int'];
  abilityId: Scalars['Int'];
  createdAt: Scalars['Int'];
  expiresAt: Scalars['Int'];
  pokemonId: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type PokemonAbilitiesCountOrderByAggregateInput = {
  abilityId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  expiresAt?: InputMaybe<SortOrder>;
  pokemonId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type PokemonAbilitiesCreateInput = {
  ability?: InputMaybe<AbilityCreateNestedOneWithoutPokemonAbilitiesInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  expiresAt?: InputMaybe<Scalars['DateTime']>;
  pokemon?: InputMaybe<PokemonCreateNestedOneWithoutAbilitiesInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type PokemonAbilitiesCreateManyAbilityInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  expiresAt?: InputMaybe<Scalars['DateTime']>;
  pokemonId?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type PokemonAbilitiesCreateManyAbilityInputEnvelope = {
  data: Array<PokemonAbilitiesCreateManyAbilityInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type PokemonAbilitiesCreateManyInput = {
  abilityId?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  expiresAt?: InputMaybe<Scalars['DateTime']>;
  pokemonId?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type PokemonAbilitiesCreateManyPokemonInput = {
  abilityId?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  expiresAt?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type PokemonAbilitiesCreateManyPokemonInputEnvelope = {
  data: Array<PokemonAbilitiesCreateManyPokemonInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type PokemonAbilitiesCreateNestedManyWithoutAbilityInput = {
  connect?: InputMaybe<Array<PokemonAbilitiesWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PokemonAbilitiesCreateOrConnectWithoutAbilityInput>>;
  create?: InputMaybe<Array<PokemonAbilitiesCreateWithoutAbilityInput>>;
  createMany?: InputMaybe<PokemonAbilitiesCreateManyAbilityInputEnvelope>;
};

export type PokemonAbilitiesCreateNestedManyWithoutPokemonInput = {
  connect?: InputMaybe<Array<PokemonAbilitiesWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PokemonAbilitiesCreateOrConnectWithoutPokemonInput>>;
  create?: InputMaybe<Array<PokemonAbilitiesCreateWithoutPokemonInput>>;
  createMany?: InputMaybe<PokemonAbilitiesCreateManyPokemonInputEnvelope>;
};

export type PokemonAbilitiesCreateOrConnectWithoutAbilityInput = {
  create: PokemonAbilitiesCreateWithoutAbilityInput;
  where: PokemonAbilitiesWhereUniqueInput;
};

export type PokemonAbilitiesCreateOrConnectWithoutPokemonInput = {
  create: PokemonAbilitiesCreateWithoutPokemonInput;
  where: PokemonAbilitiesWhereUniqueInput;
};

export type PokemonAbilitiesCreateWithoutAbilityInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  expiresAt?: InputMaybe<Scalars['DateTime']>;
  pokemon?: InputMaybe<PokemonCreateNestedOneWithoutAbilitiesInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type PokemonAbilitiesCreateWithoutPokemonInput = {
  ability?: InputMaybe<AbilityCreateNestedOneWithoutPokemonAbilitiesInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  expiresAt?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type PokemonAbilitiesGroupBy = {
  __typename?: 'PokemonAbilitiesGroupBy';
  _avg?: Maybe<PokemonAbilitiesAvgAggregate>;
  _count?: Maybe<PokemonAbilitiesCountAggregate>;
  _max?: Maybe<PokemonAbilitiesMaxAggregate>;
  _min?: Maybe<PokemonAbilitiesMinAggregate>;
  _sum?: Maybe<PokemonAbilitiesSumAggregate>;
  abilityId: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  expiresAt?: Maybe<Scalars['DateTime']>;
  pokemonId: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};

export type PokemonAbilitiesListRelationFilter = {
  every?: InputMaybe<PokemonAbilitiesWhereInput>;
  none?: InputMaybe<PokemonAbilitiesWhereInput>;
  some?: InputMaybe<PokemonAbilitiesWhereInput>;
};

export type PokemonAbilitiesMaxAggregate = {
  __typename?: 'PokemonAbilitiesMaxAggregate';
  abilityId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  expiresAt?: Maybe<Scalars['DateTime']>;
  pokemonId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PokemonAbilitiesMaxOrderByAggregateInput = {
  abilityId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  expiresAt?: InputMaybe<SortOrder>;
  pokemonId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type PokemonAbilitiesMinAggregate = {
  __typename?: 'PokemonAbilitiesMinAggregate';
  abilityId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  expiresAt?: Maybe<Scalars['DateTime']>;
  pokemonId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PokemonAbilitiesMinOrderByAggregateInput = {
  abilityId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  expiresAt?: InputMaybe<SortOrder>;
  pokemonId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type PokemonAbilitiesOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type PokemonAbilitiesOrderByWithAggregationInput = {
  _avg?: InputMaybe<PokemonAbilitiesAvgOrderByAggregateInput>;
  _count?: InputMaybe<PokemonAbilitiesCountOrderByAggregateInput>;
  _max?: InputMaybe<PokemonAbilitiesMaxOrderByAggregateInput>;
  _min?: InputMaybe<PokemonAbilitiesMinOrderByAggregateInput>;
  _sum?: InputMaybe<PokemonAbilitiesSumOrderByAggregateInput>;
  abilityId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  expiresAt?: InputMaybe<SortOrder>;
  pokemonId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type PokemonAbilitiesOrderByWithRelationInput = {
  ability?: InputMaybe<AbilityOrderByWithRelationInput>;
  abilityId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  expiresAt?: InputMaybe<SortOrder>;
  pokemon?: InputMaybe<PokemonOrderByWithRelationInput>;
  pokemonId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type PokemonAbilitiesPokemonIdAbilityIdCompoundUniqueInput = {
  abilityId: Scalars['Int'];
  pokemonId: Scalars['Int'];
};

export enum PokemonAbilitiesScalarFieldEnum {
  AbilityId = 'abilityId',
  CreatedAt = 'createdAt',
  ExpiresAt = 'expiresAt',
  PokemonId = 'pokemonId',
  UpdatedAt = 'updatedAt'
}

export type PokemonAbilitiesScalarWhereInput = {
  AND?: InputMaybe<Array<PokemonAbilitiesScalarWhereInput>>;
  NOT?: InputMaybe<Array<PokemonAbilitiesScalarWhereInput>>;
  OR?: InputMaybe<Array<PokemonAbilitiesScalarWhereInput>>;
  abilityId?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  expiresAt?: InputMaybe<DateTimeNullableFilter>;
  pokemonId?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type PokemonAbilitiesScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<PokemonAbilitiesScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<PokemonAbilitiesScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<PokemonAbilitiesScalarWhereWithAggregatesInput>>;
  abilityId?: InputMaybe<IntWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  expiresAt?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  pokemonId?: InputMaybe<IntWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type PokemonAbilitiesSumAggregate = {
  __typename?: 'PokemonAbilitiesSumAggregate';
  abilityId?: Maybe<Scalars['Int']>;
  pokemonId?: Maybe<Scalars['Int']>;
};

export type PokemonAbilitiesSumOrderByAggregateInput = {
  abilityId?: InputMaybe<SortOrder>;
  pokemonId?: InputMaybe<SortOrder>;
};

export type PokemonAbilitiesUpdateInput = {
  ability?: InputMaybe<AbilityUpdateOneRequiredWithoutPokemonAbilitiesInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  expiresAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  pokemon?: InputMaybe<PokemonUpdateOneRequiredWithoutAbilitiesInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PokemonAbilitiesUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  expiresAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PokemonAbilitiesUpdateManyWithWhereWithoutAbilityInput = {
  data: PokemonAbilitiesUpdateManyMutationInput;
  where: PokemonAbilitiesScalarWhereInput;
};

export type PokemonAbilitiesUpdateManyWithWhereWithoutPokemonInput = {
  data: PokemonAbilitiesUpdateManyMutationInput;
  where: PokemonAbilitiesScalarWhereInput;
};

export type PokemonAbilitiesUpdateManyWithoutAbilityInput = {
  connect?: InputMaybe<Array<PokemonAbilitiesWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PokemonAbilitiesCreateOrConnectWithoutAbilityInput>>;
  create?: InputMaybe<Array<PokemonAbilitiesCreateWithoutAbilityInput>>;
  createMany?: InputMaybe<PokemonAbilitiesCreateManyAbilityInputEnvelope>;
  delete?: InputMaybe<Array<PokemonAbilitiesWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PokemonAbilitiesScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PokemonAbilitiesWhereUniqueInput>>;
  set?: InputMaybe<Array<PokemonAbilitiesWhereUniqueInput>>;
  update?: InputMaybe<Array<PokemonAbilitiesUpdateWithWhereUniqueWithoutAbilityInput>>;
  updateMany?: InputMaybe<Array<PokemonAbilitiesUpdateManyWithWhereWithoutAbilityInput>>;
  upsert?: InputMaybe<Array<PokemonAbilitiesUpsertWithWhereUniqueWithoutAbilityInput>>;
};

export type PokemonAbilitiesUpdateManyWithoutPokemonInput = {
  connect?: InputMaybe<Array<PokemonAbilitiesWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PokemonAbilitiesCreateOrConnectWithoutPokemonInput>>;
  create?: InputMaybe<Array<PokemonAbilitiesCreateWithoutPokemonInput>>;
  createMany?: InputMaybe<PokemonAbilitiesCreateManyPokemonInputEnvelope>;
  delete?: InputMaybe<Array<PokemonAbilitiesWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PokemonAbilitiesScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PokemonAbilitiesWhereUniqueInput>>;
  set?: InputMaybe<Array<PokemonAbilitiesWhereUniqueInput>>;
  update?: InputMaybe<Array<PokemonAbilitiesUpdateWithWhereUniqueWithoutPokemonInput>>;
  updateMany?: InputMaybe<Array<PokemonAbilitiesUpdateManyWithWhereWithoutPokemonInput>>;
  upsert?: InputMaybe<Array<PokemonAbilitiesUpsertWithWhereUniqueWithoutPokemonInput>>;
};

export type PokemonAbilitiesUpdateWithWhereUniqueWithoutAbilityInput = {
  data: PokemonAbilitiesUpdateWithoutAbilityInput;
  where: PokemonAbilitiesWhereUniqueInput;
};

export type PokemonAbilitiesUpdateWithWhereUniqueWithoutPokemonInput = {
  data: PokemonAbilitiesUpdateWithoutPokemonInput;
  where: PokemonAbilitiesWhereUniqueInput;
};

export type PokemonAbilitiesUpdateWithoutAbilityInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  expiresAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  pokemon?: InputMaybe<PokemonUpdateOneRequiredWithoutAbilitiesInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PokemonAbilitiesUpdateWithoutPokemonInput = {
  ability?: InputMaybe<AbilityUpdateOneRequiredWithoutPokemonAbilitiesInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  expiresAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PokemonAbilitiesUpsertWithWhereUniqueWithoutAbilityInput = {
  create: PokemonAbilitiesCreateWithoutAbilityInput;
  update: PokemonAbilitiesUpdateWithoutAbilityInput;
  where: PokemonAbilitiesWhereUniqueInput;
};

export type PokemonAbilitiesUpsertWithWhereUniqueWithoutPokemonInput = {
  create: PokemonAbilitiesCreateWithoutPokemonInput;
  update: PokemonAbilitiesUpdateWithoutPokemonInput;
  where: PokemonAbilitiesWhereUniqueInput;
};

export type PokemonAbilitiesWhereInput = {
  AND?: InputMaybe<Array<PokemonAbilitiesWhereInput>>;
  NOT?: InputMaybe<Array<PokemonAbilitiesWhereInput>>;
  OR?: InputMaybe<Array<PokemonAbilitiesWhereInput>>;
  ability?: InputMaybe<AbilityRelationFilter>;
  abilityId?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  expiresAt?: InputMaybe<DateTimeNullableFilter>;
  pokemon?: InputMaybe<PokemonRelationFilter>;
  pokemonId?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type PokemonAbilitiesWhereUniqueInput = {
  pokemonId_abilityId?: InputMaybe<PokemonAbilitiesPokemonIdAbilityIdCompoundUniqueInput>;
};

export type PokemonAvgAggregate = {
  __typename?: 'PokemonAvgAggregate';
  against_bug?: Maybe<Scalars['Float']>;
  against_dark?: Maybe<Scalars['Float']>;
  against_dragon?: Maybe<Scalars['Float']>;
  against_electric?: Maybe<Scalars['Float']>;
  against_fairy?: Maybe<Scalars['Float']>;
  against_fight?: Maybe<Scalars['Float']>;
  against_fire?: Maybe<Scalars['Float']>;
  against_flying?: Maybe<Scalars['Float']>;
  against_ghost?: Maybe<Scalars['Float']>;
  against_grass?: Maybe<Scalars['Float']>;
  against_ground?: Maybe<Scalars['Float']>;
  against_ice?: Maybe<Scalars['Float']>;
  against_normal?: Maybe<Scalars['Float']>;
  against_poison?: Maybe<Scalars['Float']>;
  against_psychic?: Maybe<Scalars['Float']>;
  against_rock?: Maybe<Scalars['Float']>;
  against_steel?: Maybe<Scalars['Float']>;
  against_water?: Maybe<Scalars['Float']>;
  attack?: Maybe<Scalars['Float']>;
  base_egg_steps?: Maybe<Scalars['Float']>;
  base_happiness?: Maybe<Scalars['Float']>;
  base_total?: Maybe<Scalars['Float']>;
  capture_rate?: Maybe<Scalars['Float']>;
  classificationId?: Maybe<Scalars['Float']>;
  defense?: Maybe<Scalars['Float']>;
  experience_growth?: Maybe<Scalars['Float']>;
  generationId?: Maybe<Scalars['Float']>;
  height_m?: Maybe<Scalars['Float']>;
  hp?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  percentage_male?: Maybe<Scalars['Float']>;
  sp_attack?: Maybe<Scalars['Float']>;
  sp_defense?: Maybe<Scalars['Float']>;
  speed?: Maybe<Scalars['Float']>;
  weight_kg?: Maybe<Scalars['Float']>;
};

export type PokemonAvgOrderByAggregateInput = {
  against_bug?: InputMaybe<SortOrder>;
  against_dark?: InputMaybe<SortOrder>;
  against_dragon?: InputMaybe<SortOrder>;
  against_electric?: InputMaybe<SortOrder>;
  against_fairy?: InputMaybe<SortOrder>;
  against_fight?: InputMaybe<SortOrder>;
  against_fire?: InputMaybe<SortOrder>;
  against_flying?: InputMaybe<SortOrder>;
  against_ghost?: InputMaybe<SortOrder>;
  against_grass?: InputMaybe<SortOrder>;
  against_ground?: InputMaybe<SortOrder>;
  against_ice?: InputMaybe<SortOrder>;
  against_normal?: InputMaybe<SortOrder>;
  against_poison?: InputMaybe<SortOrder>;
  against_psychic?: InputMaybe<SortOrder>;
  against_rock?: InputMaybe<SortOrder>;
  against_steel?: InputMaybe<SortOrder>;
  against_water?: InputMaybe<SortOrder>;
  attack?: InputMaybe<SortOrder>;
  base_egg_steps?: InputMaybe<SortOrder>;
  base_happiness?: InputMaybe<SortOrder>;
  base_total?: InputMaybe<SortOrder>;
  capture_rate?: InputMaybe<SortOrder>;
  classificationId?: InputMaybe<SortOrder>;
  defense?: InputMaybe<SortOrder>;
  experience_growth?: InputMaybe<SortOrder>;
  generationId?: InputMaybe<SortOrder>;
  height_m?: InputMaybe<SortOrder>;
  hp?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  percentage_male?: InputMaybe<SortOrder>;
  sp_attack?: InputMaybe<SortOrder>;
  sp_defense?: InputMaybe<SortOrder>;
  speed?: InputMaybe<SortOrder>;
  weight_kg?: InputMaybe<SortOrder>;
};

export type PokemonCount = {
  __typename?: 'PokemonCount';
  Captured: Scalars['Int'];
  abilities: Scalars['Int'];
  types: Scalars['Int'];
};

export type PokemonCountAggregate = {
  __typename?: 'PokemonCountAggregate';
  _all: Scalars['Int'];
  against_bug: Scalars['Int'];
  against_dark: Scalars['Int'];
  against_dragon: Scalars['Int'];
  against_electric: Scalars['Int'];
  against_fairy: Scalars['Int'];
  against_fight: Scalars['Int'];
  against_fire: Scalars['Int'];
  against_flying: Scalars['Int'];
  against_ghost: Scalars['Int'];
  against_grass: Scalars['Int'];
  against_ground: Scalars['Int'];
  against_ice: Scalars['Int'];
  against_normal: Scalars['Int'];
  against_poison: Scalars['Int'];
  against_psychic: Scalars['Int'];
  against_rock: Scalars['Int'];
  against_steel: Scalars['Int'];
  against_water: Scalars['Int'];
  attack: Scalars['Int'];
  base_egg_steps: Scalars['Int'];
  base_happiness: Scalars['Int'];
  base_total: Scalars['Int'];
  capture_rate: Scalars['Int'];
  classificationId: Scalars['Int'];
  defense: Scalars['Int'];
  experience_growth: Scalars['Int'];
  generationId: Scalars['Int'];
  height_m: Scalars['Int'];
  hp: Scalars['Int'];
  id: Scalars['Int'];
  is_legendary: Scalars['Int'];
  japanese_name: Scalars['Int'];
  name: Scalars['Int'];
  percentage_male: Scalars['Int'];
  sp_attack: Scalars['Int'];
  sp_defense: Scalars['Int'];
  speed: Scalars['Int'];
  status: Scalars['Int'];
  weight_kg: Scalars['Int'];
};

export type PokemonCountOrderByAggregateInput = {
  against_bug?: InputMaybe<SortOrder>;
  against_dark?: InputMaybe<SortOrder>;
  against_dragon?: InputMaybe<SortOrder>;
  against_electric?: InputMaybe<SortOrder>;
  against_fairy?: InputMaybe<SortOrder>;
  against_fight?: InputMaybe<SortOrder>;
  against_fire?: InputMaybe<SortOrder>;
  against_flying?: InputMaybe<SortOrder>;
  against_ghost?: InputMaybe<SortOrder>;
  against_grass?: InputMaybe<SortOrder>;
  against_ground?: InputMaybe<SortOrder>;
  against_ice?: InputMaybe<SortOrder>;
  against_normal?: InputMaybe<SortOrder>;
  against_poison?: InputMaybe<SortOrder>;
  against_psychic?: InputMaybe<SortOrder>;
  against_rock?: InputMaybe<SortOrder>;
  against_steel?: InputMaybe<SortOrder>;
  against_water?: InputMaybe<SortOrder>;
  attack?: InputMaybe<SortOrder>;
  base_egg_steps?: InputMaybe<SortOrder>;
  base_happiness?: InputMaybe<SortOrder>;
  base_total?: InputMaybe<SortOrder>;
  capture_rate?: InputMaybe<SortOrder>;
  classificationId?: InputMaybe<SortOrder>;
  defense?: InputMaybe<SortOrder>;
  experience_growth?: InputMaybe<SortOrder>;
  generationId?: InputMaybe<SortOrder>;
  height_m?: InputMaybe<SortOrder>;
  hp?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  is_legendary?: InputMaybe<SortOrder>;
  japanese_name?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  percentage_male?: InputMaybe<SortOrder>;
  sp_attack?: InputMaybe<SortOrder>;
  sp_defense?: InputMaybe<SortOrder>;
  speed?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  weight_kg?: InputMaybe<SortOrder>;
};

export type PokemonCreateInput = {
  Captured?: InputMaybe<CapturedCreateNestedManyWithoutPokemonInput>;
  abilities?: InputMaybe<PokemonAbilitiesCreateNestedManyWithoutPokemonInput>;
  against_bug: Scalars['Float'];
  against_dark: Scalars['Float'];
  against_dragon: Scalars['Float'];
  against_electric: Scalars['Float'];
  against_fairy: Scalars['Float'];
  against_fight: Scalars['Float'];
  against_fire?: InputMaybe<Scalars['Float']>;
  against_flying: Scalars['Float'];
  against_ghost: Scalars['Float'];
  against_grass?: InputMaybe<Scalars['Float']>;
  against_ground: Scalars['Float'];
  against_ice: Scalars['Float'];
  against_normal?: InputMaybe<Scalars['Float']>;
  against_poison: Scalars['Float'];
  against_psychic: Scalars['Float'];
  against_rock: Scalars['Float'];
  against_steel: Scalars['Float'];
  against_water?: InputMaybe<Scalars['Float']>;
  attack: Scalars['Int'];
  base_egg_steps: Scalars['Int'];
  base_happiness: Scalars['Int'];
  base_total: Scalars['Int'];
  capture_rate?: InputMaybe<Scalars['Float']>;
  classification: ClassificationCreateNestedOneWithoutPokemonInput;
  defense: Scalars['Int'];
  experience_growth: Scalars['Int'];
  generation: GenerationCreateNestedOneWithoutPokemonInput;
  height_m: Scalars['Float'];
  hp: Scalars['Int'];
  is_legendary: Scalars['Boolean'];
  japanese_name: Scalars['String'];
  name: Scalars['String'];
  percentage_male: Scalars['Float'];
  pokedex_number?: InputMaybe<PokedexCreateNestedOneWithoutPokemonInput>;
  sp_attack: Scalars['Int'];
  sp_defense: Scalars['Int'];
  speed: Scalars['Int'];
  status?: InputMaybe<Status>;
  types?: InputMaybe<PokemonTypesCreateNestedManyWithoutPokemonInput>;
  weight_kg: Scalars['Float'];
};

export type PokemonCreateManyClassificationInput = {
  against_bug: Scalars['Float'];
  against_dark: Scalars['Float'];
  against_dragon: Scalars['Float'];
  against_electric: Scalars['Float'];
  against_fairy: Scalars['Float'];
  against_fight: Scalars['Float'];
  against_fire?: InputMaybe<Scalars['Float']>;
  against_flying: Scalars['Float'];
  against_ghost: Scalars['Float'];
  against_grass?: InputMaybe<Scalars['Float']>;
  against_ground: Scalars['Float'];
  against_ice: Scalars['Float'];
  against_normal?: InputMaybe<Scalars['Float']>;
  against_poison: Scalars['Float'];
  against_psychic: Scalars['Float'];
  against_rock: Scalars['Float'];
  against_steel: Scalars['Float'];
  against_water?: InputMaybe<Scalars['Float']>;
  attack: Scalars['Int'];
  base_egg_steps: Scalars['Int'];
  base_happiness: Scalars['Int'];
  base_total: Scalars['Int'];
  capture_rate?: InputMaybe<Scalars['Float']>;
  defense: Scalars['Int'];
  experience_growth: Scalars['Int'];
  generationId: Scalars['Int'];
  height_m: Scalars['Float'];
  hp: Scalars['Int'];
  id?: InputMaybe<Scalars['Int']>;
  is_legendary: Scalars['Boolean'];
  japanese_name: Scalars['String'];
  name: Scalars['String'];
  percentage_male: Scalars['Float'];
  sp_attack: Scalars['Int'];
  sp_defense: Scalars['Int'];
  speed: Scalars['Int'];
  status?: InputMaybe<Status>;
  weight_kg: Scalars['Float'];
};

export type PokemonCreateManyClassificationInputEnvelope = {
  data: Array<PokemonCreateManyClassificationInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type PokemonCreateManyGenerationInput = {
  against_bug: Scalars['Float'];
  against_dark: Scalars['Float'];
  against_dragon: Scalars['Float'];
  against_electric: Scalars['Float'];
  against_fairy: Scalars['Float'];
  against_fight: Scalars['Float'];
  against_fire?: InputMaybe<Scalars['Float']>;
  against_flying: Scalars['Float'];
  against_ghost: Scalars['Float'];
  against_grass?: InputMaybe<Scalars['Float']>;
  against_ground: Scalars['Float'];
  against_ice: Scalars['Float'];
  against_normal?: InputMaybe<Scalars['Float']>;
  against_poison: Scalars['Float'];
  against_psychic: Scalars['Float'];
  against_rock: Scalars['Float'];
  against_steel: Scalars['Float'];
  against_water?: InputMaybe<Scalars['Float']>;
  attack: Scalars['Int'];
  base_egg_steps: Scalars['Int'];
  base_happiness: Scalars['Int'];
  base_total: Scalars['Int'];
  capture_rate?: InputMaybe<Scalars['Float']>;
  classificationId: Scalars['Int'];
  defense: Scalars['Int'];
  experience_growth: Scalars['Int'];
  height_m: Scalars['Float'];
  hp: Scalars['Int'];
  id?: InputMaybe<Scalars['Int']>;
  is_legendary: Scalars['Boolean'];
  japanese_name: Scalars['String'];
  name: Scalars['String'];
  percentage_male: Scalars['Float'];
  sp_attack: Scalars['Int'];
  sp_defense: Scalars['Int'];
  speed: Scalars['Int'];
  status?: InputMaybe<Status>;
  weight_kg: Scalars['Float'];
};

export type PokemonCreateManyGenerationInputEnvelope = {
  data: Array<PokemonCreateManyGenerationInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type PokemonCreateManyInput = {
  against_bug: Scalars['Float'];
  against_dark: Scalars['Float'];
  against_dragon: Scalars['Float'];
  against_electric: Scalars['Float'];
  against_fairy: Scalars['Float'];
  against_fight: Scalars['Float'];
  against_fire?: InputMaybe<Scalars['Float']>;
  against_flying: Scalars['Float'];
  against_ghost: Scalars['Float'];
  against_grass?: InputMaybe<Scalars['Float']>;
  against_ground: Scalars['Float'];
  against_ice: Scalars['Float'];
  against_normal?: InputMaybe<Scalars['Float']>;
  against_poison: Scalars['Float'];
  against_psychic: Scalars['Float'];
  against_rock: Scalars['Float'];
  against_steel: Scalars['Float'];
  against_water?: InputMaybe<Scalars['Float']>;
  attack: Scalars['Int'];
  base_egg_steps: Scalars['Int'];
  base_happiness: Scalars['Int'];
  base_total: Scalars['Int'];
  capture_rate?: InputMaybe<Scalars['Float']>;
  classificationId: Scalars['Int'];
  defense: Scalars['Int'];
  experience_growth: Scalars['Int'];
  generationId: Scalars['Int'];
  height_m: Scalars['Float'];
  hp: Scalars['Int'];
  id?: InputMaybe<Scalars['Int']>;
  is_legendary: Scalars['Boolean'];
  japanese_name: Scalars['String'];
  name: Scalars['String'];
  percentage_male: Scalars['Float'];
  sp_attack: Scalars['Int'];
  sp_defense: Scalars['Int'];
  speed: Scalars['Int'];
  status?: InputMaybe<Status>;
  weight_kg: Scalars['Float'];
};

export type PokemonCreateNestedManyWithoutClassificationInput = {
  connect?: InputMaybe<Array<PokemonWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PokemonCreateOrConnectWithoutClassificationInput>>;
  create?: InputMaybe<Array<PokemonCreateWithoutClassificationInput>>;
  createMany?: InputMaybe<PokemonCreateManyClassificationInputEnvelope>;
};

export type PokemonCreateNestedManyWithoutGenerationInput = {
  connect?: InputMaybe<Array<PokemonWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PokemonCreateOrConnectWithoutGenerationInput>>;
  create?: InputMaybe<Array<PokemonCreateWithoutGenerationInput>>;
  createMany?: InputMaybe<PokemonCreateManyGenerationInputEnvelope>;
};

export type PokemonCreateNestedOneWithoutAbilitiesInput = {
  connect?: InputMaybe<PokemonWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PokemonCreateOrConnectWithoutAbilitiesInput>;
  create?: InputMaybe<PokemonCreateWithoutAbilitiesInput>;
};

export type PokemonCreateNestedOneWithoutCapturedInput = {
  connect?: InputMaybe<PokemonWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PokemonCreateOrConnectWithoutCapturedInput>;
  create?: InputMaybe<PokemonCreateWithoutCapturedInput>;
};

export type PokemonCreateNestedOneWithoutPokedex_NumberInput = {
  connect?: InputMaybe<PokemonWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PokemonCreateOrConnectWithoutPokedex_NumberInput>;
  create?: InputMaybe<PokemonCreateWithoutPokedex_NumberInput>;
};

export type PokemonCreateNestedOneWithoutTypesInput = {
  connect?: InputMaybe<PokemonWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PokemonCreateOrConnectWithoutTypesInput>;
  create?: InputMaybe<PokemonCreateWithoutTypesInput>;
};

export type PokemonCreateOrConnectWithoutAbilitiesInput = {
  create: PokemonCreateWithoutAbilitiesInput;
  where: PokemonWhereUniqueInput;
};

export type PokemonCreateOrConnectWithoutCapturedInput = {
  create: PokemonCreateWithoutCapturedInput;
  where: PokemonWhereUniqueInput;
};

export type PokemonCreateOrConnectWithoutClassificationInput = {
  create: PokemonCreateWithoutClassificationInput;
  where: PokemonWhereUniqueInput;
};

export type PokemonCreateOrConnectWithoutGenerationInput = {
  create: PokemonCreateWithoutGenerationInput;
  where: PokemonWhereUniqueInput;
};

export type PokemonCreateOrConnectWithoutPokedex_NumberInput = {
  create: PokemonCreateWithoutPokedex_NumberInput;
  where: PokemonWhereUniqueInput;
};

export type PokemonCreateOrConnectWithoutTypesInput = {
  create: PokemonCreateWithoutTypesInput;
  where: PokemonWhereUniqueInput;
};

export type PokemonCreateWithoutAbilitiesInput = {
  Captured?: InputMaybe<CapturedCreateNestedManyWithoutPokemonInput>;
  against_bug: Scalars['Float'];
  against_dark: Scalars['Float'];
  against_dragon: Scalars['Float'];
  against_electric: Scalars['Float'];
  against_fairy: Scalars['Float'];
  against_fight: Scalars['Float'];
  against_fire?: InputMaybe<Scalars['Float']>;
  against_flying: Scalars['Float'];
  against_ghost: Scalars['Float'];
  against_grass?: InputMaybe<Scalars['Float']>;
  against_ground: Scalars['Float'];
  against_ice: Scalars['Float'];
  against_normal?: InputMaybe<Scalars['Float']>;
  against_poison: Scalars['Float'];
  against_psychic: Scalars['Float'];
  against_rock: Scalars['Float'];
  against_steel: Scalars['Float'];
  against_water?: InputMaybe<Scalars['Float']>;
  attack: Scalars['Int'];
  base_egg_steps: Scalars['Int'];
  base_happiness: Scalars['Int'];
  base_total: Scalars['Int'];
  capture_rate?: InputMaybe<Scalars['Float']>;
  classification: ClassificationCreateNestedOneWithoutPokemonInput;
  defense: Scalars['Int'];
  experience_growth: Scalars['Int'];
  generation: GenerationCreateNestedOneWithoutPokemonInput;
  height_m: Scalars['Float'];
  hp: Scalars['Int'];
  is_legendary: Scalars['Boolean'];
  japanese_name: Scalars['String'];
  name: Scalars['String'];
  percentage_male: Scalars['Float'];
  pokedex_number?: InputMaybe<PokedexCreateNestedOneWithoutPokemonInput>;
  sp_attack: Scalars['Int'];
  sp_defense: Scalars['Int'];
  speed: Scalars['Int'];
  status?: InputMaybe<Status>;
  types?: InputMaybe<PokemonTypesCreateNestedManyWithoutPokemonInput>;
  weight_kg: Scalars['Float'];
};

export type PokemonCreateWithoutCapturedInput = {
  abilities?: InputMaybe<PokemonAbilitiesCreateNestedManyWithoutPokemonInput>;
  against_bug: Scalars['Float'];
  against_dark: Scalars['Float'];
  against_dragon: Scalars['Float'];
  against_electric: Scalars['Float'];
  against_fairy: Scalars['Float'];
  against_fight: Scalars['Float'];
  against_fire?: InputMaybe<Scalars['Float']>;
  against_flying: Scalars['Float'];
  against_ghost: Scalars['Float'];
  against_grass?: InputMaybe<Scalars['Float']>;
  against_ground: Scalars['Float'];
  against_ice: Scalars['Float'];
  against_normal?: InputMaybe<Scalars['Float']>;
  against_poison: Scalars['Float'];
  against_psychic: Scalars['Float'];
  against_rock: Scalars['Float'];
  against_steel: Scalars['Float'];
  against_water?: InputMaybe<Scalars['Float']>;
  attack: Scalars['Int'];
  base_egg_steps: Scalars['Int'];
  base_happiness: Scalars['Int'];
  base_total: Scalars['Int'];
  capture_rate?: InputMaybe<Scalars['Float']>;
  classification: ClassificationCreateNestedOneWithoutPokemonInput;
  defense: Scalars['Int'];
  experience_growth: Scalars['Int'];
  generation: GenerationCreateNestedOneWithoutPokemonInput;
  height_m: Scalars['Float'];
  hp: Scalars['Int'];
  is_legendary: Scalars['Boolean'];
  japanese_name: Scalars['String'];
  name: Scalars['String'];
  percentage_male: Scalars['Float'];
  pokedex_number?: InputMaybe<PokedexCreateNestedOneWithoutPokemonInput>;
  sp_attack: Scalars['Int'];
  sp_defense: Scalars['Int'];
  speed: Scalars['Int'];
  status?: InputMaybe<Status>;
  types?: InputMaybe<PokemonTypesCreateNestedManyWithoutPokemonInput>;
  weight_kg: Scalars['Float'];
};

export type PokemonCreateWithoutClassificationInput = {
  Captured?: InputMaybe<CapturedCreateNestedManyWithoutPokemonInput>;
  abilities?: InputMaybe<PokemonAbilitiesCreateNestedManyWithoutPokemonInput>;
  against_bug: Scalars['Float'];
  against_dark: Scalars['Float'];
  against_dragon: Scalars['Float'];
  against_electric: Scalars['Float'];
  against_fairy: Scalars['Float'];
  against_fight: Scalars['Float'];
  against_fire?: InputMaybe<Scalars['Float']>;
  against_flying: Scalars['Float'];
  against_ghost: Scalars['Float'];
  against_grass?: InputMaybe<Scalars['Float']>;
  against_ground: Scalars['Float'];
  against_ice: Scalars['Float'];
  against_normal?: InputMaybe<Scalars['Float']>;
  against_poison: Scalars['Float'];
  against_psychic: Scalars['Float'];
  against_rock: Scalars['Float'];
  against_steel: Scalars['Float'];
  against_water?: InputMaybe<Scalars['Float']>;
  attack: Scalars['Int'];
  base_egg_steps: Scalars['Int'];
  base_happiness: Scalars['Int'];
  base_total: Scalars['Int'];
  capture_rate?: InputMaybe<Scalars['Float']>;
  defense: Scalars['Int'];
  experience_growth: Scalars['Int'];
  generation: GenerationCreateNestedOneWithoutPokemonInput;
  height_m: Scalars['Float'];
  hp: Scalars['Int'];
  is_legendary: Scalars['Boolean'];
  japanese_name: Scalars['String'];
  name: Scalars['String'];
  percentage_male: Scalars['Float'];
  pokedex_number?: InputMaybe<PokedexCreateNestedOneWithoutPokemonInput>;
  sp_attack: Scalars['Int'];
  sp_defense: Scalars['Int'];
  speed: Scalars['Int'];
  status?: InputMaybe<Status>;
  types?: InputMaybe<PokemonTypesCreateNestedManyWithoutPokemonInput>;
  weight_kg: Scalars['Float'];
};

export type PokemonCreateWithoutGenerationInput = {
  Captured?: InputMaybe<CapturedCreateNestedManyWithoutPokemonInput>;
  abilities?: InputMaybe<PokemonAbilitiesCreateNestedManyWithoutPokemonInput>;
  against_bug: Scalars['Float'];
  against_dark: Scalars['Float'];
  against_dragon: Scalars['Float'];
  against_electric: Scalars['Float'];
  against_fairy: Scalars['Float'];
  against_fight: Scalars['Float'];
  against_fire?: InputMaybe<Scalars['Float']>;
  against_flying: Scalars['Float'];
  against_ghost: Scalars['Float'];
  against_grass?: InputMaybe<Scalars['Float']>;
  against_ground: Scalars['Float'];
  against_ice: Scalars['Float'];
  against_normal?: InputMaybe<Scalars['Float']>;
  against_poison: Scalars['Float'];
  against_psychic: Scalars['Float'];
  against_rock: Scalars['Float'];
  against_steel: Scalars['Float'];
  against_water?: InputMaybe<Scalars['Float']>;
  attack: Scalars['Int'];
  base_egg_steps: Scalars['Int'];
  base_happiness: Scalars['Int'];
  base_total: Scalars['Int'];
  capture_rate?: InputMaybe<Scalars['Float']>;
  classification: ClassificationCreateNestedOneWithoutPokemonInput;
  defense: Scalars['Int'];
  experience_growth: Scalars['Int'];
  height_m: Scalars['Float'];
  hp: Scalars['Int'];
  is_legendary: Scalars['Boolean'];
  japanese_name: Scalars['String'];
  name: Scalars['String'];
  percentage_male: Scalars['Float'];
  pokedex_number?: InputMaybe<PokedexCreateNestedOneWithoutPokemonInput>;
  sp_attack: Scalars['Int'];
  sp_defense: Scalars['Int'];
  speed: Scalars['Int'];
  status?: InputMaybe<Status>;
  types?: InputMaybe<PokemonTypesCreateNestedManyWithoutPokemonInput>;
  weight_kg: Scalars['Float'];
};

export type PokemonCreateWithoutPokedex_NumberInput = {
  Captured?: InputMaybe<CapturedCreateNestedManyWithoutPokemonInput>;
  abilities?: InputMaybe<PokemonAbilitiesCreateNestedManyWithoutPokemonInput>;
  against_bug: Scalars['Float'];
  against_dark: Scalars['Float'];
  against_dragon: Scalars['Float'];
  against_electric: Scalars['Float'];
  against_fairy: Scalars['Float'];
  against_fight: Scalars['Float'];
  against_fire?: InputMaybe<Scalars['Float']>;
  against_flying: Scalars['Float'];
  against_ghost: Scalars['Float'];
  against_grass?: InputMaybe<Scalars['Float']>;
  against_ground: Scalars['Float'];
  against_ice: Scalars['Float'];
  against_normal?: InputMaybe<Scalars['Float']>;
  against_poison: Scalars['Float'];
  against_psychic: Scalars['Float'];
  against_rock: Scalars['Float'];
  against_steel: Scalars['Float'];
  against_water?: InputMaybe<Scalars['Float']>;
  attack: Scalars['Int'];
  base_egg_steps: Scalars['Int'];
  base_happiness: Scalars['Int'];
  base_total: Scalars['Int'];
  capture_rate?: InputMaybe<Scalars['Float']>;
  classification: ClassificationCreateNestedOneWithoutPokemonInput;
  defense: Scalars['Int'];
  experience_growth: Scalars['Int'];
  generation: GenerationCreateNestedOneWithoutPokemonInput;
  height_m: Scalars['Float'];
  hp: Scalars['Int'];
  is_legendary: Scalars['Boolean'];
  japanese_name: Scalars['String'];
  name: Scalars['String'];
  percentage_male: Scalars['Float'];
  sp_attack: Scalars['Int'];
  sp_defense: Scalars['Int'];
  speed: Scalars['Int'];
  status?: InputMaybe<Status>;
  types?: InputMaybe<PokemonTypesCreateNestedManyWithoutPokemonInput>;
  weight_kg: Scalars['Float'];
};

export type PokemonCreateWithoutTypesInput = {
  Captured?: InputMaybe<CapturedCreateNestedManyWithoutPokemonInput>;
  abilities?: InputMaybe<PokemonAbilitiesCreateNestedManyWithoutPokemonInput>;
  against_bug: Scalars['Float'];
  against_dark: Scalars['Float'];
  against_dragon: Scalars['Float'];
  against_electric: Scalars['Float'];
  against_fairy: Scalars['Float'];
  against_fight: Scalars['Float'];
  against_fire?: InputMaybe<Scalars['Float']>;
  against_flying: Scalars['Float'];
  against_ghost: Scalars['Float'];
  against_grass?: InputMaybe<Scalars['Float']>;
  against_ground: Scalars['Float'];
  against_ice: Scalars['Float'];
  against_normal?: InputMaybe<Scalars['Float']>;
  against_poison: Scalars['Float'];
  against_psychic: Scalars['Float'];
  against_rock: Scalars['Float'];
  against_steel: Scalars['Float'];
  against_water?: InputMaybe<Scalars['Float']>;
  attack: Scalars['Int'];
  base_egg_steps: Scalars['Int'];
  base_happiness: Scalars['Int'];
  base_total: Scalars['Int'];
  capture_rate?: InputMaybe<Scalars['Float']>;
  classification: ClassificationCreateNestedOneWithoutPokemonInput;
  defense: Scalars['Int'];
  experience_growth: Scalars['Int'];
  generation: GenerationCreateNestedOneWithoutPokemonInput;
  height_m: Scalars['Float'];
  hp: Scalars['Int'];
  is_legendary: Scalars['Boolean'];
  japanese_name: Scalars['String'];
  name: Scalars['String'];
  percentage_male: Scalars['Float'];
  pokedex_number?: InputMaybe<PokedexCreateNestedOneWithoutPokemonInput>;
  sp_attack: Scalars['Int'];
  sp_defense: Scalars['Int'];
  speed: Scalars['Int'];
  status?: InputMaybe<Status>;
  weight_kg: Scalars['Float'];
};

export type PokemonGroupBy = {
  __typename?: 'PokemonGroupBy';
  _avg?: Maybe<PokemonAvgAggregate>;
  _count?: Maybe<PokemonCountAggregate>;
  _max?: Maybe<PokemonMaxAggregate>;
  _min?: Maybe<PokemonMinAggregate>;
  _sum?: Maybe<PokemonSumAggregate>;
  against_bug: Scalars['Float'];
  against_dark: Scalars['Float'];
  against_dragon: Scalars['Float'];
  against_electric: Scalars['Float'];
  against_fairy: Scalars['Float'];
  against_fight: Scalars['Float'];
  against_fire?: Maybe<Scalars['Float']>;
  against_flying: Scalars['Float'];
  against_ghost: Scalars['Float'];
  against_grass?: Maybe<Scalars['Float']>;
  against_ground: Scalars['Float'];
  against_ice: Scalars['Float'];
  against_normal?: Maybe<Scalars['Float']>;
  against_poison: Scalars['Float'];
  against_psychic: Scalars['Float'];
  against_rock: Scalars['Float'];
  against_steel: Scalars['Float'];
  against_water?: Maybe<Scalars['Float']>;
  attack: Scalars['Int'];
  base_egg_steps: Scalars['Int'];
  base_happiness: Scalars['Int'];
  base_total: Scalars['Int'];
  capture_rate?: Maybe<Scalars['Float']>;
  classificationId: Scalars['Int'];
  defense: Scalars['Int'];
  experience_growth: Scalars['Int'];
  generationId: Scalars['Int'];
  height_m: Scalars['Float'];
  hp: Scalars['Int'];
  id: Scalars['Int'];
  is_legendary: Scalars['Boolean'];
  japanese_name: Scalars['String'];
  name: Scalars['String'];
  percentage_male: Scalars['Float'];
  sp_attack: Scalars['Int'];
  sp_defense: Scalars['Int'];
  speed: Scalars['Int'];
  status: Status;
  weight_kg: Scalars['Float'];
};

export type PokemonListRelationFilter = {
  every?: InputMaybe<PokemonWhereInput>;
  none?: InputMaybe<PokemonWhereInput>;
  some?: InputMaybe<PokemonWhereInput>;
};

export type PokemonMaxAggregate = {
  __typename?: 'PokemonMaxAggregate';
  against_bug?: Maybe<Scalars['Float']>;
  against_dark?: Maybe<Scalars['Float']>;
  against_dragon?: Maybe<Scalars['Float']>;
  against_electric?: Maybe<Scalars['Float']>;
  against_fairy?: Maybe<Scalars['Float']>;
  against_fight?: Maybe<Scalars['Float']>;
  against_fire?: Maybe<Scalars['Float']>;
  against_flying?: Maybe<Scalars['Float']>;
  against_ghost?: Maybe<Scalars['Float']>;
  against_grass?: Maybe<Scalars['Float']>;
  against_ground?: Maybe<Scalars['Float']>;
  against_ice?: Maybe<Scalars['Float']>;
  against_normal?: Maybe<Scalars['Float']>;
  against_poison?: Maybe<Scalars['Float']>;
  against_psychic?: Maybe<Scalars['Float']>;
  against_rock?: Maybe<Scalars['Float']>;
  against_steel?: Maybe<Scalars['Float']>;
  against_water?: Maybe<Scalars['Float']>;
  attack?: Maybe<Scalars['Int']>;
  base_egg_steps?: Maybe<Scalars['Int']>;
  base_happiness?: Maybe<Scalars['Int']>;
  base_total?: Maybe<Scalars['Int']>;
  capture_rate?: Maybe<Scalars['Float']>;
  classificationId?: Maybe<Scalars['Int']>;
  defense?: Maybe<Scalars['Int']>;
  experience_growth?: Maybe<Scalars['Int']>;
  generationId?: Maybe<Scalars['Int']>;
  height_m?: Maybe<Scalars['Float']>;
  hp?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  is_legendary?: Maybe<Scalars['Boolean']>;
  japanese_name?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  percentage_male?: Maybe<Scalars['Float']>;
  sp_attack?: Maybe<Scalars['Int']>;
  sp_defense?: Maybe<Scalars['Int']>;
  speed?: Maybe<Scalars['Int']>;
  status?: Maybe<Status>;
  weight_kg?: Maybe<Scalars['Float']>;
};

export type PokemonMaxOrderByAggregateInput = {
  against_bug?: InputMaybe<SortOrder>;
  against_dark?: InputMaybe<SortOrder>;
  against_dragon?: InputMaybe<SortOrder>;
  against_electric?: InputMaybe<SortOrder>;
  against_fairy?: InputMaybe<SortOrder>;
  against_fight?: InputMaybe<SortOrder>;
  against_fire?: InputMaybe<SortOrder>;
  against_flying?: InputMaybe<SortOrder>;
  against_ghost?: InputMaybe<SortOrder>;
  against_grass?: InputMaybe<SortOrder>;
  against_ground?: InputMaybe<SortOrder>;
  against_ice?: InputMaybe<SortOrder>;
  against_normal?: InputMaybe<SortOrder>;
  against_poison?: InputMaybe<SortOrder>;
  against_psychic?: InputMaybe<SortOrder>;
  against_rock?: InputMaybe<SortOrder>;
  against_steel?: InputMaybe<SortOrder>;
  against_water?: InputMaybe<SortOrder>;
  attack?: InputMaybe<SortOrder>;
  base_egg_steps?: InputMaybe<SortOrder>;
  base_happiness?: InputMaybe<SortOrder>;
  base_total?: InputMaybe<SortOrder>;
  capture_rate?: InputMaybe<SortOrder>;
  classificationId?: InputMaybe<SortOrder>;
  defense?: InputMaybe<SortOrder>;
  experience_growth?: InputMaybe<SortOrder>;
  generationId?: InputMaybe<SortOrder>;
  height_m?: InputMaybe<SortOrder>;
  hp?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  is_legendary?: InputMaybe<SortOrder>;
  japanese_name?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  percentage_male?: InputMaybe<SortOrder>;
  sp_attack?: InputMaybe<SortOrder>;
  sp_defense?: InputMaybe<SortOrder>;
  speed?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  weight_kg?: InputMaybe<SortOrder>;
};

export type PokemonMinAggregate = {
  __typename?: 'PokemonMinAggregate';
  against_bug?: Maybe<Scalars['Float']>;
  against_dark?: Maybe<Scalars['Float']>;
  against_dragon?: Maybe<Scalars['Float']>;
  against_electric?: Maybe<Scalars['Float']>;
  against_fairy?: Maybe<Scalars['Float']>;
  against_fight?: Maybe<Scalars['Float']>;
  against_fire?: Maybe<Scalars['Float']>;
  against_flying?: Maybe<Scalars['Float']>;
  against_ghost?: Maybe<Scalars['Float']>;
  against_grass?: Maybe<Scalars['Float']>;
  against_ground?: Maybe<Scalars['Float']>;
  against_ice?: Maybe<Scalars['Float']>;
  against_normal?: Maybe<Scalars['Float']>;
  against_poison?: Maybe<Scalars['Float']>;
  against_psychic?: Maybe<Scalars['Float']>;
  against_rock?: Maybe<Scalars['Float']>;
  against_steel?: Maybe<Scalars['Float']>;
  against_water?: Maybe<Scalars['Float']>;
  attack?: Maybe<Scalars['Int']>;
  base_egg_steps?: Maybe<Scalars['Int']>;
  base_happiness?: Maybe<Scalars['Int']>;
  base_total?: Maybe<Scalars['Int']>;
  capture_rate?: Maybe<Scalars['Float']>;
  classificationId?: Maybe<Scalars['Int']>;
  defense?: Maybe<Scalars['Int']>;
  experience_growth?: Maybe<Scalars['Int']>;
  generationId?: Maybe<Scalars['Int']>;
  height_m?: Maybe<Scalars['Float']>;
  hp?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  is_legendary?: Maybe<Scalars['Boolean']>;
  japanese_name?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  percentage_male?: Maybe<Scalars['Float']>;
  sp_attack?: Maybe<Scalars['Int']>;
  sp_defense?: Maybe<Scalars['Int']>;
  speed?: Maybe<Scalars['Int']>;
  status?: Maybe<Status>;
  weight_kg?: Maybe<Scalars['Float']>;
};

export type PokemonMinOrderByAggregateInput = {
  against_bug?: InputMaybe<SortOrder>;
  against_dark?: InputMaybe<SortOrder>;
  against_dragon?: InputMaybe<SortOrder>;
  against_electric?: InputMaybe<SortOrder>;
  against_fairy?: InputMaybe<SortOrder>;
  against_fight?: InputMaybe<SortOrder>;
  against_fire?: InputMaybe<SortOrder>;
  against_flying?: InputMaybe<SortOrder>;
  against_ghost?: InputMaybe<SortOrder>;
  against_grass?: InputMaybe<SortOrder>;
  against_ground?: InputMaybe<SortOrder>;
  against_ice?: InputMaybe<SortOrder>;
  against_normal?: InputMaybe<SortOrder>;
  against_poison?: InputMaybe<SortOrder>;
  against_psychic?: InputMaybe<SortOrder>;
  against_rock?: InputMaybe<SortOrder>;
  against_steel?: InputMaybe<SortOrder>;
  against_water?: InputMaybe<SortOrder>;
  attack?: InputMaybe<SortOrder>;
  base_egg_steps?: InputMaybe<SortOrder>;
  base_happiness?: InputMaybe<SortOrder>;
  base_total?: InputMaybe<SortOrder>;
  capture_rate?: InputMaybe<SortOrder>;
  classificationId?: InputMaybe<SortOrder>;
  defense?: InputMaybe<SortOrder>;
  experience_growth?: InputMaybe<SortOrder>;
  generationId?: InputMaybe<SortOrder>;
  height_m?: InputMaybe<SortOrder>;
  hp?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  is_legendary?: InputMaybe<SortOrder>;
  japanese_name?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  percentage_male?: InputMaybe<SortOrder>;
  sp_attack?: InputMaybe<SortOrder>;
  sp_defense?: InputMaybe<SortOrder>;
  speed?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  weight_kg?: InputMaybe<SortOrder>;
};

export type PokemonOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type PokemonOrderByWithAggregationInput = {
  _avg?: InputMaybe<PokemonAvgOrderByAggregateInput>;
  _count?: InputMaybe<PokemonCountOrderByAggregateInput>;
  _max?: InputMaybe<PokemonMaxOrderByAggregateInput>;
  _min?: InputMaybe<PokemonMinOrderByAggregateInput>;
  _sum?: InputMaybe<PokemonSumOrderByAggregateInput>;
  against_bug?: InputMaybe<SortOrder>;
  against_dark?: InputMaybe<SortOrder>;
  against_dragon?: InputMaybe<SortOrder>;
  against_electric?: InputMaybe<SortOrder>;
  against_fairy?: InputMaybe<SortOrder>;
  against_fight?: InputMaybe<SortOrder>;
  against_fire?: InputMaybe<SortOrder>;
  against_flying?: InputMaybe<SortOrder>;
  against_ghost?: InputMaybe<SortOrder>;
  against_grass?: InputMaybe<SortOrder>;
  against_ground?: InputMaybe<SortOrder>;
  against_ice?: InputMaybe<SortOrder>;
  against_normal?: InputMaybe<SortOrder>;
  against_poison?: InputMaybe<SortOrder>;
  against_psychic?: InputMaybe<SortOrder>;
  against_rock?: InputMaybe<SortOrder>;
  against_steel?: InputMaybe<SortOrder>;
  against_water?: InputMaybe<SortOrder>;
  attack?: InputMaybe<SortOrder>;
  base_egg_steps?: InputMaybe<SortOrder>;
  base_happiness?: InputMaybe<SortOrder>;
  base_total?: InputMaybe<SortOrder>;
  capture_rate?: InputMaybe<SortOrder>;
  classificationId?: InputMaybe<SortOrder>;
  defense?: InputMaybe<SortOrder>;
  experience_growth?: InputMaybe<SortOrder>;
  generationId?: InputMaybe<SortOrder>;
  height_m?: InputMaybe<SortOrder>;
  hp?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  is_legendary?: InputMaybe<SortOrder>;
  japanese_name?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  percentage_male?: InputMaybe<SortOrder>;
  sp_attack?: InputMaybe<SortOrder>;
  sp_defense?: InputMaybe<SortOrder>;
  speed?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  weight_kg?: InputMaybe<SortOrder>;
};

export type PokemonOrderByWithRelationInput = {
  Captured?: InputMaybe<CapturedOrderByRelationAggregateInput>;
  abilities?: InputMaybe<PokemonAbilitiesOrderByRelationAggregateInput>;
  against_bug?: InputMaybe<SortOrder>;
  against_dark?: InputMaybe<SortOrder>;
  against_dragon?: InputMaybe<SortOrder>;
  against_electric?: InputMaybe<SortOrder>;
  against_fairy?: InputMaybe<SortOrder>;
  against_fight?: InputMaybe<SortOrder>;
  against_fire?: InputMaybe<SortOrder>;
  against_flying?: InputMaybe<SortOrder>;
  against_ghost?: InputMaybe<SortOrder>;
  against_grass?: InputMaybe<SortOrder>;
  against_ground?: InputMaybe<SortOrder>;
  against_ice?: InputMaybe<SortOrder>;
  against_normal?: InputMaybe<SortOrder>;
  against_poison?: InputMaybe<SortOrder>;
  against_psychic?: InputMaybe<SortOrder>;
  against_rock?: InputMaybe<SortOrder>;
  against_steel?: InputMaybe<SortOrder>;
  against_water?: InputMaybe<SortOrder>;
  attack?: InputMaybe<SortOrder>;
  base_egg_steps?: InputMaybe<SortOrder>;
  base_happiness?: InputMaybe<SortOrder>;
  base_total?: InputMaybe<SortOrder>;
  capture_rate?: InputMaybe<SortOrder>;
  classification?: InputMaybe<ClassificationOrderByWithRelationInput>;
  classificationId?: InputMaybe<SortOrder>;
  defense?: InputMaybe<SortOrder>;
  experience_growth?: InputMaybe<SortOrder>;
  generation?: InputMaybe<GenerationOrderByWithRelationInput>;
  generationId?: InputMaybe<SortOrder>;
  height_m?: InputMaybe<SortOrder>;
  hp?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  is_legendary?: InputMaybe<SortOrder>;
  japanese_name?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  percentage_male?: InputMaybe<SortOrder>;
  pokedex_number?: InputMaybe<PokedexOrderByWithRelationInput>;
  sp_attack?: InputMaybe<SortOrder>;
  sp_defense?: InputMaybe<SortOrder>;
  speed?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  types?: InputMaybe<PokemonTypesOrderByRelationAggregateInput>;
  weight_kg?: InputMaybe<SortOrder>;
};

export type PokemonRelationFilter = {
  is?: InputMaybe<PokemonWhereInput>;
  isNot?: InputMaybe<PokemonWhereInput>;
};

export enum PokemonScalarFieldEnum {
  AgainstBug = 'against_bug',
  AgainstDark = 'against_dark',
  AgainstDragon = 'against_dragon',
  AgainstElectric = 'against_electric',
  AgainstFairy = 'against_fairy',
  AgainstFight = 'against_fight',
  AgainstFire = 'against_fire',
  AgainstFlying = 'against_flying',
  AgainstGhost = 'against_ghost',
  AgainstGrass = 'against_grass',
  AgainstGround = 'against_ground',
  AgainstIce = 'against_ice',
  AgainstNormal = 'against_normal',
  AgainstPoison = 'against_poison',
  AgainstPsychic = 'against_psychic',
  AgainstRock = 'against_rock',
  AgainstSteel = 'against_steel',
  AgainstWater = 'against_water',
  Attack = 'attack',
  BaseEggSteps = 'base_egg_steps',
  BaseHappiness = 'base_happiness',
  BaseTotal = 'base_total',
  CaptureRate = 'capture_rate',
  ClassificationId = 'classificationId',
  Defense = 'defense',
  ExperienceGrowth = 'experience_growth',
  GenerationId = 'generationId',
  HeightM = 'height_m',
  Hp = 'hp',
  Id = 'id',
  IsLegendary = 'is_legendary',
  JapaneseName = 'japanese_name',
  Name = 'name',
  PercentageMale = 'percentage_male',
  SpAttack = 'sp_attack',
  SpDefense = 'sp_defense',
  Speed = 'speed',
  Status = 'status',
  WeightKg = 'weight_kg'
}

export type PokemonScalarWhereInput = {
  AND?: InputMaybe<Array<PokemonScalarWhereInput>>;
  NOT?: InputMaybe<Array<PokemonScalarWhereInput>>;
  OR?: InputMaybe<Array<PokemonScalarWhereInput>>;
  against_bug?: InputMaybe<FloatFilter>;
  against_dark?: InputMaybe<FloatFilter>;
  against_dragon?: InputMaybe<FloatFilter>;
  against_electric?: InputMaybe<FloatFilter>;
  against_fairy?: InputMaybe<FloatFilter>;
  against_fight?: InputMaybe<FloatFilter>;
  against_fire?: InputMaybe<FloatNullableFilter>;
  against_flying?: InputMaybe<FloatFilter>;
  against_ghost?: InputMaybe<FloatFilter>;
  against_grass?: InputMaybe<FloatNullableFilter>;
  against_ground?: InputMaybe<FloatFilter>;
  against_ice?: InputMaybe<FloatFilter>;
  against_normal?: InputMaybe<FloatNullableFilter>;
  against_poison?: InputMaybe<FloatFilter>;
  against_psychic?: InputMaybe<FloatFilter>;
  against_rock?: InputMaybe<FloatFilter>;
  against_steel?: InputMaybe<FloatFilter>;
  against_water?: InputMaybe<FloatNullableFilter>;
  attack?: InputMaybe<IntFilter>;
  base_egg_steps?: InputMaybe<IntFilter>;
  base_happiness?: InputMaybe<IntFilter>;
  base_total?: InputMaybe<IntFilter>;
  capture_rate?: InputMaybe<FloatNullableFilter>;
  classificationId?: InputMaybe<IntFilter>;
  defense?: InputMaybe<IntFilter>;
  experience_growth?: InputMaybe<IntFilter>;
  generationId?: InputMaybe<IntFilter>;
  height_m?: InputMaybe<FloatFilter>;
  hp?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  is_legendary?: InputMaybe<BoolFilter>;
  japanese_name?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  percentage_male?: InputMaybe<FloatFilter>;
  sp_attack?: InputMaybe<IntFilter>;
  sp_defense?: InputMaybe<IntFilter>;
  speed?: InputMaybe<IntFilter>;
  status?: InputMaybe<EnumStatusFilter>;
  weight_kg?: InputMaybe<FloatFilter>;
};

export type PokemonScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<PokemonScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<PokemonScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<PokemonScalarWhereWithAggregatesInput>>;
  against_bug?: InputMaybe<FloatWithAggregatesFilter>;
  against_dark?: InputMaybe<FloatWithAggregatesFilter>;
  against_dragon?: InputMaybe<FloatWithAggregatesFilter>;
  against_electric?: InputMaybe<FloatWithAggregatesFilter>;
  against_fairy?: InputMaybe<FloatWithAggregatesFilter>;
  against_fight?: InputMaybe<FloatWithAggregatesFilter>;
  against_fire?: InputMaybe<FloatNullableWithAggregatesFilter>;
  against_flying?: InputMaybe<FloatWithAggregatesFilter>;
  against_ghost?: InputMaybe<FloatWithAggregatesFilter>;
  against_grass?: InputMaybe<FloatNullableWithAggregatesFilter>;
  against_ground?: InputMaybe<FloatWithAggregatesFilter>;
  against_ice?: InputMaybe<FloatWithAggregatesFilter>;
  against_normal?: InputMaybe<FloatNullableWithAggregatesFilter>;
  against_poison?: InputMaybe<FloatWithAggregatesFilter>;
  against_psychic?: InputMaybe<FloatWithAggregatesFilter>;
  against_rock?: InputMaybe<FloatWithAggregatesFilter>;
  against_steel?: InputMaybe<FloatWithAggregatesFilter>;
  against_water?: InputMaybe<FloatNullableWithAggregatesFilter>;
  attack?: InputMaybe<IntWithAggregatesFilter>;
  base_egg_steps?: InputMaybe<IntWithAggregatesFilter>;
  base_happiness?: InputMaybe<IntWithAggregatesFilter>;
  base_total?: InputMaybe<IntWithAggregatesFilter>;
  capture_rate?: InputMaybe<FloatNullableWithAggregatesFilter>;
  classificationId?: InputMaybe<IntWithAggregatesFilter>;
  defense?: InputMaybe<IntWithAggregatesFilter>;
  experience_growth?: InputMaybe<IntWithAggregatesFilter>;
  generationId?: InputMaybe<IntWithAggregatesFilter>;
  height_m?: InputMaybe<FloatWithAggregatesFilter>;
  hp?: InputMaybe<IntWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  is_legendary?: InputMaybe<BoolWithAggregatesFilter>;
  japanese_name?: InputMaybe<StringWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  percentage_male?: InputMaybe<FloatWithAggregatesFilter>;
  sp_attack?: InputMaybe<IntWithAggregatesFilter>;
  sp_defense?: InputMaybe<IntWithAggregatesFilter>;
  speed?: InputMaybe<IntWithAggregatesFilter>;
  status?: InputMaybe<EnumStatusWithAggregatesFilter>;
  weight_kg?: InputMaybe<FloatWithAggregatesFilter>;
};

export type PokemonSumAggregate = {
  __typename?: 'PokemonSumAggregate';
  against_bug?: Maybe<Scalars['Float']>;
  against_dark?: Maybe<Scalars['Float']>;
  against_dragon?: Maybe<Scalars['Float']>;
  against_electric?: Maybe<Scalars['Float']>;
  against_fairy?: Maybe<Scalars['Float']>;
  against_fight?: Maybe<Scalars['Float']>;
  against_fire?: Maybe<Scalars['Float']>;
  against_flying?: Maybe<Scalars['Float']>;
  against_ghost?: Maybe<Scalars['Float']>;
  against_grass?: Maybe<Scalars['Float']>;
  against_ground?: Maybe<Scalars['Float']>;
  against_ice?: Maybe<Scalars['Float']>;
  against_normal?: Maybe<Scalars['Float']>;
  against_poison?: Maybe<Scalars['Float']>;
  against_psychic?: Maybe<Scalars['Float']>;
  against_rock?: Maybe<Scalars['Float']>;
  against_steel?: Maybe<Scalars['Float']>;
  against_water?: Maybe<Scalars['Float']>;
  attack?: Maybe<Scalars['Int']>;
  base_egg_steps?: Maybe<Scalars['Int']>;
  base_happiness?: Maybe<Scalars['Int']>;
  base_total?: Maybe<Scalars['Int']>;
  capture_rate?: Maybe<Scalars['Float']>;
  classificationId?: Maybe<Scalars['Int']>;
  defense?: Maybe<Scalars['Int']>;
  experience_growth?: Maybe<Scalars['Int']>;
  generationId?: Maybe<Scalars['Int']>;
  height_m?: Maybe<Scalars['Float']>;
  hp?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  percentage_male?: Maybe<Scalars['Float']>;
  sp_attack?: Maybe<Scalars['Int']>;
  sp_defense?: Maybe<Scalars['Int']>;
  speed?: Maybe<Scalars['Int']>;
  weight_kg?: Maybe<Scalars['Float']>;
};

export type PokemonSumOrderByAggregateInput = {
  against_bug?: InputMaybe<SortOrder>;
  against_dark?: InputMaybe<SortOrder>;
  against_dragon?: InputMaybe<SortOrder>;
  against_electric?: InputMaybe<SortOrder>;
  against_fairy?: InputMaybe<SortOrder>;
  against_fight?: InputMaybe<SortOrder>;
  against_fire?: InputMaybe<SortOrder>;
  against_flying?: InputMaybe<SortOrder>;
  against_ghost?: InputMaybe<SortOrder>;
  against_grass?: InputMaybe<SortOrder>;
  against_ground?: InputMaybe<SortOrder>;
  against_ice?: InputMaybe<SortOrder>;
  against_normal?: InputMaybe<SortOrder>;
  against_poison?: InputMaybe<SortOrder>;
  against_psychic?: InputMaybe<SortOrder>;
  against_rock?: InputMaybe<SortOrder>;
  against_steel?: InputMaybe<SortOrder>;
  against_water?: InputMaybe<SortOrder>;
  attack?: InputMaybe<SortOrder>;
  base_egg_steps?: InputMaybe<SortOrder>;
  base_happiness?: InputMaybe<SortOrder>;
  base_total?: InputMaybe<SortOrder>;
  capture_rate?: InputMaybe<SortOrder>;
  classificationId?: InputMaybe<SortOrder>;
  defense?: InputMaybe<SortOrder>;
  experience_growth?: InputMaybe<SortOrder>;
  generationId?: InputMaybe<SortOrder>;
  height_m?: InputMaybe<SortOrder>;
  hp?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  percentage_male?: InputMaybe<SortOrder>;
  sp_attack?: InputMaybe<SortOrder>;
  sp_defense?: InputMaybe<SortOrder>;
  speed?: InputMaybe<SortOrder>;
  weight_kg?: InputMaybe<SortOrder>;
};

export type PokemonTypes = {
  __typename?: 'PokemonTypes';
  createdAt: Scalars['DateTime'];
  expiresAt?: Maybe<Scalars['DateTime']>;
  pokemon: Pokemon;
  pokemonId: Scalars['Int'];
  type: Type;
  typeId: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};

export type PokemonTypesAvgAggregate = {
  __typename?: 'PokemonTypesAvgAggregate';
  pokemonId?: Maybe<Scalars['Float']>;
  typeId?: Maybe<Scalars['Float']>;
};

export type PokemonTypesAvgOrderByAggregateInput = {
  pokemonId?: InputMaybe<SortOrder>;
  typeId?: InputMaybe<SortOrder>;
};

export type PokemonTypesCountAggregate = {
  __typename?: 'PokemonTypesCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  expiresAt: Scalars['Int'];
  pokemonId: Scalars['Int'];
  typeId: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type PokemonTypesCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  expiresAt?: InputMaybe<SortOrder>;
  pokemonId?: InputMaybe<SortOrder>;
  typeId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type PokemonTypesCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  expiresAt?: InputMaybe<Scalars['DateTime']>;
  pokemon?: InputMaybe<PokemonCreateNestedOneWithoutTypesInput>;
  type?: InputMaybe<TypeCreateNestedOneWithoutPokemonTypesInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type PokemonTypesCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  expiresAt?: InputMaybe<Scalars['DateTime']>;
  pokemonId?: InputMaybe<Scalars['Int']>;
  typeId?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type PokemonTypesCreateManyPokemonInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  expiresAt?: InputMaybe<Scalars['DateTime']>;
  typeId?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type PokemonTypesCreateManyPokemonInputEnvelope = {
  data: Array<PokemonTypesCreateManyPokemonInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type PokemonTypesCreateManyTypeInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  expiresAt?: InputMaybe<Scalars['DateTime']>;
  pokemonId?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type PokemonTypesCreateManyTypeInputEnvelope = {
  data: Array<PokemonTypesCreateManyTypeInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type PokemonTypesCreateNestedManyWithoutPokemonInput = {
  connect?: InputMaybe<Array<PokemonTypesWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PokemonTypesCreateOrConnectWithoutPokemonInput>>;
  create?: InputMaybe<Array<PokemonTypesCreateWithoutPokemonInput>>;
  createMany?: InputMaybe<PokemonTypesCreateManyPokemonInputEnvelope>;
};

export type PokemonTypesCreateNestedManyWithoutTypeInput = {
  connect?: InputMaybe<Array<PokemonTypesWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PokemonTypesCreateOrConnectWithoutTypeInput>>;
  create?: InputMaybe<Array<PokemonTypesCreateWithoutTypeInput>>;
  createMany?: InputMaybe<PokemonTypesCreateManyTypeInputEnvelope>;
};

export type PokemonTypesCreateOrConnectWithoutPokemonInput = {
  create: PokemonTypesCreateWithoutPokemonInput;
  where: PokemonTypesWhereUniqueInput;
};

export type PokemonTypesCreateOrConnectWithoutTypeInput = {
  create: PokemonTypesCreateWithoutTypeInput;
  where: PokemonTypesWhereUniqueInput;
};

export type PokemonTypesCreateWithoutPokemonInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  expiresAt?: InputMaybe<Scalars['DateTime']>;
  type?: InputMaybe<TypeCreateNestedOneWithoutPokemonTypesInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type PokemonTypesCreateWithoutTypeInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  expiresAt?: InputMaybe<Scalars['DateTime']>;
  pokemon?: InputMaybe<PokemonCreateNestedOneWithoutTypesInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type PokemonTypesGroupBy = {
  __typename?: 'PokemonTypesGroupBy';
  _avg?: Maybe<PokemonTypesAvgAggregate>;
  _count?: Maybe<PokemonTypesCountAggregate>;
  _max?: Maybe<PokemonTypesMaxAggregate>;
  _min?: Maybe<PokemonTypesMinAggregate>;
  _sum?: Maybe<PokemonTypesSumAggregate>;
  createdAt: Scalars['DateTime'];
  expiresAt?: Maybe<Scalars['DateTime']>;
  pokemonId: Scalars['Int'];
  typeId: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};

export type PokemonTypesListRelationFilter = {
  every?: InputMaybe<PokemonTypesWhereInput>;
  none?: InputMaybe<PokemonTypesWhereInput>;
  some?: InputMaybe<PokemonTypesWhereInput>;
};

export type PokemonTypesMaxAggregate = {
  __typename?: 'PokemonTypesMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  expiresAt?: Maybe<Scalars['DateTime']>;
  pokemonId?: Maybe<Scalars['Int']>;
  typeId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PokemonTypesMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  expiresAt?: InputMaybe<SortOrder>;
  pokemonId?: InputMaybe<SortOrder>;
  typeId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type PokemonTypesMinAggregate = {
  __typename?: 'PokemonTypesMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  expiresAt?: Maybe<Scalars['DateTime']>;
  pokemonId?: Maybe<Scalars['Int']>;
  typeId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PokemonTypesMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  expiresAt?: InputMaybe<SortOrder>;
  pokemonId?: InputMaybe<SortOrder>;
  typeId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type PokemonTypesOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type PokemonTypesOrderByWithAggregationInput = {
  _avg?: InputMaybe<PokemonTypesAvgOrderByAggregateInput>;
  _count?: InputMaybe<PokemonTypesCountOrderByAggregateInput>;
  _max?: InputMaybe<PokemonTypesMaxOrderByAggregateInput>;
  _min?: InputMaybe<PokemonTypesMinOrderByAggregateInput>;
  _sum?: InputMaybe<PokemonTypesSumOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  expiresAt?: InputMaybe<SortOrder>;
  pokemonId?: InputMaybe<SortOrder>;
  typeId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type PokemonTypesOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  expiresAt?: InputMaybe<SortOrder>;
  pokemon?: InputMaybe<PokemonOrderByWithRelationInput>;
  pokemonId?: InputMaybe<SortOrder>;
  type?: InputMaybe<TypeOrderByWithRelationInput>;
  typeId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type PokemonTypesPokemonIdTypeIdCompoundUniqueInput = {
  pokemonId: Scalars['Int'];
  typeId: Scalars['Int'];
};

export enum PokemonTypesScalarFieldEnum {
  CreatedAt = 'createdAt',
  ExpiresAt = 'expiresAt',
  PokemonId = 'pokemonId',
  TypeId = 'typeId',
  UpdatedAt = 'updatedAt'
}

export type PokemonTypesScalarWhereInput = {
  AND?: InputMaybe<Array<PokemonTypesScalarWhereInput>>;
  NOT?: InputMaybe<Array<PokemonTypesScalarWhereInput>>;
  OR?: InputMaybe<Array<PokemonTypesScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  expiresAt?: InputMaybe<DateTimeNullableFilter>;
  pokemonId?: InputMaybe<IntFilter>;
  typeId?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type PokemonTypesScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<PokemonTypesScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<PokemonTypesScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<PokemonTypesScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  expiresAt?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  pokemonId?: InputMaybe<IntWithAggregatesFilter>;
  typeId?: InputMaybe<IntWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type PokemonTypesSumAggregate = {
  __typename?: 'PokemonTypesSumAggregate';
  pokemonId?: Maybe<Scalars['Int']>;
  typeId?: Maybe<Scalars['Int']>;
};

export type PokemonTypesSumOrderByAggregateInput = {
  pokemonId?: InputMaybe<SortOrder>;
  typeId?: InputMaybe<SortOrder>;
};

export type PokemonTypesUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  expiresAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  pokemon?: InputMaybe<PokemonUpdateOneRequiredWithoutTypesInput>;
  type?: InputMaybe<TypeUpdateOneRequiredWithoutPokemonTypesInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PokemonTypesUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  expiresAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PokemonTypesUpdateManyWithWhereWithoutPokemonInput = {
  data: PokemonTypesUpdateManyMutationInput;
  where: PokemonTypesScalarWhereInput;
};

export type PokemonTypesUpdateManyWithWhereWithoutTypeInput = {
  data: PokemonTypesUpdateManyMutationInput;
  where: PokemonTypesScalarWhereInput;
};

export type PokemonTypesUpdateManyWithoutPokemonInput = {
  connect?: InputMaybe<Array<PokemonTypesWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PokemonTypesCreateOrConnectWithoutPokemonInput>>;
  create?: InputMaybe<Array<PokemonTypesCreateWithoutPokemonInput>>;
  createMany?: InputMaybe<PokemonTypesCreateManyPokemonInputEnvelope>;
  delete?: InputMaybe<Array<PokemonTypesWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PokemonTypesScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PokemonTypesWhereUniqueInput>>;
  set?: InputMaybe<Array<PokemonTypesWhereUniqueInput>>;
  update?: InputMaybe<Array<PokemonTypesUpdateWithWhereUniqueWithoutPokemonInput>>;
  updateMany?: InputMaybe<Array<PokemonTypesUpdateManyWithWhereWithoutPokemonInput>>;
  upsert?: InputMaybe<Array<PokemonTypesUpsertWithWhereUniqueWithoutPokemonInput>>;
};

export type PokemonTypesUpdateManyWithoutTypeInput = {
  connect?: InputMaybe<Array<PokemonTypesWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PokemonTypesCreateOrConnectWithoutTypeInput>>;
  create?: InputMaybe<Array<PokemonTypesCreateWithoutTypeInput>>;
  createMany?: InputMaybe<PokemonTypesCreateManyTypeInputEnvelope>;
  delete?: InputMaybe<Array<PokemonTypesWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PokemonTypesScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PokemonTypesWhereUniqueInput>>;
  set?: InputMaybe<Array<PokemonTypesWhereUniqueInput>>;
  update?: InputMaybe<Array<PokemonTypesUpdateWithWhereUniqueWithoutTypeInput>>;
  updateMany?: InputMaybe<Array<PokemonTypesUpdateManyWithWhereWithoutTypeInput>>;
  upsert?: InputMaybe<Array<PokemonTypesUpsertWithWhereUniqueWithoutTypeInput>>;
};

export type PokemonTypesUpdateWithWhereUniqueWithoutPokemonInput = {
  data: PokemonTypesUpdateWithoutPokemonInput;
  where: PokemonTypesWhereUniqueInput;
};

export type PokemonTypesUpdateWithWhereUniqueWithoutTypeInput = {
  data: PokemonTypesUpdateWithoutTypeInput;
  where: PokemonTypesWhereUniqueInput;
};

export type PokemonTypesUpdateWithoutPokemonInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  expiresAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  type?: InputMaybe<TypeUpdateOneRequiredWithoutPokemonTypesInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PokemonTypesUpdateWithoutTypeInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  expiresAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  pokemon?: InputMaybe<PokemonUpdateOneRequiredWithoutTypesInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PokemonTypesUpsertWithWhereUniqueWithoutPokemonInput = {
  create: PokemonTypesCreateWithoutPokemonInput;
  update: PokemonTypesUpdateWithoutPokemonInput;
  where: PokemonTypesWhereUniqueInput;
};

export type PokemonTypesUpsertWithWhereUniqueWithoutTypeInput = {
  create: PokemonTypesCreateWithoutTypeInput;
  update: PokemonTypesUpdateWithoutTypeInput;
  where: PokemonTypesWhereUniqueInput;
};

export type PokemonTypesWhereInput = {
  AND?: InputMaybe<Array<PokemonTypesWhereInput>>;
  NOT?: InputMaybe<Array<PokemonTypesWhereInput>>;
  OR?: InputMaybe<Array<PokemonTypesWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  expiresAt?: InputMaybe<DateTimeNullableFilter>;
  pokemon?: InputMaybe<PokemonRelationFilter>;
  pokemonId?: InputMaybe<IntFilter>;
  type?: InputMaybe<TypeRelationFilter>;
  typeId?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type PokemonTypesWhereUniqueInput = {
  pokemonId_typeId?: InputMaybe<PokemonTypesPokemonIdTypeIdCompoundUniqueInput>;
};

export type PokemonUpdateInput = {
  Captured?: InputMaybe<CapturedUpdateManyWithoutPokemonInput>;
  abilities?: InputMaybe<PokemonAbilitiesUpdateManyWithoutPokemonInput>;
  against_bug?: InputMaybe<FloatFieldUpdateOperationsInput>;
  against_dark?: InputMaybe<FloatFieldUpdateOperationsInput>;
  against_dragon?: InputMaybe<FloatFieldUpdateOperationsInput>;
  against_electric?: InputMaybe<FloatFieldUpdateOperationsInput>;
  against_fairy?: InputMaybe<FloatFieldUpdateOperationsInput>;
  against_fight?: InputMaybe<FloatFieldUpdateOperationsInput>;
  against_fire?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  against_flying?: InputMaybe<FloatFieldUpdateOperationsInput>;
  against_ghost?: InputMaybe<FloatFieldUpdateOperationsInput>;
  against_grass?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  against_ground?: InputMaybe<FloatFieldUpdateOperationsInput>;
  against_ice?: InputMaybe<FloatFieldUpdateOperationsInput>;
  against_normal?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  against_poison?: InputMaybe<FloatFieldUpdateOperationsInput>;
  against_psychic?: InputMaybe<FloatFieldUpdateOperationsInput>;
  against_rock?: InputMaybe<FloatFieldUpdateOperationsInput>;
  against_steel?: InputMaybe<FloatFieldUpdateOperationsInput>;
  against_water?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  attack?: InputMaybe<IntFieldUpdateOperationsInput>;
  base_egg_steps?: InputMaybe<IntFieldUpdateOperationsInput>;
  base_happiness?: InputMaybe<IntFieldUpdateOperationsInput>;
  base_total?: InputMaybe<IntFieldUpdateOperationsInput>;
  capture_rate?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  classification?: InputMaybe<ClassificationUpdateOneRequiredWithoutPokemonInput>;
  defense?: InputMaybe<IntFieldUpdateOperationsInput>;
  experience_growth?: InputMaybe<IntFieldUpdateOperationsInput>;
  generation?: InputMaybe<GenerationUpdateOneRequiredWithoutPokemonInput>;
  height_m?: InputMaybe<FloatFieldUpdateOperationsInput>;
  hp?: InputMaybe<IntFieldUpdateOperationsInput>;
  is_legendary?: InputMaybe<BoolFieldUpdateOperationsInput>;
  japanese_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  percentage_male?: InputMaybe<FloatFieldUpdateOperationsInput>;
  pokedex_number?: InputMaybe<PokedexUpdateOneWithoutPokemonInput>;
  sp_attack?: InputMaybe<IntFieldUpdateOperationsInput>;
  sp_defense?: InputMaybe<IntFieldUpdateOperationsInput>;
  speed?: InputMaybe<IntFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumStatusFieldUpdateOperationsInput>;
  types?: InputMaybe<PokemonTypesUpdateManyWithoutPokemonInput>;
  weight_kg?: InputMaybe<FloatFieldUpdateOperationsInput>;
};

export type PokemonUpdateManyMutationInput = {
  against_bug?: InputMaybe<FloatFieldUpdateOperationsInput>;
  against_dark?: InputMaybe<FloatFieldUpdateOperationsInput>;
  against_dragon?: InputMaybe<FloatFieldUpdateOperationsInput>;
  against_electric?: InputMaybe<FloatFieldUpdateOperationsInput>;
  against_fairy?: InputMaybe<FloatFieldUpdateOperationsInput>;
  against_fight?: InputMaybe<FloatFieldUpdateOperationsInput>;
  against_fire?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  against_flying?: InputMaybe<FloatFieldUpdateOperationsInput>;
  against_ghost?: InputMaybe<FloatFieldUpdateOperationsInput>;
  against_grass?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  against_ground?: InputMaybe<FloatFieldUpdateOperationsInput>;
  against_ice?: InputMaybe<FloatFieldUpdateOperationsInput>;
  against_normal?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  against_poison?: InputMaybe<FloatFieldUpdateOperationsInput>;
  against_psychic?: InputMaybe<FloatFieldUpdateOperationsInput>;
  against_rock?: InputMaybe<FloatFieldUpdateOperationsInput>;
  against_steel?: InputMaybe<FloatFieldUpdateOperationsInput>;
  against_water?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  attack?: InputMaybe<IntFieldUpdateOperationsInput>;
  base_egg_steps?: InputMaybe<IntFieldUpdateOperationsInput>;
  base_happiness?: InputMaybe<IntFieldUpdateOperationsInput>;
  base_total?: InputMaybe<IntFieldUpdateOperationsInput>;
  capture_rate?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  defense?: InputMaybe<IntFieldUpdateOperationsInput>;
  experience_growth?: InputMaybe<IntFieldUpdateOperationsInput>;
  height_m?: InputMaybe<FloatFieldUpdateOperationsInput>;
  hp?: InputMaybe<IntFieldUpdateOperationsInput>;
  is_legendary?: InputMaybe<BoolFieldUpdateOperationsInput>;
  japanese_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  percentage_male?: InputMaybe<FloatFieldUpdateOperationsInput>;
  sp_attack?: InputMaybe<IntFieldUpdateOperationsInput>;
  sp_defense?: InputMaybe<IntFieldUpdateOperationsInput>;
  speed?: InputMaybe<IntFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumStatusFieldUpdateOperationsInput>;
  weight_kg?: InputMaybe<FloatFieldUpdateOperationsInput>;
};

export type PokemonUpdateManyWithWhereWithoutClassificationInput = {
  data: PokemonUpdateManyMutationInput;
  where: PokemonScalarWhereInput;
};

export type PokemonUpdateManyWithWhereWithoutGenerationInput = {
  data: PokemonUpdateManyMutationInput;
  where: PokemonScalarWhereInput;
};

export type PokemonUpdateManyWithoutClassificationInput = {
  connect?: InputMaybe<Array<PokemonWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PokemonCreateOrConnectWithoutClassificationInput>>;
  create?: InputMaybe<Array<PokemonCreateWithoutClassificationInput>>;
  createMany?: InputMaybe<PokemonCreateManyClassificationInputEnvelope>;
  delete?: InputMaybe<Array<PokemonWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PokemonScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PokemonWhereUniqueInput>>;
  set?: InputMaybe<Array<PokemonWhereUniqueInput>>;
  update?: InputMaybe<Array<PokemonUpdateWithWhereUniqueWithoutClassificationInput>>;
  updateMany?: InputMaybe<Array<PokemonUpdateManyWithWhereWithoutClassificationInput>>;
  upsert?: InputMaybe<Array<PokemonUpsertWithWhereUniqueWithoutClassificationInput>>;
};

export type PokemonUpdateManyWithoutGenerationInput = {
  connect?: InputMaybe<Array<PokemonWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PokemonCreateOrConnectWithoutGenerationInput>>;
  create?: InputMaybe<Array<PokemonCreateWithoutGenerationInput>>;
  createMany?: InputMaybe<PokemonCreateManyGenerationInputEnvelope>;
  delete?: InputMaybe<Array<PokemonWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PokemonScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PokemonWhereUniqueInput>>;
  set?: InputMaybe<Array<PokemonWhereUniqueInput>>;
  update?: InputMaybe<Array<PokemonUpdateWithWhereUniqueWithoutGenerationInput>>;
  updateMany?: InputMaybe<Array<PokemonUpdateManyWithWhereWithoutGenerationInput>>;
  upsert?: InputMaybe<Array<PokemonUpsertWithWhereUniqueWithoutGenerationInput>>;
};

export type PokemonUpdateOneRequiredWithoutAbilitiesInput = {
  connect?: InputMaybe<PokemonWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PokemonCreateOrConnectWithoutAbilitiesInput>;
  create?: InputMaybe<PokemonCreateWithoutAbilitiesInput>;
  update?: InputMaybe<PokemonUpdateWithoutAbilitiesInput>;
  upsert?: InputMaybe<PokemonUpsertWithoutAbilitiesInput>;
};

export type PokemonUpdateOneRequiredWithoutCapturedInput = {
  connect?: InputMaybe<PokemonWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PokemonCreateOrConnectWithoutCapturedInput>;
  create?: InputMaybe<PokemonCreateWithoutCapturedInput>;
  update?: InputMaybe<PokemonUpdateWithoutCapturedInput>;
  upsert?: InputMaybe<PokemonUpsertWithoutCapturedInput>;
};

export type PokemonUpdateOneRequiredWithoutPokedex_NumberInput = {
  connect?: InputMaybe<PokemonWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PokemonCreateOrConnectWithoutPokedex_NumberInput>;
  create?: InputMaybe<PokemonCreateWithoutPokedex_NumberInput>;
  update?: InputMaybe<PokemonUpdateWithoutPokedex_NumberInput>;
  upsert?: InputMaybe<PokemonUpsertWithoutPokedex_NumberInput>;
};

export type PokemonUpdateOneRequiredWithoutTypesInput = {
  connect?: InputMaybe<PokemonWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PokemonCreateOrConnectWithoutTypesInput>;
  create?: InputMaybe<PokemonCreateWithoutTypesInput>;
  update?: InputMaybe<PokemonUpdateWithoutTypesInput>;
  upsert?: InputMaybe<PokemonUpsertWithoutTypesInput>;
};

export type PokemonUpdateWithWhereUniqueWithoutClassificationInput = {
  data: PokemonUpdateWithoutClassificationInput;
  where: PokemonWhereUniqueInput;
};

export type PokemonUpdateWithWhereUniqueWithoutGenerationInput = {
  data: PokemonUpdateWithoutGenerationInput;
  where: PokemonWhereUniqueInput;
};

export type PokemonUpdateWithoutAbilitiesInput = {
  Captured?: InputMaybe<CapturedUpdateManyWithoutPokemonInput>;
  against_bug?: InputMaybe<FloatFieldUpdateOperationsInput>;
  against_dark?: InputMaybe<FloatFieldUpdateOperationsInput>;
  against_dragon?: InputMaybe<FloatFieldUpdateOperationsInput>;
  against_electric?: InputMaybe<FloatFieldUpdateOperationsInput>;
  against_fairy?: InputMaybe<FloatFieldUpdateOperationsInput>;
  against_fight?: InputMaybe<FloatFieldUpdateOperationsInput>;
  against_fire?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  against_flying?: InputMaybe<FloatFieldUpdateOperationsInput>;
  against_ghost?: InputMaybe<FloatFieldUpdateOperationsInput>;
  against_grass?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  against_ground?: InputMaybe<FloatFieldUpdateOperationsInput>;
  against_ice?: InputMaybe<FloatFieldUpdateOperationsInput>;
  against_normal?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  against_poison?: InputMaybe<FloatFieldUpdateOperationsInput>;
  against_psychic?: InputMaybe<FloatFieldUpdateOperationsInput>;
  against_rock?: InputMaybe<FloatFieldUpdateOperationsInput>;
  against_steel?: InputMaybe<FloatFieldUpdateOperationsInput>;
  against_water?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  attack?: InputMaybe<IntFieldUpdateOperationsInput>;
  base_egg_steps?: InputMaybe<IntFieldUpdateOperationsInput>;
  base_happiness?: InputMaybe<IntFieldUpdateOperationsInput>;
  base_total?: InputMaybe<IntFieldUpdateOperationsInput>;
  capture_rate?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  classification?: InputMaybe<ClassificationUpdateOneRequiredWithoutPokemonInput>;
  defense?: InputMaybe<IntFieldUpdateOperationsInput>;
  experience_growth?: InputMaybe<IntFieldUpdateOperationsInput>;
  generation?: InputMaybe<GenerationUpdateOneRequiredWithoutPokemonInput>;
  height_m?: InputMaybe<FloatFieldUpdateOperationsInput>;
  hp?: InputMaybe<IntFieldUpdateOperationsInput>;
  is_legendary?: InputMaybe<BoolFieldUpdateOperationsInput>;
  japanese_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  percentage_male?: InputMaybe<FloatFieldUpdateOperationsInput>;
  pokedex_number?: InputMaybe<PokedexUpdateOneWithoutPokemonInput>;
  sp_attack?: InputMaybe<IntFieldUpdateOperationsInput>;
  sp_defense?: InputMaybe<IntFieldUpdateOperationsInput>;
  speed?: InputMaybe<IntFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumStatusFieldUpdateOperationsInput>;
  types?: InputMaybe<PokemonTypesUpdateManyWithoutPokemonInput>;
  weight_kg?: InputMaybe<FloatFieldUpdateOperationsInput>;
};

export type PokemonUpdateWithoutCapturedInput = {
  abilities?: InputMaybe<PokemonAbilitiesUpdateManyWithoutPokemonInput>;
  against_bug?: InputMaybe<FloatFieldUpdateOperationsInput>;
  against_dark?: InputMaybe<FloatFieldUpdateOperationsInput>;
  against_dragon?: InputMaybe<FloatFieldUpdateOperationsInput>;
  against_electric?: InputMaybe<FloatFieldUpdateOperationsInput>;
  against_fairy?: InputMaybe<FloatFieldUpdateOperationsInput>;
  against_fight?: InputMaybe<FloatFieldUpdateOperationsInput>;
  against_fire?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  against_flying?: InputMaybe<FloatFieldUpdateOperationsInput>;
  against_ghost?: InputMaybe<FloatFieldUpdateOperationsInput>;
  against_grass?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  against_ground?: InputMaybe<FloatFieldUpdateOperationsInput>;
  against_ice?: InputMaybe<FloatFieldUpdateOperationsInput>;
  against_normal?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  against_poison?: InputMaybe<FloatFieldUpdateOperationsInput>;
  against_psychic?: InputMaybe<FloatFieldUpdateOperationsInput>;
  against_rock?: InputMaybe<FloatFieldUpdateOperationsInput>;
  against_steel?: InputMaybe<FloatFieldUpdateOperationsInput>;
  against_water?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  attack?: InputMaybe<IntFieldUpdateOperationsInput>;
  base_egg_steps?: InputMaybe<IntFieldUpdateOperationsInput>;
  base_happiness?: InputMaybe<IntFieldUpdateOperationsInput>;
  base_total?: InputMaybe<IntFieldUpdateOperationsInput>;
  capture_rate?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  classification?: InputMaybe<ClassificationUpdateOneRequiredWithoutPokemonInput>;
  defense?: InputMaybe<IntFieldUpdateOperationsInput>;
  experience_growth?: InputMaybe<IntFieldUpdateOperationsInput>;
  generation?: InputMaybe<GenerationUpdateOneRequiredWithoutPokemonInput>;
  height_m?: InputMaybe<FloatFieldUpdateOperationsInput>;
  hp?: InputMaybe<IntFieldUpdateOperationsInput>;
  is_legendary?: InputMaybe<BoolFieldUpdateOperationsInput>;
  japanese_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  percentage_male?: InputMaybe<FloatFieldUpdateOperationsInput>;
  pokedex_number?: InputMaybe<PokedexUpdateOneWithoutPokemonInput>;
  sp_attack?: InputMaybe<IntFieldUpdateOperationsInput>;
  sp_defense?: InputMaybe<IntFieldUpdateOperationsInput>;
  speed?: InputMaybe<IntFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumStatusFieldUpdateOperationsInput>;
  types?: InputMaybe<PokemonTypesUpdateManyWithoutPokemonInput>;
  weight_kg?: InputMaybe<FloatFieldUpdateOperationsInput>;
};

export type PokemonUpdateWithoutClassificationInput = {
  Captured?: InputMaybe<CapturedUpdateManyWithoutPokemonInput>;
  abilities?: InputMaybe<PokemonAbilitiesUpdateManyWithoutPokemonInput>;
  against_bug?: InputMaybe<FloatFieldUpdateOperationsInput>;
  against_dark?: InputMaybe<FloatFieldUpdateOperationsInput>;
  against_dragon?: InputMaybe<FloatFieldUpdateOperationsInput>;
  against_electric?: InputMaybe<FloatFieldUpdateOperationsInput>;
  against_fairy?: InputMaybe<FloatFieldUpdateOperationsInput>;
  against_fight?: InputMaybe<FloatFieldUpdateOperationsInput>;
  against_fire?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  against_flying?: InputMaybe<FloatFieldUpdateOperationsInput>;
  against_ghost?: InputMaybe<FloatFieldUpdateOperationsInput>;
  against_grass?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  against_ground?: InputMaybe<FloatFieldUpdateOperationsInput>;
  against_ice?: InputMaybe<FloatFieldUpdateOperationsInput>;
  against_normal?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  against_poison?: InputMaybe<FloatFieldUpdateOperationsInput>;
  against_psychic?: InputMaybe<FloatFieldUpdateOperationsInput>;
  against_rock?: InputMaybe<FloatFieldUpdateOperationsInput>;
  against_steel?: InputMaybe<FloatFieldUpdateOperationsInput>;
  against_water?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  attack?: InputMaybe<IntFieldUpdateOperationsInput>;
  base_egg_steps?: InputMaybe<IntFieldUpdateOperationsInput>;
  base_happiness?: InputMaybe<IntFieldUpdateOperationsInput>;
  base_total?: InputMaybe<IntFieldUpdateOperationsInput>;
  capture_rate?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  defense?: InputMaybe<IntFieldUpdateOperationsInput>;
  experience_growth?: InputMaybe<IntFieldUpdateOperationsInput>;
  generation?: InputMaybe<GenerationUpdateOneRequiredWithoutPokemonInput>;
  height_m?: InputMaybe<FloatFieldUpdateOperationsInput>;
  hp?: InputMaybe<IntFieldUpdateOperationsInput>;
  is_legendary?: InputMaybe<BoolFieldUpdateOperationsInput>;
  japanese_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  percentage_male?: InputMaybe<FloatFieldUpdateOperationsInput>;
  pokedex_number?: InputMaybe<PokedexUpdateOneWithoutPokemonInput>;
  sp_attack?: InputMaybe<IntFieldUpdateOperationsInput>;
  sp_defense?: InputMaybe<IntFieldUpdateOperationsInput>;
  speed?: InputMaybe<IntFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumStatusFieldUpdateOperationsInput>;
  types?: InputMaybe<PokemonTypesUpdateManyWithoutPokemonInput>;
  weight_kg?: InputMaybe<FloatFieldUpdateOperationsInput>;
};

export type PokemonUpdateWithoutGenerationInput = {
  Captured?: InputMaybe<CapturedUpdateManyWithoutPokemonInput>;
  abilities?: InputMaybe<PokemonAbilitiesUpdateManyWithoutPokemonInput>;
  against_bug?: InputMaybe<FloatFieldUpdateOperationsInput>;
  against_dark?: InputMaybe<FloatFieldUpdateOperationsInput>;
  against_dragon?: InputMaybe<FloatFieldUpdateOperationsInput>;
  against_electric?: InputMaybe<FloatFieldUpdateOperationsInput>;
  against_fairy?: InputMaybe<FloatFieldUpdateOperationsInput>;
  against_fight?: InputMaybe<FloatFieldUpdateOperationsInput>;
  against_fire?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  against_flying?: InputMaybe<FloatFieldUpdateOperationsInput>;
  against_ghost?: InputMaybe<FloatFieldUpdateOperationsInput>;
  against_grass?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  against_ground?: InputMaybe<FloatFieldUpdateOperationsInput>;
  against_ice?: InputMaybe<FloatFieldUpdateOperationsInput>;
  against_normal?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  against_poison?: InputMaybe<FloatFieldUpdateOperationsInput>;
  against_psychic?: InputMaybe<FloatFieldUpdateOperationsInput>;
  against_rock?: InputMaybe<FloatFieldUpdateOperationsInput>;
  against_steel?: InputMaybe<FloatFieldUpdateOperationsInput>;
  against_water?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  attack?: InputMaybe<IntFieldUpdateOperationsInput>;
  base_egg_steps?: InputMaybe<IntFieldUpdateOperationsInput>;
  base_happiness?: InputMaybe<IntFieldUpdateOperationsInput>;
  base_total?: InputMaybe<IntFieldUpdateOperationsInput>;
  capture_rate?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  classification?: InputMaybe<ClassificationUpdateOneRequiredWithoutPokemonInput>;
  defense?: InputMaybe<IntFieldUpdateOperationsInput>;
  experience_growth?: InputMaybe<IntFieldUpdateOperationsInput>;
  height_m?: InputMaybe<FloatFieldUpdateOperationsInput>;
  hp?: InputMaybe<IntFieldUpdateOperationsInput>;
  is_legendary?: InputMaybe<BoolFieldUpdateOperationsInput>;
  japanese_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  percentage_male?: InputMaybe<FloatFieldUpdateOperationsInput>;
  pokedex_number?: InputMaybe<PokedexUpdateOneWithoutPokemonInput>;
  sp_attack?: InputMaybe<IntFieldUpdateOperationsInput>;
  sp_defense?: InputMaybe<IntFieldUpdateOperationsInput>;
  speed?: InputMaybe<IntFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumStatusFieldUpdateOperationsInput>;
  types?: InputMaybe<PokemonTypesUpdateManyWithoutPokemonInput>;
  weight_kg?: InputMaybe<FloatFieldUpdateOperationsInput>;
};

export type PokemonUpdateWithoutPokedex_NumberInput = {
  Captured?: InputMaybe<CapturedUpdateManyWithoutPokemonInput>;
  abilities?: InputMaybe<PokemonAbilitiesUpdateManyWithoutPokemonInput>;
  against_bug?: InputMaybe<FloatFieldUpdateOperationsInput>;
  against_dark?: InputMaybe<FloatFieldUpdateOperationsInput>;
  against_dragon?: InputMaybe<FloatFieldUpdateOperationsInput>;
  against_electric?: InputMaybe<FloatFieldUpdateOperationsInput>;
  against_fairy?: InputMaybe<FloatFieldUpdateOperationsInput>;
  against_fight?: InputMaybe<FloatFieldUpdateOperationsInput>;
  against_fire?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  against_flying?: InputMaybe<FloatFieldUpdateOperationsInput>;
  against_ghost?: InputMaybe<FloatFieldUpdateOperationsInput>;
  against_grass?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  against_ground?: InputMaybe<FloatFieldUpdateOperationsInput>;
  against_ice?: InputMaybe<FloatFieldUpdateOperationsInput>;
  against_normal?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  against_poison?: InputMaybe<FloatFieldUpdateOperationsInput>;
  against_psychic?: InputMaybe<FloatFieldUpdateOperationsInput>;
  against_rock?: InputMaybe<FloatFieldUpdateOperationsInput>;
  against_steel?: InputMaybe<FloatFieldUpdateOperationsInput>;
  against_water?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  attack?: InputMaybe<IntFieldUpdateOperationsInput>;
  base_egg_steps?: InputMaybe<IntFieldUpdateOperationsInput>;
  base_happiness?: InputMaybe<IntFieldUpdateOperationsInput>;
  base_total?: InputMaybe<IntFieldUpdateOperationsInput>;
  capture_rate?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  classification?: InputMaybe<ClassificationUpdateOneRequiredWithoutPokemonInput>;
  defense?: InputMaybe<IntFieldUpdateOperationsInput>;
  experience_growth?: InputMaybe<IntFieldUpdateOperationsInput>;
  generation?: InputMaybe<GenerationUpdateOneRequiredWithoutPokemonInput>;
  height_m?: InputMaybe<FloatFieldUpdateOperationsInput>;
  hp?: InputMaybe<IntFieldUpdateOperationsInput>;
  is_legendary?: InputMaybe<BoolFieldUpdateOperationsInput>;
  japanese_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  percentage_male?: InputMaybe<FloatFieldUpdateOperationsInput>;
  sp_attack?: InputMaybe<IntFieldUpdateOperationsInput>;
  sp_defense?: InputMaybe<IntFieldUpdateOperationsInput>;
  speed?: InputMaybe<IntFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumStatusFieldUpdateOperationsInput>;
  types?: InputMaybe<PokemonTypesUpdateManyWithoutPokemonInput>;
  weight_kg?: InputMaybe<FloatFieldUpdateOperationsInput>;
};

export type PokemonUpdateWithoutTypesInput = {
  Captured?: InputMaybe<CapturedUpdateManyWithoutPokemonInput>;
  abilities?: InputMaybe<PokemonAbilitiesUpdateManyWithoutPokemonInput>;
  against_bug?: InputMaybe<FloatFieldUpdateOperationsInput>;
  against_dark?: InputMaybe<FloatFieldUpdateOperationsInput>;
  against_dragon?: InputMaybe<FloatFieldUpdateOperationsInput>;
  against_electric?: InputMaybe<FloatFieldUpdateOperationsInput>;
  against_fairy?: InputMaybe<FloatFieldUpdateOperationsInput>;
  against_fight?: InputMaybe<FloatFieldUpdateOperationsInput>;
  against_fire?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  against_flying?: InputMaybe<FloatFieldUpdateOperationsInput>;
  against_ghost?: InputMaybe<FloatFieldUpdateOperationsInput>;
  against_grass?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  against_ground?: InputMaybe<FloatFieldUpdateOperationsInput>;
  against_ice?: InputMaybe<FloatFieldUpdateOperationsInput>;
  against_normal?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  against_poison?: InputMaybe<FloatFieldUpdateOperationsInput>;
  against_psychic?: InputMaybe<FloatFieldUpdateOperationsInput>;
  against_rock?: InputMaybe<FloatFieldUpdateOperationsInput>;
  against_steel?: InputMaybe<FloatFieldUpdateOperationsInput>;
  against_water?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  attack?: InputMaybe<IntFieldUpdateOperationsInput>;
  base_egg_steps?: InputMaybe<IntFieldUpdateOperationsInput>;
  base_happiness?: InputMaybe<IntFieldUpdateOperationsInput>;
  base_total?: InputMaybe<IntFieldUpdateOperationsInput>;
  capture_rate?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  classification?: InputMaybe<ClassificationUpdateOneRequiredWithoutPokemonInput>;
  defense?: InputMaybe<IntFieldUpdateOperationsInput>;
  experience_growth?: InputMaybe<IntFieldUpdateOperationsInput>;
  generation?: InputMaybe<GenerationUpdateOneRequiredWithoutPokemonInput>;
  height_m?: InputMaybe<FloatFieldUpdateOperationsInput>;
  hp?: InputMaybe<IntFieldUpdateOperationsInput>;
  is_legendary?: InputMaybe<BoolFieldUpdateOperationsInput>;
  japanese_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  percentage_male?: InputMaybe<FloatFieldUpdateOperationsInput>;
  pokedex_number?: InputMaybe<PokedexUpdateOneWithoutPokemonInput>;
  sp_attack?: InputMaybe<IntFieldUpdateOperationsInput>;
  sp_defense?: InputMaybe<IntFieldUpdateOperationsInput>;
  speed?: InputMaybe<IntFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumStatusFieldUpdateOperationsInput>;
  weight_kg?: InputMaybe<FloatFieldUpdateOperationsInput>;
};

export type PokemonUpsertWithWhereUniqueWithoutClassificationInput = {
  create: PokemonCreateWithoutClassificationInput;
  update: PokemonUpdateWithoutClassificationInput;
  where: PokemonWhereUniqueInput;
};

export type PokemonUpsertWithWhereUniqueWithoutGenerationInput = {
  create: PokemonCreateWithoutGenerationInput;
  update: PokemonUpdateWithoutGenerationInput;
  where: PokemonWhereUniqueInput;
};

export type PokemonUpsertWithoutAbilitiesInput = {
  create: PokemonCreateWithoutAbilitiesInput;
  update: PokemonUpdateWithoutAbilitiesInput;
};

export type PokemonUpsertWithoutCapturedInput = {
  create: PokemonCreateWithoutCapturedInput;
  update: PokemonUpdateWithoutCapturedInput;
};

export type PokemonUpsertWithoutPokedex_NumberInput = {
  create: PokemonCreateWithoutPokedex_NumberInput;
  update: PokemonUpdateWithoutPokedex_NumberInput;
};

export type PokemonUpsertWithoutTypesInput = {
  create: PokemonCreateWithoutTypesInput;
  update: PokemonUpdateWithoutTypesInput;
};

export type PokemonWhereInput = {
  AND?: InputMaybe<Array<PokemonWhereInput>>;
  Captured?: InputMaybe<CapturedListRelationFilter>;
  NOT?: InputMaybe<Array<PokemonWhereInput>>;
  OR?: InputMaybe<Array<PokemonWhereInput>>;
  abilities?: InputMaybe<PokemonAbilitiesListRelationFilter>;
  against_bug?: InputMaybe<FloatFilter>;
  against_dark?: InputMaybe<FloatFilter>;
  against_dragon?: InputMaybe<FloatFilter>;
  against_electric?: InputMaybe<FloatFilter>;
  against_fairy?: InputMaybe<FloatFilter>;
  against_fight?: InputMaybe<FloatFilter>;
  against_fire?: InputMaybe<FloatNullableFilter>;
  against_flying?: InputMaybe<FloatFilter>;
  against_ghost?: InputMaybe<FloatFilter>;
  against_grass?: InputMaybe<FloatNullableFilter>;
  against_ground?: InputMaybe<FloatFilter>;
  against_ice?: InputMaybe<FloatFilter>;
  against_normal?: InputMaybe<FloatNullableFilter>;
  against_poison?: InputMaybe<FloatFilter>;
  against_psychic?: InputMaybe<FloatFilter>;
  against_rock?: InputMaybe<FloatFilter>;
  against_steel?: InputMaybe<FloatFilter>;
  against_water?: InputMaybe<FloatNullableFilter>;
  attack?: InputMaybe<IntFilter>;
  base_egg_steps?: InputMaybe<IntFilter>;
  base_happiness?: InputMaybe<IntFilter>;
  base_total?: InputMaybe<IntFilter>;
  capture_rate?: InputMaybe<FloatNullableFilter>;
  classification?: InputMaybe<ClassificationRelationFilter>;
  classificationId?: InputMaybe<IntFilter>;
  defense?: InputMaybe<IntFilter>;
  experience_growth?: InputMaybe<IntFilter>;
  generation?: InputMaybe<GenerationRelationFilter>;
  generationId?: InputMaybe<IntFilter>;
  height_m?: InputMaybe<FloatFilter>;
  hp?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  is_legendary?: InputMaybe<BoolFilter>;
  japanese_name?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  percentage_male?: InputMaybe<FloatFilter>;
  pokedex_number?: InputMaybe<PokedexRelationFilter>;
  sp_attack?: InputMaybe<IntFilter>;
  sp_defense?: InputMaybe<IntFilter>;
  speed?: InputMaybe<IntFilter>;
  status?: InputMaybe<EnumStatusFilter>;
  types?: InputMaybe<PokemonTypesListRelationFilter>;
  weight_kg?: InputMaybe<FloatFilter>;
};

export type PokemonWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  abilities: Array<Ability>;
  ability?: Maybe<Ability>;
  aggregateAbility: AggregateAbility;
  aggregateCaptured: AggregateCaptured;
  aggregateClassification: AggregateClassification;
  aggregateGeneration: AggregateGeneration;
  aggregatePokedex: AggregatePokedex;
  aggregatePokemon: AggregatePokemon;
  aggregatePokemonAbilities: AggregatePokemonAbilities;
  aggregatePokemonTypes: AggregatePokemonTypes;
  aggregateTrainer: AggregateTrainer;
  aggregateType: AggregateType;
  captured?: Maybe<Captured>;
  captureds: Array<Captured>;
  classification?: Maybe<Classification>;
  classifications: Array<Classification>;
  findFirstAbility?: Maybe<Ability>;
  findFirstCaptured?: Maybe<Captured>;
  findFirstClassification?: Maybe<Classification>;
  findFirstGeneration?: Maybe<Generation>;
  findFirstPokedex?: Maybe<Pokedex>;
  findFirstPokemon?: Maybe<Pokemon>;
  findFirstPokemonAbilities?: Maybe<PokemonAbilities>;
  findFirstPokemonTypes?: Maybe<PokemonTypes>;
  findFirstTrainer?: Maybe<Trainer>;
  findFirstType?: Maybe<Type>;
  findManyPokemon: Array<Pokemon>;
  findManyPokemonAbilities: Array<PokemonAbilities>;
  findManyPokemonTypes: Array<PokemonTypes>;
  findUniquePokemon?: Maybe<Pokemon>;
  findUniquePokemonAbilities?: Maybe<PokemonAbilities>;
  findUniquePokemonTypes?: Maybe<PokemonTypes>;
  generation?: Maybe<Generation>;
  generations: Array<Generation>;
  groupByAbility: Array<AbilityGroupBy>;
  groupByCaptured: Array<CapturedGroupBy>;
  groupByClassification: Array<ClassificationGroupBy>;
  groupByGeneration: Array<GenerationGroupBy>;
  groupByPokedex: Array<PokedexGroupBy>;
  groupByPokemon: Array<PokemonGroupBy>;
  groupByPokemonAbilities: Array<PokemonAbilitiesGroupBy>;
  groupByPokemonTypes: Array<PokemonTypesGroupBy>;
  groupByTrainer: Array<TrainerGroupBy>;
  groupByType: Array<TypeGroupBy>;
  pokedex?: Maybe<Pokedex>;
  pokedexes: Array<Pokedex>;
  trainer?: Maybe<Trainer>;
  trainers: Array<Trainer>;
  type?: Maybe<Type>;
  types: Array<Type>;
};


export type QueryAbilitiesArgs = {
  cursor?: InputMaybe<AbilityWhereUniqueInput>;
  distinct?: InputMaybe<Array<AbilityScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AbilityOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AbilityWhereInput>;
};


export type QueryAbilityArgs = {
  where: AbilityWhereUniqueInput;
};


export type QueryAggregateAbilityArgs = {
  cursor?: InputMaybe<AbilityWhereUniqueInput>;
  orderBy?: InputMaybe<Array<AbilityOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AbilityWhereInput>;
};


export type QueryAggregateCapturedArgs = {
  cursor?: InputMaybe<CapturedWhereUniqueInput>;
  orderBy?: InputMaybe<Array<CapturedOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CapturedWhereInput>;
};


export type QueryAggregateClassificationArgs = {
  cursor?: InputMaybe<ClassificationWhereUniqueInput>;
  orderBy?: InputMaybe<Array<ClassificationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ClassificationWhereInput>;
};


export type QueryAggregateGenerationArgs = {
  cursor?: InputMaybe<GenerationWhereUniqueInput>;
  orderBy?: InputMaybe<Array<GenerationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GenerationWhereInput>;
};


export type QueryAggregatePokedexArgs = {
  cursor?: InputMaybe<PokedexWhereUniqueInput>;
  orderBy?: InputMaybe<Array<PokedexOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PokedexWhereInput>;
};


export type QueryAggregatePokemonArgs = {
  cursor?: InputMaybe<PokemonWhereUniqueInput>;
  orderBy?: InputMaybe<Array<PokemonOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PokemonWhereInput>;
};


export type QueryAggregatePokemonAbilitiesArgs = {
  cursor?: InputMaybe<PokemonAbilitiesWhereUniqueInput>;
  orderBy?: InputMaybe<Array<PokemonAbilitiesOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PokemonAbilitiesWhereInput>;
};


export type QueryAggregatePokemonTypesArgs = {
  cursor?: InputMaybe<PokemonTypesWhereUniqueInput>;
  orderBy?: InputMaybe<Array<PokemonTypesOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PokemonTypesWhereInput>;
};


export type QueryAggregateTrainerArgs = {
  cursor?: InputMaybe<TrainerWhereUniqueInput>;
  orderBy?: InputMaybe<Array<TrainerOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TrainerWhereInput>;
};


export type QueryAggregateTypeArgs = {
  cursor?: InputMaybe<TypeWhereUniqueInput>;
  orderBy?: InputMaybe<Array<TypeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TypeWhereInput>;
};


export type QueryCapturedArgs = {
  where: CapturedWhereUniqueInput;
};


export type QueryCapturedsArgs = {
  cursor?: InputMaybe<CapturedWhereUniqueInput>;
  distinct?: InputMaybe<Array<CapturedScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CapturedOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CapturedWhereInput>;
};


export type QueryClassificationArgs = {
  where: ClassificationWhereUniqueInput;
};


export type QueryClassificationsArgs = {
  cursor?: InputMaybe<ClassificationWhereUniqueInput>;
  distinct?: InputMaybe<Array<ClassificationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ClassificationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ClassificationWhereInput>;
};


export type QueryFindFirstAbilityArgs = {
  cursor?: InputMaybe<AbilityWhereUniqueInput>;
  distinct?: InputMaybe<Array<AbilityScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AbilityOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AbilityWhereInput>;
};


export type QueryFindFirstCapturedArgs = {
  cursor?: InputMaybe<CapturedWhereUniqueInput>;
  distinct?: InputMaybe<Array<CapturedScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CapturedOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CapturedWhereInput>;
};


export type QueryFindFirstClassificationArgs = {
  cursor?: InputMaybe<ClassificationWhereUniqueInput>;
  distinct?: InputMaybe<Array<ClassificationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ClassificationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ClassificationWhereInput>;
};


export type QueryFindFirstGenerationArgs = {
  cursor?: InputMaybe<GenerationWhereUniqueInput>;
  distinct?: InputMaybe<Array<GenerationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<GenerationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GenerationWhereInput>;
};


export type QueryFindFirstPokedexArgs = {
  cursor?: InputMaybe<PokedexWhereUniqueInput>;
  distinct?: InputMaybe<Array<PokedexScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PokedexOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PokedexWhereInput>;
};


export type QueryFindFirstPokemonArgs = {
  cursor?: InputMaybe<PokemonWhereUniqueInput>;
  distinct?: InputMaybe<Array<PokemonScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PokemonOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PokemonWhereInput>;
};


export type QueryFindFirstPokemonAbilitiesArgs = {
  cursor?: InputMaybe<PokemonAbilitiesWhereUniqueInput>;
  distinct?: InputMaybe<Array<PokemonAbilitiesScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PokemonAbilitiesOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PokemonAbilitiesWhereInput>;
};


export type QueryFindFirstPokemonTypesArgs = {
  cursor?: InputMaybe<PokemonTypesWhereUniqueInput>;
  distinct?: InputMaybe<Array<PokemonTypesScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PokemonTypesOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PokemonTypesWhereInput>;
};


export type QueryFindFirstTrainerArgs = {
  cursor?: InputMaybe<TrainerWhereUniqueInput>;
  distinct?: InputMaybe<Array<TrainerScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TrainerOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TrainerWhereInput>;
};


export type QueryFindFirstTypeArgs = {
  cursor?: InputMaybe<TypeWhereUniqueInput>;
  distinct?: InputMaybe<Array<TypeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TypeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TypeWhereInput>;
};


export type QueryFindManyPokemonArgs = {
  cursor?: InputMaybe<PokemonWhereUniqueInput>;
  distinct?: InputMaybe<Array<PokemonScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PokemonOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PokemonWhereInput>;
};


export type QueryFindManyPokemonAbilitiesArgs = {
  cursor?: InputMaybe<PokemonAbilitiesWhereUniqueInput>;
  distinct?: InputMaybe<Array<PokemonAbilitiesScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PokemonAbilitiesOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PokemonAbilitiesWhereInput>;
};


export type QueryFindManyPokemonTypesArgs = {
  cursor?: InputMaybe<PokemonTypesWhereUniqueInput>;
  distinct?: InputMaybe<Array<PokemonTypesScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PokemonTypesOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PokemonTypesWhereInput>;
};


export type QueryFindUniquePokemonArgs = {
  where: PokemonWhereUniqueInput;
};


export type QueryFindUniquePokemonAbilitiesArgs = {
  where: PokemonAbilitiesWhereUniqueInput;
};


export type QueryFindUniquePokemonTypesArgs = {
  where: PokemonTypesWhereUniqueInput;
};


export type QueryGenerationArgs = {
  where: GenerationWhereUniqueInput;
};


export type QueryGenerationsArgs = {
  cursor?: InputMaybe<GenerationWhereUniqueInput>;
  distinct?: InputMaybe<Array<GenerationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<GenerationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GenerationWhereInput>;
};


export type QueryGroupByAbilityArgs = {
  by: Array<AbilityScalarFieldEnum>;
  having?: InputMaybe<AbilityScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<AbilityOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AbilityWhereInput>;
};


export type QueryGroupByCapturedArgs = {
  by: Array<CapturedScalarFieldEnum>;
  having?: InputMaybe<CapturedScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<CapturedOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CapturedWhereInput>;
};


export type QueryGroupByClassificationArgs = {
  by: Array<ClassificationScalarFieldEnum>;
  having?: InputMaybe<ClassificationScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<ClassificationOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ClassificationWhereInput>;
};


export type QueryGroupByGenerationArgs = {
  by: Array<GenerationScalarFieldEnum>;
  having?: InputMaybe<GenerationScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<GenerationOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GenerationWhereInput>;
};


export type QueryGroupByPokedexArgs = {
  by: Array<PokedexScalarFieldEnum>;
  having?: InputMaybe<PokedexScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<PokedexOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PokedexWhereInput>;
};


export type QueryGroupByPokemonArgs = {
  by: Array<PokemonScalarFieldEnum>;
  having?: InputMaybe<PokemonScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<PokemonOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PokemonWhereInput>;
};


export type QueryGroupByPokemonAbilitiesArgs = {
  by: Array<PokemonAbilitiesScalarFieldEnum>;
  having?: InputMaybe<PokemonAbilitiesScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<PokemonAbilitiesOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PokemonAbilitiesWhereInput>;
};


export type QueryGroupByPokemonTypesArgs = {
  by: Array<PokemonTypesScalarFieldEnum>;
  having?: InputMaybe<PokemonTypesScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<PokemonTypesOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PokemonTypesWhereInput>;
};


export type QueryGroupByTrainerArgs = {
  by: Array<TrainerScalarFieldEnum>;
  having?: InputMaybe<TrainerScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<TrainerOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TrainerWhereInput>;
};


export type QueryGroupByTypeArgs = {
  by: Array<TypeScalarFieldEnum>;
  having?: InputMaybe<TypeScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<TypeOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TypeWhereInput>;
};


export type QueryPokedexArgs = {
  where: PokedexWhereUniqueInput;
};


export type QueryPokedexesArgs = {
  cursor?: InputMaybe<PokedexWhereUniqueInput>;
  distinct?: InputMaybe<Array<PokedexScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PokedexOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PokedexWhereInput>;
};


export type QueryTrainerArgs = {
  where: TrainerWhereUniqueInput;
};


export type QueryTrainersArgs = {
  cursor?: InputMaybe<TrainerWhereUniqueInput>;
  distinct?: InputMaybe<Array<TrainerScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TrainerOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TrainerWhereInput>;
};


export type QueryTypeArgs = {
  where: TypeWhereUniqueInput;
};


export type QueryTypesArgs = {
  cursor?: InputMaybe<TypeWhereUniqueInput>;
  distinct?: InputMaybe<Array<TypeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TypeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TypeWhereInput>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export enum Status {
  Captured = 'Captured',
  Seen = 'Seen',
  Unseen = 'Unseen'
}

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type Trainer = {
  __typename?: 'Trainer';
  Captured: Array<Captured>;
  _count?: Maybe<TrainerCount>;
  age?: Maybe<Scalars['Int']>;
  gender?: Maybe<Gender>;
  id: Scalars['Int'];
  name: Scalars['String'];
};


export type TrainerCapturedArgs = {
  cursor?: InputMaybe<CapturedWhereUniqueInput>;
  distinct?: InputMaybe<Array<CapturedScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CapturedOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CapturedWhereInput>;
};

export type TrainerAvgAggregate = {
  __typename?: 'TrainerAvgAggregate';
  age?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type TrainerAvgOrderByAggregateInput = {
  age?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type TrainerCount = {
  __typename?: 'TrainerCount';
  Captured: Scalars['Int'];
};

export type TrainerCountAggregate = {
  __typename?: 'TrainerCountAggregate';
  _all: Scalars['Int'];
  age: Scalars['Int'];
  gender: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
};

export type TrainerCountOrderByAggregateInput = {
  age?: InputMaybe<SortOrder>;
  gender?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type TrainerCreateInput = {
  Captured?: InputMaybe<CapturedCreateNestedManyWithoutTrainerInput>;
  age?: InputMaybe<Scalars['Int']>;
  gender?: InputMaybe<Gender>;
  name: Scalars['String'];
};

export type TrainerCreateManyInput = {
  age?: InputMaybe<Scalars['Int']>;
  gender?: InputMaybe<Gender>;
  id?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
};

export type TrainerCreateNestedOneWithoutCapturedInput = {
  connect?: InputMaybe<TrainerWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TrainerCreateOrConnectWithoutCapturedInput>;
  create?: InputMaybe<TrainerCreateWithoutCapturedInput>;
};

export type TrainerCreateOrConnectWithoutCapturedInput = {
  create: TrainerCreateWithoutCapturedInput;
  where: TrainerWhereUniqueInput;
};

export type TrainerCreateWithoutCapturedInput = {
  age?: InputMaybe<Scalars['Int']>;
  gender?: InputMaybe<Gender>;
  name: Scalars['String'];
};

export type TrainerGroupBy = {
  __typename?: 'TrainerGroupBy';
  _avg?: Maybe<TrainerAvgAggregate>;
  _count?: Maybe<TrainerCountAggregate>;
  _max?: Maybe<TrainerMaxAggregate>;
  _min?: Maybe<TrainerMinAggregate>;
  _sum?: Maybe<TrainerSumAggregate>;
  age?: Maybe<Scalars['Int']>;
  gender?: Maybe<Gender>;
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type TrainerMaxAggregate = {
  __typename?: 'TrainerMaxAggregate';
  age?: Maybe<Scalars['Int']>;
  gender?: Maybe<Gender>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type TrainerMaxOrderByAggregateInput = {
  age?: InputMaybe<SortOrder>;
  gender?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type TrainerMinAggregate = {
  __typename?: 'TrainerMinAggregate';
  age?: Maybe<Scalars['Int']>;
  gender?: Maybe<Gender>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type TrainerMinOrderByAggregateInput = {
  age?: InputMaybe<SortOrder>;
  gender?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type TrainerOrderByWithAggregationInput = {
  _avg?: InputMaybe<TrainerAvgOrderByAggregateInput>;
  _count?: InputMaybe<TrainerCountOrderByAggregateInput>;
  _max?: InputMaybe<TrainerMaxOrderByAggregateInput>;
  _min?: InputMaybe<TrainerMinOrderByAggregateInput>;
  _sum?: InputMaybe<TrainerSumOrderByAggregateInput>;
  age?: InputMaybe<SortOrder>;
  gender?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type TrainerOrderByWithRelationInput = {
  Captured?: InputMaybe<CapturedOrderByRelationAggregateInput>;
  age?: InputMaybe<SortOrder>;
  gender?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type TrainerRelationFilter = {
  is?: InputMaybe<TrainerWhereInput>;
  isNot?: InputMaybe<TrainerWhereInput>;
};

export enum TrainerScalarFieldEnum {
  Age = 'age',
  Gender = 'gender',
  Id = 'id',
  Name = 'name'
}

export type TrainerScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<TrainerScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<TrainerScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<TrainerScalarWhereWithAggregatesInput>>;
  age?: InputMaybe<IntNullableWithAggregatesFilter>;
  gender?: InputMaybe<EnumGenderNullableWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
};

export type TrainerSumAggregate = {
  __typename?: 'TrainerSumAggregate';
  age?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

export type TrainerSumOrderByAggregateInput = {
  age?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type TrainerUpdateInput = {
  Captured?: InputMaybe<CapturedUpdateManyWithoutTrainerInput>;
  age?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  gender?: InputMaybe<NullableEnumGenderFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type TrainerUpdateManyMutationInput = {
  age?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  gender?: InputMaybe<NullableEnumGenderFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type TrainerUpdateOneRequiredWithoutCapturedInput = {
  connect?: InputMaybe<TrainerWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TrainerCreateOrConnectWithoutCapturedInput>;
  create?: InputMaybe<TrainerCreateWithoutCapturedInput>;
  update?: InputMaybe<TrainerUpdateWithoutCapturedInput>;
  upsert?: InputMaybe<TrainerUpsertWithoutCapturedInput>;
};

export type TrainerUpdateWithoutCapturedInput = {
  age?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  gender?: InputMaybe<NullableEnumGenderFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type TrainerUpsertWithoutCapturedInput = {
  create: TrainerCreateWithoutCapturedInput;
  update: TrainerUpdateWithoutCapturedInput;
};

export type TrainerWhereInput = {
  AND?: InputMaybe<Array<TrainerWhereInput>>;
  Captured?: InputMaybe<CapturedListRelationFilter>;
  NOT?: InputMaybe<Array<TrainerWhereInput>>;
  OR?: InputMaybe<Array<TrainerWhereInput>>;
  age?: InputMaybe<IntNullableFilter>;
  gender?: InputMaybe<EnumGenderNullableFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
};

export type TrainerWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type Type = {
  __typename?: 'Type';
  _count?: Maybe<TypeCount>;
  createdAt: Scalars['DateTime'];
  expiresAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  pokemonTypes: Array<PokemonTypes>;
  type: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};


export type TypePokemonTypesArgs = {
  cursor?: InputMaybe<PokemonTypesWhereUniqueInput>;
  distinct?: InputMaybe<Array<PokemonTypesScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PokemonTypesOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PokemonTypesWhereInput>;
};

export type TypeAvgAggregate = {
  __typename?: 'TypeAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type TypeAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type TypeCount = {
  __typename?: 'TypeCount';
  pokemonTypes: Scalars['Int'];
};

export type TypeCountAggregate = {
  __typename?: 'TypeCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  expiresAt: Scalars['Int'];
  id: Scalars['Int'];
  type: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type TypeCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  expiresAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type TypeCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  expiresAt?: InputMaybe<Scalars['DateTime']>;
  pokemonTypes?: InputMaybe<PokemonTypesCreateNestedManyWithoutTypeInput>;
  type: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TypeCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  expiresAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  type: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TypeCreateNestedOneWithoutPokemonTypesInput = {
  connect?: InputMaybe<TypeWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TypeCreateOrConnectWithoutPokemonTypesInput>;
  create?: InputMaybe<TypeCreateWithoutPokemonTypesInput>;
};

export type TypeCreateOrConnectWithoutPokemonTypesInput = {
  create: TypeCreateWithoutPokemonTypesInput;
  where: TypeWhereUniqueInput;
};

export type TypeCreateWithoutPokemonTypesInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  expiresAt?: InputMaybe<Scalars['DateTime']>;
  type: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TypeGroupBy = {
  __typename?: 'TypeGroupBy';
  _avg?: Maybe<TypeAvgAggregate>;
  _count?: Maybe<TypeCountAggregate>;
  _max?: Maybe<TypeMaxAggregate>;
  _min?: Maybe<TypeMinAggregate>;
  _sum?: Maybe<TypeSumAggregate>;
  createdAt: Scalars['DateTime'];
  expiresAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  type: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type TypeMaxAggregate = {
  __typename?: 'TypeMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  expiresAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TypeMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  expiresAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type TypeMinAggregate = {
  __typename?: 'TypeMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  expiresAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TypeMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  expiresAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type TypeOrderByWithAggregationInput = {
  _avg?: InputMaybe<TypeAvgOrderByAggregateInput>;
  _count?: InputMaybe<TypeCountOrderByAggregateInput>;
  _max?: InputMaybe<TypeMaxOrderByAggregateInput>;
  _min?: InputMaybe<TypeMinOrderByAggregateInput>;
  _sum?: InputMaybe<TypeSumOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  expiresAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type TypeOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  expiresAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  pokemonTypes?: InputMaybe<PokemonTypesOrderByRelationAggregateInput>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type TypeRelationFilter = {
  is?: InputMaybe<TypeWhereInput>;
  isNot?: InputMaybe<TypeWhereInput>;
};

export enum TypeScalarFieldEnum {
  CreatedAt = 'createdAt',
  ExpiresAt = 'expiresAt',
  Id = 'id',
  Type = 'type',
  UpdatedAt = 'updatedAt'
}

export type TypeScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<TypeScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<TypeScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<TypeScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  expiresAt?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  type?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type TypeSumAggregate = {
  __typename?: 'TypeSumAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type TypeSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type TypeUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  expiresAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  pokemonTypes?: InputMaybe<PokemonTypesUpdateManyWithoutTypeInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TypeUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  expiresAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TypeUpdateOneRequiredWithoutPokemonTypesInput = {
  connect?: InputMaybe<TypeWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TypeCreateOrConnectWithoutPokemonTypesInput>;
  create?: InputMaybe<TypeCreateWithoutPokemonTypesInput>;
  update?: InputMaybe<TypeUpdateWithoutPokemonTypesInput>;
  upsert?: InputMaybe<TypeUpsertWithoutPokemonTypesInput>;
};

export type TypeUpdateWithoutPokemonTypesInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  expiresAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TypeUpsertWithoutPokemonTypesInput = {
  create: TypeCreateWithoutPokemonTypesInput;
  update: TypeUpdateWithoutPokemonTypesInput;
};

export type TypeWhereInput = {
  AND?: InputMaybe<Array<TypeWhereInput>>;
  NOT?: InputMaybe<Array<TypeWhereInput>>;
  OR?: InputMaybe<Array<TypeWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  expiresAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IntFilter>;
  pokemonTypes?: InputMaybe<PokemonTypesListRelationFilter>;
  type?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type TypeWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
  type?: InputMaybe<Scalars['String']>;
};

export type PokemonQueryVariables = Exact<{ [key: string]: never; }>;


export type PokemonQuery = { __typename?: 'Query', findManyPokemon: Array<{ __typename?: 'Pokemon', id: number, name: string, japanese_name: string, hp: number, defense: number, attack: number, weight_kg: number, speed: number, is_legendary: boolean, types: Array<{ __typename?: 'PokemonTypes', type: { __typename?: 'Type', type: string } }>, abilities: Array<{ __typename?: 'PokemonAbilities', ability: { __typename?: 'Ability', ability: string } }> }> };


export const PokemonDocument = `
    query Pokemon {
  findManyPokemon {
    id
    name
    japanese_name
    hp
    defense
    attack
    weight_kg
    speed
    types {
      type {
        type
      }
    }
    abilities {
      ability {
        ability
      }
    }
    is_legendary
  }
}
    `;
export const usePokemonQuery = <
      TData = PokemonQuery,
      TError = unknown
    >(
      variables?: PokemonQueryVariables,
      options?: UseQueryOptions<PokemonQuery, TError, TData>
    ) =>
    useQuery<PokemonQuery, TError, TData>(
      variables === undefined ? ['Pokemon'] : ['Pokemon', variables],
      fetcher<PokemonQuery, PokemonQueryVariables>(PokemonDocument, variables),
      options
    );