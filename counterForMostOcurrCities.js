citiesList = [
  "nashville","nashville","los angeles","los angeles","nashville","memphis","memphis","barcelona","barcelona","madrid", "madrid","london", "london","nashville","madrid","sevilla","london", "los angeles","barcelona","barcelona"
]
function counterForMostOcurrCities (numCities){
  const cities ={}
  citiesList.forEach(city=>{
    cities[city] = !cities[city] ? 1: cities[city] +=1;
  })
  return Object.keys(cities).map((city)=> ({name: city, number: cities[city]}))
    .sort((a,b) =>(b.number - a.number))
    .slice(0, numCities)  
}



counterForMostOcurrCities(5)
