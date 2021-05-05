export default function ProjectList({ image, project_name, makeby_name }) {
    return (
        <a href="#" className="item col-md-6">
            <div className="wrap">
                <div className="cover">
                    <img src={image} alt="" />
                </div>
                <div className="info">
                    <div className="name">{project_name}</div>
                    <div className="makeby">{makeby_name}</div>
                </div>
            </div>
        </a>
    )
}