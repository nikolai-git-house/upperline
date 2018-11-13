import React from 'react'
import OurInstructors from '../../components/OurInstructors/OurInstructors'
import Navbar from '../../components/Navbar/Navbar'
import FullWidthHero from '../../components/FullWidthHero/FullWidthHero'
import Pattern from '../../components/Pattern/Pattern'
import FinancialAid from '../../components/FinancialAidInfo/FinancialAidInfo'
import MissionVision from '../../components/MissionVision/MissionVision'
import LogoFarm from '../../components/LogoFarm/LogoFarm'
import Footer from '../../components/Footer/Footer'
import HalfHero from '../../components/HalfHero/HalfHero'
import danny from '../../images/Danny.jpg'
import taylor from '../../images/Taylor.jpg'
import jolson from '../../images/JOlson.jpg'
import FAQLong from '../../components/FAQLong/FAQLong'
import {getFAQs} from '../../helpers/faq'
import config from '../../config'


class FAQs extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      faqstudent : [],
      faqschool:[],
      faqbusiness:[],
      faqnonprofits:[]
    }
  }

  componentDidMount(){
    window.scrollTo(0, 0);
    window.gapi.load('client', this.start);
  }

  onLoad = (data, error) => {
    if (data) {
      console.log(data.faqs)
      const faqstudent = data.faqs.filter(faq=>{
        return(faq.type=="students")
      });
      const faqschool = data.faqs.filter(faq=>{
        return(faq.type=="schools")
      });
      const faqbusiness = data.faqs.filter(faq=>{
        return(faq.type=="business")
      });
      const faqnonprofits = data.faqs.filter(faq=>{
        return(faq.type=="nonprofits")
      });

      this.setState(prevState => ({
        faqstudent: faqstudent,
        faqschool: faqschool,
        faqbusiness:faqbusiness,
        faqnonprofits:faqnonprofits
      }))
    }
    else {
      this.setState({ error });
    }
  }

  start = () => {
    window.gapi.client
      .init({
        apiKey: config.apiKey,
        discoveryDocs: config.discoveryDocs
      })
      .then(() => {
        getFAQs(this.onLoad)
      });
  };


  render(){
    const {faqstudent, faqschool, faqbusiness, faqnonprofits} = this.state
    return(
      <div className="FAQs" id="faqs">
        <Navbar active="about" />
        <FullWidthHero
          pattern="yellow_tiles"
          background = {{
            minHeight:'500px',
            paddingTop:'184px'
            }}
          muted_text = "About"
          title="Frequently Asked Questions"
          title_style={{
            width:"80%",
            color: "black"
          }}
        />
        <FAQLong
        faqs={
          faqstudent
        }
        button="no-button"
        title="Students & Families"
        style={{width: "74%", marginLeft:"13%", border:'none'}}
        />
        <Pattern  height= {{height:'80px'}}
            pattern="yellow_tiles"/>
        <FAQLong
          faqs={
              faqschool
          }
          button="no-button"
          title="Schools & Districts"
          style={{width: "74%", marginLeft:"13%", border:'none'}}
        />
        <Pattern  height= {{height:'80px'}}
            pattern="yellow_tiles"/>
        <FAQLong
          faqs={
              faqnonprofits
          }
          button="no-button"
          title="Non-profits"
          style={{width: "74%", marginLeft:"13%", border:'none'}}
        />
        <Pattern  height= {{height:'80px'}}
            pattern="yellow_tiles"/>
        <FAQLong
          faqs={
              faqbusiness
          }
          button="no-button"
          title="Businesses"
          style={{width: "74%", marginLeft:"13%", border:'none'}}
        />
        <Pattern  height= {{height:'80px'}}
            pattern="yellow_tiles"/>
        <FinancialAid/>
        <LogoFarm/>
        <Footer />
      </div>
    )
  }
}


export default FAQs
