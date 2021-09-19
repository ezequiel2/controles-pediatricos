import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Container from '@material-ui/core/Container';
import Typography from '../components/Typography';
import { Link } from 'react-router-dom';

const styles = (theme) => ({
  root: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(4),
  },
  images: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexWrap: 'wrap',
  },
  imageWrapper: {
    position: 'relative',
    display: 'block',
    padding: 0,
    borderRadius: 0,
    height: '40vh',
    [theme.breakpoints.down('sm')]: {
      width: '100% !important',
      height: 100,
    },
    '&:hover': {
      zIndex: 1,
    },
    '&:hover $imageBackdrop': {
      opacity: 0.15,
    },
    '&:hover $imageMarked': {
      opacity: 0,
    },
    '&:hover $imageTitle': {
      border: '4px solid currentColor',
    },
  },
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background: theme.palette.common.black,
    opacity: 0.5,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px 14px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
});

function ProductCategories(props) {
  const { classes } = props;

  const images = [
    {
      url:
        'https://source.unsplash.com/collection/2061832/',
      title: 'Importancia del control pediatrico',
      width: '50%',
      urlArticle: 'https://www.clinicapueyrredon.com/importancia-del-control-pediatrico-del-nino-sano/',
      // to:"/importancia-control-pediatrico",
    },
    // {
    //   url:
    //     'https://images.unsplash.com/photo-1531299204812-e6d44d9a185c?auto=format&fit=crop&w=400&q=80',
    //   title: 'Massage',
    //   width: '20%',
    //   to:"/",
    // },
    {
      url:
        'https://source.unsplash.com/collection/22913724',
      title: 'Calendario de vacunación',
      width: '50%',
      urlArticle: "https://www.argentina.gob.ar/salud/vacunas",
    },
    {
      url:
        'https://source.unsplash.com/collection/9496388',
      title: 'Vacunas durante el embarazo',
      width: '38%',
      urlArticle: "https://www.argentina.gob.ar/salud/vacunas/embarazadas",
    },
    {
      url:
        'https://source.unsplash.com/collection/3329685',
      title: 'Vacunas recien nacidos',
      width: '38%',
      urlArticle: "https://www.argentina.gob.ar/salud/vacunas/recien-nacidos",
    },
    {
      url:
        'https://source.unsplash.com/collection/10773888',
      title: 'Vacunas lactantes',
      width: '24%',
      urlArticle: "https://www.argentina.gob.ar/salud/vacunas/vacunacion-lactantes",
    },
    {
      url:
        'https://source.unsplash.com/collection/2017406',
      title: 'Vacunas hasta los 2 años de vida',
      width: '40%',
      urlArticle: "https://www.argentina.gob.ar/salud/vacunas/vacunacion-niniosyninias",
    },
    {
      url:
        'https://source.unsplash.com/collection/70933075',
      title: 'Salud sexual',
      width: '20%',
      urlArticle: "https://www.argentina.gob.ar/salud/sexual",
    },
    {
      url:
        'https://source.unsplash.com/collection/2210494',
      title: 'Cuidados en edad escolar',
      width: '40%',
      urlArticle: "https://www.argentina.gob.ar/salud/cuidadosedadescolar",
    },
  ];

  return (
    <Container className={classes.root} component="section">
      <Typography variant="h4" marked="center" align="center" component="h2">
        Articulos de interés
      </Typography>
      <div className={classes.images}>
        {images.map((image) => (
          <ButtonBase
            key={image.title}
            className={classes.imageWrapper}
            style={{
              width: image.width,
            }}
            href={image.urlArticle}
          >
            <div
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(${image.url})`,
              }}>
              {/* <Link to={image.to} style={{ color: 'inherit', textDecoration: 'inherit'}}>   */}
              <div className={classes.imageBackdrop} />
              <div className={classes.imageButton}>

                <Typography
                  component="h3"
                  variant="h6"
                  color="inherit"
                  className={classes.imageTitle}
                >
                  {image.title}
                  <div className={classes.imageMarked} />
                </Typography>
              </div>
              {/* </Link>   */}
            </div>
          </ButtonBase>
        ))}
      </div>
    </Container>
  );
}

ProductCategories.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductCategories);
