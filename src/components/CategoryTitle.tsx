import React from 'react';
import Link from 'next/link'

interface CategoryTitleProps{
    text: string, 
    align?: string
}

const CategoryTitle = (props: CategoryTitleProps) => {

    // let alignment = palign ?? 'left'; 

    return (
        <div className="px-6">
            <h3 className="text-grey-light-fc text-4xl font-bold font-times"><Link href="/category">{props.text}</Link></h3>
            <div className="w-1/4 md:w-1/6 h-1 bg-red"></div>
        </div>
    )
};

export default CategoryTitle;