import Error from "../../page/404"
import Auth from "../../service/auth"
import authReducer from "../reducer/authReducer"
import { ERROR, LOGIN, LOGOUT } from "../type"

export function loginAction(data, success) {
    return async (dispath) => {
        let res = await Auth.login(data)
        if (res.data) {
            dispath({
                type: LOGIN,
                payload: res.data
            })
            success();
        } else if (res.error) {
            dispath({
                type: ERROR,
                payload: res.error
            })

        }
    }
}
export function logoutAction() {
    return {
        type: LOGOUT
    }
}
export function updateAction(data) {
    return async (dispath) => {
        let res = await Auth.update(data)

    }
}