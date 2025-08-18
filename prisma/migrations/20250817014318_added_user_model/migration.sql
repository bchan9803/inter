-- CreateTable
CREATE TABLE "public"."User" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "dateJoined" TEXT NOT NULL,
    "roomsJoined" TEXT[],

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
