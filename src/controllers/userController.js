export default class UserController {
    #service

    constructor({ service }) {
        this.#service = service
    }

    // login
    async loginUser(request, response) {
        const { username, password } = request.body

        try {
            const validated = await this.#service.loginUser(username, password)

            response.status(200).json({ validated })
        }
        catch (error) {
            console.error(error)
            response.status(500).json({ message: 'Internal Server Error' })
        }
    }

    // get user data
    async getUser(request, response) {
        const { username } = request.params

        try {
            const user = await this.#service.getUser(username)

            // response.cookie('userData', JSON.stringify(user), { 
            //     expires: new Date(Date.now() + 3600000),
            //     path: '/'
            // })

            response.status(200).json({ user })
        }
        catch (error) {
            console.error(error)
            response.status(500).json({ message: 'Internal Server Error '})
        }
    }

    // upload profile image
    async uploadProfileImage(request, response) {
        const { id } = request.params
        const { imageData } = request.body

        try {
            const updated = await this.#service.uploadProfileImage(id, imageData)

            response.status(200).json({ updated })
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