
"use client"
import CharacterLayout from '@/app/components/characterlayout'; // Assuming CharacterLayout component
import { Character } from '../types/types';
import React, { useEffect, useState } from 'react';
import handler from '../api/getcharacters/route';
import Navbar from '../components/navBar';



const FavoritesList = () => {

    interface ApiResponse {
        info: {
          count: number;
          pages: number;
          next: string | null;
          prev: string | null;
        };
        results: Character[];
      }
      
      
      const [characters, setCharacters] = useState<ApiResponse | null>(null);
      const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCharacters = async () => {
          try {
            const response = await handler();
            setCharacters(response); // Set the entire response
          } catch (error) {
            // ... handle errors
          }
        };
      
        fetchCharacters();
      }, []);
      

    if (error) {
        return <div>Error: {error}</div>;
    }

  const filteredFavorites = characters?.results.filter((character : Character) =>
    // Check favorite status based on your implementation
    localStorage.getItem(character.id.toString()) === 'true'
  );

  return (
    <div className="favorites-container">
      <Navbar />
      {filteredFavorites?.length === 0 ? (
        <p>You don't have any favorite characters yet!</p>
      ) : (
        <ul className="favorites-list">
          {filteredFavorites?.map((character) => (
            <li key={character.id}>
              <CharacterLayout character={character} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FavoritesList;
