-- CreateEnum
CREATE TYPE "DocsType" AS ENUM ('RG', 'CNH');

-- CreateTable
CREATE TABLE "docs" (
    "id" SERIAL NOT NULL,
    "type" "DocsType" NOT NULL,
    "fullName" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "emissionDate" TEXT NOT NULL,
    "validity" TEXT NOT NULL,
    "issuer" TEXT NOT NULL,

    CONSTRAINT "docs_pkey" PRIMARY KEY ("id")
);
