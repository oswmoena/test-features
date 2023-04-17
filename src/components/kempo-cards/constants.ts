export interface ICards {
    id: number;
    name: string;
    hidden: string;
    desc: string;
}
export const cards: ICards[] = [
    {
        id: 1,
        name: 'Espada retardada',
        hidden: 'Delayed Sword',
        desc: 'Tomada frontal de solapa con mano derecha'
    },
    {
        id: 2,
        name: 'Mazas alternantes',
        hidden: 'Alternating Maces',
        desc: 'Doble empujón frontal'
    },
    {
        id: 3,
        name: 'Espada de destrucción',
        hidden: 'Sword of destruction',
        desc: 'Golpe de uño frontal izquierdo, recto o circular'
    },
    {
        id: 4,
        name: 'Martillo desviador',
        hidden: 'Deflecting Hammer',
        desc: 'Patada frontal derecha'
    },
    {
        id: 5,
        name: 'Ramas capturadas',
        hidden: 'Captured Twigs',
        desc: 'Abrazo de oso trasero a ambos brazos'
    },
    {
        id: 6,
        name: 'Tomada de la muerte',
        hidden: 'The Grasp of Death',
        desc: 'Candado al cuello por flanco izquierdo'
    },
    {
        id: 7,
        name: 'Chequeando la tormenta',
        hidden: 'Checking the storm',
        desc: 'Golpe de bastón derecho descendente, avanzando desde el frente'
    },
    {
        id: 8,
        name: 'Maza de agresión',
        hidden: 'Mace of Agression',
        desc: 'Tomada frontal doble de solapa'
    },
    {
        id: 9,
        name: 'Maza de ataque',
        hidden: 'Attacing Mace',
        desc: 'Golpe de puño frontal derecho'
    },
    {
        id: 10,
        name: 'Espada y martillo',
        hidden: 'Sword and Hammer',
        desc: 'Tomada de hombro derecho con mano izquierda por costado derecho'
    },
]