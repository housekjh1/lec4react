// import { useState, useEffect, useRef } from "react";
// import pusandata from './pusandata.json';
// import ButtonBlue from "../comm/ButtonBlue";
// import GalleryCard1 from "../comm/GalleryCard1";

// const Busan = () => {
//     const sel = useRef();
//     const [options, setOptions] = useState();
//     const [resultTag, setResultTag] = useState();

//     // console.log(pusandata);

//     let code = [];
//     code = pusandata.map((item) =>
//         // [item.콘텐츠ID, item.콘텐츠명.replace(/ \<.*\>/, '').replace(/\(.*\)/, '')]
//         // [item.콘텐츠ID, item.콘텐츠명.split('(')[0]]
//         [item.콘텐츠ID, item.콘텐츠명.slice(0, item.콘텐츠명.lastIndexOf('('))]
//     );

//     const handleSearch = (e) => {
//         e.preventDefault();
//         if (sel.current.value === '') return;
//         const apiKey = `plzVJFqsOqtUcJRz1vXIKLJNwG41wF%2B3bIFSiNVK2UvAmPWaISX%2B%2BXlzG8ITZ8mzokDaMWoYxL248NM%2BolJUIg%3D%3D`;
//         const pageNo = `1`;
//         const numOfRows = `10`;
//         const resultType = `json`;
//         let url = `https://apis.data.go.kr/6260000/FestivalService/getFestivalKr?serviceKey=${apiKey}&pageNo=${pageNo}&numOfRows=${numOfRows}&resultType=${resultType}&UC_SEQ=${sel.current.value}`;

//         fetch(url)
//             .then(resp => resp.json())
//             .then(data => {
//                 console.log(data.getFestivalKr.item[0]);
//                 const probs = data.getFestivalKr.item[0]
//                 setResultTag(<GalleryCard1 probs={probs} />)
//             })
//             .catch(err => console.log(err));

//     }
//     const handleReset = (e) => {
//         e.preventDefault();
//         sel.current.value = '';
//         setResultTag();
//     }

//     useEffect(() => {
//         console.log(code);
//         sel.current.focus();

//         const tmp = code.map(item => {
//             return <option key={item[0]} value={item[0]}>{item[1]}</option>
//         })

//         setOptions(tmp);

//     }, [])

//     const changeSel = () => {
//         console.log(sel.current.value);
//     }

//     return (
//         <main className="container">
//             <article>
//                 <header>
//                     <div className="text-3xl font-bold">
//                         부산축제정보 서비스
//                     </div>
//                 </header>
//                 <form>
//                     <div className="flex flex-row">
//                         <div className="basis-3/5 mx-2">
//                             <select ref={sel} id='sel' name='sel' onChange={changeSel}>
//                                 <option value=''>축제명을 선택하세요.</option>
//                                 {options}
//                             </select>
//                         </div>
//                         <div className="basis-1/5 mx-2">
//                             <ButtonBlue caption='조회' handleClick={(e) => handleSearch(e)} />
//                         </div>
//                         <div className="basis-1/5 mx-2">
//                             <ButtonBlue caption='초기화' handleClick={(e) => handleReset(e)} />
//                         </div>
//                     </div>
//                 </form>
//                 <footer>
//                     <div className="grid">
//                         {resultTag}
//                     </div>
//                 </footer>
//             </article>
//         </main >
//     )
// }

// export default Busan;
