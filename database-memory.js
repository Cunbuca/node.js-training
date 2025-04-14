import { randomUUID } from "node:crypto"

export class DatabaseMemory{
    #user = new Map()

    create(user){
        const userid = randomUUID();

        this.#user.set(userid, user);
    }

    list(){
        return Array.from(this.#user.values());
    }
}