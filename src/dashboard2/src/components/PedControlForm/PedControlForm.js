import React, {useState} from "react";
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
import CardAvatar from "../../components/Card/CardAvatar.js";
import CardBody from "../../components/Card/CardBody.js";
import CardFooter from "../../components/Card/CardFooter.js";
import UploadButton from '../../components/UploadButton/UploadButton';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import avatar from "../../assets/img/faces/marc.jpg";
import CustomSelect from '../CustomSelect/CustomSelect';
import PruebaSelect from '../PruebaSelect';
import { Input } from "@material-ui/core";

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
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
  },
  cardFooter: {
    display: 'inline-block',
  },
  formButton: {
    float: 'left',
    color: 'primary',
    marginRight: '10px',
  },
};

const useStyles = makeStyles(styles);

export default function ControlPedForm(props) {
  const classes = useStyles();
  const [mostrar, setMostrar] = useState(true);
  const OnClickOcultar = () => {
    setMostrar(!mostrar);
  }
  
  const {OnClickCargarControl, OnClickCancelarCargarControl, datos} = props;
  const datos2 = props.datos;

  return (
    // <React.Fragment>
    // {mostrar ? (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={10}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Completa tu control pediatrico</h4>
              {/* <p className={classes.cardCategoryWhite}>-------------------</p> */}
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={3}>
                  {/* <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}> */}
                  {/* <InputLabel id="demo-simple-select-standard-label">Hij@</InputLabel> */}
                    {/* <CustomSelect
                      labelText="Hijo"
                      id='Hijo'
                      formControlProps={{
                       fullWidth: true,
                     }}
                      
                    /> */}
                    <PruebaSelect/>
                  {/* </FormControl> */}

                  
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem GridItem xs={12} sm={12} md={3}>
                  {/* <CustomInput
                    labelText="Fecha"
                    id='fecha'
                    formControlProps={{
                      fullWidth: true,
                    }}
                    value={datos.fecha}                    
                  ></CustomInput> */}
                  <Input
                    labelText="Fecha"
                    id='fecha'
                    value={datos2.fecha} />
                </GridItem>
                <GridItem GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Profesional"
                    id='profesional'
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                </GridContainer>
                <GridContainer>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                    labelText="Peso(Kg)"
                    id="peso"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                    labelText="Altura(cm)"
                    id="altura"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                    labelText="Diametro cabeza"
                    id="diametroCabeza"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={9}>
                  <CustomInput
                    labelText="Medicamentos recetados"
                    id="medicamentosRecetados"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      multiline: true,
                      rows: 5,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={9}>
                  <CustomInput
                    labelText="Estudios"
                    id="estudios"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      multiline: true,
                      rows: 5,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={9}>
                  <CustomInput
                    labelText="Observaciones"
                    id="observaciones"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      multiline: true,
                      rows: 5,
                    }}
                  />
                </GridItem>
              </GridContainer>
              {/* <GridContainer>
                <GridItem xs={12} sm={12} md={5}>
                  <CustomInput
                    labelText="Telefono"
                    id="telefono"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem> */}
                {/* <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Country"
                    id="country"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem> */}
                {/* <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Postal Code"
                    id="postal-code"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem> */}
              {/* </GridContainer> */}
              {/* <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <InputLabel style={{ color: "#AAAAAA" }}>About me</InputLabel>
                  <CustomInput
                    labelText="Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo."
                    id="about-me"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      multiline: true,
                      rows: 5,
                    }}
                  />
                </GridItem>
              </GridContainer> */}
            </CardBody>
            <CardFooter className={classes.cardFooter}>
              <br/>
              <Button className={classes.formButton} color= 'primary' onClick={OnClickCargarControl}>Cargar</Button>
              <Button className={classes.formButton} color= 'primary' onClick={OnClickCancelarCargarControl}>Cancelar</Button>
            </CardFooter>
          </Card>
        </GridItem>
        {/* <GridItem xs={12} sm={12} md={4}>
          <Card profile>
            <CardAvatar profile>
              <a href="#pablo" onClick={(e) => e.preventDefault()}>
                <img src={avatar} alt="..." />
              </a>
            </CardAvatar>
            <CardBody profile>
              {/* <h6 className={classes.cardCategory}>CEO / CO-FOUNDER</h6> }
              <h4 className={classes.cardTitle}>Alec Thompson</h4>
              {/* <p className={classes.description}>
                Don{"'"}t be scared of the truth because we need to restart the
                human foundation in truth And I love you like Kanye loves Kanye
                I love Rick Owens’ bed design but the back is...
              </p>
              <Button color="primary" round>
                Follow
              </Button> }
              <UploadButton color="primary" round/>
            </CardBody>
          </Card>
        </GridItem> */}
      </GridContainer>
    {/* ) : null}
    </React.Fragment> */}
    </div>
  );
  
}