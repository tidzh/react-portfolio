import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

const Theme = createMuiTheme({
  
  typography: {
	fontFamily: [
	  '-apple-system',
	  'BlinkMacSystemFont',
	  '"Segoe UI"',
	  'Roboto',
	  '"Helvetica Neue"',
	  'Arial',
	  'sans-serif',
	  '"Apple Color Emoji"',
	  '"Segoe UI Emoji"',
	  '"Segoe UI Symbol"',
	].join(','),
	h1: {
	  fontSize: "3rem",
	  fontWeight: "bold",
	},
	h2: {
	  fontSize: "2rem",
	  fontWeight: "bold",
	},
	h4: {
	  fontSize: "1.5rem",
	  fontWeight: "bold",
	}
  },
  palette: {
	bgGrey: '#f7f7f7',
	bgWhite: '#ffffff',
	bgDark:'#212333',
	white: '#ffffff',
	grey2:'#7f7f7f'
  },
});
export default Theme;