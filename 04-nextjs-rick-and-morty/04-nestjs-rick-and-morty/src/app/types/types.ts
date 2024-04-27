// types.ts
export interface Character {
    id: number;
    name: string;
    status: string;
    location: {
        name: string;
    };
    image: string;
    favorite?: boolean; // Optional favorite property
    gender: string;
    

}
