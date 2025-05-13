-- CreateTable
CREATE TABLE "Server" (
    "id" SERIAL NOT NULL,
    "users" TEXT[],

    CONSTRAINT "Server_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Msg" (
    "id" SERIAL NOT NULL,
    "user" TEXT NOT NULL,
    "msg_date" TEXT NOT NULL,
    "msg_time" TEXT NOT NULL,
    "msg" TEXT NOT NULL,
    "serverId" INTEGER,

    CONSTRAINT "Msg_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Msg" ADD CONSTRAINT "Msg_serverId_fkey" FOREIGN KEY ("serverId") REFERENCES "Server"("id") ON DELETE SET NULL ON UPDATE CASCADE;
