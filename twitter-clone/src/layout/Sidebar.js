import React from 'react'
//Icon.js den import edilir. iconları kullanabilmek için
import twitterLogo from "../images/twitter.svg";
import SideLink from "../components/SideLink";
import UserBox from '../components/UserBox';
import { useState } from "react";

import {
    HomeIcon,
    BookmarksIcon,
    ExploreIcon,
    ListsIcon,
    MessagesIcon,
    MoreIcon,
    NotificationsIcon,
    ProfileIcon,
} from "../icons/Icon";



//tekrar eden durumlar için array oluşturduk . array in adı sideLinks
//tekrar eden durumlar için olan array i map fonksiyonu ile ekrana yazdırırız
//array de icon lara import edilen icon ları veririz
//Sidenav daki linkler Home,Explore ..
const sideLinks = [
    {
        name: "Home",
        icon: HomeIcon,
    },
    {
        name: "Explore",
        icon: ExploreIcon,
    },
    {
        name: "Notifications",
        icon: NotificationsIcon,
    },
    {
        name: "Messages",
        icon: MessagesIcon,
    },
    {
        name: "Bookmarks",
        icon: BookmarksIcon,
    },
    {
        name: "Lists",
        icon: ListsIcon,
    },
    {
        name: "Profile",
        icon: ProfileIcon,
    },
    {
        name: "More",
        icon: MoreIcon,
    },
];


//tekrar eden yapıya mutlaka key veririz
//****component ı props olarak yollarken Icon={icon} büyük harf kullan
//gönderilen propsları SideLink.js de kullanacağız
//her bir link için <SideLink  />




const Sidebar = () => {

    //seçilen sideLink için active durumu ve fucntion ı tanımlarız.Bunun için setState hook u kullanırız

    //active ve handleMenuClick SideLink.js de define olmalı
    const [active, setActive] = useState("Home");

    const handleMenuClick = (name) => {
        setActive(name); //setActive i name e set ederiz
    }

    //onMenuItemClick seçtiğinde aktif hale getirmesi için tanımlanan fonksiyon

    return (

        //SideBar -parent , UserBox ve SideLink - child

        <div className="sticky top-0 h-screen flex flex-col justify-between w-72 px-2">
            <div>
                <div className="mt-1 mb-4 ml-1 flex  items-center justify-center w-12 h-12 rounded-full hover:bg-gray-lightest">
                    <img src={twitterLogo} alt="twitter Logo" />
                </div>

                <nav className="mb-4">
                    <ul>
                        {sideLinks.map(({ name, icon }) => (
                            <SideLink
                                key={name}
                                name={name}
                                Icon={icon}
                                active={active}
                                onMenuItemClick={handleMenuClick}
                            />
                        ))}
                    </ul>
                </nav>
                <button className="bg-primary-base hover:bg-primary-dark transform transition-colors duration-200 shadow-lg text-white rounded-full py-3 px-8 w-11/12">Tweet</button>
            </div>

            <div>
                <UserBox />
            </div>

        </div>
    )
}

export default Sidebar;


//    <HomeIcon />
//             <BookmarksIcon />
//             <ExploreIcon />
//             <ListsIcon />
//             <MessagesIcon />
//             <MoreIcon />
//             <NotificationsIcon />
//             <ProfileIcon />
