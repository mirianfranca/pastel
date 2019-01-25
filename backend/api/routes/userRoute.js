'use strict'

module.exports = function(app) {
    
    var users = require('../controllers/userController')

    app.route('/users')
        .get(users.all)
        .post(users.create)

    // app.route('/users/:id')
    //     .get(users.get)
    //     .put(users.update)
    //     .delete(users.delete)

}