import '../CSS/Navbar.css';
function Navbar() {
    return (
        <div className="Navbar">
            <a href="#">

            <h1>davidrbelanger.dev</h1>
            </a>
            <div className="links">
                <a href="/#">Home</a>
                <a href="/#About">About</a>
                <a href="/#Projects">Projects</a>
                <a href="/#Contact">Contact</a>
            </div>
        </div>
    );
}

export default Navbar;