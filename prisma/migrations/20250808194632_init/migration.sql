/*
  Warnings:

  - You are about to drop the `Room` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Room";

-- CreateTable
CREATE TABLE "ChatRoom" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "ChatRoom_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ChatRoom_password_key" ON "ChatRoom"("password");
