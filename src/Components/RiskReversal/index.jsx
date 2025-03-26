import React from 'react'
import './style.css'

export default function RiskReversal() {
  return (
    <div>
      <section className="satisfaction-guarantee-section">
        {/* <div className="satisfaction-guarantee-title">No risk </div> */}
        <div className="satisfaction-guarantee-content">
          <h2>Your Satisfaction, Guaranteed</h2>
          <p>We stand by the quality of our work. If you're not completely satisfied with your new website, we will work with you until it meets your expectations. Our goal is to ensure you are 100% happy with the final product.</p>
        </div>
      </section>

      <section className="risk-reversal-section">
        <div className="risk-reversal-content">
          <h2>Our Risk-Free Promise</h2>

          <div className="risk-reversal-item">
            <h3>Prototype Before Commitment</h3>
            <p>We provide a prototype or design mockup before you commit to the full project, ensuring you’re confident in the direction we're taking your website.</p>
          </div>

          <div className="risk-reversal-item">
            <h3>Pay Per Lead - For first 50 leads</h3>
            <p>As I sign in our cconfidence to deliver results that matter, with no upfront fees. Pay only for the leads we generate for you—up to 50 leads..</p>
          </div>
        </div>
      </section>
    </div>
  )
}
