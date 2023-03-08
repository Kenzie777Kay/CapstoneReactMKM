import React from 'react'
import {Navbar} from '../Navbar'
import {makeStyles} from '@material-ui/core';
import images6 from '../assets/images/image6.jpg'
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const useStyles  = makeStyles({
    background:{
        backgroundImage: `radial-gradient(circle, rgba(255,225,181,1) 0%, rgba(140,223,132,1) 30%, rgba(143,228,255,1) 76%)`,
        width: '100%',
        height:'100%',
        backgroundPosition:'center',
        position:'absolute',
        zIndex: -1,
    },
    main_text: {
        textAlign:'center',
        position:'relative',
        top: '0%',
        left: '0%',
        // transform: 'translate(-50%, -300%)',
        color:'red',
    },
    button_text: {
        color:'purple',
        textDecoration:'none',
        fontSize:45,
        boxShadow: '3',
        textAlign:'center'
    },
    image1pic:{
        width:900,
        height: 'auto',
        position:'relative',
        top: '120%',
        left: '25%',
        bottom:'50%',
        // transform: 'translate(-50%, -3%)',
        
    },
    buttonLink:{
        textAlign:'center',
        position:'relative',
        top: '2%',
        left: '36%',
        // transform: 'translate(-50%, -100%)',
        color:'white',
    },
    positiontext:{
        position:'relative',
        top: '-5%',
        left: '23%',
        bottom:'0%',
    }
});


export const Disclaimer = (props:any) => {
    const classes = useStyles();
    return (
        <>
        <div className={classes.background}>
            <Navbar />
            <h1 className={classes.main_text}>All Recipies Should be done with Fresh Ingredients and done to USDA Regulations. Link below. </h1>
            <h1 className={classes.main_text}>This is a website you can use for reference when trying to WATERBATH can only do not use these times for PRESSURE canning</h1>
            <h1 className={classes.main_text}>Only used for foods with HIGH acidity. NO MEAT.</h1>
            <div>
                <img className={classes.image1pic} src ={images6} alt="image6" />
           </div>
           <a href="https://www.nifa.usda.gov/about-nifa/blogs/usdas-complete-guide-home-canning">
                <Button className={classes.buttonLink}>
                    <h1 className={classes.button_text}> USDA Regulations</h1>
                </Button>
           </a>
           
        </div>
    </>)
}