"use client"
import { useState } from "react";
import { HiChevronLeft, HiChevronDown } from "react-icons/hi2";

interface AccordionProps {
    id: string;
    label: string;
    content:string;
}

interface AccordionList { 
    Items : AccordionProps[]; 
}

const Accordion = ({ Items } : AccordionList ) => {
    const [expendIndex, setExpendIndex] = useState(-1);
    
    const handelClick = (idx : number) => {
        setExpendIndex((prev) => (prev === idx) ? -1 : idx)
    }


    const renderItem = Items.map((item, idx) => {        
        const isExpend = idx === expendIndex;

        const icons = isExpend ? <HiChevronDown className="text-xl"/> :  <HiChevronLeft className="text-xl"/>

        return (
            <div key={item.id}>
                <div className="flex cursor-pointer items-center justify-between border bg-gray-100 p-3 dark:bg-gray-700" onClick={() => handelClick(idx)}>
                    {item.label}
                    {icons}
                </div>
                { 
                    isExpend && 
                    <div className="flex items-center gap-3 border p-3">
                        <div>{item.content}</div>
                    </div> 
                }
            </div>         
        )
    }) 

    return <div>{renderItem}</div>
}

export default Accordion;