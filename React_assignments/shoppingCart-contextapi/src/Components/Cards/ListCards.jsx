
import Card from "./Card";

  const cards = [
    { id: 1, title: "Laptop", description: "The price of laptop is: Rs.100000" },
    { id: 2, title: "Mobile", description: "This is the latest Samsung mobile with price: Rs.23000" },
    { id: 3, title: "Charger", description: "This charger costs: Rs.3000" },
  ];

const CardList = () => {

  return (
    <div style={styles.container}>
      {cards.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
  );
};

export default CardList;

const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
};
