
import { useState, useEffect } from "react";
import catagoryData from "../api/catagories.json";
import Catagory from "../components/ui/Catagory";
import Title from "./ui/Title";

export default function Catagories() {
    const [catagories, setCatagories] = useState([]);

    useEffect(() => {
        // normalde api isteği yapılacaktır
        // setTimeout(() => 
        // setCatagories(catagoryData),1000);
        setCatagories(catagoryData);
    }, []);

    return (
        <div className="bg-white py-4">
            <div className="container mx-auto">
                <Title>Katagoriler</Title>
                <div className="grid grid-cols-10">
                    {!catagories.length && <div className="col-span-10 flex justify-center">Yükleniyor...</div>}
                    {catagories && catagories.map((catagory, index) => (<Catagory key={index} catagory={catagory} />))}
                </div>
            </div>
        </div>
    );
}