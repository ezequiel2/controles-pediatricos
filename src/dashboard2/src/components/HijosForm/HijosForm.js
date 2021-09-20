import React, {useState} from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "../Grid/GridItem.js";
import GridContainer from "../Grid/GridContainer.js";
import CustomInput from "../CustomInput/CustomInput.js";
import Button from "../CustomButtons/Button.js";
import Card from "../Card/Card.js";
import CardHeader from "../Card/CardHeader.js";
import CardAvatar from "../Card/CardAvatar.js";
import CardBody from "../Card/CardBody.js";
import CardFooter from "../Card/CardFooter.js";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import avatar from "../../assets/img/faces/marc.jpg";

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
  const {OnClickCargarHijo,OnClickCancelarCargarHijo} = props;

  return (
    // <React.Fragment>
    // {mostrar ? (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={10}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Completa la informacion de tu hij@</h4>
              {/* <p className={classes.cardCategoryWhite}>-------------------</p> */}
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  {/* <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                  {/* <InputLabel id="demo-simple-select-standard-label">Hij@</InputLabel>
                    <Select
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      label="Age"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl> */}
                </GridItem>
                </GridContainer>
                <GridContainer>
                <GridItem GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Nombre"
                    id='nombre'
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                    labelText="Fecha de Nacimiento"
                    id="fecha"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                    labelText="Grupo Sanguineo"
                    id="gruposanguineo"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                    labelText="Factor"
                    id="factor"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={9}>
                  <CustomInput
                    labelText="Alergias"
                    id="alergias"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      multiline: true,
                      rows: 3,
                    }}
                  />
                </GridItem>
                </GridContainer>
                <GridContainer>
                <GridItem xs={12} sm={12} md={9}>
                  <CustomInput
                    labelText="Enfermedades Cronicas"
                    id="enfcronicas"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      multiline: true,
                      rows: 5,
                    }}
                  />
                </GridItem>
                {/* <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                    labelText="Período"
                    id="periodo"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem> */}
              </GridContainer>
              <GridContainer>
                {/* <GridItem xs={12} sm={12} md={5}>
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
              </GridContainer>
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
              <Button className={classes.formButton} color= 'primary' onClick={OnClickCargarHijo}>Cargar</Button>
              <Button className={classes.formButton} color= 'primary' onClick={OnClickCancelarCargarHijo}>Cancelar</Button>
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