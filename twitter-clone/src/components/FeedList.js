import React from 'react'
import FeedItem from "./FeedItem";

//content.js parent, feedList.js child, tweets prop defined
//tweets.map ile her bir tweet için FeedItem ı çağırırız
//tweet in içindeki bilgiler map fonksiyonu ile FeedItem ın içerisine gider
//FeedItem.js de tweet alınır
const FeedList = ({ tweets }) => {
    return (
        <div>
            {
                tweets.map((tweet, index) => (
                    <FeedItem {...tweet} key={index} />
                ))
            }

        </div>
    )
}

export default FeedList
