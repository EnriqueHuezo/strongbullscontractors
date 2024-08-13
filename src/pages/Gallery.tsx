import { useState } from 'react';
import { Categories, ImgGallery } from '../utils/constants/data';
import { Button } from '../components/button/Button';

export const Gallery = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const handleCategoryChange = (category: string) => {
        setSelectedCategory(category);
    };

    return (
        <>
            <section className={`flex flex-row justify-center h-auto py-32 px-4 sm:px-0 md:py-36 w-full mx-auto container gap-4`}>
                <div className="flex flex-1 flex-col gap-4">
                    <p className="font-title font-bold md:text-6xl text-4xl">
                        Photos of our work
                    </p>
                    <div className='flex flex-row flex-wrap gap-2'>
                        {
                            Categories.map((category, index) => {
                                return (
                                    <Button key={index} props={{
                                        label: category,
                                        type: "primary",
                                        onClick: () => handleCategoryChange(category),
                                        active: selectedCategory === category
                                    }}/>
                                )
                            })
                        }
                    </div>

                    <div className='columns-1 gap-5 lg:gap-8 sm:columns-2 lg:columns-3 xl:columns-4 [&>img:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-8'>
                        {
                            ImgGallery.filter((img) => selectedCategory === 'All' ? true : img.category === selectedCategory).map((img, index) => {
                                return (
                                    <img key={index} src={img.img} alt={"Gallery"} className='w-full h-auto object-cover rounded-lg shadow-lg'/>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}