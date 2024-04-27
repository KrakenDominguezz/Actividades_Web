import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query;
    
    try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
        if (!response.ok) {
            throw new Error('Failed to fetch character');
        }
        const characterData = await response.json();
        res.status(200).json(characterData);
    } catch (error) {
        console.error('Error fetching character:', error);
        res.status(500).json({ error: 'Failed to fetch character' });
    }
}
