-- CreateTable
CREATE TABLE "_petTouser" (
    "A" TEXT NOT NULL,
    "B" UUID NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_petTouser_AB_unique" ON "_petTouser"("A", "B");

-- CreateIndex
CREATE INDEX "_petTouser_B_index" ON "_petTouser"("B");

-- AddForeignKey
ALTER TABLE "_petTouser" ADD CONSTRAINT "_petTouser_A_fkey" FOREIGN KEY ("A") REFERENCES "pet"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_petTouser" ADD CONSTRAINT "_petTouser_B_fkey" FOREIGN KEY ("B") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
