import React, { Component, Fragment } from 'react'
import './home.scss'
import Input from '../../components/input/input'
import InputType from '../../components/input/inputEnumTypes'
import Card from '../../components/card/card'

class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      text: ''
    }
  }

  handleInput = event => {
    this.setState({ text: event.target.value })
  }

  render () {
    return (
      <>
        <div className='main'>
          <h2>Open your account</h2>
          <p>Personal Information</p>
          <div className='form-table'>
            <div className='form-row'>
              <div className='form-column'>
                <div className='form-table'>
                  <div className='form-row'>
                    <div className='form-column'>
                      <Input
                        id='txtName'
                        validate
                        type={InputType.Text}
                        placeholder='Name'
                        width='large-size'
                        onChangeText={() => this.onText(this.props.Name)}
                      > {this.props.Name}
                      </Input>
                    </div>
                    <div className='form-column'>
                      <Input id='txtBirthday' validate type={InputType.Text} placeholder='Birthday' width='small-size' />
                    </div>
                  </div>
                  <div className='form-row'>
                    <div className='form-column'>
                      <Input id='txtEmail' validate type={InputType.Email} placeholder='Email' width='large-size' />
                    </div>
                    <div className='form-column'>
                      <Input id='txtPhone' validate={false} type={InputType.Phone} placeholder='Mobile' width='small-size' />
                    </div>
                  </div>
                  <div className='form-row'>
                    <div className='form-column'>
                      <Input id='txtPassword' validate type={InputType.Password} placeholder='Password' width='medium-size' />
                    </div>
                    <div className='form-column'>
                      <Input id='txtPasswordConfirm' validate type={InputType.Password} placeholder='Confirm Password' width='medium-size' />
                    </div>
                  </div>
                </div>
              </div>
              <div className='form-column'>
                <div className='form-table'>
                  <div>
                    <Card clientName={this.state.text} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Home
