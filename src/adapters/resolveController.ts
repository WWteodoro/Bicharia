import { NextFunction, Request, RequestHandler, Response } from "express"

export function resolveController(handleFn: any){
    return (req: Request, res: Response, next: NextFunction) => {
        return Promise.resolve(handleFn(req, res, next))
        .catch(e => next(e))
    }
}