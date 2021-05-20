import { endpoint } from './config'
const Auth = {
    login(data) {
        return fetch(`${endpoint}/elearning/v4/login`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
    },
    register(data, slug) {
        return fetch(`${endpoint}/elearning/v4/course-register/${slug}`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
    },
    update() { }
}
export default Auth