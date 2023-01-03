import * as jwt from "jsonwebtoken"

export class Authenticator {
    public generateToken = (input: AuthenticationData) =>
    { 
        const token = jwt.sign({id: input.id}, process.env.JWT_KEY as string,{
            expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN
        });
        return token;
    }

    public getData(token: string): AuthenticationData {
        const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
        const result = {
            id: payload.id,
            role: payload.role
        };
        return result;
    }
}

interface AuthenticationData {
    id: string;
}
