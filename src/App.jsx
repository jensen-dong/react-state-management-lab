import { useState } from "react";
import "./App.css";

const App = () => {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [str, setStr] = useState(0);
  const [agi, setAgi] = useState(0);
  const [zombieFighters, setZombieFighters] = useState([
    {
      name: "Survivor",
      price: 12,
      strength: 6,
      agility: 4,
      img: "https://via.placeholder.com/150/92c952",
    },
    {
      name: "Scavenger",
      price: 10,
      strength: 5,
      agility: 5,
      img: "https://via.placeholder.com/150/771796",
    },
    {
      name: "Shadow",
      price: 18,
      strength: 7,
      agility: 8,
      img: "https://via.placeholder.com/150/24f355",
    },
    {
      name: "Tracker",
      price: 14,
      strength: 7,
      agility: 6,
      img: "https://via.placeholder.com/150/d32776",
    },
    {
      name: "Sharpshooter",
      price: 20,
      strength: 6,
      agility: 8,
      img: "https://via.placeholder.com/150/1ee8a4",
    },
    {
      name: "Medic",
      price: 15,
      strength: 5,
      agility: 7,
      img: "https://via.placeholder.com/150/66b7d2",
    },
    {
      name: "Engineer",
      price: 16,
      strength: 6,
      agility: 5,
      img: "https://via.placeholder.com/150/56acb2",
    },
    {
      name: "Brawler",
      price: 11,
      strength: 8,
      agility: 3,
      img: "https://via.placeholder.com/150/8985dc",
    },
    {
      name: "Infiltrator",
      price: 17,
      strength: 5,
      agility: 9,
      img: "https://via.placeholder.com/150/392537",
    },
    {
      name: "Leader",
      price: 22,
      strength: 7,
      agility: 6,
      img: "https://via.placeholder.com/150/602b9e",
    },
  ]);

  const handleAddFighter = (event) => {
    if (money - event.price >= 0) {
      setTeam([...team, event]);
      setZombieFighters(
        zombieFighters.filter((fighter) => fighter.name !== event.name)
      );
      setMoney(money - event.price);
      setStr(str + event.strength);
      setAgi(agi + event.agility);
    } else {
      console.log("INSUFFICIENT FUNDS");
    }
  };

  const handleRemoveFighter = (event) => {
    setTeam(team.filter((member) => member.name !== event.name));
    setZombieFighters([...zombieFighters, event]);
    setMoney(money + event.price);
    setStr(str - event.strength);
    setAgi(agi - event.agility);
  };

  return (
    <>
      <h1>ZOMBIE FIGHTERS</h1>
      <h2>Funds: {money}</h2>
      <h2>Team Strength: {str}</h2>
      <h2>Team Agility: {agi}</h2>
      <h2>Team</h2>
      {team.length === 0 ? (
        <p>Pick some team members!</p>
      ) : (
        <ul>
          {team.map((member) => (
            <li key={member.name}>
              <img src={member.img} alt="" />
              <h4>Name: {member.name}</h4>
              <p>$$$: {member.price}</p>
              <p>STR: {member.strength}</p>
              <p>AGI: {member.agility}</p>
              <button onClick={() => handleRemoveFighter(member)}>
                REMOVE
              </button>
            </li>
          ))}
        </ul>
      )}
      <div>
        <h2>Fighters</h2>
        <ul>
          {zombieFighters.map((zombieFighter) => (
            <li key={zombieFighter.name}>
              <img src={zombieFighter.img} alt="" />
              <h4>Name: {zombieFighter.name}</h4>
              <p>$$$: {zombieFighter.price}</p>
              <p>STR: {zombieFighter.strength}</p>
              <p>AGI: {zombieFighter.agility}</p>
              <button onClick={() => handleAddFighter(zombieFighter)}>
                ADD
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default App;
