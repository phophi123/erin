create database polar
use polar

create table signup(
"Name" varchar (100),
Surname varchar(100), 
Age int,
Gender varchar(50),
Ethnicity varchar(50),
Email varchar (50),
Cellphone varchar(10) ,
"Password" varchar (100),
);

create table Photos(
[id] smallint identity(1,1) not NULL primary key,
picture varbinary (MAX)
); 

select * from Photos
select * from signup

drop table signup