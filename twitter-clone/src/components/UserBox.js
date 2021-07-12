import React from 'react'

const UserBox = () => {
    return (
        <div className="flex justify-between items-center mb-6 hover:bg-primary-light cursor-pointer rounded-full py-2 px-4 transform transition-color duration-200">

            <img src="https://pbs.twimg.com/profile_images/1348343170262847488/8DpE_u92_400x400.jpg"
                alt="Profile"
                className="w-11 h-11 rounded-full"
            />
            {/* //ad soyad ve kullanıcı adı alt alta olması için flex flex-col eklenir */}
            <div className=" flex flex-col">
                <span className="font-bold text-md text-black">Simge Atlıhan</span>
                <span className="text-sm text-gray-dark">@simgeatlhn</span>
            </div>

            {/* //space-x-2  space x ekseninde noktalar arasında 2 birim boşluk bırakacak */}
            <div className="flex space-x-1">
                <div className="w-1 h-1 bg-gray-900 rounded-full" />
                <div className="w-1 h-1 bg-gray-900 rounded-full" />
                <div className="w-1 h-1 bg-gray-900 rounded-full" />
            </div>

        </div>
    )
}

export default UserBox
