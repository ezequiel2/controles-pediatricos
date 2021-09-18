import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import Table from "../../components/Table/Table.js";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardBody from "../../components/Card/CardBody.js";
import ControlPed from "../ControlPed/ControlPed.js";
import reactDom from "react-dom";
import Button from "../../../../components/Button.js";
import EditIconButton from "../../components/EditIconButton/EditIconButton.js";
import DeleteIconButton from "../../components/DeleteIconButton/DeleteIconButton.js";
import PedControlForm from "../../components/PedControlForm/PedControlForm.js";
import VisualIconButton from "../../components/VisualIconButton/VisualIconButton.js";



const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0",
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF",
    },
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1",
    },
  },
};



const useStyles = makeStyles(styles);

export default function TableList() {
  const classes = useStyles();
  const [showAgregarControl, setShowAgregarControl] = useState(false);
  const [showEditarControl, setShowEditarControl] = useState(false);

  const OnClickAgregarControl = () => {
    setShowAgregarControl(!showAgregarControl);
  }
  const OnClickEditarControl = () => {
    setShowEditarControl(!showEditarControl);
  }

  return (
  <React.Fragment>
    {/* <Button>Desplegar</Button> */}
    {/* <ControlPed /> */}
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Historial de Controles Pediatricos</h4>         
          </CardHeader> 
          <Button onClick={OnClickAgregarControl}> Agregar control </Button>  
          {showAgregarControl ? (
            <div><PedControlForm /> </div>
          ) :null}               
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["Nombre", "Fecha", "Especialista", "Salary", "", ""]}
              tableData={[
                ["Dakota Rice", "Niger", "Oud-Turnhout", "$36,738", <VisualIconButton />, <Button onClick={OnClickEditarControl} size='sm'> <EditIconButton/> </Button>, <DeleteIconButton/>],
                ["Minerva Hooper", "Curaçao", "Sinaai-Waas", "$23,789", <VisualIconButton />, <EditIconButton onClick={OnClickEditarControl}/>, <DeleteIconButton/>],
                ["Sage Rodriguez", "Netherlands", "Baileux", "$56,142", <VisualIconButton />, <EditIconButton onClick={OnClickEditarControl}/>, <DeleteIconButton/>],
                // ["Philip Chaney", "Korea, South", "Overland Park", "$38,735"],
                // ["Doris Greene", "Malawi", "Feldkirchen in Kärnten", "$63,542"],
                // ["Mason Porter", "Chile", "Gloucester", "$78,615"],
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
    

    {showEditarControl ? (
        <div><PedControlForm /> </div>
    ) :null}    
    </React.Fragment>
  );
}
