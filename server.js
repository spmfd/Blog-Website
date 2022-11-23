const path = require('path');
const express = require('express');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const exphbs = require('express-handlebars');
const sequelize = require('./config/connection');
const routes = require('./controllers')

const app = express();
const PORT = process.envPORT || 5000;

const hbs = exphbs.create({});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(_dirname, 'public')));

const sess = {
    secret: process.env.SESSION_SECRET,
    cookie: {
        maxAge: 48 * 60 * 60 * 1000   
    }, 
    resave: false, 
    saveUnitialized: true,
    store: new SequelizeStore({
        db: sequelize,
    }), 
};

app.use(session(sess))

// Set up route middleware
app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log(`Server is active and can be found at http://localhost:${PORT}`)
    })
})