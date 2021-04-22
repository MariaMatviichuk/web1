CREATE DATABASE IF NOT EXISTS comm;

USE comm;

CREATE TABLE IF NOT EXISTS userscomm
(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(20),
    comment TEXT,
    data DATETIME
);

INSERT INTO userscomm (name, comment, data)
VALUES
    ('Timon', 'Great! Awesome!', '2021-04-22 17:28:24'),
    ('Maria', 'Thank you!', '2021-04-22 18:14:41'),
    ('Petrosiy', 'Thanks for create this page!', '2021-04-22 23:04:57');

