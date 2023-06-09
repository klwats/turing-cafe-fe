import React, { Component } from 'react';
import './App.css';
import Reservations from '../Reservations/Reservations.js'
import Form from '../Form/Form.js'


class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: []
    }

  }

  componentDidMount() {
    this.fetchReservations()
      .then((data) => this.setState({
        reservations: data
      }, () => {
        console.log('array', this.state.reservations)

      }
      ))

    console.log('fetch', this.fetchReservations())
  }


  fetchReservations() {
    return fetch('http://localhost:3001/api/v1/reservations')
      .then(res => {
        if (!res.ok) {
          throw new Error(`Please try again. There is an error.`)
        } else {
          return res.json()
        }
      })
      .catch(err => new Error(err))
  }

  addReservation = (newReservation) => {
    this.setState({ reservations: [...this.state.reservations, newReservation] })
    console.log('new', this.state.reservations)
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
          <Form addReservation={this.addReservation} />
          <Reservations reservations={this.state.reservations} />
        </div>
      </div>
    )
  }



}

export default App;
