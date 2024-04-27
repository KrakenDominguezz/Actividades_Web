// ../api/getcharacters/route.ts

export default async function handler(id : string) {
    try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
        const characters = await response.json();

        return characters; // Return the fetched characters
    } catch (error) {
        console.error('Error fetching characters:', error);
        throw error; // Throw the error to be caught by the caller
    }
}
