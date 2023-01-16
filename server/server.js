import app from "./app";
import config from "./config/config";
import mongoose from "mongoose";

const { port, db_local } = config;
mongoose.set('useFindAndModify', false);
mongoose
  .connect(db_local, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => {
    app.listen(port, () => console.log(`express server is running on ${port} & Connected to MongoDB using Mongoose`));
  });

