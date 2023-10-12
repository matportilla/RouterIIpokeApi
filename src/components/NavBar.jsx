import { NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../components/NavBarStyle.css"

const NavbarMenu = () => {
    const setActiveClass = ({ isActive }) => {
        const aux = "text-decoration-none";
        return isActive ? `text-danger ${aux}` : `text-light ${aux}`;
    };

    return (
        <>
            <Navbar className="mb-5" bg="dark" data-bs-theme="dark">
                <Container>
                    <div>
                        <img className="PokeIco" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Poké_Ball_icon.svg/1024px-Poké_Ball_icon.svg.png"
                            alt="pokemon" />
                    </div>
                    <Nav className="NavOptions">
                        <h3 className=""><NavLink className={setActiveClass} to="/">Home</NavLink></h3>
                        <h3 className=""><NavLink className={setActiveClass} to="/pokemones"> {" "}Pokémon{" "}</NavLink></h3>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default NavbarMenu
