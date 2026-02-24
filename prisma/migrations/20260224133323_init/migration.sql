-- CreateTable
CREATE TABLE "Job" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cidade" TEXT,
    "empresa" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "descricao" TEXT,
    "local" TEXT NOT NULL DEFAULT 'NAO_INFORMADO',
    "status" TEXT NOT NULL DEFAULT 'SALVA',
    "tipo" TEXT NOT NULL,
    "qualidade" TEXT,
    "chance" INTEGER,
    "habilidades" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
