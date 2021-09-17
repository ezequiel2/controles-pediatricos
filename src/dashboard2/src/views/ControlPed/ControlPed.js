import React from 'react';
import Button from "../../../../components/Button.js";
import ControlPedForm from '../../components/PedControlForm/PedControlForm.js';

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
                <Button onClick={this.mostrarForm}> Desplegar </Button>
                { this.state.showMyComponent ? <ControlPedForm /> : null }
            </React.Fragment>
        );
    }
};

export default ControlPed;