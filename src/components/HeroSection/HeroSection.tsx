import React from 'react'
import HeroStyle from "./HeroSection.module.css"

const HeroSection:React.FC = () => {
  return (
    <div className={HeroStyle.hero_container}>
      <h1>Modern furniture for modern living style</h1>
      <div className={HeroStyle.hero_content}>
        <p>
           In unfeeling existence objection immediate repulsive on he in. Imprudence comparison uncommonly me he difficulty diminution resolution. Likewise proposal differed scarcely dwelling as on raillery. 
        </p>
        <p>
September few dependent extremity own continued and ten prevailed attending. Early to weeks we could. Do commanded an shameless we disposing do. Indulgence ten remarkably nor are impression out. 
        </p>
        <p>
Power is lived means oh every in we quiet.
        </p>        
        <div className={HeroStyle.hero_buttons}>
          <button>Request a Quote</button>
          <button>Watch Video</button>
        </div>
        <img src="/hero.png" alt="hero section image"/>
      </div>
    </div>
  )
}

export default HeroSection
