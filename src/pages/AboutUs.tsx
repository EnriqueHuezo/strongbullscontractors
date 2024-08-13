import logo from '../assets/logo-blanco.jpg';
import videoFile from '../assets/video.mp4';
import { useState } from 'react';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

export const AboutUs = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <>
        <section className={`flex flex-row items-start md:items-center md:h-dvh h-auto py-32 px-4 sm:px-0 md:py-36 w-full mx-auto container gap-4`}>
                <div className="flex flex-col md:flex-row gap-4">
                    <div onClick={openModal} className="cursor-pointer flex-1 flex justify-center items-center">
                        <video 
                            className="rounded-lg shadow-lg object-cover" 
                            poster={logo}
                        >
                            <source src={videoFile} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <PlayCircleIcon className="absolute z-1 scale-[4] text-red-800 rounded-full bg-white" />
                    </div>
                    
                    {isModalOpen && (
                        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
                            <div className="relative bg-white rounded-lg overflow-hidden shadow-lg w-[500px] h-[700px]">
                                <button 
                                    onClick={closeModal} 
                                    className="absolute top-2 right-2 text-white text-2xl font-bold z-50"
                                >
                                    &times;
                                </button>

                                <video 
                                    className="w-full h-full object-cover" 
                                    controls 
                                    autoPlay
                                >
                                    <source src={videoFile} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                    )}

                    <div className="flex-1">
                        <p className="text-4xl font-title font-bold mb-4">
                            Choose Excellence, Choose Us
                        </p>

                        <p className="font-text font-normal text-xl mb-4">
                        At Strong Bulls Roofing & Contractors, we believe that excellence is not just an option; it’s a standard. Our commitment to quality craftsmanship, reliable service, and customer satisfaction sets us apart in the industry. When you choose us, you’re choosing a team that prioritizes your needs, values your trust, and consistently delivers top-tier results. With years of experience and a reputation for integrity, we are your trusted partner for all your roofing and contracting needs. Choose excellence—choose Strong Bulls Roofing & Contractors.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}