# Module 2: Intermediate Evaluation Exercise

The exercise involves creating a programme that generates a random number between 1 and 100, and the player has to guess it.
The game gives clues as to whether the number is too high or too low, and counts the number of tries, until the player finally guess the number.

![Sin título](https://user-images.githubusercontent.com/81922944/142167706-474b5680-088f-4319-bf3f-fa7be3be6a7c.png)


- At the top, the player enters a number and press the **Test** button.
- Underneath, in the **Message** section, the following texts appear:

  1. When the page starts up: **Type a number and click Test**.
  2. When the player enters a higher number than the random number and clicks on Test: **The number is too high**.
  3. When the player enters a lower number than the random number and clicks on Test: **The number is too low**.
  4. When the player enters a number equal to the random number and clicks on Test: **Congrats, that´s the winning number!**
  5. When the player does not enter a valid number and clicks on Test: **The number must be between 1 and 100**.
  
- The number of times the **Test** button has been clicked should be displayed at the bottom.

### Steps to play the game

To make a simple version of the game you have to make the following functionalities from
JavaScript:

1. Create a minimal layout with the input, the button, the space for the hints and the space for the attempts counter.
2. Generate a random number with the help of [Math.random](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random) and [Math.ceil](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil). 

```

function getRandomNumber(max) {
 return Math.ceil(Math.random() * max);
}
```


3. Display the generated random number on the console so that you know which number has been generated and test it.
4. By pressing the **Test** button, access the content of the input and display it on the console.
5. Compare the number that the player has typed in the input with the random number, and paint the corresponding message on the screen.
6. Update the attempt counter each time the player tries.

