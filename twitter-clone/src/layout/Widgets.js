
import React from 'react'
import { SearchIcon } from '../icons/Icon' //Icon.js den SearchIcon import edilir
import { Timeline } from 'react-twitter-widgets'

const Widget = () => {
    return (

        //focus-within:rring-1 => input kısmına focus olduğunda search e border verir
        //focus-within:ring-primary-base =>inpust kısmına focus olduğunda search rengi primary-base olur
        //focus-within:twxt-primary-base ile input içerisindeki iconda focus durumda primary rengini alır - fill-current özelliğinden dolayı


        <aside className="w-80 ">

            {/* //SEARCH */}
            <div className="flex items-center space-x-4 p-3 m-3 bg-gray-200 rounded-full text-gray-dark focus-within:bg-white focus-within:ring-1 focus-within:ring-primary-base focus-within:text-primary-base">
                <SearchIcon className="w-5 h-5" />
                <input className="placeholder-gray-dark bg-transparent focus:outline-none w-full text-sm" type="text" placeholder="Search Twitter" />
            </div>

            {/* //TIMELINE */}
            {/* //react-twitter-widgets indir ve ekle */}
            <div className="mt-5">
                <Timeline
                    dataSource={{
                        sourceType: 'profile',
                        screenName: 'reactjs'
                    }}
                    options={{
                        height: '1000'
                    }}
                />

            </div>

        </aside>
    )
}

export default Widget;
