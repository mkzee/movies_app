require("dotenv").config();

const connectDb = require("./db/connect")
const Movie = require("./model/movies")
const movieJson = require("./movies.json")

const start = async () => {
    try {
        await connectDb(process.env.MONGO_URI)
        await Movie.deleteMany();
        await Movie.create(movieJson);
        console.log('SUCCESS!!')
        process.exit(0)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

start();