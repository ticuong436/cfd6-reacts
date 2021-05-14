export default function Accordion({ day, course, description }) {
    return (
        <div className="accordion">
            <div className="accordion__title">
                <div className="date">{day}</div>
                <h3>{course}</h3>
            </div>
            <div className="content">
                {description}
            </div>
        </div>
    )
}