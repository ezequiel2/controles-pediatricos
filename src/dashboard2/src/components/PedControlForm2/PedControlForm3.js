import React, { useState, Fragment } from "react";
import { useForm } from "react-hook-form";
import { makeStyles } from "@material-ui/core/styles";
import Card from "../Card/Card.js";
import CardHeader from "../Card/CardHeader.js";
import CardBody from "../Card/CardHeader.js";
import GridItem from "../Grid/GridItem.js";
import GridContainer from "../Grid/GridContainer.js";
import { TextField, InputLabel, Select, MenuItem } from "@material-ui/core";
import Button from "../CustomButtons/Button.js";
import CustomInput from "../CustomInput/CustomInput.js";

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
    button: {
        marginTop: "16px",
    },
}

const useStyles = makeStyles(styles);


export default function ControlPedForm3({ tipoForm, handleFormControles, OnClickCancelar, datosForm }) {


    //const { tipoForm, handleFormControles, OnClickCancelar, datosForm } = props;

    const classes = useStyles();
    const [hijo, setHijo] = React.useState('');

    const handleChangeSelect = (event) => {
        setHijo(event.target.value);
    };

    const { register, handleSubmit } = useForm();
    const [result, setResult] = useState("");
    const onSubmit = (data) => {
        //setResult(JSON.stringify(data));
        handleFormControles(data);
    }


    return (
        <Fragment>

            {tipoForm === 'A' &&
                <div>
                    <GridContainer>
                        <GridItem xs={12} sm={12} md={10}>
                            <Card>
                                <CardHeader color="primary">
                                    <h4 className={classes.cardTitleWhite}>Completa tu control pediatrico</h4>
                                </CardHeader>
                                <CardBody>
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <GridContainer>
                                            <InputLabel>Hijo</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                label="Hijo"
                                                onChange={handleChangeSelect}
                                                variant="outlined"
                                                {...register("hijo")}
                                            >
                                                <MenuItem value={10}>Ten</MenuItem>
                                                <MenuItem value={20}>Twenty</MenuItem>
                                                <MenuItem value={30}>Thirty</MenuItem>
                                            </Select>
                                        </GridContainer>
                                        <GridContainer>
                                            <GridItem xs={12} sm={12} md={3}>
                                                <TextField
                                                    className={classes.button}
                                                    id="standard-basic"
                                                    label="Fecha"
                                                    variant="outlined"
                                                    // {...register("fecha", { required: true })}
                                                    {...register("fecha")}
                                                />
                                            </GridItem>
                                            <GridItem xs={12} sm={12} md={3}>
                                                <TextField
                                                    className={classes.button}
                                                    id="standard-basic"
                                                    label="Profesional"
                                                    variant="outlined"
                                                    {...register("profesional")} />
                                            </GridItem>
                                        </GridContainer>
                                        <GridContainer>
                                            <GridItem xs={12} sm={12} md={3}>
                                                <TextField
                                                    className={classes.button}
                                                    id="standard-basic"
                                                    label="Peso"
                                                    variant="outlined"
                                                    {...register("peso")} />
                                            </GridItem>
                                            <GridItem xs={12} sm={12} md={3}>
                                                <TextField
                                                    className={classes.button}
                                                    id="standard-basic"
                                                    label="Altura"
                                                    variant="outlined"
                                                    {...register("altura")} />
                                            </GridItem>
                                            <GridItem xs={12} sm={12} md={3}>
                                                <TextField
                                                    className={classes.button}
                                                    id="standard-basic"
                                                    label="Diametro cabeza"
                                                    variant="outlined"
                                                    {...register("diametro")} />
                                            </GridItem>
                                        </GridContainer>
                                        <GridContainer>
                                            <GridItem xs={12} sm={12} md={9}>
                                                <TextField
                                                    className={classes.button}
                                                    id="standard-basic"
                                                    label="Medicamentos recetados"
                                                    variant="outlined"
                                                    multiline='true'
                                                    rows='5'
                                                    fullWidth='true'
                                                    {...register("medicamentos")} />
                                            </GridItem>
                                        </GridContainer>
                                        <GridContainer>
                                            <GridItem xs={12} sm={12} md={9}>
                                                <TextField
                                                    className={classes.button}
                                                    id="standard-basic"
                                                    label="Estudios realizados"
                                                    variant="outlined"
                                                    multiline='true'
                                                    rows='5'
                                                    fullWidth='true'
                                                    {...register("estudios")} />
                                            </GridItem>
                                        </GridContainer>
                                        <GridContainer>
                                            <GridItem xs={12} sm={12} md={9}>
                                                <TextField
                                                    className={classes.button}
                                                    id="standard-basic"
                                                    label="Observaciones"
                                                    variant="outlined"
                                                    multiline='true'
                                                    rows='5'
                                                    fullWidth='true'
                                                    {...register("observaciones")} />
                                            </GridItem>
                                        </GridContainer>
                                        <GridContainer className={classes.cardFooter}>
                                            <TextField
                                                className={classes.formButton}
                                                color='primary'
                                                type="submit"
                                            // onClick={() => handleFormControles(result)}
                                            >Cargar</TextField>
                                            <Button className={classes.formButton} color='primary' type="submit">Cancelar</Button>
                                        </GridContainer>
                                    </form>

                                </CardBody>
                            </Card>
                        </GridItem>
                    </GridContainer>
                </div>
            }
            {tipoForm === 'V' &&
                <div>
                    <GridContainer>
                        <GridItem xs={12} sm={12} md={10}>
                            <Card>
                                <CardHeader color="primary">
                                    <h4 className={classes.cardTitleWhite}>Completa tu control pediatrico</h4>
                                </CardHeader>
                                <CardBody>
                                    {/* <form onSubmit={handleSubmit(onSubmit)}> */}
                                    <GridContainer>
                                        <InputLabel>Hijo</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label="Hijo"
                                            onChange={handleChangeSelect}
                                            variant="outlined"
                                            value={datosForm.hijo}
                                        // {...register("hijo")}
                                        >
                                            {/* <MenuItem value={10}>Ten</MenuItem>
                                                <MenuItem value={20}>Twenty</MenuItem>
                                                <MenuItem value={30}>Thirty</MenuItem> */}
                                        </Select>
                                    </GridContainer>
                                    <GridContainer>
                                        <GridItem xs={12} sm={12} md={3}>
                                            <TextField
                                                id="standard-basic"
                                                label="Fecha"
                                                variant="outlined"
                                                // {...register("fecha", { required: true })}
                                                //{...register("fecha")}
                                                value={datosForm.fecha}
                                            />
                                        </GridItem>
                                        <GridItem xs={12} sm={12} md={3}>
                                            <TextField
                                                id="standard-basic"
                                                label="Profesional"
                                                variant="outlined"
                                                // {...register("profesional")} 
                                                value={datosForm.profesional}

                                            />
                                        </GridItem>
                                    </GridContainer>
                                    <GridContainer>
                                        <GridItem xs={12} sm={12} md={3}>
                                            <br />
                                            <TextField
                                                id="standard-basic"
                                                variant='outlined'
                                                size='small'
                                                label="Peso"
                                                //variant="standard"
                                                //{...register("peso")} 
                                                value={datosForm.peso}
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                            />
                                        </GridItem>
                                        <GridItem xs={12} sm={12} md={3}>
                                            <TextField
                                                id="standard-basic"
                                                label="Altura"
                                                variant="outlined"
                                                // {...register("altura")}
                                                value={datosForm.altura}
                                            />
                                        </GridItem>
                                        <GridItem xs={12} sm={12} md={3}>
                                            <TextField
                                                id="standard-basic"
                                                label="Diametro cabeza"
                                                variant="outlined"
                                                //{...register("diametro")} 
                                                value={datosForm.diametro}
                                            />
                                        </GridItem>
                                    </GridContainer>
                                    <GridContainer>
                                        <GridItem xs={12} sm={12} md={9}>
                                            <TextField
                                                id="standard-basic"
                                                label="Medicamentos recetados"
                                                variant="outlined"
                                                multiline='true'
                                                rows='5'
                                                fullWidth='true'
                                                // {...register("medicamentos")}
                                                value={datosForm.medicamentos}
                                            />
                                        </GridItem>
                                    </GridContainer>
                                    <GridContainer>
                                        <GridItem xs={12} sm={12} md={9}>
                                            <TextField
                                                id="standard-basic"
                                                label="Estudios realizados"
                                                variant="outlined"
                                                multiline='true'
                                                rows='5'
                                                fullWidth='true'
                                                // {...register("estudios")}
                                                value={datosForm.estudios}
                                            />
                                        </GridItem>
                                    </GridContainer>
                                    <GridContainer>
                                        <GridItem xs={12} sm={12} md={9}>
                                            <TextField
                                                id="standard-basic"
                                                label="Observaciones"
                                                variant="outlined"
                                                multiline='true'
                                                rows='5'
                                                fullWidth='true'
                                                // {...register("observaciones")}
                                                value={datosForm.observaciones} />
                                        </GridItem>
                                    </GridContainer>
                                    <GridContainer className={classes.cardFooter}>
                                        <TextField
                                            className={classes.formButton}
                                            color='primary'
                                            type="submit"
                                        // onClick={() => handleFormControles(result)}
                                        >Cargar</TextField>
                                        <Button className={classes.formButton} color='primary' onClick={OnClickCancelar}>Cancelar</Button>
                                    </GridContainer>
                                    {/* </form> */}
                                </CardBody>
                            </Card>
                        </GridItem>
                    </GridContainer>
                </div>
            }

            {tipoForm === 'M' &&
                <p>'Soy un Modificacion'</p>
            }


            {/* <GridContainer>
                    <GridItem xs={12} sm={12} md={10}>
                        <Card>
                            <CardHeader color="primary">
                                <h4 className={classes.cardTitleWhite}>Completa tu control pediatrico</h4>
                            </CardHeader>
                            <CardBody>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <GridContainer>
                                        <InputLabel>Hijo</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label="Hijo"
                                            onChange={handleChangeSelect}
                                            variant="standard"
                                            {...register("hijo")}
                                        >
                                            <MenuItem value={10}>Ten</MenuItem>
                                            <MenuItem value={20}>Twenty</MenuItem>
                                            <MenuItem value={30}>Thirty</MenuItem>
                                        </Select>
                                    </GridContainer>
                                    <GridContainer>
                                        <GridItem xs={12} sm={12} md={3}>
                                            <TextField
                                                id="standard-basic"
                                                label="Fecha"
                                                variant="standard"
                                                // {...register("fecha", { required: true })}
                                                {...register("fecha")}
                                            />
                                        </GridItem>
                                        <GridItem xs={12} sm={12} md={3}>
                                            <TextField
                                                id="standard-basic"
                                                label="Profesional"
                                                variant="standard"
                                                {...register("profesional")} />
                                        </GridItem>
                                    </GridContainer>
                                    <GridContainer>
                                        <GridItem xs={12} sm={12} md={3}>
                                            <TextField
                                                id="standard-basic"
                                                label="Peso"
                                                variant="standard"
                                                {...register("peso")} />
                                        </GridItem>
                                        <GridItem xs={12} sm={12} md={3}>
                                            <TextField
                                                id="standard-basic"
                                                label="Altura"
                                                variant="standard"
                                                {...register("altura")} />
                                        </GridItem>
                                        <GridItem xs={12} sm={12} md={3}>
                                            <TextField
                                                id="standard-basic"
                                                label="Diametro cabeza"
                                                variant="standard"
                                                {...register("diametro")} />
                                        </GridItem>
                                    </GridContainer>
                                    <GridContainer>
                                        <GridItem xs={12} sm={12} md={9}>
                                            <TextField
                                                id="standard-basic"
                                                label="Medicamentos recetados"
                                                variant="standard"
                                                multiline='true'
                                                rows='5'
                                                fullWidth='true'
                                                {...register("medicamentos")} />
                                        </GridItem>
                                    </GridContainer>
                                    <GridContainer>
                                        <GridItem xs={12} sm={12} md={9}>
                                            <TextField
                                                id="standard-basic"
                                                label="Estudios realizados"
                                                variant="standard"
                                                multiline='true'
                                                rows='5'
                                                fullWidth='true'
                                                {...register("estudios")} />
                                        </GridItem>
                                    </GridContainer>
                                    <GridContainer>
                                        <GridItem xs={12} sm={12} md={9}>
                                            <TextField
                                                id="standard-basic"
                                                label="Observaciones"
                                                variant="standard"
                                                multiline='true'
                                                rows='5'
                                                fullWidth='true'
                                                {...register("observaciones")} />
                                        </GridItem>
                                    </GridContainer>
                                    <GridContainer className={classes.cardFooter}>
                                        <TextField
                                            className={classes.formButton}
                                            color='primary'
                                            type="submit"
                                        // onClick={() => handleFormControles(result)}
                                        >Cargar</TextField>
                                        <Button className={classes.formButton} color='primary' type="submit">Cancelar</Button>
                                    </GridContainer>
                                </form>

                            </CardBody>
                        </Card>
                    </GridItem>
                </GridContainer> */}
            {/* </div> */}
        </Fragment>
    );
}