import User from './../models/user'
import Game from './../models/game'
export const resolvers = {
    Query: {
        async all() {
            return await User.find()
        },

        async allGames() {
            return await Game.find()
        }
    }
}