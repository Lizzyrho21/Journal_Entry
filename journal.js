//When the user clicks the 'Add Journal Entries' button, use JavaScript prompts for entering reflections consisting of the following items:
//===================User prompt entries=========================//
let allUserResponses = []; // empty array that will hold all the user responses
let journalEntryObjectArr = []; // empty array that will hold all of the object literal values
// Below is a function that calls the working code
function workingJournalEntry() {
  
 
  
  // Creation Date - Prompt for a date
  let userJournalDate = prompt("Enter today's date (or enter 'q' to quit)");
  allUserResponses.push(userJournalDate); // user journal date is pushed into array
  console.log(userJournalDate); // check it!
  if (userJournalDate.toUpperCase() === "Q") { // make it case sensitive!
    return; //enter return to stop while loop!
  }

  //===========================START OF CONFIDENCE LEVEL=============================//
  //TODO: Put inside of a function?

  let userConfidenceLevel = false; // a variable is declared and set to false. we dont know thier confidence level yet!
  while (userConfidenceLevel === false) { // while loop condition 
    // while loop is created to force them to choose the answers we write
    var response = prompt(
      "How would you rate your confidence? " +
        "High, Medium, or Low? (Type q to exit)"
    );
    if (
    //   response.toUpperCase() === "High" ||
      response.toUpperCase() === "HIGH" // case sensitive
    ) {
      // We use the .toUpperCase() to accept all case answers
      userConfidenceLevel === true;
      alert("Great! Let's move on");
      allUserResponses.push(response); // pushing this user input input into the array
       console.log(response);
      break; // alert to let them know it's logged
    } else if (
    //   response.toUpperCase() === "Medium" ||
      response.toUpperCase() === "MEDIUM"
    ) {
      userConfidenceLevel === true;
      alert("Ahh okay");
      allUserResponses.push(response); // pushing user input into the array
       console.log(response);
      break;
    } else if (
    //   response.toUpperCase() === "Low" ||
      response.toUpperCase() === "LOW"
    ) {
      userConfidenceLevel === true;
      alert("Sorry to hear that!");
      allUserResponses.push(response); //pushing this user input into the array
       console.log(response);
      break;
    } else if (response.toUpperCase() === "Q") {
      return;
    } else {
      alert(" ERROR -- Please enter correct answer!");
    }
  }
  //==========================END OF CONFIDENCE LEVEL==============================//

  // Journal Entry - Prompt the user for the text for your reflection
  let userWriteJournalEntry = prompt(
    "Please write your jounal entry type 'q' to quit"
  ); // console.log user response and it is saved in the log.
  if (userWriteJournalEntry.toUpperCase() === "Q") {
    return;
  }
  allUserResponses.push(userWriteJournalEntry);

   console.log(userWriteJournalEntry);

  //=========================== END OF JOURNAL ENTRY ==========================//

  // Post Reflection - Use a confirm dialog box to confirm the post/record your journal entry (if the user selects OK,)
  //TODO NOT DONE: Start the while loop over if they press CANCEL
  let userPostsReflection = confirm("Are you ready to post this entry? type 'q' to cancel.");
  if (userPostsReflection === true) {
    newObject(userJournalDate, userConfidenceLevel, userWriteJournalEntry); // calling our Newobject function to store user input data
    updateLocalStorage(); 
    
  }
  else if (userPostsReflection.toUpperCase() === 'Q')
  {
    return;
  }

  //=======POST REFLECTION END===============/

  console.log(allUserResponses); // the user response are inside of the array!

  //what next?
  //================== Object Literal ===============//////

  //Define a JavaScript object literal that will represent a journal entry

  function newObject(creationDate, confidenceLevel, journalEntry) {
    // creates a new journal entry object with the three parameters
    let journalObject = {
      creationDateProperty: creationDate,
      confidenceLevelProperty: confidenceLevel, //USE THE PARAMETERS AS VALUES OF THE PROPERTIES
      journalEntryProperty: journalEntry,
    };
    return journalEntryObjectArr.push(journalObject); //pushing the object into the Array and returning them as output in the console!
  }

  console.log(journalEntryObjectArr); // check the values of our object literal in the console!

  //===========END OF OBJECT LITERALS=================================//

  //===================WORKING WITH DOM==============================//
  // Add an unordered list (ul) to the DOM
  let getDivElement = document.getElementById("journal-entry"); //ul is now inside of the DOM
  let createUlElement = document.createElement("ul");
  getDivElement.appendChild(createUlElement); // will this add the ul?. The ul is added.

  // Add create date as a list item (li) element to the unordered list
  let listElement = document.createElement("li"); // create an element to store the date
  let dateContent = document.createTextNode(`${userJournalDate}`); // Whatever we enter shows up in our browser!! GOOD JOB LIZZY!!
  listElement.appendChild(dateContent); //expected output : List shows up on browser. ERROR listelement.textcontent is not a function.
  createUlElement.appendChild(listElement); // list shows up! get the data entry inside of the li item

  let listElement2 = document.createElement("li"); // create an element to store the date
  let confidenceContent = document.createTextNode(`${response}`); //TODO: Get 'high medium or low' to show up in browser <= Completed. Had to put var in instead
  listElement2.appendChild(confidenceContent); //expected output : List shows up on browser. ERROR listelement.textcontent is not a function.
  createUlElement.appendChild(listElement2);

  let listElement3 = document.createElement("li"); // create an element to store the date
  let journalEntryContent = document.createTextNode(`${userWriteJournalEntry}`); // Whatever we enter shows up in our browser!! GOOD JOB LIZZY!!
  listElement3.appendChild(journalEntryContent); //expected output : List shows up on browser. ERROR listelement.textcontent is not a function.
  createUlElement.appendChild(listElement3);

  //===================END OF WORKING WITH DOM==========================//

  //======== How can we refactor this code?=========//
  




  //=============Iteration through the array========================//

//Make a function 
function userResponseForLoop()

{
for(index=0; index < allUserResponses.length; index++)
{
  console.log(`${allUserResponses[index]}`);
  // console.log(`${response}`);
  // console.log(`${userWriteJournalEntry}`);
}
// use a for loop

}
userResponseForLoop();
}

//================= create a button/ event listener =======================//

// Create the button in html
//put an id to your button and link it back to Javascript

document
  .getElementById("btn-entry")
  .addEventListener("click", workingJournalEntry);
  
  

//===================End of button/ event listener=====================//

// ========= Local Storage ====== //

function updateLocalStorage ()
{ // global array set to a JSON string we can use.
  const arrayString = JSON.stringify(journalEntryObjectArr);
   console.log(`${arrayString}`); // console.log the array for debugging
   localStorage.setItem("user_entry_data", arrayString); // setting our data inside of the local storage.
  

}

function getLocalStorage ()
{
// set a const variable to retireve the data from the storage.
const retrieveData = localStorage.getItem("user_entry_data");

// console.log('previous data is ${retrieveData}'); //debugging
// our string data is converted back to be used in our JS
const allEntryData = JSON.parse(retrieveData);

if(allEntryData != null)
{
  journalEntryObjectArr = allEntryData;
}
  else {
console.log("Ready to be stored");
  }
}










//==========TODO:===========//


// Allow the user to continue to submit entries as long as they choose until they enter 'quit'
// (optionally add support to stop entering entries if they click cancel in prompt dialog)
// Begin working on bootsrap

//=====ADDITIONAL TODO:===/

// ALL entries must have a quit option!
//REVIEW: ARRAYS
//REVIEW OBJECT LITERALS
//REVIEW:DOM