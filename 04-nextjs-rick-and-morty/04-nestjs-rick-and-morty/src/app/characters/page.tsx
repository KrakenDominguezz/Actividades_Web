"use client"

import CharacterLayout from "../components/characterlayout";
import { Character } from '@/app/types/types';
import handler from "../api/getcharacters/route";
import React, { useEffect, useState } from 'react';
import Navbar from "../components/navBar";
import Link from "next/link";

const HomePage: React.FC = () => {
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



    return (
        <div>
          <Navbar />
          <div className="flex flex-wrap gap-10">
            {(characters?.results ?? []).length > 0 && (
              characters?.results.map((character) => (
                <Link className="w-2/3" href={`/characters/${character.id}`}>
                    <CharacterLayout key={character.id} character={character} />
                </Link>
                
              ))
            )}
          </div>
        </div>
      );
      
      
      
      
      
}

export default HomePage;
