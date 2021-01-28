const authRouter = require('./auth');

const speech = require('./speech');
//Index of route middleware
const route = (app) => {
    //Route middleware subscribers
    // app.use('/subscribers', subscriberRouter);

    //Route middleware auth
    app.use('/api/auth', authRouter);
    app.use('/api', speech);
};

module.exports = route;
