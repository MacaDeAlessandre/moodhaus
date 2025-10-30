import '../css/heroSection.css'


const HeroSection = ({message, slogan}) => {
    return (
        <div className="hero-section">
            <h1>{message}</h1>
            <h2>{slogan}</h2>
        </div>
    )

}
export default HeroSection;