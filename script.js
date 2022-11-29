const API="https://api-thirukkural.vercel.app/api?num=";
console.log(API)


  let btn=document.querySelector('.btn');
  btn.addEventListener('click',function()
  {
      let getInput=document.getElementById('kural_input').value;
      if(getInput >1 && getInput<1330)
      {
        fetch(`${API}${getInput}`)
        .then(data => data.json())
        .then(data => {
          console.log(data);
          document.getElementById('tbody').innerHTML=showData(data);
      })
      .catch((er) => errorHandler(er))
      }
      else
      {
        alert('Dear Friend! Please Enter the Values Between 1 and 1330')
      }

      
})
  

 const errorHandler = (er) => 
 {
    console.error(er)
 }

  const showData =(data) => {
    let tableContent="";

    tableContent +=`<tr>
    <th scope="row" id='id'>${data.chap_eng}</th>
    <td>${data.chap_tam}</td>
    <td>${data.chapgrp_eng} </td>
    <td>${data.chapgrp_tam}</td>
    <td>${data.eng}</td>
    <td>${data.eng_exp}</td>
    <td>${data.line1}</td> 
    <td>${data.line2}</td> 
    <td style='color: green; ' class='fs-3 fw-bold'>${data.number}</td> 
    <td>${data.sect_eng}</td> 
    <td>${data.sect_tam}</td> 
    <td>${data.tam_exp}</td> 
    </tr>`
    return tableContent
  }
