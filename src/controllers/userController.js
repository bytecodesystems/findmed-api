export default class UserController {
    #service

    constructor({ service }) {
        this.#service = service
    }

    // login
    async getUser(request, response) {
        const { username, password } = request.body

        try {
            const validated = await this.#service.getUser(username, password)

            response.status(200).json({ validated })
        }
        catch (error) {
            console.error(error)
            response.status(500).json({ message: 'Internal Server Error' })
        }
    }

    // initialize
    static async initialize(dependencies) {
        const controller = new UserController(dependencies)
        return controller
    }
}