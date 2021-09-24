import React, { useState, useRef } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import Table from "../../components/Table/Table.js";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardBody from "../../components/Card/CardBody.js";
import reactDom from "react-dom";
import Button from '../../components/CustomButtons/Button';
import EditIconButton from "../../components/EditIconButton/EditIconButton.js";
import DeleteIconButton from "../../components/DeleteIconButton/DeleteIconButton.js";
import ControlPedForm3 from "../../components/PedControlForm2/PedControlForm3.js";
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


const tablaControlesMed = [
  { nombre: 'Dakota Rice', fecha: '12/06/2021', profesional: 'Abdul Jabbar' },
  { nombre: 'Minerva Hooper', fecha: '12/07/2021', profesional: 'Cosme Fulanito' },
  { nombre: 'Dakota Rice', fecha: '12/08/2021', profesional: 'Woodrow Wilson' },

]

//const datos = { nombre: 'Juan', fecha: '17/05/2021' };

const useStyles = makeStyles(styles);

export default function ControlesMedicos() {
  const classes = useStyles();
  const [showMostrarForm, setMostrarForm] = useState(false);
  const [tipoForm, setTipoForm] = useState('');
  const [showEditarControl, setShowEditarControl] = useState(false);
  const [datosForm, setDatosForm] = useState({
    hijo: '10', //fecha, profesional, peso, altura, diametro, medicamentos, estudios, observaciones
    fecha: '',
    profesional: 'Dr Pepe',
    peso: '12',
    altura: '120',
    diametro: '10',
    medicamentos: 'paracetamol',
    estudios: '',
    observaciones:''
})

  const MostrarForm = () => {
    setMostrarForm(!showMostrarForm);
    setTipoForm('A')
    //formulario.current.scrollIntoView();
    //this.PedControlForm.current.focus();
  }

  const VisualizarForm = () => {
    MostrarForm();
    setTipoForm('V');
  }

  const EditarForm = () => {
    setTipoForm('M')
  }
  // const OnClickEditarControl = () => {
  //   //setShowEditarControl(!showEditarControl);
  //   setShowAgregarControl(!showAgregarControl);
  // }

  // const OnClickCargarControl = (e) => {
  //   setShowAgregarControl(!showAgregarControl);
  //   //alert('HOLA');
  //   //console.log(e);
  // }

  // const OnClickCancelarCargarControl = (e) => {
  //   setShowAgregarControl(!showAgregarControl);
  //   //alert('HOLA');
  //   //console.log(e);
  // }

  const handleFormControles = (data) => {
    const {hijo, fecha, profesional, peso, altura, diametro, medicamentos, estudios, observaciones} = data;
    setDatosForm(data);
    //console.log(data)
    console.log('Hola' + datosForm.profesional)
    MostrarForm();
  }


  const [controlesMed, setControlesMed] = useState(tablaControlesMed);

  return (
    <React.Fragment>
      {/* <Button>Desplegar</Button> */}
      {/* <ControlPed /> */}
      <GridContainer autoFocus>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            {/* //aca esta la mugre para arreglar */}
            <CardHeader color="primary" display='inline-block'>
              <h4 className={classes.cardTitleWhite}>Historial de Controles Pediatricos</h4>
              {/* <Button color= 'primary' size='sm' className={classes.cardHeaderButton} onClick={OnClickAgregarControl}>Boton feo</Button> */}
              <IconButton
                className={classes.cardHeaderButton}
                onClick={MostrarForm}>
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
                tableData={
                  controlesMed.map((controlMed) => (
                    [controlMed.nombre,
                    controlMed.fecha,
                    controlMed.profesional,
                    <IconButton className={classes.tableActionButton} onClick={VisualizarForm}>
                      <RemoveRedEye className={classes.tableActionButtonIcon + " " + classes.edit} />
                    </IconButton>,
                    <IconButton className={classes.tableActionButton} onClick={EditarForm}>
                      <EditIcon className={classes.tableActionButtonIcon + " " + classes.edit} />
                    </IconButton>,
                    <IconButton className={classes.tableActionButton}>
                      <CloseIcon className={classes.tableActionButtonIcon + " " + classes.close} />
                    </IconButton>
                    ]))
                }
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>

      {showMostrarForm ? (
        <div>
          <br />
          <p>{tipoForm}</p>
          <ControlPedForm3 
            tipoForm={tipoForm}
            handleFormControles={handleFormControles}
            OnClickCancelar={MostrarForm}
            // OnClickCancelarCargarControl={OnClickCancelarCargarControl}
            datosForm={datosForm}/>
        </div>
      ) : null}
    </React.Fragment>
  );
}
