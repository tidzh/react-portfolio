import React from 'react';

const Footer = props => {
    return(
      <footer className="footer">
		<div className="wrapper">
		  © {new Date().getFullYear()} Kondakov Alex
		</div>
	  </footer>
	)
}
export default Footer