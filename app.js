require("dotenv").config();


const express = require("express");
const app = express();

const movieRouter = require("./routes/movies");
const connectDb = require("./db/connect");
const errorHandlerMiddleware = require("./middleware/errorhandler");

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/movies', movieRouter);
app.use(errorHandlerMiddleware);

const start = async () => {
    try {
        await connectDb(process.env.MONGO_URI);
        app.listen(PORT, console.log('Server is listening on port ' + PORT));
    } catch (error) {
        console.log(error);
    }
}

start();

