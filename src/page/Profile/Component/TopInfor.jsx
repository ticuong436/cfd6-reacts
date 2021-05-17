
import useAuth from '../../../hook/useAuth'
export default function TopInfor({ }) {
    let value = useAuth()
    return (
        <div className="top-info">
            <div className="avatar">
                {/* <span class="text">H</span> */}
                <img src={value.login.avatar} alt="" />
                <div className="camera" />
            </div>
            <div className="name">{value.login.name}</div>
            <p className="des">Thành viên của team CFD1-OFFLINE</p>
        </div>
    )
}