import {fastify} from "fastify"
import {DatabaseMemory} from "./database-memory.js"

const server = fastify();

const database = new DatabaseMemory();

server.get("/user", () => {
    const user = database.list()

    return user
});

server.post("/user", (request, reply) =>{
    const {username, useremail} = request.body;

    database.create({
        username,
        useremail,
    });

    return reply.status(201).send();
});

server.listen({
    port: 3000,
});