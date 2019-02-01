process.env.NODE_ENV = 'test'

let mongoose = require('mongoose')
let chai = require('chai')
let chaiHttp = require('chai-http')
let app = require('../server')
let should = chai.should()

let User = require('../api/models/user')

chai.use(chaiHttp)

describe('User', () => {
    beforeEach((done) => {
        User.remove({}, (err) => {
            done()
        })
    })


    describe('/GET User', () => {
        it('Should get all users', (done) => {
            chai.request(app)
                .get('/users')
                .end((err, res) => {
                    res.should.have.status(200)
                    res.body.should.be.a('array')
                    res.body.length.should.be.eql(0)
                    done()
                })
        })
    })
    
})