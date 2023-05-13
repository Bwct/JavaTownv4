
//main screen


  function playHoverSound() {

    var audio = new Audio('audios/signsfx.mp3');
    audio.play();
  }



//interactive liquid

window.addEventListener('DOMContentLoaded', () => {

const wrapper = document.getElementById('bubble-wrapper');

const animateBubble = x => {
const bubble = document.createElement("div");


bubble.classList.add("bubble"); 
bubble.style.left = `${x}px`;

wrapper.appendChild(bubble);

setTimeout(() => wrapper.removeChild(bubble), 2000);

}



window.addEventListener('mousemove', e => animateBubble(e.clientX)); 


console.log(animateBubble);
});


var triviaList = []; 
triviaList[0] = "Java runs on Billions of devices.";
triviaList[1] = "The original name for Java was Oak.";
triviaList[2] = "Java was born accidentally through the cleaning up of C++! ";
triviaList[3] = "The median salary of a Java developer is USD 83,975(2017).";
triviaList[4] = "There are about 9 million Java developers in the world.";
triviaList[5] = "Java is ranked second in popularity among programming languages after C.";
triviaList[6] = "There is a mascot for Java named 'The Duke'";
triviaList[7] = "The name Java came from a brainstorming meeting of Sun Microsystems";
triviaList[8] = "The author of Java is James Gosling at Sun Microsystems, Inc.";
triviaList[9] = "95 percent of enterprises use Java for programming. That is h*ll lot more than C and other languages put together.";
triviaList[10] = "Java practically runs on 1billion plus smartphones because Google’s Android operating system uses Java APIs.";

function triviaShow() {
  var triviaArr = Math.floor(Math.random() * (triviaList.length));
  document.getElementById('triviaText').innerHTML = triviaList[triviaArr];
}
function triviaShow() {
  var triviaArr = Math.floor(Math.random() * (triviaList.length));
  document.getElementById('triviaText').innerHTML = triviaList[triviaArr];
}




