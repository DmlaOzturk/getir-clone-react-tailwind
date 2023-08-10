import Title from "./ui/Title"
import { useEffect, useState } from "react";
import Products from "../api/favorites.json"
import ProductItem from "./ui/ProductItem";

export default function Favorites() {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        setProducts(Products);
    }, [])

    return (
        <div className="container mx-auto">
            <Title>Favoriler</Title>
            <div className="grid grid-cols-8 gap-[0.063rem] rounded-lg overflow-hidden">
              {products.length && products.map((products,index) => <ProductItem key={index} product={products}/>) }
            </div>
        </div>
    );
}