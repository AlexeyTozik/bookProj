import express from "express";
import path from "path";
import mongoose from "mongoose";
import auth from "./routes/auth";
import bodyParser from "body-parser";
import Promise from "bluebird";

dotenv.config();

const app = express();
mongoose.Promise = Promise;
mongoose.connect(process.env.MONGODB_URL, {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });

app.use(bodyParser.json());
app.use('/api/auth', auth);

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(8080, () => {
    console.log("Running on localhost: 8080");
})