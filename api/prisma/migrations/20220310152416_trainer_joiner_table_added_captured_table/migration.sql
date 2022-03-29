-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('Male', 'Female', 'Unsexed');

-- CreateTable
CREATE TABLE "Captured" (
    "id" SERIAL NOT NULL,
    "pokemonId" SERIAL NOT NULL,
    "trainerId" SERIAL NOT NULL,
    "level" INTEGER NOT NULL,
    "gender" "Gender" NOT NULL DEFAULT E'Unsexed',

    CONSTRAINT "Captured_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Trainer" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "gender" "Gender",
    "age" INTEGER,

    CONSTRAINT "Trainer_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Captured" ADD CONSTRAINT "Captured_pokemonId_fkey" FOREIGN KEY ("pokemonId") REFERENCES "Pokemon"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Captured" ADD CONSTRAINT "Captured_trainerId_fkey" FOREIGN KEY ("trainerId") REFERENCES "Trainer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
