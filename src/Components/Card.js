import star1 from "../assets/star1.png"



export default function Card(props) {

    let badgeText
    if(props.item.openSpots === 0){
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online"){
        badgeText ="ONLINE"
        

    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={`../images/${props.img}`} className="card--photo"/>
            <div className="card--stats">
                <img src={star1} className="card--star" />
                <span>{props.rating}</span>
                <span className="gray"> ({props.reviewCount})• </span>
                <span className="gray">{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}}