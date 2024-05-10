import { menuItems } from '@/services/menu'
import Link from 'next/link';
import React from 'react'


const getSubMenu = (pageName) => {
    return menuItems.filter(item=>item.name==pageName && item.submenu.length>0)[0];
}
const page = ({ params }) => {
        const subMenu = getSubMenu(params.page)
      
    return (
        <div className='min-h-screen p-20'>
            <h2 className="text-4xl text-center">{params.page}</h2>
                {
                    subMenu.submenu && <div className='mt-5 p-5 flex justify-around'>
                        {
                            subMenu.submenu.map((v,k)=>{
                            return <Link href={`/${params.page}/${v.replace(" ","-").toLowerCase()}`} key={k}>
                                <div key={k}className='border w-fit px-10 py-5'>Explore {v}</div>
                            </Link>
                        })
                        }
                    </div>
                }

        </div>
    )
}

export default page