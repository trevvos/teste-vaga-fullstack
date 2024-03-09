export class ApiError extends Error {

    public readonly statusCode: number | undefined

    constructor(message: string, statusCode: number){
        super(message)

        this.statusCode = statusCode
    }
}