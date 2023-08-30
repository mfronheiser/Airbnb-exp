import katie from "../Images/katie.png"
import star1 from "../Images/star1.png"

export default function Card(props) {
    return (
        <div className="card">
            <img src={katie} className="card--image" alt="" />
            <div className="card--stats">
                <img src={star1} className="card--star" />
                <span>{props.rating}</span>
                <span className="gray"> ({props.reviewCount})• </span>
                <span className="gray">{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}