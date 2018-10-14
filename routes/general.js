module.exports = function (app) {

    app.get('/', (req, res) => res.send('Hello, world!'))

    app.get('/users/:userId', (req, res) => {
        console.log(req.params['userId']);
    })

}