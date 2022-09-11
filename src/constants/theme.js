// Theme

const primaryColor = '#2f80ed'
const orangeColor = '#f96526'
const redColor = '#eb5757'
const primaryBorderColor = '#e4e9f2'
const inputBorderColor = '#e4e5eb'
const buttonBorderColor = '#ced0dd'

export default {
  width: {
    sideMenu: {
      open: '230px',
      close: '60px',
    },
  },
  borderRadius: {
    primary: '6px',
    table: '8px',
    input: '6px',
    button: '10px',
  },
  boxShadow: {
    primary: '0 2px 15px rgba(211, 216, 224, 0.5)',
  },
  text: {
    primary: '#2c3a50',
    secondary: '#7d8893',
    title: '#36434e',
    label: '#8f9bb0',
    tableHead: '#bdbdbd',
    placeholder: '#b2b7bf',
  },
  background: {
    linkHover: '#eaf2fd',
    buttonSecondary: '#fbfbfc',
    input: '#f1f3f5',
    inputHover: '#edf1f7',
    tableHead: '#fbfbfd',
    tableOdd: '#f1f3f5',
    tableHover: '#edf1f7',
    thumb: '#ccc',
  },
  palette: {
    primary: primaryColor,
    secondary: '#eaf2fd',
    orange: orangeColor,
    black: '#000',
    white: '#fff',
    red: redColor,
    green: '#219653',
  },
  body: {
    background: 'rgb(246,248,251)',
  },
  transition: {
    primary: 'all .2s ease-in-out',
  },
}
