const students= [
    { name:'Anusha', roll_no: 1, age:9},
    { name:'Anushka',roll_no: 2, age:11},
    { name:'Sadiksha', roll_no: 3, age:12},
    { name:'Riya', roll_no: 4, age:20},
    { name:'Abinisha', roll_no: 5, age:18},
    { name:'Ayushma', roll_no: 6, age:21},
    { name:'Demi', roll_no: 7, age:14},
    { name:'Sakshi', roll_no: 8, age:14},
    { name:'Taylor', roll_no: 9, age:13},
    { name:'Martha', roll_no: 10, age:8}
]

//1. Get only the names of students:
 const student_names= students.map((student)=> student.name);
 console.log(student_names);


//2. Get the names of students whose age is less than 10:
 
const students_below_10= students.filter((student)=> student.age<10);
console.log(students_below_10);


//3. Find average age from the list:

const avg_age= students.reduce((acc, student)=> acc + student.age, 0)/students.length;
console.log('average age of students is:',avg_age);

//4. Check whether every student is gen z or not :
const genz_new= 1997;
const genz_final=2012;

const currentyear= new Date().getFullYear();

const allgenz = students.every(student=>{
    const birthyear= currentyear - student.age;
    if(birthyear>=genz_new && birthyear<= genz_final){
        return true;
    } else return false;
})
console.log('are all students gen z?', allgenz);


//5.list only genz students:

 const genznew= 1997;
const genzfinal=2012;

const current_year= new Date().getFullYear();

const genz_stu = students.filter(student=>{
    const birthyear= currentyear - student.age;
    if(birthyear>=genz_new && birthyear<= genz_final){
        return true;
    } else return false;
})
console.log('list of only genz students is:',genz_stu);






