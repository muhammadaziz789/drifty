import { request } from "services/http-client";

const carService = {
    getList: () => request.get("/cars.json"),
}

export default carService