import React from 'react';
import { withStyles, WithStyles } from '@material-ui/core';
import clsx from 'clsx';
import SocialMediaLinks from './SocialMediaLinks';
import EmailSignUp from './EmailSignUp';

const styles = theme => ({
    root: {
        paddingTop: 46,
        paddingBottom: 46,
        margin: '10px 0px 10px 0px'
    },

    newsletterWrap: {
        display: 'flex',
        flexDirection: 'column' as 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },

    socialWrap: {
        textAlign: 'center' as 'center',
        padding: 20
    },

    copyrightWrap: {
        textAlign: 'center' as 'center'
    },

    newsletterHeading: {
        fontSize: '2rem',
        fontWeight: 500,
        margin: 0,
        textTransform: 'uppercase' as 'uppercase',

        [theme.breakpoints.down('sm')]: {
            fontSize: '1.5rem',
        },
    },

    emailSignUp: {
        width: '100%',
        maxWidth: 400
    }
});

interface Props extends WithStyles<typeof styles> {
    className?: string;
    style?: React.CSSProperties;
}

const Footer: React.SFC<Props> = (props) => {
    const {
        classes,
        className,
        ...other
    } = props;

    return (
        <footer className={clsx(classes.root, className)} {...other}>
            <div className={classes.newsletterWrap}>
                <h2 className={classes.newsletterHeading}>exclusive offers &amp; updates</h2>
                <p>
                    Receive our newsletter on the latest deals and happenings.
                 </p>
                <EmailSignUp className={classes.emailSignUp} />
            </div>
            <div className={classes.socialWrap}>
                <SocialMediaLinks />
            </div>
            <div className={classes.copyrightWrap}>
                © 2020 ANYA FINN. All Rights Reserved.
             </div>
        </footer>
    );
};

export default withStyles(styles)(Footer);



// import React from 'react';

// import { IconButton, makeStyles, Typography } from '@material-ui/core';

// import FacebookIcon from '@material-ui/icons/Facebook';
// import TwitterIcon from '@material-ui/icons/Twitter';
// import InstagramIcon from '@material-ui/icons/Instagram';
// import PinterestIcon from '@material-ui/icons/Pinterest';
// import EmailSignUp from '../../EmailSignUp';
// import { useGlobalSettings } from '../../core/GlobalSettings/useGlobalSettings';

// import FooterLinks from './FooterLinks';
// import { FooterData } from './FooterData';

// interface Props {
//     data: FooterData;
// }

// const useStyles = makeStyles(theme => ({
//     root: {
//         paddingTop: 46,
//         paddingBottom: 46,
//         margin: '10px 0px 10px 0px'
//     },

//     newsletter: {
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         justifyContent: 'center',
//         padding: 20
//     },

//     newsletterHeading: {
//         fontSize: '2rem',
//         fontWeight: 500,
//         margin: 0,
//         textTransform: 'uppercase',

//         [theme.breakpoints.down('sm')]: {
//             fontSize: '1.5rem',
//         },
//     },

//     links: {
//         padding: 20,
//         display: 'flex',
//         flexDirection: 'row',
//         alignContent: 'center',
//         justifyContent: 'center',

//         [theme.breakpoints.down('sm')]: {
//             flexDirection: 'column'
//         },
//     },

//     social: {
//         textAlign: 'center',
//         padding: 20
//     },

//     copyright: {
//         textAlign: 'center'
//     },

//     emailSignUpWrapper: {
//         flex: 1
//     },
//     emailSignUp: {
//         width: '100%',
//         maxWidth: 400
//     }
// }));

// const Footer: React.SFC<Props> = (props: Props) => {


//     const {
//         data
//     } = props;

//     return (
//         <footer className={classes.root}>

//             <div className={classes.newsletter}>
//                 <h2 className={classes.newsletterHeading}>exclusive offers &amp; updates</h2>
//                 <p>
//                     Receive our newsletter on the latest deals and happenings. You can unsubscribe any time you want. 
//                 </p>
//                 <EmailSignUp className={classes.emailSignUp} />
//             </div>

//             <div className={classes.links}>
//                 {
//                     data.links.map(links => {
//                         return <FooterLinks title={links.data.title} links={links.children} />
//                     })
//                 }
//             </div>

//             <div className={classes.social}>
//                 {
//                     socialMedia.facebook ? 
//                         <a href={socialMedia.facebook}><IconButton size="small"><FacebookIcon /></IconButton></a> : 
//                         null
//                 }
//                 {
//                     socialMedia.twitter ?
//                         <a href={socialMedia.twitter}><IconButton size="small"><TwitterIcon /></IconButton></a> :
//                         null
//                 }
//                 {
//                     socialMedia.instagram ?
//                         <a href={socialMedia.instagram}><IconButton size="small"><InstagramIcon /></IconButton></a> :
//                         null
//                 }
//                 {
//                     socialMedia.pinterest ?
//                         <a href={socialMedia.pinterest}><IconButton size="small"><PinterestIcon /></IconButton></a> :
//                         null
//                 }
//             </div>

//             <div className={classes.copyright}>
//                 © 2020 ANYA FINN. All Rights Reserved.
//             </div>
//         </footer>
//     );
// };

// export default Footer;