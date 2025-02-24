import Card from "./Card";
import './Parlour.css'
function Parlour({ parlour, removeParlour }) {
    return (
      <div>
        <div>
          <h1>StyleSync</h1>
        </div>
  
        <div className="parlour-container">
          {parlour.map((parlours) => {
            return <Card key={parlours.id} {...parlours} removeParlour={removeParlour} />;
          })}
        </div>
      </div>
    );
  }
  
  export default Parlour;
  
