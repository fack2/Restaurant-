BEGIN;
  DROP TABLE IF EXISTS restaurant
  CASCADE;


create table restaurant
(
  id serial primary key,
  cuisine varchar(100) not null,
  res_name varchar(100) not null,
  res_img text not null,
  location text not null,
  phone text not null,
  delivery boolean not null,
  facebook text not null,
  menu_img text not null
);

insert into restaurant
  (res_name,cuisine,res_img,location, phone, delivery, facebook, menu_img)
values
  ('Roza Crunchy', 'fastfood', 'rozaimg.png', 'Hebron-Ein sharah', '02 221 4839', true, 'RozaCrunchy/', 'rosamenu.jpg'),
  ('KFC', 'fastfood', 'kfcimg.png', 'Hebron-Ein sharah', '22225922', true, 'KFC-Hebron-1456433234462574/', 'kfc 1.jpg'),
  ( 'Abu Mazin', 'traditional' , 'Abumazin.jpg', 'Hebron-Ras Aljora', '22213833', false, '%D9%85%D8%B7%D8%B9%D9%85-%D8%A7%D8%A8%D9%88-%D9%85%D8%A7%D8%B2%D9%86-%D8%A7%D9%84%D8%AE%D9%84%D9%8A%D9%84-297047843646900/', 'Abumazin2.jpg'),
  ('Tabon Al reef', 'traditional' , 'reefimg.jpg', 'Hebron-Ras Aljora', '0593 044 104', true, 'tabonalreef/?ref=br_rs', 'reef2.jpg'),
  ( 'Segafredo', 'cafe', 'segafredo.png', 'Hebron-Ras Aljora', '599067882', false, 'Segafredo-Hebron-254121865390478/', 'segafredo2.jpg'),
  ('Q-Candy', 'cafe' , 'Qcandy.jpg', 'Hebron-Ibn Rushd', '0569 301 212', false, 'Qcandy/', 'Qcandy1.jpg');



COMMIT;
