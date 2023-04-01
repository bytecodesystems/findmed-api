export default class Database {
    #pool

    constructor ({ pool }) {
        this.#pool = pool
    }

    // check if user exists, if true return id
    async loginUser(user) {
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

    // get user data
    async getUser(username) {
        try {
            const [rows] = await this.#pool
                .promise()
                .execute('SELECT * FROM users WHERE username = ?', [username])

            return rows[0]
        }
        catch (error) {
            throw error
        }
    }

    // upload profile image
    async profileImage(id, imageData) {
        try {
            const [rows] = await this.#pool
                .promise()
                .execute('UPDATE users SET img_profile = ? WHERE id = ?', [imageData, id])

            return rows
        }
        catch (error) {
            throw error
        }
    }
}