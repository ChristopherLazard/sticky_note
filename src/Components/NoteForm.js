import React from 'react'
import { connect } from 'react-redux'
import { Segment, Form, Button } from 'semantic-ui-react'
import { addNote } from '../Actions/notes'
import { incId } from '../Actions/nextId'

const options = [
  { key: 'b', text: 'Blue', value: 'blue'},
  { key: 'y', text: 'yellow', value: 'yellow'},
  { key: 'p', text: 'pink', value: 'pink'},
]

class NoteForm extends React.Component {
  state = { title: '', body: '', color: '' }

  handleSubmit = (e) => {
    e.preventDefault()
    const { title, body, color } = this.state
    const { id, dispatch } = this.props
    const note = { id, title, body , color}
    dispatch(addNote(note))
    dispatch(incId())
    this.setState({ title: '', body: '', color: '' })
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value})

  render() {
    const { title, body } = this.state
    return(
      <Segment compact>
        <Form onSubmit={this.handleSubmit}>
       
          <Form.Input required  label='Title' name='title' value={title} onChange={this.handleChange}></Form.Input>

         
          <Form.Input maxLength='25' label='Body' name='body' value={body} onChange={this.handleChange}></Form.Input>

        
          <Form.Select label='Color' name='color' options={options} placeholder='Color' onChange={this.handleChange}/>

          <Button primary type='submit'>Save</Button>
        </Form>
      </Segment>
    )
  }
}


  const mapStateToProps = (state) => {
  return { id: state.nextId }
}

export default connect(mapStateToProps)(NoteForm)