import EndPoints from "../constants/EndPoints"
import { getToken } from "./auth"

const getHomeData = async () => {
    const token = getToken();
    const response = await fetch(EndPoints.home, {
        method:'GET',
        headers: {
            'Authorization': `Token ${token}` 
        }
    })
    return response
}

export {getHomeData}