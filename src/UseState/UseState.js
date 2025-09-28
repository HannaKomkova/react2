import '../App.css';

/////UseState 

// 1. Создайте компонент с полем ввода и параграфом. При вводе данных в input отображать
// вводимое значение в параграф текущей страницы
// import {useState} from 'react';

// function Show() {
//   const [inp, setInp] = useState('')
//   return <>
//     <input onChange={(e) =>{
//       setInp(e.target.value)
//     }}/>
//     <p>{inp}</p>
//   </>
// }

// export default Show;

// 2. Создайте компонент с полем ввода и кнопкой. По клику на кнопку собрать данные из input
// и проверить вводимую строку на палиндром. Результат отображать в консоль

// import {useState} from 'react';

// function Show() {
//   const [inp, setInp] = useState('')
//   return <>
//     <input onChange={(e) =>{
//       setInp(e.target.value)
//     }}/>
//     <button onClick={()=>{
//       inp === inp.split('').reverse().join('')? console.log(true) : console.log(false);
//       ;
      
//     }}>Click</button>
//   </>
// }

// export default Show;

// 3. Создайте компонент с полем ввода и кнопкой. По клику на кнопку собрать данные из input
// и проверить вводимую строку на почту. Результат отображать в консоль

// import {useState} from 'react';

// function Show() {
//   const [inp, setInp] = useState('');
//   const pattern = /[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+/
//   return <>
//     <input onChange={(e) =>{
//       setInp(e.target.value)
//     }}/>
//     <button onClick={()=>{
//       pattern.test(inp)? console.log(true) : console.log(false);
      
//     }}>Click</button>
//   </>
// }

// export default Show;

// 4. Создайте компонент с 2 полями ввода и кнопкой. По клику на кнопку собрать данные из
// двух input (2 разных state). Сравнить значения 2 input на равенство. Результат отображать в
// консоль

// import {useState} from 'react';

// function Show() {
//   const [inp1, setInp1] = useState('');
//   const [inp2, setInp2] = useState('');
//   return <>
//     <input onChange={(e) =>{
//       setInp1(e.target.value)
//     }}/>
//     <input onChange={(e) =>{
//       setInp2(e.target.value)
//     }}/>
//     <button onClick={()=>{
//       inp1 === inp2? console.log(true) : console.log(false);
//     }}>Click</button>
//   </>
// }

// export default Show;

// 5. Создайте компонент с полем ввода имени и кнопкой "Привет". При вводе имени в поле и
// нажатии на кнопку, компонент должен отображать приветственное сообщение с именем,
// введенным пользователем

// import {useState} from 'react';

// function Show() {
//   const [inp, setInp] = useState('');
//   return <>
//     <input onChange={(e) =>{
//       setInp(e.target.value)
//     }}/>
//     <button onClick={()=>{
//       alert(`Привет ${inp}`)
//     }}>Привет</button>
//   </>
// }

// export default Show;

// 6. Создайте компонент с кнопкой "Показать/Скрыть текст". При нажатии на кнопку текст
// должен появляться или исчезать

// import {useState} from 'react';

// function Show() {
//   const [inp, setInp] = useState(true);
//   return <>
//     <p style={inp === true? {display:'block'} : {display:'none'}}>Hello world!</p>
//     <button onClick={()=>{
//       setInp(!inp)
//     }}>Показать/Скрыть текст</button>
//   </>
// }

// export default Show;

// 7. Создайте компонент с кнопкой и параграфом для отображения результата счетчика
// (изначально счетчик равен 0). Ваша задача так реализовать функционал, чтобы при клике на
// кнопку автоматически прибавлялась +1 к стейту счетчика

// import {useState} from 'react';

// function Show() {
//   const [inp, setInp] = useState(0);
//   return <>
//     <button onClick={()=>{
//       setInp(inp+1)
//     }}>+1</button>
//     <p >{inp}</p>
//   </>
// }

// export default Show;

// 8. Дополните предыдущую задачу. Создайте компонент с 2 кнопками и параграфом для
// отображения результата счетчика (изначально счетчик равен 0). Ваша задача так
// реализовать функционал, чтобы при клике на кнопку +1 автоматически прибавлялась +1 к
// стейту счетчика, а при клике на кнопку -1, происходило вычитание значения 1

// import {useState} from 'react';

// function Show() {
//   const [inp, setInp] = useState(0);
//   return <>
//     <button onClick={()=>{
//       setInp(inp+1)
//     }}>+1</button>
//     <button onClick={()=>{
//         setInp(inp-1)
//       }}>-1</button>

//     <p >{inp}</p>
//   </>
// }

// export default Show;

// 9. Дополните предыдущую задачу. Создайте компонент, который отображает счетчик и кнопку
// "Сброс". При нажатии на кнопку, счетчик должен сбрасываться в ноль. Используйте useState,
// чтобы управлять значением счетчика.

// import {useState} from 'react';

// function Show() {
//   const [inp, setInp] = useState(0);
//   return <>
//     <button onClick={()=>{
//       setInp(inp+1)
//     }}>+1</button>
//     <button onClick={()=>{
//         setInp(inp-1)
//       }}>-1</button>
//     <button onClick={()=>{
//         setInp(0)
//       }}>0</button>
//     <p >{inp}</p>
//   </>
// }

// export default Show;

// 10. Создайте кнопку с названием "Добавить цвет". При клике на эту кнопку цвет шрифта
// заголовка H1 должен измениться. При следующем клике цвет должен вернуться в
// первоначальное состояние. Текст кнопки также должен меняться с "Открыто" на "Закрыто"
// при нажатии на саму кнопку.

// import {useState} from 'react';

// function Show() {
//   const [inp, setInp] = useState(true);
//   return <>
//     <button onClick={()=>{
//       setInp(!inp)
//     }}>Добавить цвет</button>
//     <h1 style={inp=== true?{color: 'green'} : {color: 'red'} }>{inp=== true? 'Открыто' : 'Закрыто'}</h1>
//   </>
// }

// export default Show;

// 11. Напишите компонент, включающий в себя выезжающее меню из трех параграфов. По
// нажатию на кнопку "Открыть" меню должно отображаться.

// import {useState} from 'react';

// function Show() {
//   const [inp, setInp] = useState(false);
//   return <>
//     <button onClick={()=>{
//       setInp(!inp)
//     }}>Открыть</button>
//     <ul style={inp === false?{display:'none'}: {display:'block'}}>
//       <li>Суп</li>
//       <li>Картошка</li>
//       <li>Бургер</li>
//     </ul>
    
//   </>
// }

// export default Show;