import { NextFunction, Request, RequestHandler, Response } from "express"

export function resolveController(handleFn: any){
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            return await Promise.resolve(handleFn(req, res, next))
        } catch (e) {
            return next(e)
        }
    }
}