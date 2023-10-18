import { NextFunction, Response } from "express"
import { AppError } from "../errors/AppErrors"

export function handleError (err: Error, req: Request, res: Response, next: NextFunction)  {
    if (err instanceof AppError) {
        res.status(err.status).json({
            message: err.message
        })
    } else {

    res.status(500).json({
        message: 'Internal Server Error - ${err.message}'
    })
}
next()

}