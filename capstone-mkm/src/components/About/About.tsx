import React from 'react'
import {Navbar} from '../Navbar'
import {makeStyles} from '@material-ui/core';
import images4 from '../assets/images/image4.jpg'

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
        top: '10%',
        left: '1%',
        // transform: 'translate(-50%, -800%)',
        color:'purple',
    },
    button_text: {
        color:'yellow',
        textDecoration:'none',
    },
    image1pic:{
        width:'auto',
        height: 500,
        position:'relative',
        top: '5%',
        left: '40%',
        bottom:'5%',
        // transform: 'translate(200%, 30%)',
        borderRadius:400/2
        
    },
    imageContainer:{
        position:'relative',
        top: '15%',
        left: '0%',
        bottom:'0%',
    }
});


export const About = (props:any) => {
    const classes = useStyles();
    return (
        <>
        <Navbar />
       
        <div className={classes.background}>
           
            <h1 className={classes.main_text}>This is a website that you can use as a reference when Waterbath canning and can keep track of your times and elevation</h1>
            <h1 className={classes.main_text}> This webiste it a guide but can always be checked and verified above by clicking the Helpful Links at the top</h1>
            <div className={classes.imageContainer}>
                <img className={classes.image1pic} src ={images4} alt="image4" />
            </div> 
        </div>
    </>
  )
}