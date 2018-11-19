/////////////////////////////
// Lecture: Functions returning functions


function interviewQuestion(job) {
    var abc=100;
    if (job === 'designer') {
        return function(name) {
            console.log(name + ', can you please explain what UX design is?');
        }
    } else if (job === 'teacher') {
        return function(name) {
            abc+=200;
            console.log('What subject do you teach, ' + name + '? '+abc);
        }
    } else {
        return function(name) {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');


teacherQuestion('John'); // result: What subject do you teach, John? 300

teacherQuestion('John'); // result: What subject do you teach, John? 500
//变成500， 因为闭包会一直占用内存，直到手动删除。必报的缺点。


designerQuestion('John'); //result: John, can you please explain what UX design is?
designerQuestion('jane'); //result: jane, can you please explain what UX design is?
designerQuestion('Mark'); //result: Mark, can you please explain what UX design is?
designerQuestion('Mike'); //result: Mike, can you please explain what UX design is?

interviewQuestion('teacher')('Mark');//result: What subject do you teach, Mark? 300
