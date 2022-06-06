import './styles/HeroSection.css'
function HeroSection(){
    return(
        <div className='hero-section'>
            <div className="overlay"></div>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Our Services</li>
                    <li>Subscribe</li>
                </ul>
            </nav>
            <h2>We do websites right</h2>
        </div>
    )
}

export default HeroSection;