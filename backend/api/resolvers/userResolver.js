import User from './../models/user'

export const resolvers = {
    Query: {
        async all() {
            return await User.find()
        }
    }
}