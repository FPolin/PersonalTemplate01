import './style.css'

const TopHeroSection = ({heroImage, title}) => {
    return (
        <div className="overlayMaker">
            <img src={heroImage} className={'overImage'} alt='not found' />
            <h2 className={'hero-title'}>{title}</h2>
        </div>
    )
}

export default TopHeroSection