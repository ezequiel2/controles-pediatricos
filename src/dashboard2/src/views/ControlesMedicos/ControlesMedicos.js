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
import Button from '../../components/CustomButtons/Button';
import EditIconButton from "../../components/EditIconButton/EditIconButton.js";
import DeleteIconButton from "../../components/DeleteIconButton/DeleteIconButton.js";
import PedControlForm from "../../components/PedControlForm/PedControlForm.js";
import VisualIconButton from "../../components/VisualIconButton/VisualIconButton.js";
import IconButton from "@material-ui/core/IconButton";
import RemoveRedEye from "@material-ui/icons/RemoveRedEye";
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from "@material-ui/icons/Close";
import {
  defaultFont,
  primaryColor,
  dangerColor,
  grayColor,
} from '../../assets/jss/material-dashboard-react'




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
    display: 'inline-block',
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
  cardHeaderButton: {
    float: 'right',
    color: 'primary',
  },
  edit: {
    backgroundColor: "transparent",
    color: primaryColor[0],
    boxShadow: "none",
  },
  close: {
    backgroundColor: "transparent",
    color: dangerColor[0],
    boxShadow: "none",
  },
  tableActionButton: {
    width: "27px",
    height: "27px",
    padding: "0",
  },
  tableActionButtonIcon: {
    width: "17px",
    height: "17px",
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

  const OnClickCargarCancelarControl = (e) => {
    setShowAgregarControl(!showAgregarControl);
    //alert('HOLA');
    //console.log(e);
  }

  return (
    <React.Fragment>
      {/* <Button>Desplegar</Button> */}
      {/* <ControlPed /> */}
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            {/* //aca esta la mugre para arreglar */}
            <CardHeader color="primary" display='inline-block'>
              <h4 className={classes.cardTitleWhite}>Historial de Controles Pediatricos</h4>
              {/* <Button color= 'primary' size='sm' className={classes.cardHeaderButton} onClick={OnClickAgregarControl}>Boton feo</Button> */}
              <IconButton
                className={classes.cardHeaderButton}
                onClick={OnClickAgregarControl}>
                <AddToPhotosIcon
                  className={classes.cardTitleWhite}
                //color='primary'
                //size='large'
                />
              </IconButton>
            </CardHeader>
            {/* <Button onClick={OnClickAgregarControl}> Agregar control </Button>   */}
            {/* {showAgregarControl ? (
              <div><br /><PedControlForm
                OnClickCargarCancelarControl={OnClickCargarCancelarControl} /> </div>
            ) : null} */}
            <CardBody>
              <Table
                tableHeaderColor="primary"
                tableHead={["Nombre", "Fecha", "Profesional", "", "", ""]}
                tableData={[
                  ["Dakota Rice", "Niger", "Oud-Turnhout",
                    <IconButton
                      className={classes.tableActionButton}
                    //onClick={OnClickAgregarControl}
                    >
                      <RemoveRedEye
                        className={
                          classes.tableActionButtonIcon + " " + classes.edit
                        }
                      // className={classes.edit}
                      //color='primary'
                      //size='large'
                      />
                    </IconButton>,
                    <IconButton
                      className={classes.tableActionButton}
                      onClick={OnClickAgregarControl}>
                      <EditIcon
                        className={
                          classes.tableActionButtonIcon + " " + classes.edit
                        }
                      //color='primary'
                      //size='large'
                      />
                    </IconButton>,
                    <IconButton
                      className={classes.tableActionButton}
                    //onClick={OnClickAgregarControl}
                    >
                      <CloseIcon
                        className={
                          classes.tableActionButtonIcon + " " + classes.close
                        }
                      //color='primary'
                      //size='large'
                      />
                    </IconButton>],
                  ["Minerva Hooper", "Curaçao", "Sinaai-Waas",
                    <IconButton
                      className={classes.tableActionButton}
                    //onClick={OnClickAgregarControl}
                    >
                      <RemoveRedEye
                        className={
                          classes.tableActionButtonIcon + " " + classes.edit
                        }
                      //color='primary'
                      //size='large'
                      />
                    </IconButton>,
                    <IconButton
                      className={classes.tableActionButton}
                      onClick={OnClickAgregarControl}>
                      <EditIcon
                        className={
                          classes.tableActionButtonIcon + " " + classes.edit
                        }
                      //color='primary'
                      //size='large'
                      />
                    </IconButton>,
                    <IconButton
                      className={classes.tableActionButton}
                    //onClick={OnClickAgregarControl}
                    >
                      <CloseIcon
                        className={
                          classes.tableActionButtonIcon + " " + classes.close
                        }
                      //color='primary'
                      //size='large'
                      />
                    </IconButton>],
                  ["Sage Rodriguez", "Netherlands", "Baileux",
                    <IconButton
                      className={classes.tableActionButton}
                    //onClick={OnClickAgregarControl}
                    >
                      <RemoveRedEye
                        className={
                          classes.tableActionButtonIcon + " " + classes.edit
                        }
                      //color='primary'
                      //size='large'
                      />
                    </IconButton>,
                    <IconButton
                      className={classes.tableActionButton}
                      onClick={OnClickAgregarControl}>
                      <EditIcon
                        className={
                          classes.tableActionButtonIcon + " " + classes.edit
                        }
                      //color='primary'
                      //size='large'
                      />
                    </IconButton>,
                    <IconButton
                      className={classes.tableActionButton}
                    //onClick={OnClickAgregarControl}
                    >
                      <CloseIcon
                        className={
                          classes.tableActionButtonIcon + " " + classes.close
                        }
                      //color='primary'
                      //size='large'
                      />
                    </IconButton>],
                ]}
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
      {showAgregarControl ? (
        <div><br /><PedControlForm
                OnClickCargarCancelarControl={OnClickCargarCancelarControl} /> </div>
      ) : null}

      {showEditarControl ? (
        <div><PedControlForm autoFocus/> </div>
      ) : null}
    </React.Fragment>
  );
}
