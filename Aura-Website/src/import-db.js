import mysql from 'mysql2';
import dotenv from 'dotenv';
import fs from 'fs';

dotenv.config();

const { DB_HOST, DB_USER, DB_PASS, DB_NAME, DB_PORT } = process.env;

const connection = mysql.createConnection({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASS,
    port: DB_PORT || 3306,
    multipleStatements: true
});

connection.connect((err) => {
    if (err) {
        console.error('Initial DB connection error:', err);
        process.exit(1);
    }

    console.log('Connected to MySQL server');

    connection.query(`CREATE DATABASE IF NOT EXISTS \`${DB_NAME}\`;`, (err) => {
        if (err) {
            console.error('Error creating database:', err);
            process.exit(1);
        }

        console.log(`Database ${DB_NAME} ensured / created`);

        connection.changeUser({ database: DB_NAME }, (err) => {
            if (err) {
                console.error('Error switching database:', err);
                process.exit(1);
            }

            console.log(`Switched to database: ${DB_NAME}`);

            const sql = fs.readFileSync('./database/auraproject.sql', 'utf8');

            connection.query(sql, (err) => {
                if (err) {
                    if (err.code === 'ER_TABLE_EXISTS_ERROR') {
                        console.log('Tables already exist, skipping import');
                    } else {
                        console.error('Error importing SQL:', err);
                    }
                } else {
                    console.log('Database imported successfully');
                }

                connection.end();
            });
        });
    });
});
