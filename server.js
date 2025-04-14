import {fastify} from "fastify"

const Server = fastify();

Server.get("/", () =>{
    return "ola mundo";
});

Server.listen({
    port: 3000,
});