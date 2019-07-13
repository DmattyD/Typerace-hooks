import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';

const App = () => {

  /// will change title of webpage if victory state is true
  useEffect(() => {
    if(gameState.victory) document.title = "Victory!";
  });
  /// Hook goes above return, below App function

  /// initial value of userText will be an empty string
  /// setUserText will update userText via the setUserText function
  const [userText, setUserText] = useState('');

   /// this is the helper method that calls the setUserText function
   const updateUserText = event => {
    setUserText(event.target.value);
    console.log(`current userText`, userText);

    if (event.target.value === snippet) {
      setGameState({
        ...gameState,
        victory: true,
        endTime: new Date().getTime() - gameState.startTime 
      });
    }
   };

  const SNIPPETS = [
    'Bears, beets, battlestar galactica',
    "What's Forrest Gump's password? 1Forrest1",
    'Where do programmers like to hangout? The Foo Bar'
  ]

  const [snippet, setSnippet] = useState('');
  
   
  /// the onClick handler references this function, which is called when the button is clicked in the render
  const chooseSnippet = snippetIndex => () => {
    console.log('setSnippet', snippetIndex);
    setSnippet(SNIPPETS[snippetIndex]);
    setGameState({ ...gameState, startTime: new Date().getTime() });
  };

/// set the state for game victory
const INITIAL_GAME_STATE = {victor: false, startTime: null, endTime: null };
const [gameState, setGameState] = useState(INITIAL_GAME_STATE);


  return (
    <div>
      <h2>Type Race</h2>
      <hr />
      <h3>Snippet</h3>
      {snippet}
      <h4>{gameState.victory ? `Done! 🎉 Time: ${gameState.endTime}ms` : null }</h4>
      <input value={userText} onChange={updateUserText}/>
      <hr />
      {
        SNIPPETS.map((SNIPPET, index) => (
          <button onClick={chooseSnippet(index)} key={index}>
            {SNIPPET.substring(0,10)}...
          </button>
        ))}
      </div>
  )
}
export default App;
