import React from 'react';
import UserProfile from '../UserProfile/UserProfile';
import Button from "../../../../components/Button.js";

class KidsForm extends React.Component{

    constructor(props){
        super(props);

        this.state= {
            showMyComponent: false
        }

    }

    mostrarForm = () => {
        this.setState({
            showMyComponent: true
        })
    };

    
    render(){
        return(
            <React.Fragment>
                <Button onClick={this.mostrarForm}> Desplegar </Button>
                { this.state.showMyComponent ? <UserProfile /> : null }
            </React.Fragment>
        );
    }
};

export default KidsForm;