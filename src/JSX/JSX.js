import '../App.css';

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

// function show(){
//     const arr = [1, 2, 3, 4, 5, 6, 7, 8];

//     return <>
//         {arr.map((el) => <p>{Math.pow(el, 2)}</p> )}
//     </>
//   }
  
//   export default show;

// 10. На входе статичный массив чисел. Ваша задача найти корень каждого числа и отобразить на
// странице в виде h1

// function show(){
//     const arr = [1, 2, 3, 4, 5, 6, 7, 8];

//     return <>
//         {arr.map((el) => <h1>{Math.sqrt(el)}</h1> )}
//     </>
//   }
  
//   export default show;

// 11. На входе статичный массив строк. Ваша задача отфильтровать и отобразить на странице
// только те строки, которые содержат знак @


// function show(){
//     const arr = ['apple', 'dog', '@mail.ru', '@fuuny', 'sqrt'];

//     return <>
//         {arr.filter((el) => el.includes('@')).map((el) => <p>{el}</p>) }
//     </>
//   }
  
//   export default show;

// 12. На входе статичный массив строк. Ваша задача отобразить на странице все строки массива,
// а также картинку. Каждая итерация будет возвращать

// import img1 from './img1.png'

// function show(){
//     const arr = ['apple', 'dog', 'flower', 'fuuny', 'banana'];

//     return <>
//         {arr.map((el) => 
//             <div>
//                 <p>{el}</p>
//                 <img src={img1}/>
//             </div>)}
//     </>
//   }
  
//   export default show;

// 13. На входе статичный массив чисел и букв. Ваша задача отобразить на странице в случае
// числа четность и нечетность текущего значения в параграфе, в случае строки отобразить
// саму строку в параграфе 

// function show(){
//     const arr = ['apple',1, 2, 4, 'dog', 6, 'fuuny', 'school'];

//     return <>
//         {arr.map((el, index) => {
//             if(typeof(el) === 'number'){
//                return el % 2 === 0? <p key={index}>{el} - чётное число</p> : <p key={index}>{el} - нечётное число</p>  
//             } else{
//                return <p key={index}>{el}</p> 
//             }
//         }) }
//     </>
//   }
  
//   export default show;

// 14. На входе массив из объектов. каждый объект содержит title с названием фильма и
// description с кратким описанием фильма. В h1 отобразить каждый title, в p - description

// function show(){
//     const movies = [
//         {
//           title: "Крестный отец",
//           description: "Сага о сицилийской мафиозной семье Корлеоне в послевоенной Америке."
//         },
//         {
//           title: "Побег из Шоушенка",
//           description: "Банкир, несправедливо осужденный за убийство, планирует побег из тюрьмы."
//         },
//         {
//           title: "Форрест Гамп",
//           description: "Простой парк из Алабамы становится свидетелем ключевых событий американской истории."
//         }
//       ];

//     return <>
//         {movies.map((el, index) => 
//             <div>
//                 <h2 key={index}>{el.title}</h2>
//                 <p >{el.description}</p>
//             </div>)}
//     </>
//   }
  
//   export default show;

// 1. На входе массив объектов { city: string, population: number }. Отобразить города, где
// население больше 1 млн

// function show(){
//     const cities = [
//         {
//           city: "Москва",
//           population: 12678079
//         },
//         {
//           city: "Санкт-Петербург",
//           population: 5384342
//         },
//         {
//           city: "Новосибирск",
//           population: 1625631
//         },
//         {
//           city: "Екатеринбург",
//           population: 1493749
//         },
//         {
//           city: "Казань",
//           population: 1257391
//         },
//         {
//           city: "Нижний Новгород",
//           population: 1244
//         },
//         {
//           city: "Челябинск",
//           population: 11843
//         },
//         {
//           city: "Самара",
//           population: 1144
//         }
//       ];

//     return <>
//         {cities.filter((el) => el.population > 1000000)
//         .map((city, index) => <p key={index}>{city.city}</p>)}
//     </>
//   }
  
//   export default show;

// 2. На входе массив чисел. Отобразить числа, которые делятся на 3 без остатка, в теге <span>.

