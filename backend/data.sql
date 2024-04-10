 INSERT INTO categoryproducts (id, nameCategoryProduct) VALUES (1,'calzados'), (2,'accesorios'), (3,'indumentaria');

INSERT INTO colors (id, nameColor) VALUES (1, 'blanco'), (2, 'Negro'), (3, 'Gris'), (4, 'Rojo'), (5, 'Azul'), (6, 'Verde'), (7, 'Amarillo'), (8, 'Naranja'), (9, 'Morado'), (10, 'Rosa'), (11, 'Marrón'), (12, 'Beige');

INSERT INTO `categoryusers` (id, nameCategoryUser) VALUES (1,'administrador'), (2,'vendedor'), (3,'cliente');


INSERT INTO products (name, description, image, idCategoryProduct, price, discount, idColor)
VALUES ('nisl venenatis', 'nisl venenatis  pelota', 'image2.png', 2, 8800, 0, 1), ('sitio de', 'sit', 'image3.png', 1, 2376, 10, 2), ('morbi', 'viverra pede ac diam cras pellentesque', 'image5.png', 3, 3633, 5, 7), ('camiseta selección argentina', 'at lorem integer tincidunt ante', 'image6.png', 2, 10000, 20, 10), ('Raquetas Yonex', 'raqueta orientada al control. Combina la precisión de efectos con una potente velocidad.', '1705198292077-img-raqueta_yonex.jpg', 3, 40500, 2, 9), ('Canillera Puma Evoforce', 'El modelo evoFORCE III es una canillera ligera y altamente protectora para entrenar y jugar partidos\r\nPosee ajuste de velcro.', '1705198887419-img-canilleras_futbol.jpg', 3, 14000, 10, 4);

INSERT INTO users (email, imageUser, firstName, lastName, password, idcategoryUser) VALUES 
('hpearch0@geocities.com', 'image5.jpg', 'Harwilll', 'Pearch', 'xX3!EgCMPO', 2),
('ecalan1@arizona.edu', 'image7.jpg', 'Elias', 'Calan', 'sR7&R/B.', 2),
('pdetoile2@yale.edu', 'image7.jpg', 'Poppy', 'Detoile', 'aK5<gXlW/9XIub', 1),
('cmckim3@paginegialle.it', 'image10.jpg', 'Cathyleen', 'McKim', 'jQ8(KLel', 3),
('dcaslake4@timesonline.co.uk', 'image6.jpg', 'Dalis', 'Caslake', 'xB8=7ChFU~', 1),
('nmaddrah5@tiny.cc', 'image9.jpg', 'Niel', 'Maddrah', 'cH6&kEAU', 3);
