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

    // upload profile image
    async uploadProfileImage(request, response) {
        const { id } = request.params
        const image = request.files.image
        const imageData = image.data

        try {
            const uploaded = await this.#service.uploadProfileImage(id, imageData)

            if (uploaded) {
                response.status(200).json({ uploaded })
            }
            else {
                response.status(404).json({ message: 'User not found' })
            }
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