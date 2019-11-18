const mongoose = require('mongoose')

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

