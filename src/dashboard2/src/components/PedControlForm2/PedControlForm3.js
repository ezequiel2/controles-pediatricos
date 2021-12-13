import React, { useState, Fragment } from "react";
import { useForm } from "react-hook-form";
import { makeStyles } from "@material-ui/core/styles";
import Card from "../Card/Card.js";
import CardHeader from "../Card/CardHeader.js";
import CardBody from "../Card/CardHeader.js";
import GridItem from "../Grid/GridItem.js";
import GridContainer from "../Grid/GridContainer.js";
import { TextField, InputLabel, Select, MenuItem, Box, FormControl } from "@material-ui/core";
import Button from "../CustomButtons/Button.js";
import {
    primaryColor,
    grayColor,
    defaultFont,
} from "../../assets/jss/material-dashboard-react";


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
        marginTop: "16px",
    },
    button: {
        marginTop: "16px",
        borderColor: primaryColor[0],
        '&.Mui-focused fieldset': {
            borderColor: primaryColor[0],
        },
    },
    select: {
        marginTop: "16px",
        marginLeft: '15px',
        width: "190px",
        height: "38px",
    },
    selectLabel: {
        //marginBotton: "0px",
        marginLeft: '29px',
    },
    root: {

        marginTop: "16px",
        '& label.Mui-focused': {
            color: grayColor[0],
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: primaryColor[0],
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: grayColor[4],
            },
            '&:hover fieldset': {
                borderColor: grayColor[4],
            },
            '&.Mui-focused fieldset': {
                borderColor: primaryColor[0],
            },
            "&.MuiInputBase-root.Mui-disabled": {
                color: "rgba(0, 0, 0, 0.8)" // (default alpha is 0.38)
            }
        },

    },
}

const useStyles = makeStyles(styles);


