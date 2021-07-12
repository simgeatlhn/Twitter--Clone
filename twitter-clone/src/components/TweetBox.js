import React, { useState } from 'react'
import { EmojiIcon, GIFIcon, ImageIcon, PollIcon, ScheduleIcon } from "../icons/Icon";
import db from "../firebase";
import firebase from "firebase";

//content.js parent , divider.js ve tweetbox.js child
//flex-1 ve w-full textarea kısmının tüm content alanını kapsamasını sağlar.
//outline-none textarea nın borderını none yapar
//overflow-hidden textarea kısmında scroll oluşmasını engeller

const TweetBox = () => {

    //tweet in içeriği state de tutulacak
    //setContent tweet in içeriğini güncelleyecek hook
    const [content, setContent] = useState("");

    //tweet buttonu ile tweet i paylaşmak ve firebase database ine göndermek için onClick methodu ile sendTweet fonksiyonu çalıştırılır
    //if content != "", boş bir tweet atılmadıysa displayName=kullanıcı adı ,userName,avatar=kullanıcı profili .. gibi değerler  gösterilir. ilk olarak firebase e bağlanmadan statik bir tweet oluşturulur
    //db.collection ile veritabanında feed adında collection oluşturulur
    //collection içerisine displayName,userName.. objeleri oluşturulur

    const sendTweet = () => {
        if (content !== "") {
            db.collection("feed").add({
                displayName: "Simge Atlıhan",
                userName: "@simgeatlhn",
                content,
                timestap: firebase.firestore.FieldValue.serverTimestamp(),
                image: "https://pbs.twimg.com/profile_images/1348343170262847488/8DpE_u92_400x400.jpg",
                avatar: "https://pbs.twimg.com/profile_images/1348343170262847488/8DpE_u92_400x400.jpg"
            });

            //tweet paylaşıldıktan sonra setContent ile input un yine boş değer alması için "" boş değer atarız.
            setContent("")
        }


    };

    return (
        <div className="flex flex-col flex-1 mt-2 px-2">

            {/* //tweetbox input kısmı */}
            {/* //onChange methodu , setContent ile e.target.value dan gelen değerle yeni yazıyı günceller */}
            {/*//daha sonra value değeri const content değerine atanır */}

            <textarea className="w-full etxt-xl placeholder-gray-dark outline-none overflow-hidden bg-transparent"
                placeholder="what's happening ?"
                onChange={(e) => setContent(e.target.value)}
                value={content}
            />

            {/* //icon ve button arasını justify between ile açıp item-center ile ortalarız */}
            <div className="flex items-center justify-between">

                {/* //iconları yan yana almak için -ml-3 şeklinde eksi değer verebiliriz */}
                <div className="flex -ml-3">
                    {/* //icons */}
                    <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest">
                        <ImageIcon className="w-6 h-6 text-primary-base" />
                    </div>

                    <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest">
                        <GIFIcon className="w-6 h-6 text-primary-base" />
                    </div>

                    <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest">
                        <PollIcon className="w-6 h-6 text-primary-base" />
                    </div>

                    <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest">
                        <ScheduleIcon className="w-6 h-6 text-primary-base" />
                    </div>

                    <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest">
                        <EmojiIcon className="w-6 h-6 text-primary-base" />
                    </div>
                </div>

                {/* //tweet button */}
                <button
                    className="bg-primary-base text-white rounded-full px-4 py-2 font-medium"
                    onClick={sendTweet}>
                    Tweet
                </button>
            </div>

        </div>
    )
}

export default TweetBox
