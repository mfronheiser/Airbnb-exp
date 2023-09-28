import star1 from "../assets/star1.png";



export default function Card(props) {

    let badgeText
    if(props.item.openSpots === 0){
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online"){
        badgeText ="ONLINE"
    }    

    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
        <img src={props.item.coverImg} className="card--photo" alt=""/>
            <div className="card--stats">
                <img src={star1} className="card--star" alt="" />
                <span className="card--rating">{props.item.rating}</span>
                <span className="gray"> ({props.item.reviewCount}) •  </span>
                <span className="gray">{props.item.location}</span>
            </div>
            <p className="card--title">{props.item.title}</p>
            <p><span className="bold">From ${props.item.price}</span> / person</p>
        </div>
    )
}