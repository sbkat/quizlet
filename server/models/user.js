const mongoose = require('mongoose')

const QuizSchema = new mongoose.Schema({
    // how we thought about it...
    title: {
        type: String,
        questions: [{
            question: String,
            required: [true, "is required"],
            answers: [{
                type: String,
                required: [true, "is required"],
                options: [{
                    option: String,
                    type: String,
                    isCorrect: Boolean,
                    isSelected: Boolean,
                }],
            }]
        }]
    },

    // //     type: String,
    // //     required: [true, "is required"],
    // // },
    // time: {
    //     type: Number,
    //     required: [true, "is required"],
    // },
    // question: [{
    //     type: String,
    //     required: [true, "is required"],
    // }],
    // answer: [{
    //     type: String,
    //     required: [true, "is required"],
    // }],
    // correct: {
    //     type: String,
    //     required: [true, "is requied"],
    // },
}, { timestamps: true });

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "is required"],
        minlength: [
            3,
            " username must be at least {MINLENGTH} characters."
        ]
    },
    email: {
        type: String,
        required: [true, "is required"],
        //validation for email...
    },
    password: {
        type: String,
        required: [true, "is required"],
        minlength: [
            5,
            "must be at least {MINLENGTH} characters."
        ]
    },
    quizzes: [QuizSchema],
    
}, { timestamps: true });

const User = mongoose.model('User', UserSchema);
const Quiz = mongoose.model('Quiz', QuizSchema);

