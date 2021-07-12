import React from 'react'

//container componentine farklı componentlar ekleceğemizin için {children} yazarız ve componentlar undefineed yerine defined olur
const Container = ({ children }) => {
    return (
        <div>

            <div className=" flex max-w-7xl min-h-screen mx-auto border">{children}</div>

        </div>
    )
}

export default Container
