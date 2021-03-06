import React, { useState, useEffect } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import CustomInput from "../../components/CustomInput/CustomInput.js";
import Button from "../../components/CustomButtons/Button.js";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardBody from "../../components/Card/CardBody.js";
import CardFooter from "../../components/Card/CardFooter.js";
import Table from "../../components/Table/Table.js";
import { CardMedia, Paper } from "@material-ui/core";
import calendario from '../../assets/img/CalendarVac2020.jpg'
import IconButton from "@material-ui/core/IconButton";
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import {
  defaultFont,
  primaryColor,
  dangerColor,
  grayColor,
} from '../../assets/jss/material-dashboard-react'
import { Link } from 'react-router-dom';
import Carousel from 'react-material-ui-carousel'
import { CardActionArea } from '@mui/material';

import { listarUltimosControles } from '../../../../controllers/AppController';

//importo Context
import useUser from "../../../../contexts/hooks/useUser";


const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0",
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    display: 'inline-block',
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
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

const tablaPercentiles = [
  { tipo: 'Peso', edadDesde: '0 meses', edadHasta: '6 meses', linkNi??as: "/images/percentiles/pesoNi??as0a6meses.jpg", linkNi??os: "/images/percentiles/pesoNi??os0a6meses.jpg" },
  { tipo: 'Peso', edadDesde: '0 meses', edadHasta: '24 meses', linkNi??as: "/images/percentiles/pesoNi??as0a24meses.jpg", linkNi??os: "/images/percentiles/pesoNi??os0a24meses.jpg" },
  { tipo: 'Peso', edadDesde: '0 a??os', edadHasta: '5 a??os', linkNi??as: "/images/percentiles/pesoNi??as0a5a??os.jpg", linkNi??os: "/images/percentiles/pesoNi??os0a5a??os.jpg" },
  { tipo: 'Longitud', edadDesde: '0 meses', edadHasta: '24 meses', linkNi??as: "/images/percentiles/longitudNi??as0a24meses.jpg", linkNi??os: "/images/percentiles/longitudNi??os0a24meses.jpg" },
  { tipo: 'Longitud/Estatura', edadDesde: '0 a??os', edadHasta: '5 a??os', linkNi??as: "/images/percentiles/longitudEstaturaNi??as0a5a??os.jpg", linkNi??os: "/images/percentiles/longitudEstaturaNi??os0a5a??os.jpg" },
  { tipo: 'Peso/Estatura', edadDesde: '2 a??os', edadHasta: '5 a??os', linkNi??as: "/images/percentiles/pesoEstaturaNi??as2a5a??os.jpg", linkNi??os: "/images/percentiles/pesoEstaturaNi??os2a5a??os.jpg" },
  { tipo: 'IMC', edadDesde: '1 a??os', edadHasta: '5 a??os', linkNi??as: "/images/percentiles/IMCNi??as1a5.jpg", linkNi??os: "/images/percentiles/IMCNi??os1a5.jpg" },
]

const imagenesPercentiles = [
  { nombreImagen: 'Peso ni??as 0 a 6 meses', link: '/images/percentiles/pesoNi??as0a6meses.jpg' },
  { nombreImagen: 'Peso ni??os 0 a 6 meses', link: '/images/percentiles/pesoNi??os0a6meses.jpg' },
  { nombreImagen: 'Peso ni??as 0 a 24 meses', link: '/images/percentiles/pesoNi??as0a24meses.jpg' },
  { nombreImagen: 'Peso ni??os 0 a 24 meses', link: '/images/percentiles/pesoNi??os0a24meses.jpg' },
  { nombreImagen: 'Peso ni??as 0 a 5 a??os', link: '/images/percentiles/pesoNi??as0a5a??os.jpg' },
  { nombreImagen: 'Peso ni??os 0 a 5 a??os', link: '/images/percentiles/pesoNi??os0a5a??os.jpg' },
  { nombreImagen: 'Longitud ni??as 0 a 24 meses', link: '/images/percentiles/longitudNi??as0a24meses.jpg' },
  { nombreImagen: 'Longitud ni??os 0 a 24 meses', link: '/images/percentiles/longitudNi??os0a24meses.jpg' },
  { nombreImagen: 'Longitud/Estatura ni??as 0 a 5 a??os', link: '/images/percentiles/longitudEstaturaNi??as0a5a??os.jpg' },
  { nombreImagen: 'Longitud/Estatura ni??as 0 a 5 a??os', link: '/images/percentiles/longitudEstaturaNi??os0a5a??os.jpg' },
  { nombreImagen: 'Peso estatura ni??as 2 a 5 a??os', link: '/images/percentiles/pesoEstaturaNi??as2a5a??os.jpg' },
  { nombreImagen: 'Peso estatura ni??os 2 a 5 a??os', link: '/images/percentiles/pesoEstaturaNi??os2a5a??os.jpg' },
  { nombreImagen: 'IMC ni??as 1 a 5 a??os', link: '/images/percentiles/IMCNi??as1a5.jpg' },
  { nombreImagen: 'IMC ni??os 1 a 5 a??os', link: '/images/percentiles/IMCNi??os1a5.jpg' },
]

