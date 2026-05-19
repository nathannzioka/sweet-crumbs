function PastryCard({ pastry }) {
  return (
    <div className="pastry-card">
      <div className="pastry-image">
        
      </div>

      <h2>{pastry.name}</h2>

      <p>{pastry.description}</p>

      <h3>{pastry.origin}</h3>

      <h4>Ksh{pastry.price}</h4>
    </div>
  );
}

export default PastryCard;