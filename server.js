// const express = require('express');
// const app = express();
// const path = require('path');

// app.use(express.json());

// require('./server/config/mongoose');
// require('./server/config/routes')(app);
// app.use(express.static( __dirname + '/public/dist/public' ));

// app.listen(5000, () => console.log('listening on port 5000'));




const express = require('express'),
      session = require('express-session'),
      mongoose = require('mongoose'),
      flash = require('express-flash'),
      bcrypt = require('bcrypt');

mongoose.connect('mongodb://localhost/login_reg', { useNewUrlParser: true });
const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, minlength: 3 },
    email: { type: String, required: true, minlength: 4 },
    password: { type: String, required: true, minlength: 8 },
}, { timestamps: true })
const User = mongoose.model('User', UserSchema);

const app = express();

app.use(flash());
app.use(express.static(__dirname + '/static'));
app.use(session({
    secret: 'lieutenantdang',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get('/', (req, res) => {
    res.render('index');
});
app.post('/register', (req, res) => {
    User.find({ email: req.body.email })
        .then(user => {
            console.log('searching for user in db... =>', user)
            if (user.length == 0) {
                bcrypt.hash(req.body.password, 10)
                    .then(hashed_password => {
                        const newUser = new User({
                            first_name: req.body.first_name,
                            last_name: req.body.last_name,
                            email: req.body.email,
                            password: hashed_password,
                            birthday: req.body.birthday
                        })
                        newUser.save()
                            .then(() => {
                                User.findById(newUser._id)
                                    .then(user => {
                                        req.session.user_id = user._id;
                                        req.session.email = user.email;
                                        req.session.username = user.username;
                                        res.redirect('/')
                                    })
                                    .catch(err => {
                                        console.log('error adding to session..', err);
                                        for (var key in err.errors) {
                                            req.flash('registration', err.errors[key].message);
                                        }
                                        res.redirect('/');
                                    })
                            })
                            .catch(err => {
                                console.log('derrs an error..', err);
                                for (var key in err.errors) {
                                    req.flash('registration', err.errors[key].message);
                                }
                                res.redirect('/');
                            });
                    })
                    .catch(err => {
                        console.log('cant bcrypt password');
                        for (var key in err.errors) {
                            req.flash('registration', err.errors[key].message);
                        }
                        res.redirect('/');
                    })
            }
            else {
                console.log('email in use, choose another')
                // ** whats happening **
                res.redirect('/');

            }
        })
        .catch(err => {
            console.log('derrs an error..', err);
            for (var key in err.errors) {
                req.flash('registration', err.errors[key].message);
            }
            res.redirect('/');
        });
});
app.post('/login', (req, res) => {
    console.log('login password', req.body.password);
    console.log('login email', req.body.email);
    bcrypt.hash(req.body.password, 10)
        .then(hashed_password => {
            console.log('hashed pass', hashed_password)
            User.find({ email: req.body.email })
                .then(user => {
                    console.log('useruser', user);
                    bcrypt.compare(req.body.password, user[0].password)
                        .then(result => {
                            console.log('we init!');
                            req.session.user_id = user[0]._id;
                            req.session.email = user[0].email;
                            req.session.first_name = user[0].first_name;
                            res.redirect('/dashboard');
                        })
                        .catch(err => {
                            for (var key in err.errors) {
                                req.flash('registration', err.errors[key].message);
                            }
                            res.redirect('/');
                        });
                })
                .catch(err => {
                    for (var key in err.errors) {
                        req.flash('registration', err.errors[key].message);
                    }
                    res.redirect('/');
                })
        })
        .catch(err => {
            for (var key in err.errors) {
                req.flash('registration', err.errors[key].message);
            }
            res.redirect('/');
        });
});

app.get('/dashboard', (req, res) => {
    if (req.session.user_id == null) {
        console.log('sign in mate!')
        res.redirect('/')
    };
    console.log('current session id', req.session.user_id);
    res.render('dashboard');
});

app.listen(8000, () => console.log('listening to port 8000'));