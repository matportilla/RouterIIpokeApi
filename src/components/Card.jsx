import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import "./Card.css"

const PokemonCard = ({ pokemon }) => {
    const { name, stats, src, types } = pokemon;
    return (
        <>
            <div className='Card'>
                <Card className='PokeCard'>
                    <Card.Img className='PokeImg' variant="top" src={src} alt={name} />
                    <Card.Body className=''>
                        <Card.Title className='CardTitle'>{name}</Card.Title>
                        <Card.Text className='Stats'>
                            {stats?.map((stat, i) => (
                                <li key={i}>
                                    {stat.name}: {stat.base}
                                </li>
                            ))}
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>{types}</ListGroup.Item>
                    </ListGroup>
                </Card>
            </div>
        </>
    );
};

export default PokemonCard;

