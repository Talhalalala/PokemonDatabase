-- CreateEnum
CREATE TYPE "Status" AS ENUM ('Seen', 'Unseen', 'Captured');

-- AlterTable
ALTER TABLE "Pokemon" ADD COLUMN     "status" "Status" NOT NULL DEFAULT E'Unseen';
