// Person Constructor
function Person(name, job, age) {
  this.name = name;
  this.job = job;
  this.age = age;
}

var josh = new Person("Josh", "Professional Musician/Developer", 24);

Person.prototype.exercise = function () {
  console.log(`Running is fun! - said no one ever.`);
};
// This executes the example for  number 2
josh.exercise();

Person.prototype.fetchJob = function () {
  console.log(`${this.name} is a ${this.job}.`);
};
// this executes the example for number 3
josh.fetchJob();
// Step 4
function Programmer(name, job, age, language) {
  Person.call(this, name, job, age);
  this.language = language;
  this.busy = true;
  // Step 5
  this.completeTask = function () {
    this.busy = false;
  };
  this.acceptNewTask = function () {
    this.busy = true;
  };
}
// Step 5

var josh2 = new Programmer(
  "Josh",
  "Professional Musician/Developer",
  24,
  "english"
);

// Step 6
Programmer.prototype.offerNewTask = function () {
  this.busy
    ? console.log(`${this.name} cannot accept any new tasks right now.`)
    : console.log(`${this.name} would love to take a new responsibility.`);
};

// Adds languages to the Programmer Object
Programmer.prototype.learnLanguage = function (language) {
  var languages = [this.language];
  languages.push(language);
  this.language = languages; // This says add this to the existing property
};

// This will list out the languages
Programmer.prototype.listLanguages = function () {
  console.log(this.language);
};

josh2.learnLanguage("spanish");
josh2.listLanguages();

// This is a completely different person which proves the object blueprint works.
var rob = new Programmer("Rob", "Carpenter", 30, "Russian");

rob.learnLanguage("Japanese");
rob.listLanguages();
