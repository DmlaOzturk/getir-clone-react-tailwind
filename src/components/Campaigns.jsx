import { useState, useEffect } from "react";
import Slider from "react-slick";
import Banners from "../api/banners.json";
import Title from "./ui/Title";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

function NextButton({ onClick }) {
    return (
        <button className="text-brand-color absolute top-1/2 -right-8 -translate-y-1/2" onClick={onClick}><IoIosArrowForward /></button>
    );
}

function PrevButton({ onClick }) {
    return (
        <button className="text-brand-color absolute top-1/2 -left-8 -translate-y-1/2" onClick={onClick}><IoIosArrowBack /></button>
    );
}

export default function Campaigns() {

    const [banners, setBanners] = useState([]);
    useEffect(() => {
        setBanners(Banners);
    }, []);

    const settings = {
        dots: false,
        infinite: true,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 3500,
        cssEase: "linear",
        nextArrow: <NextButton />,
        prevArrow: <PrevButton />

    };

    return (
        <div className="container mx-auto">
            <Title>Kampanyalar</Title>

            <Slider className="-mx-2" {...settings}>
                {banners.length && banners.map((banner, index) => (
                    <div key={banner.id}>
                        <picture className="block px-2">
                            <img alt="" src={banner.image} className="rounded-lg" />
                        </picture>
                    </div>
                ))}
            </Slider>
        </div>
    );
}