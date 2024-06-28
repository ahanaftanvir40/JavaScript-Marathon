const course ={
    coursename:'JavaScript',
    courseInstructor: 'Ahanaf'
}

const {courseInstructor} = course

//;ets say courseInstructor is a big name so we can rename inside the destructure

const {courseInstructor : instructor} = course
console.log(instructor);