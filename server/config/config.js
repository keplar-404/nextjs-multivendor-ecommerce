import dotenv from "dotenv";
dotenv.config();

// const port = process.env.PORT;
// const db_local = process.env.DB_LOCAL;

const config = {
  port: process.env.PORT,
  db_local: process.env.DB_LOCAL,
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
};
export default config;
 
