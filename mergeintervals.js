class Pair{
  constructor (first, second){
    this.first = first;
    this.second = second;
  }
}

 const mergeIntervals = (intervals) => {
  if(intervals == null || intervals.lenght == 0){
    return
  }
  intervals.sort((a, b) => a[0] - b[0]);
   
 
  const result = [];
  
 let previous = intervals[0];
  
  for (let i = 1; i < intervals.length; i += 1) {
    if (previous.second >= intervals[i].first) {      
      previous = new Pair(previous.first, Math.max(previous.second, intervals[i].second));
    } else {
      result.push(previous);
      previous = intervals[i];
    }
  }
  
  result.push(previous);
  
  return result;
  
}

let intervals = [new Pair(1, 3),new Pair(2, 6), new Pair(8, 10), 
     new Pair(15, 18)]

let result = mergeIntervals(intervals)

console.log("resultado",result)
