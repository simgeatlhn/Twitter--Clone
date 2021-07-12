import React, { useState, useEffect } from 'react'
import db from '../firebase'; //veritabanı import edilir
import { PopulerIcon } from '../icons/Icon';
import TweetBox from "../components/TweetBox";
import Divider from '../components/Divider';
import FeedList from '../components/FeedList';


//veritabanı işlemleri useEffect hook u içerisinde yapılır. useEffect import et
//collection ve doküman ilişkisi firestore a aittir.

const Content = () => {

    //tweets boş array
    //setTweet i snapshot dan gelen veri ile doldururuz
    const [tweets, setTweets] = useState([]);

    //veri tabanından veriyi alırken useEffcet kullanırız
    //db.collection("feed") ile veri tabanına ulaşırız
    //orderBy ile timestamp ın desc (azalan) durumuna göre tweetleri sıralarız
    //snapshot ile veri tabanının tüm verilerini alırız
    //map ile tüm tweetleri dolaş ve istenilen tweet i content de göster
    useEffect(() => {
        db.collection("feed")
            .orderBy("timestamp", "desc")
            .onSnapshot(snapshot =>
                setTweets(snapshot.docs.map(doc => doc.data()))
            );
    }, [])

    console.log(tweets);

    return (
        //bg-purple-200
        //sticky top-0 navbar ın üstte sabit kalmasını sağlar. scrol bar hareket ettiğinde de en üstte sabit kalır
        //bg-white olmazsa navbar üstte transparan sabit kalır
        <main className=" flex-1 flex flex-col border-r border-l border-gray-extraLight ">
            <header className="sticky top-0 z-10 flex justify-between items-center p-4 border-b border-gray-extraLight bg-white">
                <span className="text-gray-900 text-xl font-bold">Home</span>
                <span><PopulerIcon className="w-6 h-6 text-primary-base" /></span>
            </header>


            {/* //Tweet Box input */}
            <div className="flex space-x-4 px-4 py-5">
                <img src="https://pbs.twimg.com/profile_images/1348343170262847488/8DpE_u92_400x400.jpg"
                    alt="Profile"
                    className="w-11 h-11 rounded-full"
                />

                {/* //TweetBox componenti oluştur */}
                <TweetBox />
            </div>

            <Divider />

            {/* //feed tweetlerin listelendiği kısım */}
            <FeedList tweets={tweets} />
        </main>
    );
};

export default Content
