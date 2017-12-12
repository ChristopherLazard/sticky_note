import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react'
import NoteForm from './Components/NoteForm'
import NoteList from './Components/NoteList'
import Footer from './Components/Footer'

class App extends Component {
  render() {
    return (
      <Segment Align='center' basic>
        
        <NoteForm  />
       
        <NoteList />
        <Segment Align='center' basic>
          <Footer />
        </Segment>
      </Segment> 
    );
  }
} 
   
export default App;
