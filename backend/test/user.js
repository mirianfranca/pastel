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

    describe('/GET:id User', () => {
        it('Should get a user by the given id', done => {
            let user = new User({name: "Test", username: "username", password: "123qwe"})
            user.save((err, user) => {
                chai.request(app)
                    .get('/users/' + user.id)
                    .send(user)
                    .end((err, res) => {
                        res.should.have.status(200)
                        res.body.should.be.a('object')
                        res.body.should.have.property('name').eql('Test')
                        res.body.should.have.property('username').eql('username')
                        res.body.should.have.property('password').eql('123qwe')
                        done()
                })
            })
        })
    })

    describe('/POST User', () => {
        it('Should not post a empty user', done => {
            let user = {}

            chai.request(app)
                .post('/users')
                .send(user)
                .end((err, res) => {
                    res.should.have.status(200)
                    res.body.should.be.a('object')
                    res.body.should.have.property('errors')
                    res.body.errors.should.have.property('name')
                    res.body.errors.should.have.property('username')
                    res.body.errors.should.have.property('password')
                    done()
                })
        })

        it('Should post a user on database', done => {
            let user = {
                name: 'Test',
                username: 'username',
                password: '123456'
            }

            chai.request(app)
                .post('/users')
                .send(user)
                .end((err, res) => {
                    res.should.have.status(200)
                    res.body.should.be.a('object')
                    res.body.should.have.property('message').eql('User successfully added')
                    done()
                })
        })
    })
    
})