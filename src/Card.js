import { useState } from "react";
import './Card.css';

function Card({ id, name, info, image, price, removeParlour }) {
  const [readmore, setReadmore] = useState(false);
  const [interested, setInterested] = useState(false);
  const [showPopup, setShowPopup] = useState(false); // State for popup
  const description = readmore ? info : `${info.substring(0, 100)}....`;

  function readmoreHandler() {
    setReadmore(!readmore);
  }

  function interestedHandler() {
    setInterested(!interested); // Toggle interested state
    setShowPopup(true); // Show the popup

    // Hide the popup after 2 seconds
    setTimeout(() => {
      setShowPopup(false);
    }, 2000);
  }

  return (
    <div className="card">
      <img src={image} className="image" alt={name} />
      <div>
        <div className="parlour-details">
          <h4 className="parlour-price">{price}</h4>
          <h4 className="parlour-name">{name}</h4>
        </div>
        <div className="description">
          {readmore ? info : description}
          <span className="read-more" onClick={readmoreHandler}>
            {readmore ? `Show less` : `Read more`}
          </span>
        </div>
      </div>
      <button className="red-bttn" onClick={() => removeParlour(id)}>
        Not Interested
      </button>
      <button className={`interested-bttn ${interested ? 'active' : ''}`} onClick={interestedHandler}>
        {interested ? 'Interested' : 'Mark as Interested'}
      </button>

      {/* Popup Notification */}
      {showPopup && (
        <div className="popup">
          <p>This item has been wishlisted!</p>
        </div>
      )}
    </div>
  );
}

export default Card;