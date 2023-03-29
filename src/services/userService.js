export default class UserService {
    #database

    constructor ({ database }) {
        this.#database = database
    }

    // login
    async getUser(username, password) {
        try {
            const rows = await this.#database.getUser(username)

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
}