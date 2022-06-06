import './styles/FooterSection.css';
function FooterSection(){
    return(
        <div className="footer-container">
            <h2>Subscribe to our email list</h2>
            <form>
                <input type="text" placeholder="What's your email?" />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}


export default FooterSection;