const student={
    name:"Aditya",
    class:12,
    roll_no:2,
    marks:{eng:88 ,maths:98, science:90},
    points:[10,30,50,80,100,{a:70}],
    age:20
}
console.log(student);
console.log(student.name);
console.log(student.age);
console.log(student.roll_no);
console.log(student.marks);
console.log(student.marks.eng);
console.log(student.marks.maths);
console.log(student.marks.science);
console.log(student.points);
console.log(student.points[5]);
console.log(student.points[5].a);