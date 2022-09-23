import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div id="nav">
            <div id="whobtn" className="navitem"><Link to="/"><p>Who</p></Link></div>
            <div id="blamebtn" className="navitem"><Link to="/blame"><p>Blames</p></Link></div>
            <div id="youbtn" className="navitem"><Link to="/you" ><p>You</p></Link></div>
            <div id="aboutbtn" className="navitem"><Link to="/about"><p>?</p></Link></div>
        </div>
    )
}

export default NavBar;