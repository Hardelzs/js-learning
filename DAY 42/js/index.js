let n = 'visit Hardewale'
let y = n.search('Hardewale') // just the search()

let x = n.search(/hardewale/i) // case insensitive 

let now = n.replace('Hardewale', 'mySchoolWay')

let before = n.replace(/hardewale/i, 'mySchool')


console.log(y);
console.log(x);
console.log(now);
console.log(before);