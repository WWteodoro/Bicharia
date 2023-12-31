import { IJWTPayload, IJWTRepository } from "../interfaces/IJTWRepository";
import { sign, verify } from "jsonwebtoken" 

require("dotenv").config({ path: ".env"})

export class JWTRepository implements IJWTRepository {
    generate(payload: IJWTPayload): string {
        return sign(payload, process.env.JWT_SECRET!, { 
            expiresIn: '9999 days'
        })
    }  

    verify(key: string): IJWTPayload {
        return verify(key, process.env.JWT_SECRET!) as IJWTPayload;
    }
}