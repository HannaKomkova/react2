import './App.css';

// 1. На входе статичный массив чисел. Отобразить на странице только чётные числа, каждое в
// теге <li>.

// function show(){
//   const arr = [1, 2, 3, 4, 5, 6, 7, 8];

//   return <>
//   {arr.filter((el) => el%2 === 0).map((el) => <li>{el}</li>)}
//   </>
// }

// export default show;

// 2. На входе статичный массив строк. Отфильтровать и отобразить только те строки, длина
// которых больше 5 символов. Вывести в виде списка.

// function show(){
//     const arr = ['cat', 'dog', 'orange', 'elephant', 'chicken'];
//     return <>
//    {arr.filter((el) => el.length> 5).map((el) => <li>{el}</li>)}
//     </>
//   }
  
//   export default show;

// 3. На входе массив чисел. Отобразить сумму всех чисел на странице в теге <h3>

// function show(){
//     const arr = [1, 10, 20, 40, 5];
//     return <>
//    {<h3>{arr.reduce((acc, el) => acc+=el ,0)}</h3>}
//     </>
//   }
  
//   export default show;

// 4. На входе массив строк. Преобразовать каждую строку в верхний регистр и отобразить на
// странице.

// function show(){
//     const arr = ['cat', 'dog', 'orange', 'elephant', 'chicken'];
//     return <ul>
//         {arr.map((el) => <li>{el.toUpperCase()}</li>)}
//     </ul>
//   }
  
//   export default show;

// 5. На входе массив булевых значений [true, false, true...]. Отобразить на странице в виде
// (если true) и (если false).// 
// 
// function show(){
//     const arr = [true, false, true, true, false, false];

//     return <ul>
//         {arr.map((el) => el === true? <li>✅</li> : <li>❌</li>)}
//     </ul>
//   }
  
//   export default show;

// 6. На входе массив дат в формате строки. Отобразить только те, которые позже 2020 года.

// function show(){
//     const arr = ['1999-02-12', '2024-12-31', '2003-02-23', '2021-03-21'];

//     return <ul>
//         {arr.filter((el) => new Date(el).getFullYear() > 2020).map((el) => <li>{el}</li>)}
//     </ul>
//   }

//   export default show;

// 7. На входе массив из строк и чисел. Отобразить строки с классом text, а числа с классом
// number.

// function show(){
//     const arr = [1, 3, 5, 'apple', 4, 'dog', 'book'];

//     return <ul>
//         {arr.map((el) => typeof(el) === 'string'? <li>text</li> : <li>number</li>)}
//     </ul>
//   }
  
//   export default show;

// 8. На входе массив имён. Отобразить приветствие для каждого имени в формате: "Привет,
// [имя]!" в теге <p>.

// function show(){
//     const arr = ['hanna', 'mikita', 'sasha', 'dasha'];

//     return <>
//         {arr.map((el) => <p>"Привет,{el}!"</p> )}
//     </>
//   }
  
//   export default show;

// 9. На входе статичный массив чисел. Ваша задача каждое число массива возвести в квадрат и
// отобразить на странице 
