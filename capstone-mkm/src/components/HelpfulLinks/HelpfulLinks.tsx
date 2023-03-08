import React from 'react'
import {Navbar} from '../Navbar'
import {makeStyles} from '@material-ui/core';
import images3 from '../assets/images/image3.jpg'
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';


const useStyles  = makeStyles({
    background:{
        backgroundImage: ` radial-gradient(circle, rgba(255,225,181,1) 0%, rgba(140,223,132,1) 30%, rgba(143,228,255,1) 76%);`,
        width: '100%',
        height:'100%',
        backgroundPosition:'center',
        position:'absolute',
        zIndex: -1,
    },
    main_text: {
        textAlign:'center',
        position:'relative',
        top: '40%',
        left: '50%',
        // transform: 'translate(-50%, -50%)',
        color:'white',
    },
    button_text: {
        color:'purple',
        textDecoration:'none',
    },
    image1pic:{
        width:1500,
        height: 750,
        
    },
    imageContainer:{
        justifyContent: 'center',
    },
    buttonLink:{
        textAlign:'center',
        position:'relative',
        top: '0%',
        left: '35%',
        bottom: '50%',
        // transform: 'translate(-50%, 150%)',
        color:'white',
    }
});


export const HelpfulLinks = (props:any) => {
    const classes = useStyles();
    return (
        <>
        <Navbar />
        <div className={classes.background}>
            
            <h1> Other Helpful Canning Rescources:
            </h1>
        </div>
        <div>
        <a href="https://www.nifa.usda.gov/about-nifa/blogs/usdas-complete-guide-home-canning">
             <Button className={classes.buttonLink}>
                 <h1 className={classes.button_text}> USDA Regulations</h1>
             </Button>
        </a>
        </div>
        <div>
           <a href="https://extension.umn.edu/preserving-and-preparing/canning-quick-reference-chart">
                <Button className={classes.buttonLink}>
                    <h1 className={classes.button_text}> UMN Canning Quick Reference Chart</h1>
                </Button>
           </a>
           </div>
           <div>
           <a href="https://rocklandcce.org/resources/handy-reference-for-canning-vegetables">
                <Button className={classes.buttonLink}>
                    <h1 className={classes.button_text}> CU Handy Reference for Canning Vegetables</h1>
                </Button>
           </a>
           </div>
           <div>
           <a href="https://www.youtube.com/@HomesteadingFamily">
                <Button className={classes.buttonLink}>
                    <h1 className={classes.button_text}> Homesteading Family YouTube</h1>
                </Button>
           </a>
           </div>
           <div>
           <a href="https://www.youtube.com/@1870s">
                <Button className={classes.buttonLink}>
                    <h1 className={classes.button_text}> That 1870's Homestead YouTube</h1>
                </Button>
           </a>
           </div>
           <div>
           <a href="https://www.tiktok.com/@funnyfarmdaughter">
                <Button className={classes.buttonLink}>
                    <h1 className={classes.button_text}> Funny Farm Daughter TikTok</h1>
                </Button>
           </a>
           </div>
  </>  )
}