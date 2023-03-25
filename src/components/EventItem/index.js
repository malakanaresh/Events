// Write your code here
import './index.css'

const EventItem = props => {
  const {eventsDetails, clickEventItem} = props
  const {id, imageUrl, name, location} = eventsDetails
  const sendId = () => {
    clickEventItem(id)
  }

  return (
    <li className="list-items-con">
      <button type="button" onClick={sendId}>
        <img src={imageUrl} alt="event" className="img-src" />
      </button>
      <p className="heading">{name}</p>
      <p>{location}</p>
    </li>
  )
}

export default EventItem
