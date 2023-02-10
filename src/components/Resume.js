const styles = {
    h1: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    btn: {
        display: 'flex',
        margin: 'auto'
    }
}

export default function Resume() {
    const onButtonClick = () => {
        fetch('Jacob Morris Resume.pdf').then(res => {
            res.blob().then(blob => {
                const fileURL = window.URL.createObjectURL(blob);
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Jacob Morris Resume.pdf';
                alink.click();
            })
        })
    }
    return(
        <div>
            <h1 style={styles.h1}> Resume </h1>
            <button style = {styles.btn} onClick={onButtonClick}>Download My Resume</button>
        </div>
    )
}