import React from 'react';
import PortfolioListContainer from "../../Portfolio/PortfolioList/PortfolioListContainer";
import WidgetResume from "../../Widget/WidgetResume/WidgetResume";
import WidgetServices from "../../Widget/WidgetServices/WidgetServices";
import Heading from "../../common/Heading/Heading";


const PageHome = props => {
  const {services, skills} = props;
    return(
      <>
		<section className='section section_grey'>
		  <div className="wrapper">
			<Heading title={'Мои работы'} subtitle='Портфолио' Tag={'h1'}/>
			<div className="article-wrap">
			  <PortfolioListContainer/>
			</div>
		  </div>
		</section>
		<section className='section'>
		  <div className="wrapper">
			<Heading title={'Мои услуги'} subtitle='Что я делаю' Tag={'h2'}/>
			<WidgetServices services={services}/>
		  </div>
		</section>
		<section className='section section_grey'>
		  <div className="wrapper">
			<Heading title={'Мое резюме'} subtitle='Что я умею' Tag={'h2'}/>
			<WidgetResume skills={skills}/>
		  </div>
		</section>
		</>
	)
}
export default PageHome;