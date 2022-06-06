import './styles/Service.css'
export default function Service({imgURL, caption}){
    return (
        <div className="service">
            <img src={imgURL} alt="{caption} service"/>
            <p>{caption}</p>
        </div>
    )
}