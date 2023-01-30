const styles ={
    navBar: {
        background: 'grey',
        color: 'white',
        display: 'flex',
        flexDirection: 'row',
        listStyle: 'none',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '.50rem',
        margin: '0',
        fontSize: '1.5rem'
    },
    navItem: {
        marginLeft: '2rem',
    },
    header: {
        color: 'white',
        background: 'black',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0',
        padding: '1rem',
        fontSize: '3rem'
    }
};

export function Header({ onNavItemClick }){
    return(
        <div>
            <h1 style={styles.header}>Jacob Morris</h1>
            <nav>
                <ul style={styles.navBar}>
                    {
                        NAV_ITEM_NAMES.map(item => {
                            return (
                                <li key={item.itemName} onClick={() => onNavItemClick(item.itemName)} style={styles.navItem}>
                                    {item.itemName}
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
        </div>
    )
};

export const NAV_ITEM_NAMES =[
        {
            itemName: 'About Me'
        },
        {
            itemName: 'Portfolio'
        },
        {
            itemName: 'Contact'
        },
        {
            itemName: 'Resume'
        }
    ]
