import { NextFunction, Response } from "express"
import { AppError } from "../errors/AppError"

export function handleError (err: Error, req: Request, res: Response, next: NextFunction)  {
    if (err instanceof AppError) {
        res.status(err.status).json({
            message: err.message
        })
    } else {

    res.status(500).json({
        message: `Mande mensagem pro Suporte(Will) - ${err.message}`
    })
}

    next()

}