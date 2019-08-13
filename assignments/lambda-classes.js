// CODE here for your Lambda Classes
class Person {
    constructor(props) {
        this.name = props.name;
        this.age = props.age;
        this.location = props.location;
    }
    speak() {
        console.log(`Hello, my name is ${this.name}, and I am from ${this.location}`);
    }
}

class Instructor extends Person {
    constructor(props) {
        super(props);
        this.specialty = props.specialty;
        this.favLanguage = props.favLanguage;
        this.catchPhrase = props.catchPhrase;
        
    }
    demo(str) {
        console.log(`Today we are learning about ${str}`);
    }
    grade(obj, str) {
        console.log(`${obj.name} receives a perfect score on ${str}`);
    }
    changeGrade(obj) {
        obj.grade += Math.round(Math.random()*50);
    }
    checkGrade(obj) {
        if (obj.grade >= 70) {
            return true;
        } return false;
    }
}

class Student extends Person {
    constructor(props) {
        super(props);
        this.previousBackground = props.previousBackground;
        this.className = props.className;
        this.favSubjects = props.favSubjects;
        this.grade = props.grade;
    }
    listsSubjects() {
        for (let i=0; i<this.favSubjects.length; i++) {
            console.log(this.favSubjects[i]);
        }
    }
    PRAssignment(str) {
        console.log(`${this.name} has submitted a PR for ${str}`);
    } 
    sprintChallenge(str) {
        console.log(`${this.name} has begun sprint challenge on ${str}`);
    }
}

class ProjectManager extends Instructor {
    constructor(props) {
        super(props);
        this.gradClassName = props.gradClassName;
        this.favInstructor = props.favInstructor;
    }
    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standby times!`);
    }
    debugsCode(obj, subject) {
        console.log(`${this.name} debugs ${obj.name}'s code on ${subject}`);
    }
}

// two instructors
pace = new Instructor({
    name: 'Pace Ellsworth',
    location: 'Zoom',
    age: 40,
    favLanguage: 'Not Javascript',
    specialty: 'Wooing people to sleep',
    catchPhrase: 'Lets check out that spreadsheet'
});

sylvia = new Instructor({
    name: 'Sylvia Wang',
    location: 'Palo Alto',
    age: 30,
    favLanguage: 'Klingon',
    catchPhrase: 'Coffee?',
    specialty: 'Exciting and precise code demonstrations'
}) ;

// two students
david = new Student({
    name: 'David Francis',
    age: 33,
    location: 'Palo Alto',
    previousBackground: 'Research Director',
    className: 'WebPT9',
    favSubjects: ['cs', 'objects', 'classes'],
    grade: 50
});

leo = new Student({
    name: 'Leo Tolstoy',
    age: 128,
    location: 'Russia',
    previousBackground: "Author",
    className: 'WebPT9',
    favSubjects: ['Russian Politics, interpersonal relationships, long works of epic fiction'],
    grade: 50
});

// two project managers aka team leads
ray = new ProjectManager({
    name: 'Ray Pugh',
    age: 25,
    location: 'Milwaukee',
    gradClassName: 'Super Java Backend Developers',
    favInstructor: 'Knell'
});

will = new ProjectManager({
    name: 'Will KittenGuy',
    age: 32,
    location: 'Bedroom',
    gradClassName: 'Mystery',
    favInstructor: 'Einstein'
});

//tests to see everything is working

console.log(pace); // Instructor object
console.log(david); // Student object
console.log(ray); // PM object

sylvia.demo('partying');
sylvia.grade(david, 'handsomeness');

leo.listsSubjects();
david.PRAssignment('Javascript-III');
leo.sprintChallenge('Novels > 1,000 pages');

ray.standUp("Ray's awesome slack channel");
will.debugsCode(leo, 'Russian literature');

// Let's make sure the grading implementation works =)
console.log(`${david.name}'s grade is: ${david.grade}`) // should be 50
ray.changeGrade(david);
console.log(`${david.name}'s new grade is: ${david.grade}`);
if (ray.checkGrade(david)) {
    console.log("DAVID PASSED!!!!!")
} else {
    console.log("DAVID IS A FAILURE AND WILL NEVER AMOUNT TO ANYTHING!")
}

// Works =)