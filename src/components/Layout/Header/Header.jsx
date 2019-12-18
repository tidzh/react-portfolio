import React from 'react';
import Menu from '../../Menu/Menu';
import Container from "@material-ui/core/Container";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const Header = props => {
 const {menuData, isOpen, burgerState} = props;
 
 
  return (
    <AppBar position="fixed" color="inherit">
      <Container>
      <Toolbar>
        <Typography variant="h6" className=''>
          Kondakov.Dev
        </Typography>
        <Menu menu={menuData} menuState={isOpen}/>
      </Toolbar>
      </Container>
    </AppBar>
  )
}
export default Header;