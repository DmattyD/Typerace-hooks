import React from 'react';
import './App.css';
import { useState } from 'react';

const App = () => {

  /// Hook goes above return, below App function

  /// initial value of userText will be an empty string
  /// setUserText will update userText via the setUserText function
  const [userText, setUserText] = useState('');

   /// this is the helper method that calls the setUserText function
   const updateUserText = event => {
    setUserText(event.target.value);
    console.log(`current userText`, userText);
   };

  const SNIPPETS = [
    'Bears, beets, battlestar galactica',
    "What's Forrest Gump's password? 1Forrest1",
    'Where do programmers like to hangout? The Foo Bar'
  ]

  const [snippet, setSnippet] = useState('');
  
   
  
  const chooseSnippet = snippetIndex => () => {
    console.log('setSnippet', snippetIndex);
    setSnippet(SNIPPETS[snippetIndex]);

  };
  return (
    <div>
      <h2>Type Race</h2>
      <hr />
      <h3>Snippet</h3>
      {snippet}
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
