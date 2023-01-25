export function Header({ onNavItemClick }){
    return(
        <div>
            <h1>Jacob Morris</h1>
            <nav>
                <ul>
                    {
                        NAV_ITEM_NAMES.map(item => {
                            return (
                                <li key={item.itemName} onClick={() => onNavItemClick(item.itemName)}>
                                    {item.itemName}
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
        </div>
    )
}