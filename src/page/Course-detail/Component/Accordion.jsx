export default function Accordion({ day, title, content }) {
    function toggleContent() {

    }
    return (
        <div className="accordion" onClick={toggleContent} >
            <div className="accordion__title">
                <div className="date">{day}</div>
                <h3>{title}</h3>
            </div>
            <div className="content">
                {content}
            </div>
        </div>
    )
}