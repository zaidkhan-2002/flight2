let btn = document.querySelector('.btn');
let date1 = document.querySelector('.date1');
let select = document.querySelector('.select');
let show = document.querySelector('.show');

let rgday = document.querySelector('.rgday');
let trp = document.querySelector('.trp')
let bday = document.querySelector('.bday')
let cday = document.querySelector('.cday')

//list

let li1 = document.querySelector('.li1');
let li2 = document.querySelector('.li2');
let li3 = document.querySelector('.li3');
let li4 = document.querySelector('.li4');
let li5 = document.querySelector('.li5');


let tempo = document.querySelector('.tempo');

//for table
let table = document.querySelector('.table')

let myFun = () => {
    tempo.style.display = 'none';
    let today = new Date().toLocaleString();
    let flightTrip = select.value;
    let outDay = date1.value;
    let cancleDuration = new Date(outDay);
    cancleDuration.setHours(0)
    cancleDuration.setMinutes(0)
    cancleDuration.setHours(-24)
    
    rgday.textContent = `Booking Date:${today}`;
    trp.textContent = `Trip : ${flightTrip}`;
    bday.textContent = `Border-Pass: ${outDay}`;
    cday.textContent = `Cancle DeadLine : ${cancleDuration}`;

    li1.classList.add('forli');
    li2.classList.add('forli');
    li3.classList.add('forli');
    li4.classList.add('forli');
    li5.classList.add('forli');
    
    show.classList.add('show1');

    title = `
    <table >
            <tr >
                <th>Booking Date</th>
                <th>Trip Plan</th>
                <th>Border-Pass</th>
                <th>Cancle DeadLine</th>
            </tr>
            <tr>
                <td>${today}</td>
                <td>${flightTrip}</td>
                <td>${outDay}</td>
                <td>${cancleDuration}</td>
            </tr>
        </table>
        <p>You can cancle before 24 hours</p>
        <button class="btn btn1">Cancle</button>
    `
    table.innerHTML = title;

    let innerbutton = document.querySelector('.btn1');
    innerbutton.addEventListener('click', ()=> {
       let check1 = confirm('it will lost your ticket! are you sure to continue?');
       if (check1 == true){
        let deadcircle = cancleDuration;
        let Cdate = deadcircle.getDate();
        let Cmonth = deadcircle.getMonth()+1;
        let nowTime = new Date();
        let nowDate = nowTime.getDate();
        let nowMonth = nowTime.getMonth()+1;

        if ( nowMonth == Cmonth && nowDate < Cdate){
            table.innerHTML ='';
            show.innerHTML ='';
            show.classList.remove('show1');
            li1.classList.remove('forli');
            li2.classList.remove('forli');
            li3.classList.remove('forli');
            li4.classList.remove('forli');
            li5.classList.remove('forli');
            tempo.style.display = 'flex';

        }else if (nowMonth < Cmonth ){
            table.innerHTML ='';
            show.innerHTML ='';
            show.classList.remove('show1');
            li1.classList.remove('forli');
            li2.classList.remove('forli');
            li3.classList.remove('forli');
            li4.classList.remove('forli');
            li5.classList.remove('forli');
            tempo.style.display = 'flex';
        }else{
            alert('Opp! You have been passed cancle deadline it is mean you can not cancle! ')
        }
       }
    })
}

btn.addEventListener('click', myFun)







