create database studentdb;
use studentdb;
CREATE TABLE student (
    username VARCHAR(25),
    password VARCHAR(25)
);

insert into student values
("John","ver@123"),
("Linda","verzeo"),
("Finn","zeo123");

select * from student;

CREATE TABLE info (
    stdname VARCHAR(25),
    stdid INT,
    PRIMARY KEY (stdid),
    stdc VARCHAR(20),
    stdy INT,
    stda INT
);


insert into info values
("John P",3423,"Maths",2020,45),
("Linda M",1222,"Science",2019,65),
("Finn B",2344,"Biology",2018,78);



