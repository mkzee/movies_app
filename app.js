require("dotenv").config();


const express = require("express");
const app = express();

const connectDb = require("./db/connect")

const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send('hello world');
})


const start = async () => {
    try {
        await connectDb(process.env.MONGO_URI);
        app.listen(PORT, console.log('Server is listening on port ' + PORT))
    } catch (error) {
        console.log(error);
    }
}

start()

