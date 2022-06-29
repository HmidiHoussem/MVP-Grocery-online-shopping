DROP DATABASE IF EXISTS mvpDB;

 create database mvpDB;
USE mvpDB;

CREATE TABLE shopList (
  id int NOT NULL AUTO_INCREMENT,
  title varchar(50) NOT NULL,
  descrip varchar(250) NOT NULL,
  price int NOT NULL,
  img varchar(250),
  PRIMARY KEY (ID)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root -p < server/database-mysql/schema.sql
 *  to create the database and the tables.*/

INSERT INTO shopList (title,descrip,price,img) Values ("Brown Rice","Brown rice is a fantastic, cheap food that provides fiber, vitamins and minerals.",5,"https://www.world-grain.com/ext/resources/Article-Images/2019/03/Brown-rice_Photo-cred-AdobeStock_136742272_E.jpg?t=1552059040&width=1080");
INSERT INTO shopList (title,descrip,price,img) Values ("Oatmeal","It contains an impressive amount of nutrients, including B vitamins, iron, manganese, phosphorus, zinc and magnesium",4,"https://upload.wikimedia.org/wikipedia/commons/3/39/Oatmeal.jpg");
INSERT INTO shopList (title,descrip,price,img) Values ("Canned Beans","contain a significant amount of fiber and a variety of vitamins and minerals, including folate, iron, magnesium and potassium",2.5,"https://hips.hearstapps.com/ghk.h-cdn.co/assets/18/09/bushs-reduced-sodium-pinto-beans.jpg?crop=1xw:0.9996xh;center,top&resize=480:*");
INSERT INTO shopList (title,descrip,price,img) Values ("canned Tuna","a fantastic source of protein, it’s also high in omega-3 fatty acids, which are important for brain health and reducing inflammation ",3,"https://www.eatthis.com/wp-content/uploads/sites/4/2020/12/tuna-fish.jpg");