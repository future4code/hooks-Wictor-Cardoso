import { CustomError } from "./CustomError";

export class InvalidRequest extends CustomError{
    constructor(){
        super(400, "Requisition invalid, one or more parameters required")
    }
}