/*
  Warnings:

  - You are about to drop the `ChatRoom` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "ChatRoom";

-- CreateTable
CREATE TABLE "Room" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Room_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Room_name_password_key" ON "Room"("name", "password");
