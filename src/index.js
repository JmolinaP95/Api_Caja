import app from './app.js';
import {sequelize} from './database/database.js'
import './models/Caja.js'

async function main() {
 
  try {
    await sequelize.sync({force: false});
    //await sequelize.authenticate();
    app.listen(4000);
    console.log("Server on port 4000");
    
  } catch (error) {
    
  }
}

main();
