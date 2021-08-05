# Journal_Entry
Journal Entry project 
 (Links to an external site.)Phase 1: Design and Layout, JavaScript Reflection Objects
For this project you will develop the following:

Use JavaScript prompts for entering Reflections into your journal
Implement the JavaScript necessary to process and validate the submitted data
Use JavaScript to create Reflection object instances and display them in the console AND browser
 (Links to an external site.)Requirements:
When the user clicks the 'Add Journal Entries' button, use JavaScript prompts for entering reflections consisting of the following items:
Creation Date - Prompt for a date
Confidence Level - Prompt the user to specify Low, Medium, and High confidence level (your implementation should handle any entry regardless of upper or lowercase and any entry that does not match one of the 3 options should be rejected with an error message alert and the user should be prompted to re-enter their confidence level value)
Describe your confidence level in your skills at the time of posting
Journal Entry - Prompt the user for the text for your reflection
Enter in as much text as necessary about what you learned, how you felt, and plans for the upcoming days
Post Reflection - Use a confirm dialog box to confirm the post/record your journal entry (if the user selects OK, add post to the array, otherwise if they click cancel start over with prompts and entry)

//=============NEXT STEPS===============//
Define a JavaScript object literal that will represent a journal entry
Implement JavaScript to handle the values entered for the journal entry
When a journal entry is submitted/confirmed, create a new journalEntry object and add it to a journalEntries array
After each submission
Add the entry to the journalEntries array
Add an unordered list (ul) to the DOM
Add create date as a list item (li) element to the unordered list
Add confidence entry as a list item (li) element to the unordered list
Add entry text as a list item (li) element to the unordered list
Use a function that you implement to iterate the list of entries in the array, and using template literals, render all of the entries in the console (Note: Log each property of each entry item. NOT full array or entry object)
Allow the user to continue to submit entries as long as they choose until they enter 'quit' (optionally add support to stop entering entries if they click cancel in prompt dialog)
 (Links to an external site.)Examples:
/*  Purpose: create a reflection journal entry object
    Arguments: create_date, entry, confidence
*/ 
function addJournalEntry(create_date, entry, confidence)
{
      // Create a new journal object
      let newEntry = {
             creation_date: create_date, 
             journal_entry: entry,
             confidence_level: confidence              
      }

      // Add the entry to the Array and to the DOM (u do this...)

      // Call your logJournalEntries function to log all entries in the array to the console
}

/*
    Purpose: To render all reflection journal entries to the console
*/
function logJournalEntries()
{
    // iterate your entries array and log each entry (and each individual property) in the console
}