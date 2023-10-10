import { FcCompactCamera } from "react-icons/fc";
import ButtonBlue from "../comm/ButtonBlue";
import { useState, useEffect, useRef } from "react";
import GalleryItem from './GalleryItem';

const Gallery = () => {
  const txt1 = useRef();// 인풋 제어
  const [kw, setKw] = useState();
  const [data1, setData1] = useState();

  const handleOk = (e) => {
    e.preventDefault();
    if (txt1.current.value === "") return;
    setKw(txt1.current.value);
  }

  const handleCancel = (e) => {
    e.preventDefault();
  }

  useEffect(() => {// 컴포넌트 생성 후 한 번 실행
    txt1.current.focus();
  }, [])

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

  useEffect(() => {
    getData(kw);
  }, [kw]);

  useEffect(() => {

  }, [data1]);

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
        {data1 && <GalleryItem data1={data1} />}
      </section>
    </main>
  );
}

export default Gallery;
