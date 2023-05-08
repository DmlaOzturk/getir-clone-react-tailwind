/* eslint-disable jsx-a11y/alt-text */
import Slider from "react-slick";
import ReactFlagsSelect from "react-flags-select";
import React, { useState } from "react";
export default function HeroSection() {

    const [selected, setSelected] = useState("TR");
    const phones = {
        US: "+1",
        GB: "+44",
        FR: "+33",
        DE: "+49",
        IT: "+39",
        TR: "+90"
    }
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className="relative h-[500px] before:bg-gradient-to-r before:from-primary-brand-color before:to-transparent before:absolute before:inset-0 before:w-full before:h-full before:z-10">
            <Slider {...settings}>
                <div >
                    <img className="w-full h-[500px] object-cover" src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-4.jpg"></img>
                </div>
                <div>
                    <img className="w-full h-[500px] object-cover" src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-1.jpg"></img>
                </div>
                <div>
                    <img className="w-full h-[500px] object-cover" src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-2.jpg"></img>
                </div>
            </Slider>
            <div className="container absolute top-0 left-1/2 -translate-x-1/2 h-full z-20 flex items-center justify-between">
                <div>
                    <img src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg"></img>
                    <h4 className="text-white w-[342px] text-4xl text-start mt-8 font-semibold">Dakikalar içinde <br />kapınızda </h4>
                </div>
                <div className="w-[400px] rounded-lg bg-gray-50 p-6">
                    <h4 className="text-primary-brand-color text-center font-semibold mb-4"> Giriş yap veya kayıt ol</h4>
                    <div className="grid gap-y-3">
                        <div className="flex gap-x-2">
                            <ReactFlagsSelect
                                countries={Object.keys(phones)}
                                customLabels={phones}
                                placeholder="Select Language"
                                onSelect={code => setSelected(code)}
                                selected={selected}
                                className="flag-select"
                            />
                            <label className="flex-1 relative block">
                                <input required className="h-14 px-4 border-2 border-gray-200 w-full hover:border-primary-brand-color rounded peer text-sm pt-2" />
                                <span className="absolute top-0 left-0  h-full text-gray-500 px-4 flex items-center text-sm transition-all peer-focus:h-7 peer-focus:text-xs peer-focus:text-primary-brand-color peer-valid:h-7 peer-valid:text-xs peer-valid:text-primary-brand-color">Telefon numaranız</span>
                            </label>
                        </div>
                        <button className="w-full h-12 bg-[#ffd300] text-primary-brand-color font-semibold rounded-lg transition-all hover:bg-primary-brand-color hover:text-[#ffd300]">
                            Telefon numarası ile devam et
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}