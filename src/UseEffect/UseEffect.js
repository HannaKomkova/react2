import '../App.css';

// 1. Сделай компонент со счётчиком. Каждый раз, когда пользователь нажимает кнопку, значение
// счётчика должно отобрадаться в console.log внутри useEffeect

// import {useState, useEffect} from 'react';

// function Show(){ 
    
//     const [value, setValue] = useState(0);

//     useEffect(() => {
//         console.log(value);
        
//     },[value])

//     return <>
//     <button onClick={() => { setValue(value+1)}}> click </button>

// </>
// }

// export default Show;

// 2. Сделай компонент, который запускает таймер (setInterval) и каждую секунду увеличивает число на
// экране.

// import {useState, useEffect } from 'react';

// function Show(){
//     const[time, setTime] = useState(0);

//     useEffect(()=> {
//        const result = setInterval(()=>{setTime(time + 1)}, 1000)
//        return () =>clearInterval(result)
//     }, [time])

//     return <>
//     <h1>{time}</h1>
//     </>
// }

// export default Show;

// 3. При монтировании компонента сделай fetch на какой-нибудь API (например,
//     https://jsonplaceholder.typicode.com/posts/1) и выведи заголовок поста. 

// import {useState, useEffect } from 'react';

// function Show(){
//     const[value, setValue] = useState('');
//     async function get(){
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
//         const json = await response.json();
//         setValue(json.title)
//     }
//     useEffect(() => {
//         get()
//     })

//     return <>
//     <h1>{value}</h1>
//     </>
// }

// export default Show;

// 4. При монтировании сделай fetch на https://jsonplaceholder.typicode.com/users и отобрази список имён
// пользователей (name).

// import {useState, useEffect } from 'react';

// function Show(){
//     const[usersName, setUsersName] = useState([]);

//     async function getUsersName() {
//         const responce = await fetch('https://jsonplaceholder.typicode.com/users');
//         const json = await responce.json();
//         const names = json.map((el) => el.name)
//         setUsersName(names) 
//     }

//     useEffect(() => {
//         getUsersName()
//     },[])

//     return <>
//     <ul>
//         {
//         usersName.map((item, index) => <li key={index}>{item}</li>)
//         }
//     </ul>
//     </>
// }

// export default Show;

// 5. Сделай компонент, который каждые 10 секунд загружает случайный пост
// (https://jsonplaceholder.typicode.com/posts/{случайное число}) и отображает его заголовок.

// import {useState, useEffect } from 'react';

// function Show() {
//     const[title, setTitle] = useState({});

//     async function getPost(){
//         const responce = await fetch(`https://jsonplaceholder.typicode.com/posts/${Math.round(Math.random() * 100)}`);
//         const json = await responce.json();
//         setTitle(json)
//     }

//     useEffect(() => {
//         const result = setInterval(()=>getPost(), 3000)
//        return () =>clearInterval(result)
        
//     },[])

//     return <>
//         <h1>{title.title }</h1>
//     </>
// }

// export default Show;

