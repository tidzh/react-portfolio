import React from 'react';
import PortfolioListContainer from "../../Portfolio/PortfolioList/PortfolioListContainer";
import WidgetResume from "../../Widget/WidgetResume/WidgetResume";
import WidgetServices from "../../Widget/WidgetServices/WidgetServices";
import Heading from "../../common/Heading/Heading";
import Section from "../../Layout/Section/Section";
import Wrapper from "../../Layout/Wrapper/Wrapper";


const PageHome = props => {
  const {services, skills} = props;
    return(
      <>
		<Section grey={true}>
		  <Wrapper>
			  <Heading title={'Мои работы'} subtitle='Портфолио' Tag={'h1'}/>
			  <div className="article-wrap">
				<PortfolioListContainer/>
			  </div>
		  </Wrapper>
		</Section>
		<Section>
		  <Wrapper>
			  <Heading title={'Мои услуги'} subtitle='Что я делаю' Tag={'h2'}/>
			  <WidgetServices services={services}/>
		  </Wrapper>
		</Section>
		<Section grey={true}>
		  <Wrapper>
			  <Heading title={'Мое резюме'} subtitle='Что я умею' Tag={'h2'}/>
			  <WidgetResume skills={skills}/>
		  </Wrapper>
		</Section>
		</>
	)
}
export default PageHome;