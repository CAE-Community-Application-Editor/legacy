--
-- Database Schema:  appschema 
-- Automatically generated sql script for the service UGNM1516G2 backend app, created by the CAE.
-- --------------------------------------------------------

--
-- Table structure for table administrates.
--
CREATE TABLE appschema.administrates (
  admin_id int,
  application_id int,
  CONSTRAINT application_id_PK PRIMARY KEY (application_id)
);

--
-- Table structure for table usage.
--
CREATE TABLE appschema.usage (
  application_id int,
  score int,
  user_id int,
  CONSTRAINT application_id_PK PRIMARY KEY (application_id)
);

--
-- Table structure for table application.
--
CREATE TABLE appschema.application (
  name varchar,
  id int,
  CONSTRAINT id_PK PRIMARY KEY (id)
);

