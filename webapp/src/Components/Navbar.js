import '../CSS/Navbar.css';
import { HashLink } from 'react-router-hash-link';
function Navbar() {
    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    return (
        <div className="Navbar">
            <a href="#">

                <h1>davidrbelanger.dev</h1>
            </a>
            <div className="links">
                    <a onClick={(handleScrollToTop)}>Home</a> 
                <HashLink className="HashLink" smooth to="/#about">
                    <a>About</a>
                </HashLink>
                <a href="/#Projects">Projects</a>
                <a href="/#Contact">Contact</a>
            </div>
        </div>
    );
}

export default Navbar;