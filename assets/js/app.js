const butonOne = document.getElementById("btn");
butonOne.addEventListener ("click", () => {
  let textComments = document.getElementById ("textComment").value;

  const holderCom = document.getElementById("holderComments");

  const newComments = document.createElement("div");
  let wordsNewComment = document.createTextNode(textComments);

  const holderElement = document.createElement("p");
  holderElement.appendChild(wordsNewComment);
  newComments.appendChild(holderElement);

  holderCom.appendChild(newComments);

})