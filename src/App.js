import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
        <div className="container">
          To get started, edit <code>src/App.js</code> and save to reload.

          git add .
          # Adds the file to your local repository and stages it for commit.

            To unstage a file, use 'git reset HEAD YOUR-FILE'.

            git commit -m "Add existing file"
            # Commits the tracked changes and prepares them to be pushed to a remote repository.

            To remove this commit and modify the file,
            use 'git reset --soft HEAD~1' and commit and add the file again.

            git push origin your-branch
            # Pushes the changes in your local repository up to the remote repository you specified as the origin
            </div>
        </p>
       
      </div>
    );
  }
}

export default App;
