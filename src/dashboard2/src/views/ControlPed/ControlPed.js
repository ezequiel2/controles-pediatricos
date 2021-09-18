import React from 'react';
//import Button from "../../../../components/Button.js";
import Button from '@material-ui/core/Button'
import ControlPedForm from '../../components/PedControlForm/PedControlForm.js';
import { purple } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import {
    grayColor,
    primaryColor,
    infoColor,
    successColor,
    warningColor,
    dangerColor,
    roseColor,
    whiteColor,
    blackColor,
    hexToRgb,
  } from "../../assets/jss/material-dashboard-react.js";

const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: primaryColor,
    },
    //fontFamily: ['Roboto'],
  }));
class ControlPed extends React.Component{

    constructor(props){
        super(props);

        this.state= {
            showMyComponent: false
        }
    }

    mostrarForm = () => {
        this.setState({
            showMyComponent: !this.state.showMyComponent
        })
    };    
    
    render(){
        return(
            <React.Fragment>
                <ColorButton variant="contained" onClick={this.mostrarForm}>Agregar control</ColorButton>
                {/* <Button  color='primary'>  </Button> */}
                <br />
                <br />
                { this.state.showMyComponent ? <ControlPedForm /> : null }
            </React.Fragment>
        );
    }
};

export default ControlPed;