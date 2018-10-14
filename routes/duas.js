module.exports = function(app) {

    app.get('/duas/list', (req, res) => {
        // just for testing purposes
        var duas = {
            0: 'Dua Kumayl',
            1: 'Dua Tawassul'
        }
        res.send(duas)
    })

}
