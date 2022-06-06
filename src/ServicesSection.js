import ServiceBlock from './Service';
import './styles/ServicesSection.css';
function ServicesSection(){
    return(
        <div className="services">
            <h3>Our Services</h3>
            <div className="container">
            <ServiceBlock
            imgURL={'https://assets.codepen.io/6060109/agency-service-1.png'}
            caption={'Web Design'}
            />
            <ServiceBlock 
            imgURL={'https://assets.codepen.io/6060109/agency-service-2.png'}
            caption={'ECommerce'}
            />
            <ServiceBlock 
            imgURL={'https://assets.codepen.io/6060109/agency-service-3.png'}
            caption={'Automation'}
            />
            </div>
        </div>
    )
}

export default ServicesSection;