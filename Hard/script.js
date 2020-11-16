"use strict";

function user() {
  // Parent/Global function
  var pii = {
    // Private object that can only be accessed in the scope of this function.
    name: "Josh",
    ssn: 777,
    email: "Josh.Ericzander@protonmail.com",
  };
  return {
    // This is a public object that returns a publi function
    getName: function () {
      // This is a public function that can be used to access certain things in the previous object
      return pii.name;
    },
    getEmail: function () {
      return pii.email;
    },
  };
}

console.log(user().getName()); // This will log the name thats inside the object in the global function
console.log(user().getEmail());
