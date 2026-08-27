function emailOnFormSubmit(e) {
  var form = FormApp.getActiveForm();
  var responses = form.getResponses();
  var latestResponse = responses[responses.length - 1];
  var itemResponses = latestResponse.getItemResponses();
  
  // Extract responses safely based on question order
  var respondentName = ""; // Add if you capture name, otherwise leave blank
  var auctionAns = itemResponses[0] ? itemResponses[0].getResponse() : "No answer";
  var akechiAns = itemResponses[1] ? itemResponses[1].getResponse() : "No answer";
  var unionAns = itemResponses[2] ? itemResponses[2].getResponse() : "No answer";
  var comments = itemResponses[3] ? itemResponses[3].getResponse() : "No answer";
  
  var myEmail = "sohjnthn@gmail.com";
  var subject = "Test Google Survey Email";
  
  var body = "Hello,\n\n" + 
    "A new automated routing form has been submitted. Here are the selected survey responses:\n\n" + 
    "Survey Results:\n\n" + 
    "• How should a main character purchase equipment: " + auctionAns + "\n\n" + 
    "• How do you defeat each of Normal Akechi Mitsuhide's three parts? " + akechiAns + "\n\n" + 
    "• If your Magic damage type Maple Union configuration has too many Magician characters who are at least lv250, such that you need to the Maple Union pieces are starting to overlap with each other, what would you carry out?: " + unionAns + "\n\n" + 
    "This email was securely dispatched via your free Google Apps Script engine.\n\n" + 
    "---\n" + 
    "This email was sent automatically with Google Forms.";
    
  MailApp.sendEmail(myEmail, subject, body);
}
