let massive=[];

//Устновка сегодняшней даты в инпут
const setDate = () => {
  let getCurrentDay = new Date();
  let year = getCurrentDay.getFullYear();
  let month = getCurrentDay.getMonth() + 1;
  let day = getCurrentDay.getDate();
  
  if (month < 10)
    month = "0" + month;
  if (day < 10)
    day = "0" + day;
  let value1 = year + "-" + month + "-" + day;
  document.getElementById("calendarForTasks").value = value1;
}


//Генерация карточки

const generateCard=(date,note)=>{
  let card=document.createElement('div');
  card.classList.add("card");
  let divdata=document.createElement('div');
  divdata.classList.add("data");
  divdata.innerText=date;
  let divnote=document.createElement('div');
  divnote.classList.add("note");
  divnote.innerText=note;
  card.appendChild(divdata);
  card.appendChild(divnote);
  return card;
  
}

//Добавляем в массив ви в хранилище
const addLocalStorage=(date,note)=>{
   massive.push([date,note]);
   localStorage.setItem("Collection", JSON.stringify(massive)); 
}
//Достаем из хранилища данные, генерируем карточки, добавляем на страницу
const getArrFromLocalStorage=()=>{
  //setDate();
  let newmassive = JSON.parse(localStorage.getItem("Collection"));
  if(newmassive)
  {massive=newmassive;}
  
  for( let i = 0; i < massive.length; i++){
     
 let newcard = generateCard(massive[i][0],massive[i][1]);
 document.getElementById('container-archive').appendChild(newcard);
      
      
  }
}

document.getElementById('btn').onclick=()=>{
  const note=document.getElementById('newnote').value;//получаем значение текстового поля
  const date=document.getElementById('calendarForTasks').value;//получаю значение даты из инпута
  const newcard=generateCard(date,note);//генерация карточки с аргументами выше
  document.getElementById('container-archive').appendChild(newcard);//доавление карточки в документ
  addLocalStorage(date,note);//добавоеение в хранилище и массив 
  document.getElementById('newnote').value='';//очищаем текстовое поле

}

document.addEventListener("DOMContentLoaded", function () {
  getArrFromLocalStorage();
})
document.addEventListener("DOMContentLoaded", function () {
  setDate();
})