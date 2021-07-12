import React from 'react'

//Sidebar dan gönderilen name,Icon defined,active, onMenuItemClick defineds
//Icon component defined
const SideLink = ({ name, Icon, active, onMenuItemClick }) => {

    const isActive = active === name; //name ve click olan active birbirine eşit olursa isActive true döner //şart durumu 

    return (

        //icon ve name yan yana gelmesi için flex
        //aynı hizzada olmaları için item-center kullanırız
        //py-3 padding top ve bottom da 12px eklendi
        //className="inline-block" kendi width i kadar alanı hover rounded yapar 
        //pointer-events-none sayfayı sürekli yenilemesini engeller

        //onMenuItemClick propsu name e göre çağırılır ve şarta bakılır
        <li className="group" onClick={() => onMenuItemClick(name)}>
            <a href={name.toLowerCase()} className="cursor-pointer block text-xl mb-2 pointer-events-none">

                <div className="inline-block">
                    {/* //şart durumu oluşturmak istediğimiz için tailwindcss kodlarını da {``} içerisine yazarız. */}
                    {/* // şart ${ } ternary operator kullanılır */}
                    <div className={`flex item-center group-hover:bg-primary-light group-hover:text-primary-base rounded-full pl-3 pr-8 py-3 ${isActive ? "text-primary-base" : ""} `}>

                        <Icon />

                        <span className="ml-4 font-bold">
                            {name}
                        </span>
                    </div>
                </div>
            </a>
        </li >

    )
}

export default SideLink
