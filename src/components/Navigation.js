import Footer from './Footer'
import { Header, NAV_ITEM_NAMES } from './Header'
import AboutMe from './AboutMe'
import Contact from './Contact'
import Resume from './Resume'
import Portfolio from './Portfolio'
import {useState} from 'react'

export default function Navigation(){
    const [currentPage, setCurrentPage] = useState('About Me');

    const onNavItemClick = (itemName) => {
        console.log(itemName)
        setCurrentPage(itemName)
    }

    const renderCurrentPage = () => {
        if (currentPage === 'About Me'){
            return <AboutMe />
        } else if (currentPage === 'Contact'){
            return <Contact />
        } else if (currentPage === 'Resume'){
            return <Resume />
        } else if (currentPage === 'Portfolio'){
            return <Portfolio />
        }
    }

    return(
       <div>
        <Header onNavItemClick={onNavItemClick}/>
        <section>{renderCurrentPage()}</section>
        <Footer />
       </div>
    )
}