function sendMessage() {
  //find message box using contenteditable attribute
  const messageBox = document.querySelector('div[contenteditable="true"]');
  //message
  const message = "don't forget to drink water!";
  if (messageBox) {
    //set the message
    messageBox.innerHTML = message;
    //get ready to put it in
    const inputEvent = new Event("input", { bubbles: true });
    //put it in
    messageBox.dispatchEvent(inputEvent);
    //get ready to send it
    const sendButton = document.querySelector("button.send");
    //send it
    sendButton.click();
    //otherwise
  } else {
    //it's not here :(
    console.log("message box not found");
  }
}
//do it every minute
setInterval(sendMessage, 60000);

//paste the above code into the dev console of the telegram web app with the chat you want to send messages to open.
