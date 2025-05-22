-- CreateTable
CREATE TABLE `Today` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `link` VARCHAR(191) NOT NULL DEFAULT '#',
    `league` VARCHAR(191) NULL,
    `leagueLogo` VARCHAR(191) NULL,
    `teamA` VARCHAR(191) NULL,
    `teamAImg` VARCHAR(191) NULL,
    `teamB` VARCHAR(191) NULL,
    `teamBImg` VARCHAR(191) NULL,
    `scoreA` VARCHAR(191) NULL,
    `scoreB` VARCHAR(191) NULL,
    `matchTime` VARCHAR(191) NULL,
    `matchStatus` VARCHAR(191) NULL,
    `matchDate` VARCHAR(191) NULL,
    `channel` VARCHAR(191) NOT NULL DEFAULT 'Not specified',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Tomorrow` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `link` VARCHAR(191) NOT NULL DEFAULT '#',
    `league` VARCHAR(191) NULL,
    `leagueLogo` VARCHAR(191) NULL,
    `teamA` VARCHAR(191) NULL,
    `teamAImg` VARCHAR(191) NULL,
    `teamB` VARCHAR(191) NULL,
    `teamBImg` VARCHAR(191) NULL,
    `matchTime` VARCHAR(191) NULL,
    `matchStatus` VARCHAR(191) NULL,
    `matchDate` VARCHAR(191) NULL,
    `channel` VARCHAR(191) NOT NULL DEFAULT 'Not specified',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Yesterday` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `link` VARCHAR(191) NOT NULL DEFAULT '#',
    `league` VARCHAR(191) NULL,
    `leagueLogo` VARCHAR(191) NULL,
    `teamA` VARCHAR(191) NULL,
    `teamAImg` VARCHAR(191) NULL,
    `teamB` VARCHAR(191) NULL,
    `teamBImg` VARCHAR(191) NULL,
    `scoreA` VARCHAR(191) NULL,
    `scoreB` VARCHAR(191) NULL,
    `matchTime` VARCHAR(191) NULL,
    `matchStatus` VARCHAR(191) NULL,
    `matchDate` VARCHAR(191) NULL,
    `channel` VARCHAR(191) NOT NULL DEFAULT 'Not specified',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
