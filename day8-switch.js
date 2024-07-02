// we use switch instead of if/else because it will take a lot of nesting

const month = 3
switch (month) {
    case 1:
        console.log('January');
        break;
    case 2:
        console.log('February');
        break;
    case 3:
        console.log('March');
        break;
    case 4:
        console.log('April');
        break;

    default:
        console.log('default case');
        break;
}
// here key is basically what we want to find and value is we are looking for the right lock
// think of it like lock and key here key is what we have been given and case value is if this key opens this lock or not
//if the key matche the lock we execute the code inside 
// here 'break' is very important because if we dont use it it executes every code after the matching value
// except default case. IT doenst execute default case


// we can check any kind of data type here lets check for String
const monthString = 'March'

switch(monthString){
    case 'January':
        console.log('Jan');
        break
    case 'February':
        console.log('Feb');
        break
    case 'March':
        console.log('March');
        break
    case 'April':
        console.log('April');
        break
    default:
        console.log('default case');
        break
}