/**
 * Author:  Daniel Garcia Estevez
 * Created: 17-oct-2022
 */

CREATE TABLE users (id_user varchar (256) primary key,
                    password varchar (256),
                    name varchar (256));

CREATE TABLE images (id int NOT NULL AUTO_INCREMENT,
                     title varchar (256) NOT NULL,
                     description varchar (1024) NOT NULL,
                     keywords varchar (256) NOT NULL,
                     author varchar (256) NOT NULL,
                     creator varchar (256) NOT NULL,
                     capture_date varchar (20) NOT NULL,
                     storage_date varchar (20) NOT NULL,
                     filename varchar (512) NOT NULL,
                     primary key (id),
                     foreign key (creator) references users(id_user));
