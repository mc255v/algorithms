/* YOUR CHALLENGE: Create a working traffic light.

When the user clicks "run sequence", the traffic light should
cycle through the red, yellow, and green colors.

This should look like a real traffic light– colors should not overlap
and each color should stay lit for a small amount of time.

Open the index.html file in your browser to test your code.
You may edit any of the files in this folder to complete this challenge.
Your goal is to make the best working version of a traffic light in the
time allotted (so if you finish early, add additional
functionality and make your code as high quality as you can!)
*/
const red = document.getElementById('red');
const yellow = document.getElementById('yellow');
const green = document.getElementById('green');

const changeRed = () => {
    red.setAttribute("style", "background-color :red;")
    yellow.setAttribute("style", "background-color :white;")
    green.setAttribute("style", "background-color :white;")
}

const changeYellow = () => {
    red.setAttribute("style", "background-color :white;")
    yellow.setAttribute("style", "background-color :yellow;")
    green.setAttribute("style", "background-color :white;")
}

const changeGreen = () => {
    red.setAttribute("style", "background-color :white;")
    yellow.setAttribute("style", "background-color :white;")
    green.setAttribute("style", "background-color :green;")
}

document.getElementById("run").addEventListener("click", function(){
    let index = 1;
    setInterval(function(){ 
        switch(index){
            case 1:
                changeGreen()
                break;
            case 2:
                changeYellow()
                break;
            case 3:
                changeRed()
                break;
        }
        index++
        if (index === 4 ) {
            index = 1;
        }
    }, 2000);
  });
