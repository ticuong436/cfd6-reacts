import { useHistory } from 'react-router-dom'

export default function useDelayLink() {
    let history = useHistory();
    function delayLink(e) {
        e.preventDefault();
        let href = e.currentTarget.getAttribute('href')
        setTimeout(() => {
            history.push(e.target.href)
            document.querySelector('.loading-page').style.transform = 'scale(0)';
        }, 1000)
        document.body.classList.remove('menu-is-show')
    }
    return delayLink

}