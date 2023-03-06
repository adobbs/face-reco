import React from 'react';
import './App.css';
// import clarifaiApiKey from './config';
// import Clarifai from 'clarifai';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';

// const Clarifai = require('clarifai');

// const app = new Clarifai.App({
//   apiKey: clarifaiApiKey
//  });

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: ''
    };
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
    console.log(event.target.value);
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input});
  }

  // onButtonSubmit = () => {
  //   this.setState({imageUrl: this.state.input});
   
  //   app.models
  //     .predict(
  //       {
  //         id: 'face-detection',
  //         name: 'face-detection',
  //         version: '6dc7e46bc9124c5c8824be4822abe105',
  //         type: 'visual-detector',
  //       }, this.state.input)
  //     .then(response => {
  //       console.log('hi', response)
  //       if (response) {
  //         fetch('http://localhost:3000/image', {
  //           method: 'put',
  //           headers: {'Content-Type': 'application/json'},
  //           body: JSON.stringify({
  //             id: this.state.user.id
  //           })
  //         })
  //           .then(response => response.json())
  //           .then(count => {
  //             this.setState(Object.assign(this.state.user, { entries: count}))
  //           })

  //       }
  //       this.displayFaceBox(this.calculateFaceLocation(response))
  //     })
  //     .catch(err => console.log(err));
  // }
  
  render() {
    return (
      <div className="App">
        <Navigation />
        <Logo />
        <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
        <FaceRecognition imageUrl={this.state.imageUrl} />
      </div>
    );
  }
}

export default App;
