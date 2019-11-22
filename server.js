const express = require('express');
const app = express();
const path = require('path');
const PORT = 4200;
const session = require('express-session');

// socket.io
const http = require('http').Server(app);
const io = require('socket.io')(http);


io.on('connection', socket => {
    let previousId;
    const safeJoin = currentId => {
        socket.leave(previousId);
        socket.join(currentId, () => console.log(`Socket ${socket.id} joined room ${currentId}`));
        previousId = currentId;
    }

    socket.on('getQuiz', quizid => {
        safeJoin(quizId);
        socket.emit('quiz', quizes[quizId]);
    });

    socket.on('addQuiz', quiz => {
        quizes[quiz.id] = quiz;
        safeJoin(quiz.id);
        io.emit('quizes', Object.keys(quizes));
        socket.emit('quiz', quiz);
    });

    // socket.on('disconnect', quiz => {
    //     quiz[quiz.id] = quiz;
    //     socket.to(quiz.id).emit('quiz', quiz);
    // });

    io.emit('quizes', Object.keys(quizes));

    console.log(`Socket ${socket.id} has connected`);
});




app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static( __dirname + '/public/dist/public' ));

app.use(session({
    secret: 'lieutenantdang',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}));

require('./server/config/mongoose');
require('./server/config/routes')(app);

app.all('*', (request, response) => {
    response.sendFile(
        path.join(__dirname, 'public/dist/public/index.html')
    );
});

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
