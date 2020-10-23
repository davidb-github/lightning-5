const array1 = ['cat', 'bear', 'dog', 'mouse', 'bird' ];
array1.forEach(element => console.log(element));

idCounter = 0

completedZoo = array1.map(element => {
return {
    name: element,
    id : idCounter++
  }
})

console.log(completedZoo)

completedZoo.forEach(element => console.log(element))
