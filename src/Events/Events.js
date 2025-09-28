import '../App.css';

// 1. Сделать кнопку, которая при клике показывает alert("Привет!").

// function show(){

//   return <>
//     <button onClick={()=>{
//         alert('Hello!')
//     }}>Click!</button>
//   </>
// }

// export default show;

// 2. Кнопка, которая при двойном клике (onDoubleClick) выводит alert("Привет!").

// function show(){

//   return <>
//     <button onDoubleClick={()=>{
//         alert('Hello!')
//     }}>Click!</button>
//   </>
// }

// export default show;

// 3. Поле ввода, которое при каждом изменении (onChange) пишет введённое значение в
// консоль.

// function show(){

//   return <>
//             <input onChange={(e)=>{
//                 console.log(e.target.value);
                
//             }}/>
//     </>
// }

// export default show;

// 4. Кнопка, которая при клике меняет свой цвет с помощью e.target.style = "background-color:
// red".


// function show(){

//   return <>
//     <button onClick={(e)=>{
//         e.target.style = "background-color: red"
//     }}>Click!</button>
//   </>
// }

// export default show;

// 5. Создайте компонент с input. По изменению значения input отображайте количество
// символов в input в консоль используя event.target.value.

// function show(){

//   return <>
//     <input onChange={(e)=> {
//         console.log(e.target.value.length);
        
//     }}/>
//   </>
// }

// export default show;

// 6. Поле ввода, которое при нажатии клавиши (onKeyDown) выводит в консоль название
// клавиши (event.key).

// function show(){

//   return <>
//     <input onKeyDown={(e)=> {
//         console.log(e.key);
        
//     }}/>
//   </>
// }

// export default show;

// 7. Поле ввода, которое при отпускании клавиши (onKeyUp) показывает alert("Клавишу
// отпустил").

// function show(){

//   return <>
//     <input onKeyUp={(e)=> {
//         alert('Клавишу отпустил')
        
//     }}/>
//   </>
// }

// export default show;

// 8. Реализуйте компонент с кнопкой, которая при каждом нажатии меняет свой цвет в
// соответствии с массивом цветов ['red', 'white', 'blue’]. Используйте рандомный выбор цвета
// из массива при каждом клике.

// function show(){
// const arrOfColor = ['red', 'white', 'blue'];
//   return <>
//     <button onClick={(e) => {
//         e.target.style = `background-color:${arrOfColor[Math.floor(Math.random() * 3)]}`
        
//     }}>Click</button>
//   </>
// }

// export default show;

// 9. Реализуйте компонент с массивом чисел и кнопкой. При клике на кнопку вычислите и
// выведите сумму всех чисел из массива в консоль.

// function show(){
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12];
//   return <>
//     <button onClick={() => {
//         let sum = arr.reduce((acc, el) =>acc+el ,0)
//         console.log(sum);
        
//     }}>Click</button>

//   </>
// }

// export default show;

// 10. Создайте компонент с массивом элементов и кнопкой. При каждом клике на кнопку
// выбирайте случайный элемент из массива и отображайте его в консоль.

// function show(){
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12];
//   return <>
//     <button onClick={() => {
//         console.log(arr[Math.floor(Math.random() * arr.length)]);
        
//     }}>Click</button>

//   </>
// }

// export default show;

// 11. Квадрат <div>, который при наведении (onMouseEnter) пишет в консоль "Навёл", а при
// уходе (onMouseLeave) — "Ушёл".

// function show(){
//   return <>
//     <div style={{width:'100px', height:'100px', background:'red'}}
//         onMouseEnter ={() => console.log('Навёл')}
//         onMouseLeave ={()=> console.log('Ушёл')}    
//     >

//     </div>

//   </>
// }

// export default show;