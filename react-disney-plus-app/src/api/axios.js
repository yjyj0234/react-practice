import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: "ccebb90bf85a9a23bbedf42156c8f40d",
        language: "ko-KR"
    }
})

export default instance;