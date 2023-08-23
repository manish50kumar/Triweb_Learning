CREATE DATABASE mysql_workbench;

use mysql_workbench;


create TABLE teacher(
id int(11) NOT null AUTO_INCREMENT PRIMARY KEY, 
teacher_name varchar(255) NOT null,
mobile varchar(100) NOT null    
);


CREATE TABLE classes(
id int(11) not null AUTO_INCREMENT,
class_name varchar(100) not null,
teacher_id int(11) NOT null,
PRIMARY KEY(id),
FOREIGN KEY(teacher_id) REFERENCES teacher(id)   
);

CREATE TABLE students(
id int not null AUTO_INCREMENT,
student_name varchar(100) not null,
mobile varchar(20) default 0,
class_id int NOT null,
PRIMARY KEY(id),
FOREIGN KEY(class_id) REFERENCES classes(id)   
);

create table demo(id int(10),name varchar(20),email varchar(20),mobile int(12));


ALTER table demo CHANGE id demo_id int(11) NOT null;

 drop table demo;
 
 INSERT INTO teacher(mobile, teacher_name) VALUES('9898989898','Ravi');
INSERT INTO teacher(mobile, teacher_name) VALUES('9898989897','Rakesh');
INSERT INTO teacher(mobile, teacher_name) VALUES('9898989896','Mohan');
INSERT INTO teacher(mobile, teacher_name) VALUES('9898989895','Amit');
   
select * from teacher;   


INSERT into classes(class_name,teacher_id) VALUES('Class One',1);
   INSERT into classes(class_name,teacher_id) VALUES('Class Two',2);
   INSERT into classes(class_name,teacher_id) VALUES('Class Three',1);
   INSERT into classes(class_name,teacher_id) VALUES('Class Four',3);
    INSERT into classes(class_name,teacher_id) VALUES('Class Five',3);
    
 select * from classes;   
 
 INSERT into students(id,student_name,class_id,mobile) VALUES(1,'Akarsh',2,'8787878781');
   INSERT into students(id,student_name,class_id,mobile) VALUES(2,'DJY',1,'8787878782');
   INSERT into students(id,student_name,class_id,mobile) VALUES(3,'Kush',2,'8787878783');
   INSERT into students(id,student_name,class_id,mobile) VALUES(4,'Debjit',3,'8787878784');
   INSERT into students(id,student_name,class_id,mobile) VALUES(5,'Harsh',3,'8787878785');
   INSERT into students(id,student_name,class_id,mobile) VALUES(6,'Aditya',2,'8787878786');

select * from students;
update classes SET class_name="Class Four" where id=4;

SELECT * from students WHERE class_id=3;

select * from students where class_id = 2 and mobile=8787878783;

 select * from students where class_id = 2 or mobile=8787878783;
 
 SELECT * FROM `students` WHERE class_id IN (2,3);
 
 SELECT student_name FROM `students` WHERE id = 1;

SELECT student_name , mobile FROM `students` WHERE id = 1;

SELECT student_name as NameOfStudent,mobile as MobileNumber FROM `students` WHERE id = 1;

select st.* FROM students st where id = 2;

select st.student_name FROM students st where st.id = 2;

select st.student_name,cl.class_name FROM students st INNER JOIN classes cl ON st.class_id = cl.id 
     where st.id = 2;
     
select st.student_name,cl.class_name FROM students st INNER JOIN classes cl ON st.class_id = cl.id ;     
     
     select st.student_name,cl.class_name, t.teacher_name as ClassTeacher FROM students st 
     INNER JOIN classes cl ON st.class_id = cl.id 
     INNER JOIN teacher t on cl.teacher_id = t.id;
     
     select * from students where class_id <> 6;
     
     select * from students where class_id <> 6 order by class_id;
   select * from students where class_id <> 6 order by class_id asc;
   select * from students where class_id <> 6 order by class_id desc;
     
     create TABLE demo_teacher(
     id int(11) NOT null AUTO_INCREMENT PRIMARY KEY, 
     teacher_name varchar(255) NOT null,
     mobile varchar(100) NOT null,
     salary int (15) NOT null 
     );
     
     
     INSERT INTO demo_teacher(mobile, teacher_name,salary) VALUES('9898989898','Ravi',50000);
    INSERT INTO demo_teacher(mobile, teacher_name,salary) VALUES('9898989892','Rajiv',50000);
   INSERT INTO demo_teacher(mobile, teacher_name,salary) VALUES('9898989897','Rakesh',54000);
   INSERT INTO demo_teacher(mobile, teacher_name,salary) VALUES('9898989896','Mohan',45000);
   INSERT INTO demo_teacher(mobile, teacher_name,salary) VALUES('9898989895','Amit',51000);

select * from demo_teacher;

SELECT COUNT(*) as total_row FROM demo_teacher; 

SELECT SUM(salary) as total_Salary FROM demo_teacher; 

SELECT AVG(salary) as Average_Salary FROM demo_teacher;  

  SELECT MAX(salary) as MAX_Salary FROM demo_teacher;
  
   SELECT MIN(salary) as MIN_Salary FROM demo_teacher; 






