import React, { Suspense } from 'react'
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { AuthCheck } from 'reactfire';
import images7 from '../assets/images/image7.jpg'

const useStyles = makeStyles({
    logo:{
        content: `url(${images7})`,
        maxWidth: '10%',
        height:'auto',
        borderRadius:400/2,
    },
    navlogo:{
        display: 'flex',
        flexDirection:'row',
        justifyContent: 'flext-start',
        alignItems: 'flex-start',        
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    column: {
        display: 'flex',
        flexDirection: 'column',
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
    },
    navbar: {
        background: `linear-gradient(90deg, rgba(143,228,255,1) 22%, rgba(140,223,132,1) 62%, rgba(249,191,107,1) 97%)`,
        zIndex: 1,
        boxShadow: '',
        bottomborder:'3 px gray'
    },
    navbarItem: {
        color: 'black',
        textDecoration: 'none',
    },
    p5: {
        padding: '5px',
    },
    spaceBetween: {
        justifyContent: 'space-between',
    },
    alignCenter: {
        alignItems: 'center'
    },
    ul: {
        listStyleType: 'none',
    },
    width60: {
        width: '100%',
    },
    width100: {
        width: '100%',
    },
    psides: {
        paddingRight: '10px',
        paddingLeft: '25px',
    },
})

export const Navbar = () => {
    const classes = useStyles();

    return (

        <div className={`${classes.row} ${classes.navbar} ${classes.width100} ${classes.alignCenter} ${classes.p5} ${classes.spaceBetween}`}>
            <div className = {`${classes.navlogo} `}> 
               <Link to='/' className={`${classes.logo} ${classes.p5}` } />
            </div>
            <div className={`${classes.width60} ${classes.alignCenter}`}>
                <ul className={`${classes.ul} ${classes.row} ${classes.spaceBetween} ${classes.psides}`}>
                <Suspense fallback={'loading...'}>
                    <AuthCheck fallback={
                        <li>
                            <Link to="/SignIn" className={`${classes.navbarItem} ${classes.psides}`}>SignIn</Link>
                        </li>
                        }>
                        <li>
                            <Button>
                            <Link to='/About' className={`${classes.navbarItem} ${classes.psides}`}>About</Link>
                            </Button>
                        </li>
                        <li>
                            <Button>
                            <Link to='/HelpfulLinks' className={`${classes.navbarItem} ${classes.psides}`}>Helpful Links</Link>
                            </Button>
                        </li>
                        <li>
                            <Button>
                            <Link to='/Disclaimer' className={`${classes.navbarItem} ${classes.psides}`}>Disclaimer</Link>
                            </Button>
                        </li>
                    </AuthCheck>
                </Suspense>
                </ul>
            </div>
        </div>
    )
}