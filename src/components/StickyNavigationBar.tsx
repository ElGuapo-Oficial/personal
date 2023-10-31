import '../styles/StickyNavigationBar.css'

const StickyNavigationBar = () => {
    return (
        <nav className="sticky-nav">
            <ul>
                <li><a href="#last">Profile</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#last">Portfolio</a></li>
                <li><a href="#last">Education</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#last">Contact</a></li>
            </ul>
        </nav>
    )
}

export default StickyNavigationBar;

