/*
  Warnings:

  - Added the required column `userId` to the `docs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "docs" ADD COLUMN     "userId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "docs" ADD CONSTRAINT "docs_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
