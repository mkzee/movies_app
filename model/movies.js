const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Movie name is required'],
        unique: true,
        trim: true
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
        trim: true
    },
    duration: {
        type: Number,
        required: [true, 'duration is required']
    },
    ratings: {
        type: Number
    },
    totalRatings: {
        type: Number
    },
    releaseYear: {
        type: Number,
        required: [true, 'Release year is required']
    },
    releaseDate: {
        type: Date
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    genres: {
        type: [String],
        required: [true, 'Genre is required']
    },
    directors: {
        type: [String],
        required: [true, 'Directors field is required']
    },
    coverImage: {
        type: String,
        required: [true, 'Cover image is required']
    },
    actors: {
        type: [String],
        required: [true, 'Actors field is required']
    },
    price: {
        type: Number,
        required: [true, 'Price is required']
    }
})

const Movie = mongoose.model('Movie', movieSchema)

module.exports = Movie;