require("express-async-errors")
const Movie = require("../model/movies")

const getAllMovies = async (req, res) => {
    const movie = await Movie.find({});
    res.status(200).json(movie);
}

const createMovie = async (req, res) => {
    const movie = await Movie.create(req.body);
    res.status(200).json(movie)
}

const getMovie = async (req, res) => {
    const {id: movieId} = req.params
    const movie = await Movie.findOne({_id: movieId})

    if (!movie) {
        throw new Error('item not found')
    }
    res.status(200).json(movie)
}

const updateMovie = async (req, res) => {
    const {id: movieId} = req.params
    const movie = await findOneAndUpdate({_id: movieId}, req.body, {
        new: true,
        runValidators: true
    })

    if (!movie) {
        throw new Error('item not found')
    }

    res.status(200).json(movie)
}

const deleteMovie = async (req, res) => {
    const {id: movieId} = req.params
    const movie = await Movie.findOneAndDelete({_id: movieId})

    if (!movie) {
        throw new Error('item not found')
    }

    const message = `${movie.name} deleted`
    res.status(200).json({message: message})
}

module.exports = {
    getAllMovies,
    createMovie,
    getMovie,
    updateMovie,
    deleteMovie
}