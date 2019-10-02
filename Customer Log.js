
function onFormSubmit()
{
 ScriptApp.AuthMode.FULL;
 var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheets()[0];
  
  
 var startRow = 2;  // Row 2 First row of data to process
 var startColumn = 1
 var lastRow = sheet.getLastRow();
 var lastColumn = sheet.getLastColumn() - 1;
 var dataRange = sheet.getRange(startRow, startColumn, lastRow, lastColumn)
 
 
 
 var values = dataRange.getValues(); 
  
 
 var EMAIL_SENT = "EMAIL SENT";

 
 var message = ""; 
 
 var doneWithRow = false;
 
   
  while (!doneWithRow) 
  {
 for (var i = 0; i < values.length; i++) 
 { //check each row
    
   for (var j = 0; j < values[i].length; j++) 
   {
     if ((values[i][j])&&(values[i][0] != EMAIL_SENT)) //[row][column]
     {
       message = message + values[i][j];
     }
     message = message + "\n";    
    
   }
   doneWithRow = true;
   sheet.getRange(1+i,1).setValue(EMAIL_SENT);
   
 } 
      // Make sure the cell is updated right away in case the script is interrupted
      SpreadsheetApp.flush();
 }
  message = "Here are the details of your new customer: \n" + message;
  var emailAddress = "phakhruddin@gmail.com, aina.phakhruddin@gmail.com";  // email to send it to. 
  var subject = "New Customer!";
  MailApp.sendEmail(emailAddress, subject, message);
  Logger.log(message);
}


