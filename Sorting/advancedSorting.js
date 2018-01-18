var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];


students.sort(function(objA, objB){
  if (objA.name < objB.name) {
    return -1;
  } else if (objA.name > objB.name) {
    return 1;
  } else {
    return objA.age - objB.age;
  }
});

console.log(students);
