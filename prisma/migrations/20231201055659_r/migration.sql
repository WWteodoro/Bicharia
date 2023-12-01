/*
  Warnings:

  - Added the required column `petId` to the `post` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "pet" ADD COLUMN     "owners" VARCHAR(255)[];

-- AlterTable
ALTER TABLE "post" ADD COLUMN     "petId" VARCHAR(255) NOT NULL;

-- AlterTable
ALTER TABLE "user" ADD COLUMN     "pets" VARCHAR(255)[],
ADD COLUMN     "postId" VARCHAR(255)[],
ADD COLUMN     "reactionsId" VARCHAR(255)[];

-- AddForeignKey
ALTER TABLE "post" ADD CONSTRAINT "post_petId_fkey" FOREIGN KEY ("petId") REFERENCES "pet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
