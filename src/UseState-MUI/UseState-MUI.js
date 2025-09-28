import '../App.css';

// 1. На странице есть кнопка и текст. При каждом нажатии на кнопку число в тексте
// увеличивается на один. useState — хранит число (количество кликов).

// import {useState} from 'react';
// import Button from '@mui/material/Button';

// function Show() {
//   const [value, setValue] = useState(0);
//   return <>
//     <Button onClick={()=>{ setValue(value+1)}} variant="outlined">+1</Button>
//     <p>{value}</p>
    
//   </>
// }

// export default Show;

// 2. На странице есть кнопка и текст. При нажатии на кнопку текст меняется с «Привет» на
// «Пока» и обратно. useState — хранит строку («Привет» или «Пока»).

// import {useState} from 'react';
// import Button from '@mui/material/Button';

// function Show() {
//   const [value, setValue] = useState('Привет');
//   return <>
//     <Button onClick={()=>{ 
//       value === 'Привет'? setValue('Пока'): setValue('Привет')
//     }} variant="outlined">Click</Button>
//     <p>{value}</p>
    
//   </>
// }

// export default Show;

// 3. На странице есть поле для ввода текста и абзац. Всё, что вводится в поле, сразу
// отображается в абзаце. useState — хранит строку с текстом из поля.

// import {useState} from 'react';
// import TextField from '@mui/material/TextField';

// function Show() {
//   const [inp, setInp] = useState('');
//   return <>
//   <TextField id="outlined-basic" label="Outlined" variant="outlined" 
//   onChange={(e) => setInp(e.target.value)}/>
//   <p>{inp}</p>
//   </>
// }

// export default Show;

// 4. На странице есть кнопка и абзац с текстом. При нажатии на кнопку текст скрывается, при
// повторном нажатии снова появляется. useState — хранит логическое значение (true/false).

// import {useState} from 'react';
// import Button from '@mui/material/Button';

// function Show(){
//     const [flag, setFlag] = useState(true);

//     return <>
//       <Button onClick={() => setFlag(!flag)} variant="outlined">Click</Button>
//       <p style={flag=== true?{display: 'block'} :{display:'none'}}>Hello world!</p>
//     </>
// }

// export default Show;

// 5. На странице есть кнопка и абзац. При нажатии на кнопку цвет текста меняется (например,
//   с чёрного на красный). useState — хранит текущий цвет текста.

// import {useState} from 'react';
// import Button from '@mui/material/Button';

// function Show() {
//   const[color, setColor] = useState('red');
//   return <>
//      <Button onClick={() => color === 'red'? setColor('green') : setColor('red')} variant="outlined">Click</Button>
//      <p style={{color:color}}>Hello world!</p>
//   </>
// }

// export default Show;

// 6. На странице есть кнопка и список. При нажатии в список добавляется новый элемент с
// текстом NEW. useState — хранит массив строк.

// import {useState} from 'react';
// import Button from '@mui/material/Button';


// function Show(){
//   const[value, setValue] = useState(['hello', 'apple', 'cat']);
//   return <>
//   <Button onClick={() => setValue([...value, 'NEW'])} variant="outlined">Click</Button>
//   <ul>{value.map((el, index) => <li key={index}>{el}</li>)}</ul>
//   </>
// }

// export default Show;

// 7. На странице есть список и кнопка. При нажатии удаляется последний элемент из списка.
// useState — хранит массив элементов.

// import {useState} from 'react';
// import Button from '@mui/material/Button';

// function Show(){
//   const [value, setValue] = useState(['hello', 'apple', 'cat', 'dog', 'orange']);
//   return <>
//     <Button onClick={() => setValue(value.slice(0,value.length-1))} variant="outlined">Click</Button>
//     <ul>
//         {value.map((el, index) => <li key={index}>{el}</li>)}
//     </ul>
//   </>
// }

// export default Show;

// 8. На странице есть картинка и две кнопки («Следующая» и «Предыдущая»). Кнопки
// переключают картинки по массиву (5 шт). useState — хранит индекс текущей картинки.

// import {useState} from 'react';
// import Button from '@mui/material/Button';
// import img1 from './img1.png'
// import img2 from './img2.png'
// import img3 from './img3.png'
// import img4 from './img4.png'

// function Show(){
//   const arrayOfImg = [img1, img2, img3, img4]
//   const [index, setIndex] = useState(0);
//   return <>
//     <Button onClick={() => {index === 0? setIndex(0) : setIndex(index-1)}} variant="outlined">Предыдущая</Button>
//     <img src={arrayOfImg[index]}/>
//     <Button onClick={() => {index === arrayOfImg.length-1? setIndex(arrayOfImg.length-1): setIndex(index+1)}} variant="outlined">Следующая</Button>
    
    
//   </>
// }

// export default Show;

