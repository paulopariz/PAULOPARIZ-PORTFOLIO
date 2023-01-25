import { http } from "./api";

export default {
    list:() => {
        return http.get('')
    }
}