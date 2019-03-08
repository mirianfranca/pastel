import * as UC from '../controllers/userController'

export default function routes(app) {
    
    app.route('/users')
        .get(UC.all)
        .post(UC.create)

    app.route('/users/:id')
        .get(UC.get)

}