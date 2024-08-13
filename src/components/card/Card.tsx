import { SvgIconComponent } from "@mui/icons-material";
import React from "react";

interface CardProps {
    title: string;
    description: string;
    img?: string;
    badge?: string[];
    svg?: string[];
    icon?: SvgIconComponent,
    type: "service" | "information"
}

export const CardLocal: React.FC<{ props: CardProps }> = ({ props }) => {
    const renderCardType = () => {
        switch (props.type) {
            case "service":
                return (
                    <div className="flex flex-col bg-white p-6 shadow-sm rounded-md border border-terciary-100 xl:w-[calc(33.333%-16px)] md:w-[calc(50%-8px)] w-full">
                        <div className="w-full max-w-32 m-auto mb-4"> 
                            <svg className="max-w-full max-h-full fill-red-800 margin-auto" viewBox="0 0 500 500">
                                { props.svg?.map((svg, index) => {
                                    return <path key={index} d={svg} />
                                })}
                            </svg>
                        </div>
                        

                        <p className="font-text font-bold text-xl">
                            { props.title }
                        </p>

                        <p className="font-text font-normal text-lg leading-6">
                            { props.description}
                        </p>
                    </div>
                )
            case "information":
                return (
                    <div className="grid grid-cols-12 gap-6 bg-white p-6 shadow-sm rounded-md border border-terciary-100">
                        <div className="w-full md:col-span-1 col-span-2 flex items-center">
                            <div className="">
                                { props.icon && <props.icon fontSize="large" className="text-red-800"/> }
                            </div>
                        </div>

                        <div className="md:col-span-11 col-span-10 flex flex-col">
                            <p className="font-text font-bold text-xl">{ props.title }</p>
                            <p className="font-text font-normal text-lg">{ props.description }</p>
                        </div>
                    </div>
                )
        }
    }


    return (
        renderCardType()
    )
}