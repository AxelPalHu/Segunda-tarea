export const getCharacterSearch = async (category) => {
    const response = await fetch(`https://rickandmortyapi.com/api/character?api_key=kq8oM3FuCzChGRB3XdbAUHqiRdWwHDGd=${category}`);
    const results = await response.json();
    const resultsFinal = results?.results?.map((character) => ({
        image: character.image,
        id: character.id,
        name: character.name,
        location: character.location,
        first_seen: character.episode,
        status: character.status,
    }));
    return resultsFinal;
};