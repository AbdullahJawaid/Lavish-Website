import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button'


//style
import "./HomeSection.css"

function HomeSection({
    lightBg, topLine, lightText, lightTextDesc, headline, description, buttonLabel, img, alt, imgStart}) 
{
  return (
    <>
    <div className={lightBg ? "home__section" : "home__section darkBg"}>
        <div className="container">
            <div className="row home__section-row" style={{display:"flex", flexdirection: imgStart === 'start' ? 'row-reverse': 'row'}}>
                <div className="col">
                    <div className="home__home-text-wrapper">
                        <div className="top-line">{topLine}</div>
                        <h1 className={lightText ? 'heading' : 'heading dark'}>{headline}</h1>
                        <p className={lightTextDesc ? "home__subtitle" : 'home__subtitle dark'}>{description}</p>
                        <Link to="/signup">
                            <Button buttonSize='btn--wide' buttonColor='blue'>{buttonLabel}</Button>
                        </Link>
                    </div>
                </div>

                <div className="col">
                    <div className="home__img-wrapper">
                        <img src={img} alt={alt} className='home__home-img' />
                    </div>
                </div>

            </div>
        </div>

    </div>

    </>
  )
}

export default HomeSection