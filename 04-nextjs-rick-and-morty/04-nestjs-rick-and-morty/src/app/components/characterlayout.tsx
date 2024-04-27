import Image from "next/image"
import React, { useState } from 'react';
import { Character } from "../types/types";


interface CharacterLayoutProps {
    character: Character; // Use the defined type here
}



export default function CharacterLayout({character} : CharacterLayoutProps) {
    const [isFavorite, setIsFavorite] = useState(() => {
        return localStorage.getItem(character.id.toString()) === 'true';
      });

    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
        localStorage.setItem(character.id.toString(), !isFavorite ? 'true' : 'false');
    };

    return (
        <div id="FlexContainer" className="flex gap-5 mr-3 rounded-md bg-slate-400 w-2/4 h-1/4 font-sans">
             <div className="character-image">
                <Image 
                    src={character.image} 
                    alt={character.name} 
                    width={200} // Set the width as per your requirement
                    height={200} // Set the height as per your requirement
                />
            </div>
            <div id="Information" className="flex flex-col gap-3 text-center text-blac w-1/3 text-xs">
                <h2 className="text-s">{character.name}</h2>
                <p>{character.status}</p>
                <p>{character.location.name}</p>
            </div>
            <button onClick={toggleFavorite}>
                {isFavorite ? '★' : '☆'}
            </button>

        </div>
    )
}