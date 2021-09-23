import React, { useState } from "react";
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
  { tipo: 'Peso', edadDesde: '0 meses', edadHasta: '6 meses', linkNiñas: "/images/percentiles/pesoNiñas0a6meses.jpg", linkNiños: "/images/percentiles/pesoNiños0a6meses.jpg" },
  { tipo: 'Peso', edadDesde: '0 meses', edadHasta: '24 meses', linkNiñas: "/images/percentiles/pesoNiñas0a24meses.jpg", linkNiños: "/images/percentiles/pesoNiños0a24meses.jpg" },
  { tipo: 'Peso', edadDesde: '0 años', edadHasta: '5 años', linkNiñas: "/images/percentiles/pesoNiñas0a5años.jpg", linkNiños: "/images/percentiles/pesoNiños0a5años.jpg" },
  { tipo: 'Longitud', edadDesde: '0 meses', edadHasta: '24 meses', linkNiñas: "/images/percentiles/longitudNiñas0a24meses.jpg", linkNiños: "/images/percentiles/longitudNiños0a24meses.jpg" },
  { tipo: 'Longitud/Estatura', edadDesde: '0 años', edadHasta: '5 años', linkNiñas: "/images/percentiles/longitudEstaturaNiñas0a5años.jpg", linkNiños: "/images/percentiles/longitudEstaturaNiños0a5años.jpg" },
  { tipo: 'Peso/Estatura', edadDesde: '2 años', edadHasta: '5 años', linkNiñas: "/images/percentiles/pesoEstaturaNiñas2a5años.jpg", linkNiños: "/images/percentiles/pesoEstaturaNiños2a5años.jpg" },
  { tipo: 'IMC', edadDesde: '1 años', edadHasta: '5 años', linkNiñas: "/images/percentiles/IMCNiñas1a5.jpg", linkNiños: "/images/percentiles/IMCNiños1a5.jpg" },
]

const imagenesPercentiles = [
  { nombreImagen: 'Peso niñas 0 a 6 meses', link: '/images/percentiles/pesoNiñas0a6meses.jpg' },
  { nombreImagen: 'Peso niños 0 a 6 meses', link: '/images/percentiles/pesoNiños0a6meses.jpg' },
  { nombreImagen: 'Peso niñas 0 a 24 meses', link: '/images/percentiles/pesoNiñas0a24meses.jpg' },
  { nombreImagen: 'Peso niños 0 a 24 meses', link: '/images/percentiles/pesoNiños0a24meses.jpg' },
  { nombreImagen: 'Peso niñas 0 a 5 años', link: '/images/percentiles/pesoNiñas0a5años.jpg' },
  { nombreImagen: 'Peso niños 0 a 5 años', link: '/images/percentiles/pesoNiños0a5años.jpg' },
  { nombreImagen: 'Longitud niñas 0 a 24 meses', link: '/images/percentiles/longitudNiñas0a24meses.jpg' },
  { nombreImagen: 'Longitud niños 0 a 24 meses', link: '/images/percentiles/longitudNiños0a24meses.jpg' },
  { nombreImagen: 'Longitud/Estatura niñas 0 a 5 años', link: '/images/percentiles/longitudEstaturaNiñas0a5años.jpg' },
  { nombreImagen: 'Longitud/Estatura niñas 0 a 5 años', link: '/images/percentiles/longitudEstaturaNiños0a5años.jpg' },
  { nombreImagen: 'Peso estatura niñas 2 a 5 años', link: '/images/percentiles/pesoEstaturaNiñas2a5años.jpg' },
  { nombreImagen: 'Peso estatura niños 2 a 5 años', link: '/images/percentiles/pesoEstaturaNiños2a5años.jpg' },
  { nombreImagen: 'IMC niñas 1 a 5 años', link: '/images/percentiles/IMCNiñas1a5.jpg' },
  { nombreImagen: 'IMC niños 1 a 5 años', link: '/images/percentiles/IMCNiños1a5.jpg' },
]

const tablaControlesMed = [
  { nombre: 'Dakota Rice', fecha: '12/06/2021', peso: '6,12 kg', altura: '62,00 cm', diamCabeza: '34,90 cm' },
  { nombre: 'Minerva Hooper', fecha: '12/07/2021', peso: '12,50 kg', altura: '82,50 cm', diamCabeza: '42,80 cm' },
  { nombre: 'Dakota Rice', fecha: '12/08/2021', peso: '15,30 kg', altura: '100,20', diamCabeza: '45,10 cm' },

]

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
  //const [image, setImage] = React.useState(calendario);
  //const [showAgregarVacuna, setShowAgregarVacuna] = useState(false);

  // const OnClickAgregarVacuna = () => {
  //   setShowAgregarVacuna(!showAgregarVacuna);
  // }

  // const OnClickCargarVacuna = (e) => {
  //   setShowAgregarVacuna(!showAgregarVacuna);
  //   //alert('HOLA');
  //   //console.log(e);
  // }

  const [percentiles, setPercentiles] = useState(tablaPercentiles);
  const [imgPercentiles, setImgPerentiles] = useState(imagenesPercentiles);
  const [controlesMed, setControlesMed] = useState(tablaControlesMed);

  // const OnClickCancelarCargarVacuna = (e) => {
  //   setShowAgregarVacuna(!showAgregarVacuna);
  //   //alert('HOLA');
  //   //console.log(e);
  // }

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
                <Table
                  tableHeaderColor="primary"
                  tableHead={["Hijo", "Fecha", "Peso", "Altura", "Diametro Cabeza"]}
                  tableData={
                    controlesMed.map((controlMed) => (
                      [controlMed.nombre,
                      controlMed.fecha,
                      controlMed.peso,
                      controlMed.altura,
                      controlMed.diamCabeza,
                      ]))
                  }
                />
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
                  tableHead={["Tipo", "Edad Desde", "Edad Hasta", "Niñas", "Niños"]}
                  tableData={
                    percentiles.map((percentil) => (
                      [percentil.tipo,
                      percentil.edadDesde,
                      percentil.edadHasta,
                      <Link to={percentil.linkNiñas} target="_blank">Link</Link>,
                      <Link to={percentil.linkNiños} target="_blank">Link</Link>,
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