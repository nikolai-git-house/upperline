import React from 'react'
import './FinancialAidInfo.css'
import SponsorshipForm from '../SponsorshipForm/SponsorshipForm'


function FinancialAid(props){
  return (
    <div className="FinancialAid" id="FinancialAid">
      <div className="content">
        <div className="FinancialAid-left">
          <div className="little-red-thing"></div>
          <div className="left-content">
            <h3>
              {`Our mission is to make excellent computer science education accessible for all students.`}
              <br />
            </h3>
            <p>
              {
                `Upperline Code works with non-profits & partnrs to make our classes accessible to all students, regardless of race, center, or income.`
              }
              <br />
            </p>
            <p>
              {
                `In 2018, 37% of our students received scholarships or financial aid for our classes, where they learned the tools needed to transform their world with code.`
              }
              <br />
            </p>
          </div>
        </div>
        <div className="FinancialAid-right">
          <div className="right-content">
            <div>
              <h4>Tuition & Financial Aid</h4>
              <p>We offer partial and full scholarships for families in need of financial assistance. We take several factors, including family income, into account when determining our scholarship packages.</p>
            </div>
            <div>
              <h4 id="sponsorship">Sponsor Coding Scholarships</h4>
              <p>Upperline works with non-profits and corporate partners to provide access to our classes, reserving approximately 20% of our seats for need-based and diversity-based scholarships.</p>
              <div style={{cursor:'pointer'}} className="button"><SponsorshipForm/></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FinancialAid
