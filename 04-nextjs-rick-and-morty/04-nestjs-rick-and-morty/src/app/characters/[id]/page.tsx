"use client"

import CharacterLayout from "@/app/components/characterlayout";
import { Character } from '@/app/types/types';
import handler from "@/app/api/getcharacter/route";
import React, { useEffect, useState } from 'react';
import Navbar from "@/app/components/navBar";
import { useParams } from 'next/navigation'
import Image from "next/image";




const Page: React.FC = () => {

    const params = useParams<{id : string}>()


    const [character, setCharacters] = useState<Character | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCharacters = async () => {
          try {
            const response = await handler(params.id);
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
            <div id="Information" className="flex  gap-10 text-center text-black  text-l h-screen mt-10 justify-center">
                <div className="h-1/3">
                    <Image src={character?.image} width={500} height={500}>
                    </Image>
                </div>

                <div className='flex flex-col gap-10'>
                    <h2 className="text-s">Name: {character?.name}</h2>
                    <p>Status: {character?.status}</p>
                    <p>Gender:  {character?.gender}</p>
                    <p>Location: {character?.location.name}</p>

                </div>

            </div>
        </div>
      );
      
      
      
      
      
}

export default Page;
