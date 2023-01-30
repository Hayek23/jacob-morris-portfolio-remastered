const styles ={
    textarea: {
        width: '23rem',
        height: '10rem',
        margin: '.5rem',
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'block',
    },
    topBoxes: {
        margin: '1rem',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    h1: {
        textAlign: 'center'
    }
}

export default function Contact(){
    return(
        <div>
            <h1 style={styles.h1}>Contact Me</h1>
            <form>
                <input  style={styles.topBoxes} placeholder = 'Please enter your name!'/>
                <input  style={styles.topBoxes} placeholder = 'Please enter your email here!'/>
            </form>
            <form>
            <textarea style={styles.textarea} placeholder = 'Please enter your message here!'/>
            </form>
            <form>
            <button>Submit!</button>
            </form>
        </div>
    )
}