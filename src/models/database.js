export default class Database {
    #pool

    constructor ({ pool }) {
        this.#pool = pool
    }

    // check if user exists, if true return id
    async getUser(user) {
        try {
            const [rows] = await this.#pool
                .promise()
                .execute('SELECT password FROM users WHERE username = ?', [user])
            
            return rows
        }
        catch (error) {
            throw error
        }
    }
}