import { useState, useEffect, useRef } from "react";
import { FcCompactCamera } from "react-icons/fc";
import ButtonBlue from "../comm/ButtonBlue";
// import GalleryItem from './GalleryItem';
import GalleryCard from "../comm/GalleryCard";

const Gallery = () => {
  const txt1 = useRef();// 인풋 제어
  const [kw, setKw] = useState();
  const [data1, setData1] = useState();
  const [tags, setTags] = useState();

  const handleOk = (e) => {
    e.preventDefault();
    if (txt1.current.value === "") return;
    setKw(txt1.current.value);
  }

  const handleCancel = (e) => {
    e.preventDefault();
    txt1.current.value = "";
    setData1();
    txt1.current.focus();
  }

  useEffect(() => {// 컴포넌트 생성 후 한 번 실행
    txt1.current.focus();
  }, [])

  useEffect(() => {
    getData(kw);
  }, [kw]);

  useEffect(() => {
    if (data1 === undefined) return;
    setTags(
      data1.map((item) =>
        <GalleryCard refv={txt1} key={item.galContentId} probs={item} set={setKw}/>
      )
    );
  }, [data1]);

  const getData = (kw) => {
    const apikey = `plzVJFqsOqtUcJRz1vXIKLJNwG41wF%2B3bIFSiNVK2UvAmPWaISX%2B%2BXlzG8ITZ8mzokDaMWoYxL248NM%2BolJUIg%3D%3D`;
    let enKw = encodeURI(kw);// 키워드 인코딩

    let url = `https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1`;
    url += `?serviceKey=${apikey}`;
    url += `&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest`;
    url += `&arrange=A`;
    url += `&keyword=${enKw}`;
    url += `&_type=json`;

    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        let tmp = data.response.body.items.item;

        setData1(tmp);

      })
      .catch(err => console.log(err));
  }

  // let tags;
  // if (data1 != null) {
  //   tags = data1.map((item) => {
  //     return <GalleryCard key={item.galContentId} probs={item} />
  //   });
  // }

  return (
    <main className='container'>
      <article>
        <header className="flex flex-row justify-between items-center">
          <div className="text-3xl font-bold">
            한국관광공사 관광사진 정보
          </div>
          <div>
            <FcCompactCamera className="text-4xl font-bold" />
          </div>
        </header>
        <form>
          <div className="grid">
            <div>
              <input ref={txt1} type="text" id="txt1" name="txt1" placeholder="키워드를 입력하세요."></input>
            </div>
            <div className="grid">
              <ButtonBlue caption='확인' handleClick={handleOk} />
              <ButtonBlue caption='취소' handleClick={handleCancel} />
            </div>
          </div>
        </form>
      </article>
      <section>
        {/* {data1 && <GalleryItem data1={data1} />} */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-38">
          {data1 && tags}
        </div>
      </section>
    </main>
  );
}

export default Gallery;
