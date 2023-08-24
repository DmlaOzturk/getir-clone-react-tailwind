import { useEffect, useState } from "react";
import cardData from "../api/cards.json";
export default function Cards() {

    const [cards, setCards] = useState([]);

    useEffect(() => {
        setCards(cardData);
    }, []);

    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-3 gap-4 mb-16 ">
                {cards.length && cards.map((card) => (
                    <div className="bg-white rounded-lg drop-shadow-sm p-10 grid content-center justify-items-center gap-2">
                        <img src={card.image} alt="" />
                        <h2 className="text-primary-brand-color font-semibold text-xl ">{card.title}</h2>
                        <p className="grid text-center text-gray-500">{card.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}