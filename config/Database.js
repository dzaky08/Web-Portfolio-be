import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const db = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: 'postgres', // <--- HARUS POSTGRES

        // Pengaturan Pool untuk Vercel Serverless
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000 
        },
        
        // Pengaturan Wajib untuk Supabase
        dialectOptions: {
            ssl: {
                require: true, 
                rejectUnauthorized: false
            }
        },
        // Log query hanya di development
        logging: process.env.NODE_ENV === 'development' ? console.log : false,
    }
);

export default db;