// const tablaControlesMed = [
//   { nombre: 'Dakota Rice', fecha: '12/06/2021', peso: '6,12 kg', altura: '62,00 cm', diamCabeza: '34,90 cm' },
//   { nombre: 'Minerva Hooper', fecha: '12/07/2021', peso: '12,50 kg', altura: '82,50 cm', diamCabeza: '42,80 cm' },
//   { nombre: 'Dakota Rice', fecha: '12/08/2021', peso: '15,30 kg', altura: '100,20', diamCabeza: '45,10 cm' },

// ]

function Item(props) {
  return (
    <Card sx={{ maxWidth: 141 }} >
      {/* <p>{props.imgPercentil.nombreImagen}</p> */}
      <CardActionArea useRef={props.imgPercentil.link}>
        <CardMedia
          component="img"
          sx={{ width: 251 }}
          image={props.imgPercentil.link}
        />
        <a href={props.imgPercentil.link} target="_blank" />
        {/* <Link to={props.imgPercentil.link} target="_blank" /> */}
      </CardActionArea>
      {/* </img> */}
    </Card>
  )
}

export default function Percentiles() {
  const classes = useStyles();

  const [percentiles, setPercentiles] = useState(tablaPercentiles);
  const [imgPercentiles, setImgPerentiles] = useState(imagenesPercentiles);
  const [ultimosControlesMed, setUltimosControlesMed] = useState(null);

  const { user, changeUser } = useUser();

  useEffect(() => {
    cargarControles(user.dni);
  }, [user.dni]);

  const cargarControles = async (dni) => {

    let getUltimosControles = await listarUltimosControles(dni);

    if (getUltimosControles.rdo === 0) {
      setUltimosControlesMed(getUltimosControles.listaUltimosControles);

    } else if (getUltimosControles.rdo === 1) {
      alert(getUltimosControles.mensaje)
    }
  }

  return (
    <div>
      <React.Fragment>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader color="primary" display='inline-block'>
                <h4 className={classes.cardTitleWhite}>Percentiles</h4>
              </CardHeader>
              <CardBody>
                <Carousel>
                  {
                    imgPercentiles.map((imgPercentil, i) =>
                      <Item key={i} imgPercentil={imgPercentil} />
                    )
                  }
                </Carousel>
              </CardBody>
              <CardFooter>
              </CardFooter>
            </Card>
          </GridItem>

          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader color="primary" display='inline-block'>
                <h4 className={classes.cardTitleWhite}>Controles Medicos</h4>
              </CardHeader>
              <CardBody>
                {
                  ultimosControlesMed &&
                  (
                    <Table
                      tableHeaderColor="primary"
                      tableHead={["Hijo", "Fecha", "Peso", "Altura", "Diametro Cabeza"]}
                      tableData={
                        ultimosControlesMed.map((controlMed) => (
                          [controlMed.nombre_hijo,
                          controlMed.fecha_control_ped,
                          controlMed.peso,
                          controlMed.altura,
                          controlMed.diametro_cabeza,
                          ]))
                      }
                    />
                  )
                }
              </CardBody>
              <CardFooter>
              </CardFooter>
            </Card>
          </GridItem>

          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader color="primary" display='inline-block'>
                <h4 className={classes.cardTitleWhite}>Tabla de percentiles</h4>
              </CardHeader>
              <CardBody>
                <Table
                  tableHeaderColor="primary"
                  tableHead={["Tipo", "Edad Desde", "Edad Hasta", "Ni??as", "Ni??os"]}
                  tableData={
                    percentiles.map((percentil) => (
                      [percentil.tipo,
                      percentil.edadDesde,
                      percentil.edadHasta,
                      <Link to={percentil.linkNi??as} target="_blank">Link</Link>,
                      <Link to={percentil.linkNi??os} target="_blank">Link</Link>,
                      ]))
                  }

                />
              </CardBody>
              <CardFooter>
              </CardFooter>
            </Card>
          </GridItem>

        </GridContainer>
      </React.Fragment>
    </div>
  );
}