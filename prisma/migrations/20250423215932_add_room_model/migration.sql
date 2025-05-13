/*
  Warnings:

  - You are about to drop the `Msg` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Server` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Msg" DROP CONSTRAINT "Msg_serverId_fkey";

-- DropTable
DROP TABLE "Msg";

-- DropTable
DROP TABLE "Server";

-- CreateTable
CREATE TABLE "Room" (
    "id" SERIAL NOT NULL,
    "roomName" TEXT NOT NULL,
    "users" TEXT[],

    CONSTRAINT "Room_pkey" PRIMARY KEY ("id")
);
