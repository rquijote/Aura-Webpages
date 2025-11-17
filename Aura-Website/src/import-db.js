import mysql from 'mysql2';
import dotenv from 'dotenv';
import fs from 'fs';

dotenv.config();

const { DB_HOST, DB_USER, DB_PASS, DB_NAME, DB_PORT } = process.env;

const db = mysql.createConnection({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASS,
    database: DB_NAME,
    port: DB_PORT || 3306,
    multipleStatements: true
});

db.connect((err) => {
    if (err) {
        console.error('DB connection error:', err);
        process.exit(1);
    }
    console.log('Connected to database');

    const sql = fs.readFileSync('./database/auraproject.sql', 'utf8');

    db.query(sql, (err) => {
        if (err) {
            if (err.code === 'ER_TABLE_EXISTS_ERROR') {
                console.log('Tables already exist, skipping import');
            } else {
                console.error('Error importing database:', err);
            }
        } else {
            console.log('Database imported successfully');
        }
        db.end();
    });
});
