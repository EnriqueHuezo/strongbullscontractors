import { useState, useEffect } from "react"
import { CardLocal } from "../components/card/Card"
import { InfoData, ServicesData } from "../utils/constants/data";
import img1 from '../assets/gutters-02.jpg';
import img2 from '../assets/others-04.jpg';
import banner from '../assets/banner-02.jpg';

export const Home = () => {
    const [currentText, setCurrentText] = useState('SIDING');

    useEffect(() => {
        const texts = ['SIDING', 'GUTTERS', 'ROOFING'];
        let index = 0;

        const interval = setInterval(() => {
            index = (index + 1) % texts.length;
            setCurrentText(texts[index]);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <section className={`flex md:flex-row flex-col items-start md:items-center h-dvh py-36 px-4 sm:px-0 md:py-36 w-full mx-auto container gap-4`}>
                <div className="flex md:flex-1 flex-col gap-4">
                    <p className="font-title font-bold md:text-6xl text-4xl">
                    YOUR SOLUTIONS IN <span className="animate-fadeInOut text-red-800">{currentText}</span>
                    </p>
                    <p className="font-text font-normal text-xl">
                    Experience top-notch residential and commercial remodeling services with Strong Bulls Roofing & Contractors. Trust in quality craftsmanship at competitive prices.
                    </p>
                </div>

                <div className="flex-1 h-full">
                    <img
                        src={banner}
                        className="rounded-md w-full h-full object-cover" />
                </div>
            </section>

            <section className="flex flex-col items-start md:items-center px-4 sm:px-0 py-28 md:py-36 pt-0 w-full mx-auto container lg:max-w-6xl md:max-w-4xl">
                <p className="md:text-6xl text-4xl font-title font-bold mb-4">
                    What we offer
                </p>
                <div className="w-full flex flex-wrap md:flex-row flex-col justify-center gap-4">
                    {ServicesData.map((service, index) => {
                        return <CardLocal props={{title: service.title, description: service.description, type: 'service', svg:service.icon}} key={index}/>
                    })}
                </div>
            </section>

            <section className="flex flex-col items-start md:items-center px-4 sm:px-0 py-28 md:py-36 pt-0 w-full mx-auto container lg:max-w-6xl md:max-w-4xl">
                <p className="md:text-6xl text-4xl font-title font-bold mb-4">
                    Remodeling You Can Trust
                </p>
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1">
                        <p className="font-text font-normal text-xl mb-4">
                            Experience top-notch residential and commercial remodeling services with Strong Bulls Roofing & Contractors. Trust in quality craftsmanship at competitive prices.
                        </p>

                        <div className="flex flex-col gap-4">
                            {
                                InfoData.map((info, index) => {
                                    return <CardLocal props={{title: info.title, description: info.description, type: 'information', icon: info.icon}} key={index}/>
                                })
                            }
                        </div>
                    </div>

                    <div className="flex-1 flex flex-col gap-4">
                        <img src={img1} alt="Gutters" className="flex-1 rounded-md md:block hidden"/>
                        <img src={img2} alt="Construction" className="flex-1 rounded-md"/>
                    </div>
                </div>
            </section>
        </>
    )
}