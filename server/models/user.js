const mongoose = require('mongoose')

const QuizSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "is required"],
    },
    questions: [{
        type: Object,
        required: [true, "is required"],
        question: {
            type: String,
            required: [true, "is required"],
        },
        options: [{
            type: Array,
            required: [true, "is required"],
            option: {
                type: Boolean,
                required: false,
                default: false,

            }
        }],
    }]
}, 
    { timestamps: true },
)

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "is required"],
        minlength: [
            3,
            "must be at least {MINLENGTH} characters."
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

