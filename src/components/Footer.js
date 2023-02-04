import linkedinLogo from '../assets/linkedinLogo.png'
import githubLogo from '../assets/githubLogo.png'

const styles={
    footer: {
        position: 'fixed',
        bottom: '0',
        width: '100%',
        height: '2.5rem',
        background: 'grey',
        marginTop: 'auto'
    },
    img: {
        height: '35px',
        width: '35px',
        padding: '.25rem'
    }
}

export default function Footer(){
    return(
        <footer style={styles.footer}>
            <a href= 'https://github.com/Hayek23'>
                <img style= {styles.img} src= {githubLogo}/>
            </a>
            <a href= 'https://www.linkedin.com/in/jacob-morris-ba2086194/'>
                <img style= {styles.img} src= {linkedinLogo}/>
            </a>
        </footer>
    )
}

