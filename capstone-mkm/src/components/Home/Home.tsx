import React from 'react';
import {makeStyles} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Navbar } from '../../components/Navbar'
import {Link} from 'react-router-dom';
import images3 from '../assets/images/image3.jpg'

interface Props{
    title:string;
}



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
        textAlign:'left',
        position:'relative',
        top: '10%',
        left: '25%',
        bottom:'5%',
        // transform: 'translate(-25%, -350%)',
        color:'black',
        fontSize:45,

    },
    button_text: {
        color:'black',
        textDecoration:'none',
        fontSize:40,
        position:'relative',
        top: '-100%',
        left: '175%',
        bottom:'0%',
        // transform: 'translate(170%, -145%)',
        
    },
    image1pic:{
        width:1000,
        margin:'auto',
        height: 'auto',
        // justifyContent:'center',
        // transform: 'translate(45%, -15%)',
        borderRadius:400/2,
        // position:'relative',
        // top: '30%',
        // left: '23%',
        // bottom:'0%',
        
    },
    imageContainer:{
        position:'relative',
        top: '10%',
        left: '23%',
        bottom:'0%',
    },

    buttonContainer:{
        position:'relative',
        top: '10%',
        bottom:'0%',
    }
});

export const Home = ( props: Props) => {
     const classes = useStyles();
   

    return(
        <>
            <Navbar />
            <div className={`${classes.background}`}>
                
                <div className={classes.main_text}>
                    <h1>{props.title}</h1>
                    
                </div>
                <div className={classes.imageContainer}>
                    <img className={classes.image1pic} src ={images3} alt="bg" />
                </div>

                <div className={classes.buttonContainer}>
                    <Button >
                        <Link className={classes.button_text} to = '/TheCanner' > Take me to The Canner! </Link>
                    </Button>
                </div>
            </div>
        </>
    )
}