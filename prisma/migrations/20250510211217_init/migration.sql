-- CreateTable
CREATE TABLE "QuizBatch" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "difficulty" TEXT NOT NULL,
    "questions" JSONB NOT NULL,
    "validFrom" DATETIME NOT NULL,
    "validTo" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "QuizRun" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "batchId" TEXT NOT NULL,
    "score" INTEGER NOT NULL,
    "timeStampMs" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "QuizRun_batchId_fkey" FOREIGN KEY ("batchId") REFERENCES "QuizBatch" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "LeaderboardEntry" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "batchId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "region" TEXT NOT NULL,
    "score" INTEGER NOT NULL,
    "timeStampMs" INTEGER NOT NULL
);
