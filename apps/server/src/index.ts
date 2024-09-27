import http from "http"
import {SocketService} from "./socket-service/socket"
import { startMessageConsumer } from "./socket-service/kafka-consumer";
const createServer = async()=>{
    startMessageConsumer();
    const httpserver = http.createServer();
    const socketService = new SocketService()
    const PORT = process.env.PORT ? process.env.PORT : 8000

    socketService.io.attach(httpserver)
    httpserver.listen(PORT,()=>{
    console.log(` server is listening at port ${PORT}`);
    })
    socketService.initListener();
}

createServer()