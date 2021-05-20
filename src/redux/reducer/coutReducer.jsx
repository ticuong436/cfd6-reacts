let initState = {
    login: JSON.parse(localStorage.getItem('login')),
}
export default function authReducer(state = initState, action) {
    console.log(action);
    return state
}