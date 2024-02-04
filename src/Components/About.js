import React, { useRef, useEffect, useState } from 'react';
import './Home.css'

function About(){
    return(
        <div>
            <section>
                <div className="row">
                    <div className="col-lg-6 md-6 sm-12">
                        <img src="img/adnan.png"></img>
                    </div>
                    <div className="col-lg-6 md-6 sm-12">
                        <h2>About Me</h2>
                        <p> I'm Adnan Moriswala, an adept web developer with over 2 years of experience, dedicated to shaping exceptional online experiences in Mumbai. At our core, we specialize in the seamless creation of diverse websites, ranging from visually captivating static sites to tailor-made e-commerce solutions, ensuring secure and user-friendly online shopping experiences. Our proficiency extends to crafting engaging and intuitive blogging platforms, alongside mastering Content Management Systems (CMS) for easily scalable and manageable websites. What sets us apart is our client-centric approach, collaborating closely with you to transform your vision into a functional and visually appealing reality. Staying ahead of technology trends, we ensure your website remains modern, secure, and optimized for peak performance. Recognized as a leading WordPress developer in Mumbai, we leverage the power of this versatile platform to build dynamic and user-friendly websites. </p>
                    </div>
                </div>
            </section>
        </div>
    )
        
}

export default About