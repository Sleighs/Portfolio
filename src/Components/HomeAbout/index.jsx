import React from 'react'
import './style.css'

export default function HomeAbout() {
  return (
    <div className="home-about__container">
      <div className="home-services-preview--content">
        <div className="section-header section-header-first" id="about">
        <h3 className="section-title"><strong>Tailored Web Solutions</strong></h3>
         </div>
        <div className="home-services-preview--subtitle">Fast | Efficient | Professional</div>

        <div style={{display: 'none'}}>
          When it comes to Search Engine Optimization, we don’t waste your money or time on needless trial and error, because we already know what works and what doesn’t! Our results are guaranteed – and if we can’t guarantee results, we won’t board you as a client.
        </div>

        <div className="home-services-preview--title-container">
          <div className="home-services-preview--description">
            With a dedication to a philosophy of lifelong learning, I'm a full stack developer with a strong passion passion for all facets of digital marketing and high-performance web development. The blend of creativity, logic, and endless opportunities for discovery fuels my enthusiasm for this field.
          </div>
        </div>

        <div className="home-services-preview--items">
          <div className="home-services-preview--item">
            <div className="home-services-preview--item-icon">
              STRATEGIZE
            </div>
            <div className="home-services-preview--item-title">
              Research & Discovery with Clear Goals
            </div>
            <div className="home-services-preview--item-description">
              Creating an industry-leading website is about much more than “making it look pretty.” Before we start any website build, we always take a look at what your competitors are doing, establish your audience, and define your goals. This makes sure we deliver a site that not only speaks directly to your customer but makes you the obvious choice over the competition.            
            </div>
          </div>

          <div className="home-services-preview--item">
            <div className="home-services-preview--item-icon">
              DESIGN & DEVELOP
            </div>
            <div className="home-services-preview--item-title">
              A Perfect Balance of Beauty, Form, and Function
            </div>
            <div className="home-services-preview--item-description">
              We’re on a mission to craft dynamic web solutions that blaze a clear trail, guiding your audience straight to your call to action. It’s all tailored just for you –  captivating content, sleek design,  and applications like custom databases or customer web portals. Throughout this dynamic journey, you’ll be at the forefront, ensuring we align with your business goals.
            </div>
          </div>

          <div className="home-services-preview--item">
            <div className="home-services-preview--item-icon">
              GROWTH
            </div>
            <div className="home-services-preview--item-title">
              Digital Marketing for Business Growth
            </div>
            <div className="home-services-preview--item-description">
              Utilize our digital marketing services to maximize the potential of your company. We offer pertinent material, incredibly tailored interactions, and conversion-boosting data-driven insights. Our strategies are designed to drive sustained growth, helping you reach and engage with your target audience effectively.
            </div>
          </div>

          
          <div className="home-services-preview--item">
            <div className="home-services-preview--item-icon">
              REPUTATION
            </div>
            <div className="home-services-preview--item-title">
              Reputation Management to Protect Your Brand
            </div>
            <div className="home-services-preview--item-description">
              <p>Potential clients use your internet reputation as a trust indicator when deciding whether or not to do business with you. What would you say about your company’s reputation is?</p>

              <p>Let us take care of that.</p>
            </div>
          </div>

          
          <div className="home-services-preview--item">
            <div className="home-services-preview--item-icon">
              SEO
            </div>
            <div className="home-services-preview--item-title">
              Search Engine Optimization for Maximum Visibility
            </div>
            <div className="home-services-preview--item-description">
            SEO is an excellent way to build brand trust and awareness, while generating quality website traffic. Optimization strategies are used to achieve long-term results without the need for ongoing investment. Keep your brand ahead of its competition, and watch your revenue grow.
            </div>
          </div>

          <div className="home-services-preview--item">
            <div className="home-services-preview--item-icon">
              SUPPORT
            </div>
            <div className="home-services-preview--item-title">
              Ongoing Support and Optimization
            </div>
            <div className="home-services-preview--item-description">
              A great website is never finished, and it's designed so you can easily manage your content updates. But you're not alone in this! Our team is ready to support you in optimizing your online presence and to explore further marketing opportunities.
            </div> 
          </div>





          {/*    
            <div className="home-services-preview--item">
            <div className="home-services-preview--item-icon">
             
            </div>
            <div className="home-services-preview--item-title">
              Growth
            </div>
            <div className="home-services-preview--item-description">
              Utilize our digital marketing services to maximize the potential of your company. We offer pertinent material, incredibly tailored interactions, and conversion-boosting data-driven insights.
            </div>
          </div>
          
          <div className="home-services-preview--item">
            <div className="home-services-preview--item-icon">
              
            </div>
            <div className="home-services-preview--item-title">
              Organic Search Engine Optimization
            </div>
            <div className="home-services-preview--item-description">
              SEO is an excellent way to build brand trust and awareness, while generating quality website traffic. Optimization strategies are used to achieve long-term results without the need for ongoing investment. Keep your brand ahead of its competition, and watch your revenue grow.
            </div>        
          </div>

          <div className="home-services-preview--item">
            <div className="home-services-preview--item-icon">
              
            </div>
            <div className="home-services-preview--item-title">
              Design
            </div>
            <div className="home-services-preview--item-description">
              With the help of our graphic design, custom website design, and development services, you can take your company to new heights. We concentrate on providing what is most important to your business.
            </div>
          </div>
          
          <div className="home-services-preview--item">
            <div className="home-services-preview--item-icon">
             
            </div>
            <div className="home-services-preview--item-title">
              Development
            </div>
            <div className="home-services-preview--item-description">
              Our expertise extends to custom solutions for feature-rich websites or applications and covers the most popular CMS systems, including WordPress, Drupal, and Magento.
            </div>
            <div className="home-services-preview--item-button">
              <div>Pulse your business</div>
              <div className="home-services-preview--item-button-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-right" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"/>
                </svg>
              </div>
            </div>
          </div>
          <div className="home-services-preview--item">
            <div className="home-services-preview--item-icon">
              
            </div>
            <div className="home-services-preview--item-title">
              Managed Services
            </div>
            <div className="home-services-preview--item-description">
              With our dedication to continual monitoring, take your online presence to the next level. To maintain optimal performance at all times, dynamic websites require ongoing maintenance.
            </div>
            <div className="home-services-preview--item-button">
              <div>Pulse your business</div>
              <div className="home-services-preview--item-button-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-right" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"/>
                </svg>
              </div>
            </div>
          </div> 
          */}

        </div>
      </div>
    </div>
  )
}
