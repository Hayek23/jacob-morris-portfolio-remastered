import marvelRedditFinderSs from "../assets/marvelRedditFinderSs.png"
import subTracksSs from "../assets/subTracksSs.png"

const styles = {
    img: {
        height: '20rem',
        width: '35rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    h1: {
        display: 'flex',
        justifyContent: 'center'
    },
    h3: {
        display: 'flex',
        justifyContent: 'center'
    },
    links: {
        display: 'flex',
        flexDirection: 'row',
        listStyle: 'none',
        justifyContent: 'center',
    },
    imgDiv: {
        display: 'flex',
        justifyContent: 'center'
    },
    href: {
        textDecoration: 'none',
        border: '1rem'
    },
    href2: {
        textDecoration: 'none',
        padding: '2.25rem'
    }


}

export default function Portfolio() {
    return (
       <div>
            <h1 style={styles.h1}>Portfolio</h1>
                <div>
                    <h3 style={styles.h3}>Marvel Reddit Finder</h3>
                    <ul style={styles.links}>
                        <li><a style={styles.href} href="https://hayek23.github.io/Marvel-Reddit-Finder/">Live Link  </a></li>
                        <li><a style={styles.href2} href="https://github.com/Hayek23/Marvel-Reddit-Finder"> GitHub Repo</a></li>
                    </ul>
                    <div style={styles.imgDiv}><img style={styles.img} src={marvelRedditFinderSs}></img></div>
                </div>
                <div>
                    <h3 style={styles.h3}>Subscription Tracks</h3>
                    <ul style={styles.links}>
                        <li><a style={styles.href} href="https://subscription-tracks.herokuapp.com/login">Live Link  </a></li>
                        <li><a style={styles.href2} href="https://github.com/TerryBoufis/Subscription-Tracks"> GitHub Repo</a></li>
                    </ul>
                    <div style={styles.imgDiv}><img style={styles.img} src={subTracksSs}></img></div>
                </div>
       </div>
    )
}