export default function ControlPedForm3({ tipoForm, handleFormControles, OnClickCancelar, datosForm }) {


    //const { tipoForm, handleFormControles, OnClickCancelar, datosForm } = props;

    const classes = useStyles();
    const [hijo, setHijo] = useState('');

    const handleChangeSelect = (event) => {
        setHijo(event.target.value);
    };

    const { register, handleSubmit } = useForm();
    const [result, setResult] = useState("");
    const [data, setData] = useState();
    const onSubmit = (data, e) => {
        //setResult(JSON.stringify(data));
        handleFormControles(data);
        e.target.reset();
    }

    const handleInputChange = (event) => {
        // console.log(event.target.name)
        // console.log(event.target.value)
        setData({
            ...data,
            [event.target.name]: event.target.value
        })

    }

    const [prof, setProf] = useState();

    const updateProfesional = (e) => {
        setProf()

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
                                            <Box sx={{ minWidth: 195 }}>
                                                <FormControl fullWidth>
                                                    <InputLabel className={classes.selectLabel}
                                                    >Hijo</InputLabel>
                                                    <Select
                                                        className={classes.select}
                                                        size='small'
                                                        labelId="Hijo"
                                                        id="Hijo"
                                                        label="Hijo"
                                                        onChange={handleChangeSelect}
                                                        variant="outlined"
                                                        //value={datosForm.hijo}
                                                        InputLabelProps={{
                                                            shrink: true,
                                                        }}
                                                        {...register("hijo")}
                                                    >
                                                        <MenuItem value={0}>Seleccionar...</MenuItem>
                                                        <MenuItem value={10}>Ten</MenuItem>
                                                        <MenuItem value={20}>Twenty</MenuItem>
                                                        <MenuItem value={30}>Thirty</MenuItem>

                                                    </Select>
                                                </FormControl>
                                            </Box>
                                        </GridContainer>
                                        <GridContainer>
                                            <GridItem xs={12} sm={12} md={3}>
                                                <TextField
                                                    type='date'
                                                    className={classes.root}
                                                    size='small'
                                                    id="standard-basic"
                                                    //label="Fecha"
                                                    variant="outlined"
                                                    // {...register("fecha", { required: true })}
                                                    {...register("fecha")}
                                                />
                                            </GridItem>
                                            <GridItem xs={12} sm={12} md={3}>
                                                <TextField
                                                    className={classes.root}
                                                    size='small'
                                                    id="standard-basic"
                                                    label="Profesional"
                                                    variant="outlined"
                                                    {...register("profesional")} />
                                            </GridItem>
                                        </GridContainer>
                                        <GridContainer>
                                            <GridItem xs={12} sm={12} md={3}>
                                                <TextField
                                                    className={classes.root}
                                                    size='small'
                                                    id="standard-basic"
                                                    label="Peso"
                                                    variant="outlined"
                                                    {...register("peso")} />
                                            </GridItem>
                                            <GridItem xs={12} sm={12} md={3}>
                                                <TextField
                                                    className={classes.root}
                                                    size='small'
                                                    id="standard-basic"
                                                    label="Altura"
                                                    variant="outlined"
                                                    {...register("altura")} />
                                            </GridItem>
                                            <GridItem xs={12} sm={12} md={3}>
                                                <TextField
                                                    className={classes.root}
                                                    size='small'
                                                    id="standard-basic"
                                                    label="Diametro cabeza"
                                                    variant="outlined"
                                                    {...register("diametro")} />
                                            </GridItem>
                                        </GridContainer>
                                        <GridContainer>
                                            <GridItem xs={12} sm={12} md={9}>
                                                <TextField
                                                    className={classes.root}
                                                    size='small'
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
                                                    className={classes.root}
                                                    size='small'
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
                                                    className={classes.root}
                                                    size='small'
                                                    id="standard-basic"
                                                    label="Observaciones"
                                                    variant="outlined"
                                                    multiline='true'
                                                    rows='5'
                                                    fullWidth='true'
                                                    {...register("observaciones")} />
                                            </GridItem>
                                        </GridContainer>
                                        <br />
                                        <GridContainer className={classes.cardFooter}>
                                            <Button
                                                className={classes.formButton}
                                                color='primary'
                                                type="submit"
                                            // onClick={() => handleFormControles(result)}
                                            >Cargar</Button>
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
                                        <GridItem xs={12} sm={12} md={3}>
                                            <TextField
                                                //type='date'
                                                className={classes.root}
                                                size='small'
                                                id="standard-basic"
                                                label="Nombre"
                                                variant="outlined"
                                                disabled
                                                value={datosForm.nombre_hijo}
                                            // {...register("fecha", { required: true })}
                                            //{...register("nombre")} 
                                            />
                                        </GridItem>
                                        {/* <Box sx={{ minWidth: 120 }}>
                                            <FormControl fullWidth>
                                                <InputLabel className={classes.selectLabel}>Hijo</InputLabel>
                                                <Select
                                                    className={classes.select}
                                                    size='small'
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    label="Hijo"
                                                    onChange={handleChangeSelect}
                                                    variant="outlined"
                                                    value={datosForm.nombre_hijo}
                                                    InputLabelProps={{
                                                        shrink: true,
                                                    }}
                                                    readOnly
                                                // {...register("hijo")}
                                                >
                                                    <MenuItem value={10}>Ten</MenuItem>
                                                    <MenuItem value={20}>Twenty</MenuItem>
                                                    <MenuItem value={30}>Thirty</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Box> */}

                                    </GridContainer>
                                    <GridContainer>
                                        <GridItem xs={12} sm={12} md={3}>
                                            <TextField
                                                className={classes.root}
                                                size='small'
                                                id="standard-basic"
                                                label="Fecha"
                                                variant="outlined"
                                                // {...register("fecha", { required: true })}
                                                //{...register("fecha")}
                                                value={datosForm.fecha_control_ped}
                                                disabled
                                                readOnly
                                            />
                                        </GridItem>
                                        <GridItem xs={12} sm={12} md={3}>
                                            <TextField
                                                className={classes.root}
                                                size='small'
                                                id="standard-basic"
                                                label="Profesional"
                                                variant="outlined"
                                                // {...register("profesional")} 
                                                value={datosForm.profesional}
                                                disabled
                                                readOnly
                                            />
                                        </GridItem>
                                    </GridContainer>
                                    <GridContainer>
                                        <GridItem xs={12} sm={12} md={3}>
                                            <TextField
                                                className={classes.root}
                                                id="standard-basic"
                                                variant='outlined'
                                                size='small'
                                                label="Peso"
                                                //variant="standard"
                                                //{...register("peso")} 
                                                value={datosForm.peso}
                                                // InputLabelProps={{
                                                //     shrink: true,
                                                // }}
                                                readOnly
                                                disabled
                                            />
                                        </GridItem>
                                        <GridItem xs={12} sm={12} md={3}>
                                            <TextField
                                                className={classes.root}
                                                size='small'
                                                id="standard-basic"
                                                label="Altura"
                                                variant="outlined"
                                                // {...register("altura")}
                                                value={datosForm.altura}
                                                readOnly
                                                disabled
                                            />
                                        </GridItem>
                                        <GridItem xs={12} sm={12} md={3}>
                                            <TextField
                                                className={classes.root}
                                                size='small'
                                                id="standard-basic"
                                                label="Diametro cabeza"
                                                variant="outlined"
                                                //{...register("diametro")} 
                                                value={datosForm.diametro_cabeza}
                                                disabled
                                                readOnly
                                            />
                                        </GridItem>
                                    </GridContainer>
                                    <GridContainer>
                                        <GridItem xs={12} sm={12} md={9}>
                                            <TextField
                                                className={classes.root}
                                                size='small'
                                                id="standard-basic"
                                                label="Medicamentos recetados"
                                                variant="outlined"
                                                multiline='true'
                                                rows='5'
                                                fullWidth='true'
                                                // {...register("medicamentos")}
                                                value={datosForm.medicamentos_recetados}
                                                readOnly
                                                disabled
                                            />
                                        </GridItem>
                                    </GridContainer>
                                    <GridContainer>
                                        <GridItem xs={12} sm={12} md={9}>
                                            <TextField
                                                className={classes.root}
                                                size='small'
                                                id="standard-basic"
                                                label="Estudios realizados"
                                                variant="outlined"
                                                multiline='true'
                                                rows='5'
                                                fullWidth='true'
                                                // {...register("estudios")}
                                                value={datosForm.estudios_realizados}
                                                readOnly
                                                disabled
                                            />
                                        </GridItem>
                                    </GridContainer>
                                    <GridContainer>
                                        <GridItem xs={12} sm={12} md={9}>
                                            <TextField
                                                className={classes.root}
                                                size='small'
                                                id="standard-basic"
                                                label="Observaciones"
                                                variant="outlined"
                                                multiline='true'
                                                rows='5'
                                                fullWidth='true'
                                                readOnly
                                                disabled
                                                // {...register("observaciones")}
                                                value={datosForm.observaciones} />

                                        </GridItem>
                                    </GridContainer>
                                    <br />
                                    <GridContainer className={classes.cardFooter}>
                                        {/* <Button
                                            className={classes.formButton}
                                            color='primary'
                                            type="submit"
                                        // onClick={() => handleFormControles(result)}
                                        >Cargar</Button> */}
                                        <Button className={classes.formButton} color='primary' onClick={OnClickCancelar}>Cerrar</Button>
                                    </GridContainer>
                                    {/* </form> */}
                                </CardBody>
                            </Card>
                        </GridItem>
                    </GridContainer>
                </div>
            }

            {tipoForm === 'M' &&
                <div>
                    {() => { setData(datosForm) }}
                    <GridContainer>
                        <GridItem xs={12} sm={12} md={10}>
                            <Card>
                                <CardHeader color="primary">
                                    <h4 className={classes.cardTitleWhite}>Completa tu control pediatrico</h4>
                                </CardHeader>
                                <CardBody>
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <GridContainer>
                                            <GridItem xs={12} sm={12} md={3}>
                                                <TextField
                                                    //type='date'
                                                    className={classes.root}
                                                    size='small'
                                                    id="standard-basic"
                                                    label="Nombre"
                                                    variant="outlined"
                                                    disabled
                                                    value={datosForm.nombre_hijo}
                                                // {...register("fecha", { required: true })}
                                                //{...register("nombre")} 
                                                />
                                            </GridItem>
                                        </GridContainer>
                                        <GridContainer>
                                            <GridItem xs={12} sm={12} md={3}>
                                                {/* <TextField
                                                    className={classes.root}
                                                    size='small'
                                                    id="standard-basic"
                                                    label="Fecha"
                                                    variant="outlined"
                                                    // {...register("fecha", { required: true })}
                                                    {...register("fecha")}
                                                    value={datosForm.fecha}

                                                /> */}
                                                <TextField
                                                    type='date'
                                                    className={classes.root}
                                                    InputLabelProps={{ shrink: true }}
                                                    size='small'
                                                    id="standard-basic"
                                                    label="Fecha de Nacimiento"
                                                    name="fecha_nacimiento"
                                                    variant="outlined"
                                                    value={datosForm.fecha_control_ped}
                                                //{...register("fechaNacimiento")}
                                                />
                                            </GridItem>
                                            <GridItem xs={12} sm={12} md={3}>
                                                <TextField
                                                    className={classes.root}
                                                    size='small'
                                                    id="standard-basic"
                                                    label="Profesional"
                                                    variant="outlined"                                                    
                                                    value={datosForm.profesional}
                                                    //onChange={updateProfesional((e.target.value)) => ()}
                                                    {...register("profesional")}

                                                />
                                            </GridItem>
                                        </GridContainer>
                                        <GridContainer>
                                            <GridItem xs={12} sm={12} md={3}>
                                                <TextField
                                                    className={classes.root}
                                                    id="standard-basic"
                                                    variant='outlined'
                                                    size='small'
                                                    label="Peso"
                                                    //variant="standard"
                                                    {...register("peso")}
                                                    value={datosForm.peso}
                                                // InputLabelProps={{
                                                //     shrink: true,
                                                // }}

                                                />
                                            </GridItem>
                                            <GridItem xs={12} sm={12} md={3}>
                                                <TextField
                                                    className={classes.root}
                                                    size='small'
                                                    id="standard-basic"
                                                    label="Altura"
                                                    variant="outlined"
                                                    {...register("altura")}
                                                    value={datosForm.altura}
                                                />
                                            </GridItem>
                                            <GridItem xs={12} sm={12} md={3}>
                                                <TextField
                                                    className={classes.root}
                                                    size='small'
                                                    id="standard-basic"
                                                    label="Diametro cabeza"
                                                    variant="outlined"
                                                    {...register("diametro")}
                                                    value={datosForm.diametro_cabeza}
                                                />
                                            </GridItem>
                                        </GridContainer>
                                        <GridContainer>
                                            <GridItem xs={12} sm={12} md={9}>
                                                <TextField
                                                    className={classes.root}
                                                    size='small'
                                                    id="standard-basic"
                                                    label="Medicamentos recetados"
                                                    variant="outlined"
                                                    multiline='true'
                                                    rows='5'
                                                    fullWidth='true'
                                                    {...register("medicamentos")}
                                                    value={datosForm.medicamentos_recetados}
                                                />
                                            </GridItem>
                                        </GridContainer>
                                        <GridContainer>
                                            <GridItem xs={12} sm={12} md={9}>
                                                <TextField
                                                    className={classes.root}
                                                    size='small'
                                                    id="standard-basic"
                                                    label="Estudios realizados"
                                                    variant="outlined"
                                                    multiline='true'
                                                    rows='5'
                                                    fullWidth='true'
                                                    {...register("estudios")}
                                                    value={datosForm.estudios_realizados}
                                                />
                                            </GridItem>
                                        </GridContainer>
                                        <GridContainer>
                                            <GridItem xs={12} sm={12} md={9}>
                                                <TextField
                                                    className={classes.root}
                                                    size='small'
                                                    id="standard-basic"
                                                    label="Observaciones"
                                                    variant="outlined"
                                                    multiline='true'
                                                    rows='5'
                                                    fullWidth='true'
                                                    {...register("observaciones")}
                                                    value={datosForm.observaciones} />

                                            </GridItem>
                                        </GridContainer>
                                        <br />
                                        <GridContainer className={classes.cardFooter}>
                                            <Button
                                                className={classes.formButton}
                                                color='primary'
                                                type="submit"
                                            //onClick={() => handleFormControles(result)}
                                            >Actualizar</Button>
                                            <Button className={classes.formButton} color='primary' onClick={OnClickCancelar}>Cerrar</Button>
                                        </GridContainer>
                                    </form>
                                </CardBody>
                            </Card>
                        </GridItem>
                    </GridContainer>
                </div>
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