import { Sequelize } from "sequelize";

const conectarBD = new Sequelize('database_citas', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
  });

  export default conectarBD;