export default class UserService {
    #database

    constructor ({ database }) {
        this.#database = database
    }

    // login
    async loginUser(username, password) {
        try {
            const rows = await this.#database.loginUser(username)

            if (rows.length > 0) {
                return password === rows[0].password ? true : false
            }
            else {
                return false
            }
        }
        catch (error) {
            throw error
        }
    }

    // get user data
    async getUser(username) {
        try {
            const user = await this.#database.getUser(username)
            
            return user
        }
        catch (error) {
            throw error
        }
    }

    // upload profile image
    async uploadProfileImage(id, imageData) {
        try {
            const updated = await this.#database.profileImage(id, imageData === undefined ? null : imageData)

            return updated
        }
        catch (error) {
            throw error
        }
    }
}