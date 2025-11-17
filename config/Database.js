import {Sequelize} from 'sequelize';

const db = new Sequelize('db_portfolio_dzaky', 'root','', { //terdiri dari nama database, password database mysql yg pastinya root
    host: 'localhost',
    dialect:'mysql'
});

export default db; 