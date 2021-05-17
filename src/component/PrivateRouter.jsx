import { Redirect, Route } from "react-router";
import useAuth from "../hook/useAuth";

export default function PrivateRouter(prop) {
    let { login } = useAuth()
    if (!login) {
        return <Route>
            <Redirect to='/' />
        </Route>
    }
    return <Route {...prop} />
}