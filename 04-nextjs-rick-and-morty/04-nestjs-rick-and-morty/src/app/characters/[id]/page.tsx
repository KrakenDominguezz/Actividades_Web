import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Assuming you're using axios for API requests

const CharacterPage = ({ id }) => {
  const [character, setCharacter] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
        setCharacter(response.data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchCharacter();
  }, [id]); // Dependency on id for refetching on ID change

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!character) {
    return <div>Loading...</div>;
  }

  // Display character information using character object
  return (
    <div>
      <h1>{character.name}</h1>
      <img src={character.image} alt={character.name} />
      <p>Status: {character.status}</p>
      <p>Species: {character.species}</p>
      {/* Display other character properties */}
    </div>
  );
};

export default CharacterPage;

// Get initial props for dynamic routing
export async function getStaticProps({ params }) {
  const { id } = params;

  try {
    const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
    return {
      props: {
        id,
        character: response.data, // Pass character data as props
      },
    };
  } catch (error) {
    return {
      notFound: true, // Handle cases where character ID is not found
    };
  }
}
