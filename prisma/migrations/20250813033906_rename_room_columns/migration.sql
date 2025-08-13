/*
  Warnings:

  - You are about to drop the column `name` on the `Room` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `Room` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[roomName,roomPassword]` on the table `Room` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `roomName` to the `Room` table without a default value. This is not possible if the table is not empty.
  - Added the required column `roomPassword` to the `Room` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "public"."Room_name_password_key";

-- AlterTable
ALTER TABLE "public"."Room" DROP COLUMN "name",
DROP COLUMN "password",
ADD COLUMN     "roomName" TEXT NOT NULL,
ADD COLUMN     "roomPassword" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Room_roomName_roomPassword_key" ON "public"."Room"("roomName", "roomPassword");
