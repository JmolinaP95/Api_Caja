import app from './app.js';
import {sequelize} from './database/database.js'
//import './models/Caja.js'

async function main() {
 
  try {
    await sequelize.sync();
    //await sequelize.authenticate();
    app.listen(3007);
    console.log("Server on port 3007");
    
  } catch (error) {
    
  }
}

main();
