//const before = new Date();

////const now = new Date('February 4 2021 8:12:32');

// console.log(now.getTime(), before.getTime)


//const diff = now.getTime() - before.getTime()
//console.log(diff)


//const mins = Math.round(diff / 1000 / 60);
//const hours = Math.round(mins / 60)
////const days = Math.round(hours / 24)



//console.log(mins, hours, days)

//console.log(`the blog was written ${days} ago`)

//const timestamp = 1675938474990
///console.log(new Date(timestamp))




//const clock = document.querySelector('.clock');

//const tick = () => {

  //  const now = new Date();
   // const h = now.getHours()
   // const m = now.getMinutes()
   // const s = now.getSeconds()

   // const html = `
    //<span>${h}</span> :
    //<span>${m}</spam> :
    //<span>${s}</span>
   // `;

   // clock.innerHTML = html;
    
//}

//setInterval(tick, 1000);



const now = new Date(534565);

// console.log(dateFns.isToday(now));

console.log(dataFns.format(now, 'YYYY'));
console.log(dataFns.format(now, 'MMM'));
console.log(dataFns.format(now, 'dddd'));
console.log(dataFns.format(now, 'Do'));
console.log(dataFns.format(now, 'dddd Do MMMM YYYY'));


const before = new Date('February 1 2019 12:00:00')

console.log(dateFns.distanceInWords(now, before, {addSuffix: true}));