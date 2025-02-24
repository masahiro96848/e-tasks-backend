/*
  Warnings:

  - A unique constraint covering the columns `[firebaseUId]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `firebaseUId` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `User` ADD COLUMN `firebaseUId` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `User_firebaseUId_key` ON `User`(`firebaseUId`);
