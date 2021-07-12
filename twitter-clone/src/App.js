import React from 'react'

import Container from './layout/Container';
import Content from './layout/Content';
import Widgets from './layout/Widgets';
import Sidebar from './layout/Sidebar';

const App = () => {
  return (

    //flex sidebar,feed,timeline ı block olarak yan yana almak için
    //flex-1, feed container ın kalan kısmını kapsaması için kullanılır. diğerleri w-72 ve w-80 değerlerine göre alan kapsar
    //Container,Sidebar,feed(content),timeline(widget) için ayrı ayrı componentlar oluştururuz

    // <div className=" flex max-w-7xl min-h-screen mx-auto border">

    //   <div className="w-72 bg-blue-200">SideBar</div>

    //   <main className="flex-1 bg-purple-200">Feed</main>

    //   <aside className="w-80 bg-green-200">Timeline</aside>

    // </div>

    //parent- Container , Sidebar,Content,Widget - children

    <Container>
      <Sidebar />
      <Content />
      <Widgets />
    </Container>
  )
}

export default App

