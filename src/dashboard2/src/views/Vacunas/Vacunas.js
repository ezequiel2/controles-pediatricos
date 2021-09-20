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
import CardBody from "../../components/Card/CardBody.js";
import CardFooter from "../../components/Card/CardFooter.js";
import Table from "../../components/Table/Table.js";
import { CardMedia } from "@material-ui/core";
import calendario from '../../assets/img/CalendarVac2020.jpg'
import VacunasForm from "../../components/VacunasForm/VacunasForm.js";
import IconButton from "@material-ui/core/IconButton";
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';




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
};

const useStyles = makeStyles(styles);

export default function Vacunas() {
  const classes = useStyles();
  const [image, setImage] = React.useState(calendario);
  const [showAgregarVacuna, setShowAgregarVacuna] = useState(false);
  const OnClickAgregarVacuna = () => {
    setShowAgregarVacuna(!showAgregarVacuna);
  }
  return (
    <div>
    <React.Fragment>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Calendario de Vacunacion</h4>
              {/* <p className={classes.cardCategoryWhite}>Completa tu perfil</p> */}
            </CardHeader>
            <CardBody>
            <CardMedia
              component="img"
              sx={{ width: 151 }}
              image= {image}
            />
              {/* <GridContainer> */}
                {/* <GridItem xs={12} sm={12} md={5}>
                  <CustomInput
                    labelText="DNI"
                    //id="company-disabled"
                    id='dni'
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      disabled: true,
                    }}
                  />
                </GridItem> */}
                {/* <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                    labelText="Username"
                    id="username"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem> */}
                {/* <GridItem xs={12} sm={12} md={5}>
                  <CustomInput
                    labelText="Email"
                    id="email"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      disabled: true,
                    }}
                  />
                </GridItem> */}
              {/* </GridContainer> */}
              {/* <GridContainer>
                <GridItem xs={12} sm={12} md={5}>
                  <CustomInput
                    labelText="Nombre"
                    id="nombre"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={5}>
                  <CustomInput
                    labelText="Apellido"
                    id="apellido"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
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
            </Card>
            <br />
            <Card>
            <CardHeader color="primary" display='inline-block'>
              <h4 className={classes.cardTitleWhite}>Vacunas aplicadas</h4>
              <IconButton
                className={classes.cardHeaderButton}
                onClick={OnClickAgregarVacuna}>
                <AddToPhotosIcon
                  className={classes.cardTitleWhite}
                //color='primary'
                //size='large'
                />
              </IconButton>
              {/* <Button color= 'primary' size='sm' className={classes.cardHeaderButton} onClick={OnClickAgregarControl}>Boton feo</Button> */}
            </CardHeader>
            {showAgregarVacuna ? (
            <div><br/><VacunasForm/> </div>
          ) :null} 
            <CardBody>
              <Table
                tableHeaderColor="primary"
                tableHead={["Nombre", "Fecha", "Especialista", "Salary", "", ""]}
                tableData={[
                  ["Dakota Rice", "Niger", "Oud-Turnhout", "$36,738"],
                  ["Minerva Hooper", "Curaçao", "Sinaai-Waas", "$23,789"],
                  ["Sage Rodriguez", "Netherlands", "Baileux", "$56,142"],
                ]}
              />
            </CardBody>
            <CardFooter>
              {/* <Button color="primary">Actualizar Perfil</Button> */}
            </CardFooter>
          </Card>
        </GridItem>
      <GridItem xs={12} sm={12} md={12}>
        
      </GridItem>
      </GridContainer>
      </React.Fragment>
    </div>
  );
}
