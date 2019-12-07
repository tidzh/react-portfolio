import React from 'react';
import PortfolioListContainer from "../../Portfolio/PortfolioList/PortfolioListContainer";
import WidgetResume from "../../Widget/WidgetResume/WidgetResume";
import WidgetServices from "../../Widget/WidgetServices/WidgetServices";


const PageHome = props => {
  const {services, skills} = props;
    return(
      <>
		<section className='section section_grey'>
		  <div className="wrapper">
			<div className="d-flex align-self-center">
			  <h1 className="h1">Последние работы</h1>
			</div>
			<div className="article-wrap">
			  <PortfolioListContainer/>
			</div>
		  </div>
		</section>
		<section className='section'>
		  <div className="wrapper">
			<div className="text-center">
			  <div className="uppercase section-title d-inline-block">
				<div className="sub-title">Мои услуги</div>
				<h2 className='h2'>Что я делаю</h2>
			  </div>
			</div>
			<WidgetServices services={services}/>
		  </div>
		</section>
		<section className='section section_grey'>
		  <div className="wrapper">
			<div className="text-center">
			<div className="uppercase section-title d-inline-block">
			  <div className="sub-title">Мое резюме</div>
			  <h2 className='h2'>Что я умею</h2>
			</div>
			</div>
			<WidgetResume skills = {skills}/>
		  </div>
		</section>
		</>
	)
}
export default PageHome;