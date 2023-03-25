// Write your code here

import './index.css'

const ActiveEventRegistrationDetails = props => {
  const {listDetails} = props
  console.log(listDetails.registrationStatus)
  console.log(listDetails)

  const status = listDetails.registrationStatus

  switch (status) {
    case 'YET_TO_REGISTER':
      return (
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
            alt="yet to register"
            className="register"
          />
          <p>
            A live performance brings so much to your relationship with dance
          </p>
          <button type="button">Register Here</button>
        </div>
      )

    case 'REGISTERED':
      return (
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
            alt="registered"
            className="registered"
          />
          <h1>You have already registered for the event</h1>
        </div>
      )

    case 'REGISTRATIONS_CLOSED':
      return (
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
            alt="registrations closed"
            className="registration"
          />
          <h1>Registrations Are Closed Now!</h1>
          <p>Stay tuned. We will reopen</p>
        </div>
      )

    default:
      return <p>Click on an event, to view its registration details</p>
  }
}

export default ActiveEventRegistrationDetails
