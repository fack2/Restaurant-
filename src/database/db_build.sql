BEGIN;
DROP TABLE IF EXISTS restaurant CASCADE;
DROP TABLE IF EXISTS details CASCADE;


create table restaurant(
  id serial primary key,
  res_name varchar(100) not null,
  cuisine varchar(100) not null,
  res_img text not null,
location text not null
);

insert into restaurant(res_name,cuisine,res_img,location)
   values ('Roza Crunchy','fast food','/public/image/rozaimg.png','Hebron-Ein sharah'),
('KFC','fast food','/public/image/kfcimg.png','Hebron-Ein sharah'),
('Abu Mazin','traditional','/public/image/Abumazin.jpg','Hebron-Ras Aljora'),
('Tabon Al reef','traditional','/public/image/reefimg.jpg','Hebron-Ras Aljora'),
('Segafredo','cafe','/public/image/segafredo.png','Hebron-Ras Aljora'),
('Q-Candy','cafe','/public/image/Qcandy.jpg','Hebron-Ibn Rushd');

create table details(
 res_id INT  REFERENCES restaurant(id),
 phone text not null,
 delivery text not null,
 facebook text not null,
 menu_img text not null


);

insert into details (phone, delivery,facebook, menu_img)
values('02 221 4839','yes','https://www.facebook.com/RozaCrunchy/','/public/image/rosamenu.jpg'),
('22225922','yes',' https://www.facebook.com/KFC-Hebron-1456433234462574/','/public/image/kfc 1.jpg'),
('22213833','no','https://www.facebook.com/%D9%85%D8%B7%D8%B9%D9%85-%D8%A7%D8%A8%D9%88-%D9%85%D8%A7%D8%B2%D9%86-%D8%A7%D9%84%D8%AE%D9%84%D9%8A%D9%84-297047843646900/','/public/image/Abumazin2.jpg'),
('0593 044 104','yes','https://www.facebook.com/tabonalreef/?ref=br_rs','/public/image/reef1'),
('599067882','no','https://www.facebook.com/Segafredo-Hebron-254121865390478/','/public/image/segafredo2.jpg'),
('0569 301 212','no','https://www.facebook.com/Qcandy/','/public/image/Qcandy1.jpg');
COMMIT;
