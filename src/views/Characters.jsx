import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Character.css"

const Pokemon = () => {
    const [pokemones, setPokemones] = useState([]);
    const [pokemonSelected, setPokemonSelected] = useState("");
    const navigate = useNavigate();

    const url = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0';

    const getPokemones = async () => {
        console.log(url);
        const res = await fetch(url);
        const { results } = await res.json();

        setPokemones(results);
    };

    const irPokemonDetail = async () => {
        if (pokemonSelected) navigate(`/pokemones/${pokemonSelected}`);
        else alert("Selecciona tu Pokemon");
    };

    useEffect(() => {
        getPokemones();
    }, []);

    return (
        <>
            <div className="SelectForm">
                <h1 className="Title">Selecciona tu Pokémon</h1>
                <div className="">
                    <Form.Select
                        value={pokemonSelected}
                        className="mb-3"
                        onChange={(e) => setPokemonSelected(e.target.value)}>
                        <option value="" disabled>
                            Pokemon
                        </option>
                        {pokemones.map(({ name }, i) => (
                            <option key={i} value={name}>
                                {name}
                            </option>
                        ))}
                    </Form.Select>
                </div>
                <Button className="m-3" variant="danger" onClick={irPokemonDetail}>Detalle</Button>
            </div>
        </>
    );
};

export default Pokemon;
