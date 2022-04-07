/*You have an API that will return date objects everytime it's called. Let's assume that the API call logic is wrapped in getNextDate function.

You need to call n times the API to get n dates. Your task is to group all dates by year in an object then by month inside the corresponding year in another object and then an array of days corresponding to that month and sorted.*/


const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

let groupDates = {}

function getNextDate() {
  return new Promise(
    (resolve) => {
      setTimeout(
        () => {
          resolve(new Date(Math.random() * 200000000000 + 1500000000000))
        },
        Math.trunc(Math.random() * 15)
      );
    }
  );
}


function main(num) {
  let arrayCalls = []

  for (let i = 0; i < num; i++) {
    arrayCalls.push(getNextDate())
  }
  return Promise.all(arrayCalls)
}


main(15).then(datesArray => {
const newArray = datesArray.map(val=> {
  return{year: val.getFullYear(),monthName: monthNames[val.getMonth()],day:val.getDate()}
}).reduce((acc,el) => (acc[el.year] = [...(acc[el.year] || []), el], acc),{});
console.log("First Filter",newArray)

Object.entries(newArray).forEach(([key, value]) => {
  let MonthsDays = value.reduce((acc,el) => {
    if(!acc[el.monthName]){
      acc[el.monthName]  = [...(acc[el.day] || []), el.day], acc
    }else{
      acc[el.monthName].push(el.day)
    }
    return acc
  },{})
  groupDates[parseInt(key)] = MonthsDays
}); 
  console.log(groupDates);  
})

