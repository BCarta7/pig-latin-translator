import React, { useState } from 'react'
import './App.css'
import butcherPigImage from './assets/butcherPig.jpeg'

const App = () => {

  // ACTION ITEM: to make the development process easier there are some preassigned words in the input field, when you are ready for your full user experience delete the test words passed to useState and pass an empty string
  const [userInput, setUserInput] = useState("")
  const [inputTranslated, setInputTranslated] = useState("")

  // ACTION ITEM: the "myPigLatinCodeHere" function is where you will put your logic to translate the sentence entered by the user into Pig Latin
  const myPigLatinCodeHere = () => {

    // NO MODIFICATION NEEDED: the variable "arrayOfUserInput" will contain the text input from the user split into an array of words
    const arrayOfUserInput = userInput.split(" ")
    console.log("arrayOfUserInput:", arrayOfUserInput)

    // NO MODIFICATION NEEDED: now that we have an array of words, we can map over the array and look at each word
    const translatedWordsArray = arrayOfUserInput.map(eachWord => {
      console.log("eachWord:", eachWord)

      // NO MODIFICATION NEEDED: this code will look at each word and identify the vowels
      const vowelsArray = eachWord.split("").filter(vowel => {
        return (
          vowel === "a" || 
          vowel === "e" || 
          vowel === "i" || 
          vowel === "o" || 
          vowel === "u"
        )
      })
      console.log("vowelsArray:", vowelsArray)

      // ACTION ITEM: your Pig Latin logic goes here!
        // input: vowelsArray, eachWord
        // output: modified "eachWord" variable
        // Create conditional:
          // vowels first, add way to end of string
          // "qu" first, move "qu" and any consonents before first vowel to end of string, add ay
          // "y" only, move all consonants behind "y", add ay
          // else, move all consonents before first vowel to end, add ay
        // return modified "eachWord" based on conditional

      
          if (eachWord[0] === vowelsArray[0]) {
            return eachWord + "way"
        } else if (eachWord.indexOf("u") -1 === eachWord.indexOf("q")) {
            let eachWord2 = eachWord.slice(0, eachWord.indexOf("u") +1 )
            let eachWord3 = eachWord.slice(eachWord.indexOf("u") +1 )
          return eachWord3 + eachWord2 + "ay"
        } else if (eachWord.indexOf(vowelsArray[0]) === -1 && eachWord.indexOf("y") !== -1) {
          let eachWord2 = eachWord.slice(0, eachWord.indexOf("y"))
          let eachWord3 = eachWord.slice(eachWord.indexOf("y"))
          return eachWord3 + eachWord2 + "ay"
        } else if (eachWord[0] !== vowelsArray[0]) {
          let eachWord2 = eachWord.slice(0, eachWord.indexOf(vowelsArray[0]))
          let eachWord3 = eachWord.slice(eachWord.indexOf(vowelsArray[0]))
          return eachWord3 + eachWord2 + "ay"
        }
        else {
            return eachWord
          }
  


      // ACTION ITEM: this return will be the output of your Pig Latin'd code
      return eachWord
    })

    // NO MODIFICATION NEEDED: once the code has been modified it gets joined from an array back to a string
    const translatedWords = translatedWordsArray.join(" ")
    console.log("translatedWords:", translatedWords)

    // NO MODIFICATION NEEDED: this will update the inputTranslated variable in state
    setInputTranslated(translatedWords)
  }

  // ACTION ITEM: this method restarts the game by setting the original state, when you are ready for your full user experience delete the test words in setUserInput and pass an empty string
  const restartGame = () => {
    setUserInput("")
    setInputTranslated("")
  }

  // NO MODIFICATION NEEDED: this method prevents React from refreshing the page unnecessarily
  const setUpPreventDefault = (e) => {
    e.preventDefault()
    myPigLatinCodeHere()
  }

  // NO MODIFICATION NEEDED: this method takes the value of the input and saves it in state
  // note: replace method added to restrict input to only characters and spaces in order to meet goals of translator app.
  const handleInput = (e) => {
    setUserInput(e.target.value.replace(/[^a-z, " "]/gi, ''));
  }

  return (
    <div className="page-container">
      <div className="body-container">
        <h1>Pig Latin Translator</h1>
        <img
          src={butcherPigImage}
          alt="pig with butcher cut names in pig latin"
          className="butcher-pig-image"
        />

        <div className="input-section">
          <h4>Enter phrase to be translated:</h4>
          <input
            type="text"
            className="user-input"
            onChange={handleInput}
            value={userInput}
          />
          <br />
          <button onClick={setUpPreventDefault}>Submit</button>
          <button onClick={restartGame}>Clear</button>
        </div>
        <p>{inputTranslated}</p>
      </div>
      <footer>&copy; 2022 | Coded by: Blake Carta and Shannon Young</footer>
    </div>
  )
}

export default App