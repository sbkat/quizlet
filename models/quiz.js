const mongoose = require('mongoose')

const QuizSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "is required"],
    },
    time: {
        type: number,
        required: [true, "is required"],
    },
    question: [{
        type: String,
        required: [true, "is required"],
    }],
    answer: [{
        type: String,
        required: [true, "is required"],
    }],
}, { timestamps: true });

const Quiz = mongoose.model('Quiz', QuizSchema);

