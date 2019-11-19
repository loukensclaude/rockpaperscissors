// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */


$("document").ready(function() {

    

$(".button").click (function() {
      
    let possible_outcomes = ['rock', 'paper', 'scissor'];

    let word = $(".input").val();

    let random_number = Math.floor(Math.random()* possible_outcomes.length);

    let computer_choice = possible_outcomes[random_number];
        
        $(".output").text(word);
        
        $(".input").val("");

        $(".output2").text(computer_choice);

        if (word == "rock" && computer_choice == "rock") {
          $(".output3").text("You are tied");
          $("body").css("background", "gray")
        }
        else if (word == "rock" && computer_choice == "paper") {
          $(".output3").text("You lose");
          $("body").css("background", "red")
        }
        else if (word == "rock" && computer_choice == "scissor") {
          $(".output3").text("You Win");
          $("body").css("background", "green")
        }
        else if (word == "paper" && computer_choice == "rock") {
          $(".output3").text("You Win");
          $("body").css("background", "green")
        }
        else if (word == "paper" && computer_choice == "paper") {
          $(".output3").text("You tied");
          $("body").css("background", "gray")
        }
        else if (word == "paper" && computer_choice == "scissor") {
          $(".output3").text("You lose");
          $("body").css("background", "red")
        }
        else if (word == "scissor" && computer_choice == "rock") {
          $(".output3").text("You lose");
          $("body").css("background", "red")
        }
        else if (word == "scissor" && computer_choice == "paper") {
          $(".output3").text("You Win");
          $("body").css("background", "green")
        }
        else if (word == "scissor" && computer_choice == "scissor") {
          $(".output3").text("You tied");
          $("body").css("background", "gray")
        }
        else {
          alert("There seems to be an error. Please check if your choice is spelled correctly.");
        }
    });

//     git status
// git add .
// git commit -m "Your message here"
// git push origin master


});

// DOCUMENT READY FUNCTION BELOW

// python3 -m http.server 3000