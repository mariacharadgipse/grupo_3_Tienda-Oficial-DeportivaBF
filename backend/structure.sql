CREATE DATABASE tiendadeportiva;
use tiendadeportiva;

CREATE TABLE `products` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `name` VARCHAR(255) NOT NULL,
   `description` VARCHAR(255) NOT NULL,
   `image` VARCHAR(100) NOT NULL,
   `idCategoryProduct` INT NOT NULL,
   `price` DECIMAL NOT NULL,
   `discount` TINYINT NOT NULL,
   `idColor` INT NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `categoryProducts` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `nameCategoryProduct` VARCHAR(255) NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `users` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `email` VARCHAR(255) NOT NULL,
   `imageUser` VARCHAR(255) NOT NULL,
   `firstName` VARCHAR(100) NOT NULL,
   `lastName` VARCHAR(100) NOT NULL,
   `password` VARCHAR(255) NOT NULL,
   `idcategoryUser` INT NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `categoryUsers` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `nameCategoryUser` VARCHAR(255) NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `productUsers` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `idProduct` INT NOT NULL,
   `idUser` INT NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `colors` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `nameColor` VARCHAR(255) NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `carrito` (
   `idCarrito` INT NOT NULL AUTO_INCREMENT,
   `idUser` INT NOT NULL,
   `fecha` DATE NOT NULL,
   PRIMARY KEY (`idCarrito`, `idUser`)
);

CREATE TABLE `ventas` (
   `idVentas` INT NOT NULL AUTO_INCREMENT,
   `idCarrito` INT NOT NULL,
   `total` DECIMAL NOT NULL,
   PRIMARY KEY (`idVentas`, `idCarrito`)
);

CREATE TABLE `detalle` (
   `idDetalle` INT NOT NULL AUTO_INCREMENT,
   `idVenta` INT NOT NULL,
   `idProduct` INT NOT NULL,
   `cantidad` INT NOT NULL,
   `precioProduct` DECIMAL NOT NULL,
   PRIMARY KEY (`idDetalle`)
);


ALTER TABLE `products` ADD CONSTRAINT `FK_61b019db-7019-444c-bec6-7162180647aa` FOREIGN KEY (`idCategoryProduct`) REFERENCES `categoryProducts`(`id`)  ;

ALTER TABLE `products` ADD CONSTRAINT `FK_6c5d8c3a-3da1-47e6-a2ab-2ec868a035dd` FOREIGN KEY (`idColor`) REFERENCES `colors`(`id`)  ;

ALTER TABLE `users` ADD CONSTRAINT `FK_77497db2-18c9-4a56-8d5f-6eab4e042018` FOREIGN KEY (`idcategoryUser`) REFERENCES `categoryUsers`(`id`)  ;

ALTER TABLE `productUsers` ADD CONSTRAINT `FK_f90f5dc2-6753-47d7-9596-877a49390958` FOREIGN KEY (`idProduct`) REFERENCES `products`(`id`)  ;

ALTER TABLE `productUsers` ADD CONSTRAINT `FK_5e283381-3b6d-4d95-9623-6fabecb89917` FOREIGN KEY (`idUser`) REFERENCES `users`(`id`)  ;

ALTER TABLE `carrito` ADD CONSTRAINT `FK_a353eb37-4a0f-49d7-bf16-62df8d68fc65` FOREIGN KEY (`idUser`) REFERENCES `users`(`id`)  ;

ALTER TABLE `ventas` ADD CONSTRAINT `FK_74bddb38-923d-4f1b-9c0d-8a2f28d0313a` FOREIGN KEY (`idCarrito`) REFERENCES `carrito`(`idCarrito`)  ;

ALTER TABLE `detalle` ADD CONSTRAINT `FK_6c271b4a-5b8a-4878-ab21-43cbae89563a` FOREIGN KEY (`idVenta`) REFERENCES `ventas`(`idVentas`)  ;

ALTER TABLE `detalle` ADD CONSTRAINT `FK_ab79f345-5e4b-43d1-b9d6-40ed9625c9a8` FOREIGN KEY (`idProduct`) REFERENCES `products`(`id`)  ;
