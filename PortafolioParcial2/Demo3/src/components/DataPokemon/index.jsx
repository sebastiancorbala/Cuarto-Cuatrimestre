import React, { useState, useEffect } from "react";
import MUIDataTable from "mui-datatables"; //Esto de aca importa el componente datatable de MUI, vi en un tutorial que servia//
import { Grid } from "@mui/material";


const TablaPokemon = () => {
    const [data, setData] = useState([]);
    //en esta linea de abajo se manda a llamar la URL de las apis de pokemon
    const API = 'https://pokeapi.co/api/v2/pokemon?limit=20';
    useEffect(() => {
        const fetchData = async () => {
            try {
                // Esta parte de aca basicamente realiza una solicitud HTTP para que tenga los datos de los pokemones
                const response = await fetch(API);
                const results = await response.json();
                // Este fragmento de aca es para que obtenga los detalles de cada pokemon 
                const pokemonData = await Promise.all(results.results.map(async (result) => {
                    const pokemonResponse = await fetch(result.url);
                    const pokemonData = await pokemonResponse.json();
                    console.log(pokemonData);
                    return {
                        id: pokemonData.id,
                        name: pokemonData.name,
                        image: pokemonData.sprites.front_default
                    }
                }));
                setData(pokemonData);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

     //columnas de la tabla
    const columns = [
        {
            label: 'Id',
            name: 'id'
        },
        {
            name: 'name',
            label: 'Pokemon'
        },
        {
            label: 'Image',
            name: 'image',
            options: {
                // esta funcion es para que renderize las imagenes y tengan un buen tamaño
                customBodyRender: (value) => (
                    <img
                        src={value}
                        alt="pokemon"
                        style={{width: '50px', height: '50px'}}
                    />
                )
            }
        }
    ];
    const options = {};
    //aca se renderiza el componente tablapokemon
    return (
        <Grid container spacing={2} sx={{ padding: '24px' }}>
            <Grid item xs={12}>
                Tabla Pokemon
            </Grid>
            <Grid item xs={12}>
                <MUIDataTable data={data} columns={columns} options={options} />
            </Grid>
        </Grid>
    );
};

export default TablaPokemon;