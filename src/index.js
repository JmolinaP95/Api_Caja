import app from './app.js';
import {sequelize} from './database/database.js'
import './models/Caja.js'

async function main() {
 
  try {
    await sequelize.sync({force: false});
    //await sequelize.authenticate();
    app.listen(3000);
    console.log("Server on port 3000");
    
  } catch (error) {
    
  }
}

main();
