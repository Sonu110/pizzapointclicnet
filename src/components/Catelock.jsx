import React from 'react'
import './styles.css'
import Catbanner from '../assets/img/cta-banner.png'
import Catsale from '../assets/img/sale-shape.png'
import hero from '../assets/img/hero-bg.jpg'
function Catelock() {
  return (



    <section class="section section-divider white cta" style={{backgroundImage:`url(${hero})`}}>
        <div class="container">

          <div class="cta-content">

            <h2 class="h2 section-title">
              The Foodie Have Excellent Of
              <span class="span">Quality Burgers!</span>
            </h2>

            <p class="section-text">
              The restaurants in Hangzhou also catered to many northern Chinese who had fled south from Kaifeng during
              the Jurchen
              invasion of the 1120s, while it is also known that many restaurants were run by families.
            </p>

            <button class="btn btn-hover">Order Now</button>
          </div>

          <figure class="cta-banner">
            <img src={Catbanner} width="700" height="637" loading="lazy" alt="Burger"
              class="w-100 cta-img"/>

            <img src={Catsale} width="216" height="226" loading="lazy"
              alt="get up to 50% off now" class="abs-img scale-up-anim"/>
          </figure>

        </div>
      </section>




  
    )
}

export default Catelock