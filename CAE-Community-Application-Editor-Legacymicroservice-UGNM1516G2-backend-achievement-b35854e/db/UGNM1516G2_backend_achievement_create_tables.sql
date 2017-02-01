--
-- Database Schema:   
-- Automatically generated sql script for the service UGNM1516G2 backend achievement, created by the CAE.
-- --------------------------------------------------------

--
-- Table structure for table wins.
--
CREATE TABLE .wins (
  user_id int,
  application_id int,
  date datetime,
  CONSTRAINT application_id_PK PRIMARY KEY (application_id)
);

--
-- Table structure for table achievement.
--
CREATE TABLE .achievement (
  score int,
  rank int,
  id int,
  admin_id int,
  application_id int,
  name varchar,
  type int,
  image varchar,
  CONSTRAINT id_PK PRIMARY KEY (id)
);

