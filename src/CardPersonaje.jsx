import { getCharacterSearch } from "../actions/imagen.api";
import React, { useEffect, useState } from "react";

export const CardPersonaje = ({ category }) => {
    const [characters, setCharacters] = useState();

    useEffect(() => {
        getCharacterSearch(category).then(res => setCharacters(res));
    }, [category]); 
    return (
        <div>
           
            {characters && (
                characters.map((character) => (
                    <div key={character.id}>
                        <img src={character.image} alt="" />
                        <p>{character.name}</p>
                        <h1>{character.location}</h1>
                        <h2>{character.first_seen}</h2>
                        <h3>{character.status}</h3>
                    </div>
                ))
            )}
        </div>
    );
};
      
                



    
     
        
                
                   
                       
                            
                    
                    
                    





                




    



    

