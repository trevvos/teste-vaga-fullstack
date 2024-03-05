/*
  Warnings:

  - Added the required column `isInconsistent` to the `Movimento` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Movimento" ADD COLUMN     "isInconsistent" BOOLEAN NOT NULL;
