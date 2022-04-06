-- AlterTable
ALTER TABLE "Pokemon" ALTER COLUMN "against_fire" DROP NOT NULL,
ALTER COLUMN "against_grass" DROP NOT NULL,
ALTER COLUMN "against_normal" DROP NOT NULL,
ALTER COLUMN "against_water" DROP NOT NULL;
