let student1 = { name: 'Kaoser', Partner: 'Rakiba'};
let student2 = { name: 'Jalil', partner: 'jasmin'};

function getStudentDetails (a, b){
    a.name = 'Joy';
    b.partner = 'Joti';
}
console.log(student1,student2);
getStudentDetails(student1, student2);
console.log(student1,student2);