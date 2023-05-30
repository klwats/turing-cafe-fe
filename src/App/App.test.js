import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

describe('Home Page', () => {
  it('should display existing reservations', () => {
    beforeEach(() => {
      cy.intercept('GET', 'http://localhost:3001/api/v1/reservations', {
        statusCode: 200,
        body: {
          [
            {
              "id": 1,
              "name": "Christie",
              "date": "12/29",
              "time": "7:00",
              "number": 12
            },
          ]           
        },
      }).as('existingReservation');

      cy.visit('localhost:3000')
    })
  })
})

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
