import * as GC from '../controllers/gameController'

export default function routes(app) {
    
    app.route('/games')
        .get(GC.all)
        .post(GC.create)

    app.route('/games/:id')
        .get(GC.get)

}