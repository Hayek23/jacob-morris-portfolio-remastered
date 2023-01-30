import profilePicture from '../assets/profilePicture.jpg'

const styles= {
    h1: {
        display: 'flex',
        justifyContent: 'center',
    },
    img: {
        display: 'block',
        height: '200px',
        width: '200px',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingBottom: '5px',
    }
}

export default function AboutMe() {
    return (
        <div>
            <img src={profilePicture} style={styles.img} alt='picture of Jacob Morris'/>
            <h1 style={styles.h1}>About Me</h1>
            <p>Hello! My name is Jacob Morris, and I am a web development bootcamp student from Indianapolis, Indiana. In my bootcamp we have learned how to use JavaScript, Node, CSS, HTML, React, SQL, Mongo and GraphQL.</p>
        </div>
        
    )
}