// function show(){
//     const arr = [123, 33, 323, 12234, 105, 3, 2];

//     return <>
//         {arr.filter((el) => el % 3 ===0).map((num, index) => <span key={index}>{num}</span>)}
//     </>
//   }
  
//   export default show;

// 3. На входе массив строк. Если строка содержит слово "JS" — отобразить её, иначе пропустить.


// function show(){
//     const arr = ['JS is very fun', 'dog', 'JS is language', 'fuuny', 'sqrt'];

//     return <>
//         {arr.filter((el) => el.includes('JS')).map((el) => <p>{el}</p>) }
//     </>
//   }
  
//   export default show;

// 4. На входе массив объектов { task: string, completed: boolean }. Отобразить все задачи.
// Выполненные — зачёркнутыми.

// function show(){
//     const arr = [
//         { task: 'Сделать дз', 
//             completed: true },
//         { task: 'Помыть посуду', 
//             completed: false },
//         { task: 'Пропылесосить', 
//             completed: true },
//         { task: 'Прочитать книгу', 
//             completed: false },
//         { task: 'Постирать вещи', 
//             completed: true },
//         { task: 'Приготовить еду', 
//             completed: true },
//         { task: 'Посмотреть уроки', 
//             completed: false },
//         ];

//     return <>
//         {arr.map((el, index) =>  el.completed? <p key = {index}><s>{el.task}</s></p> :  <p key = {index}>{el.task}</p> )}
//     </>
//   }
  
//   export default show;


// 5. На входе массив чисел. Каждое число возвести в куб и отобразить на странице в <h4>.

// function show(){
//     const arr = [1, 2, 3, 4, 5, 6, 7, 8];

//     return <>
//         {arr.map((el, index) => <h4 key ={index}>{Math.pow(el, 3)}</h4> )}
//     </>
//   }
  
//   export default show;

// 6. На входе массив строк. Строки могут быть в разном регистре. Отобразить только уникальные
// строки в нижнем регистре, отсортированные по алфавиту


// function show(){
//     const arr = ['apple', 'Dog', 'pop', 'WEW', 'apple', 'CAT', 'banana', 'Dog', 'animals', 'zoo'];
//     let finalArr = [];
//     let filteredMap = arr.filter((el) => el === el.toLowerCase())
//     let obj={};
//     filteredMap.forEach((el) => {
//         if(!obj.hasOwnProperty(el)){
//             obj[el] = 1
//         } else{
//             obj[el]+=1;
//         }
//     })
//     for (let key in obj){
//         if(obj[key] === 1){
//             finalArr.push(key)
//         }
//     }
//     return <>
//         {
//             finalArr.sort().map((el, index) => <p key = {index}>{el}</p>)
//         }
//     </>
//   }
  
//   export default show;

// 7. На входе массив чисел. Разбить их на два массива: положительные и отрицательные.
// Отобразить оба списка на странице.


// function show(){
//     const arr = [2, 4, 6, 7, -34, -23, 45, -123, -56564];
//     let positiveArr = [];
//     let negativeArr = [];
//     arr.forEach((el) => el < 0? negativeArr.push(el) : positiveArr.push(el))

//     return <> <ul>
//             {positiveArr.map((el, index) => <li key={index}>{el}</li>)}
//             </ul>
//             <ul>
//             {negativeArr.map((el, index) => <li key={index}>{el}</li>)}
//             </ul>
//     </>
//   }
  
//   export default show;

// 8. На входе массив дат (строк). Отобразить ближайшую к сегодняшнему дню дату.
// Использовать new Date() и сравнение по времени.

// function show(){
//     const arr = ['2025-02-13', '2020-12-23', '2021-12-05', '2025-08-12'];
//     let today = new Date().getTime();
//     let obj = {};
//     arr.forEach((el) => obj[el] = today - new Date(el).getTime())
//     let minDate = +Infinity;
//     let finalDate = '';

//     for ( let key in obj){
//         if(obj[key] < minDate){
//             minDate = obj[key];
//             finalDate = key;
//         } 
//     }
    
//     return <>
//         {<p>{finalDate}</p>}
//     </>
//   }
  
//   export default show;