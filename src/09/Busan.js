import pusandata from "./pusandata.json";
// import ButtonBlue from "../comm/ButtonBlue";
import GalleryCard from "../comm/GalleryCard";
// import { useEffect, useRef, useState } from "react";
const Busan = () => {
    const items = pusandata.map((item) => 
    // console.log(item)
        <GalleryCard 
        key = {item.콘텐츠ID}
        imgsrc={item.썸네일이미지URL} 
        title={item.제목} 
        content={item.상세내용.length < 100 ? item.상세내용 : item.상세내용.substring(0, 100) + '...'}  
        // content={item.상세내용.substring(0, 100) + '...'}  
        // content={item.ITEMCNTNTS}  
        sptag={item.주요장소.indexOf < 0 ?[item.주요장소] :item.주요장소.split(',')}  />
    ) ;

    return (
        <main className="container">
            <article>
                <header>
                    <h1 className="text-2xl font-bold">부산축제정보</h1>
                </header> 
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {items}
                </div>
            </article> 
            
        </main>
    )
}

export default Busan