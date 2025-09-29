import '../App.css';

// 1. При первичном рендеринге загрузите данные пользователя с https://jsonplaceholder.typicode.com/users/1 .
// Отобразите информацию о пользователе в виде карточки. Внутри useState хранится объект пользователя с
// сервера. Обработайте возможные ошибки при обращении к серверу.

// import axios from 'axios';
// import {useState, useEffect} from 'react';

// function Show(){
//     const[value, setValue] = useState({});

//     async function get(){
//         const data = await axios.get('https://jsonplaceholder.typicode.com/users/1');
//         setValue(data.data)
//     }

//     useEffect(()=> {
//         get()
//     },[])

//     return <>
//     <div>
//         <h1>{value.name}</h1>
//         <h2>{value.username}</h2>
//         <h3>{value.email}</h3>
//         <h4>{value.adress}</h4>
//         <p>{value.phone}</p>
//         <p>{value.website}</p>
//     </div>
//     </>

// }



// export default Show

// 2. При первичном рендеринге загрузите список постов с https://jsonplaceholder.typicode.com/posts .
// Отобразите первые 10 постов в виде списка. Внутри useState хранится массив постов с сервера

// import axios from 'axios';
// import {useState, useEffect} from 'react';

// function Show(){
//     const[posts, setPosts] = useState([]);

//     async function get(){
//         const data = await axios.get('https://jsonplaceholder.typicode.com/posts');
//         setPosts(data.data)
//     }

//     useEffect(()=> {
//         get();
//     }, [])

//     return <><ul>
//     {posts.filter((el,index)=>index<10).map((el) =><li>{el.title}</li> )}

//     </ul>
//     </>
// }

// export default Show

// 3. На странице должны отображаться инпут и div c ответом сервера. При первичном рендеринге отправить
// запрос на https://jsonplaceholder.typicode.com/albums?title_like=${query}. При вводе данных в инпут повторно
// отправляйте запрос. Внутри useState хранится массив найденных альбомов. Отобразите результаты поиска
// в виде сетки карточек. (В текущей задаче useEffect вызывает асинхронную функцию не только при
// первичном рендеринге, но и при изменении состояния значения инпута)

// import axios from 'axios';
// import {useState, useEffect} from 'react';

// function Show(){
//     const[input, setInput] = useState('');
//     const[albums, setAlbums] = useState([]);

//     async function get(){
//         const data = await axios.get(`https://jsonplaceholder.typicode.com/albums?title_like=${input}`);
//         setAlbums(data.data)
//     }

//     useEffect(()=> {
//         get()
//     })
//     return <>
//         <input onChange={(e)=> {
//             setInput(e.target.value)
//         }}/>
//         <ul>
//         {albums.map((el) => <li>{el.title}</li>)}
//         </ul>
//     </>

// }

// export default Show;

// 4. При первичном рендеринге отправить GET запрос по адресу https://api.ipify.org/?format=json . Результат
// сервера отобразить в заголовок


// import axios from 'axios';
// import {useState, useEffect} from 'react';

// function Show(){
//     const[result, setResult]= useState({});

//     async function get() {
//         const data = await axios.get('https://api.ipify.org/?format=json');
//         setResult(data.data)
//     }

//     useEffect(()=>{
//         get()
//     })

//     return <>
//     <h1>{result.ip}</h1>
//     </>
// }

// export default Show;