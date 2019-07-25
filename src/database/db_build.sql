BEGIN;
  DROP TABLE IF EXISTS restaurant , cuisine
  CASCADE;


create table restaurant
(
  id serial primary key,
  cuisine varchar(100) not null,
  res_name varchar(100) not null,
  location text not null,
  phone text not null,
  delivery boolean not null
);

insert into restaurant
  (res_name,cuisine,location, phone, delivery)
values
  ('Roza Crunchy', 'fastfood', 'Hebron-Ein sharah', '02 221 4839', true),
  ('KFC', 'fastfood', 'Hebron-Ein sharah', '22225922', true),
  ( 'Abu Mazin', 'traditional' , 'Hebron-Ras Aljora', '22213833', false),
  ('Tabon Al reef', 'traditional' , 'Hebron-Ras Aljora', '0593 044 104', true),
  ( 'Segafredo', 'cafe', 'Hebron-Ras Aljora', '599067882', false),
  ('Q-Candy', 'cafe' , 'Hebron-Ibn Rushd', '0569 301 212', false);



COMMIT;
