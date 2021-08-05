
//When the user clicks the 'Add Journal Entries' button, use JavaScript prompts for entering reflections consisting of the following items:
//===================User prompt entries=========================//
let allUserResponses = [];
// Creation Date - Prompt for a date
let userJournalDate = prompt("Enter today's date");
console.log(userJournalDate);

// Confidence Level - Prompt the user to specify Low, Medium, and High confidence level
let userConfidenceLevel = false; // a variable is declared and set to false. we dont know thier confidence level yet!
while(userConfidenceLevel === false) // while loop is created to force them to choose the answers we write
{
    let response = prompt("How would you rate your confidence? "  + "High, Medium, or Low?");
    if(response.toUpperCase() === 'High' || response.toUpperCase() === 'HIGH') // We use the .toUpperCase() to accept all case answers
    {   userConfidenceLevel === true;
        alert("Great! Let's move on");
        allUserResponses.push(response); // pushing this user input input into the array
        console.log(response);
        break; // alert to let them know it's logged
        
    }
    else if (response.toUpperCase() === 'Medium' || response.toUpperCase() === 'MEDIUM')
    {   
        userConfidenceLevel === true;
        alert("Ahh okay");
        allUserResponses.push(response); // pushing user input into the array
        console.log(response);
        break;
       
    }
    else if (response.toUpperCase() === 'Low' || response.toUpperCase() === 'LOW')
    {
        userConfidenceLevel === true;
        alert("Sorry to hear that!");
        allUserResponses.push(response); //pushing this user input into the array 
        console.log(response);
        break;
    }
    else {
        alert(" ERROR -- Please enter correct answer!");
        
    }


}



//  (your implementation should handle any entry regardless of upper or lowercase 
//     and any entry that does not match one of the 3 options should be rejected with an error message
//      alert and the user should be prompted to re-enter their confidence level value)
// We MUST use a while loop here.

// We have created all of the journal entries!



// Describe your confidence level in your skills at the time of posting

let userDescribesConfidence = prompt("Can you describe your confidence rating?");
allUserResponses.push(userDescribesConfidence); // pushing this into the array
console.log(userDescribesConfidence); // console.log user response and it is saved in the console


// Journal Entry - Prompt the user for the text for your reflection
let userWriteJournalEntry = prompt("Please write your jounal entry"); // console.log user response and it is saved in the log.
allUserResponses.push(userWriteJournalEntry);
console.log(userWriteJournalEntry);



// Post Reflection - Use a confirm dialog box to confirm the post/record your journal entry (if the user selects OK,)
//TODO: Start the while loop over if they press CANCEL
let userPostsReflection = confirm("Are you ready to post this entry?");
// allUserResponses.push(userPostsReflection);

console.log(userPostsReflection);

 


// TODO: Add all of the user responses to the array! 

console.log(allUserResponses); //DONE

//==================== OBJECT LITERALS ==========================//

// Define a JavaScript object literal that will represent a journal entry





// Implement JavaScript to handle the values entered for the journal entry
// When a journal entry is submitted/confirmed, create a new journalEntry object and add it to a journalEntries array
// After each submission
// Add the entry to the journalEntries array

 

