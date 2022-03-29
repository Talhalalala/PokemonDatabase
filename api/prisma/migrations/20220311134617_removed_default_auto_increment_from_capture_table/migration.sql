-- AlterTable
ALTER TABLE "Captured" ALTER COLUMN "pokemonId" DROP DEFAULT,
ALTER COLUMN "trainerId" DROP DEFAULT;
DROP SEQUENCE "Captured_pokemonId_seq";
DROP SEQUENCE "Captured_trainerId_seq";
