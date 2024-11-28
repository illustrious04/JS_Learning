// Given array of the markes of the students, filter out the marks of students that scored 90+ 

let markes = [97,95,94,86,56,98,91,65]

let finalMarks = markes.filter((val)=>{
    return val > 90;
})
 console.log(finalMarks)