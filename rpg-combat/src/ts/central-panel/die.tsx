import one from "../../assets/dice/1.png";
import two from "../../assets/dice/2.png";
import three from "../../assets/dice/3.png";
import four from "../../assets/dice/4.png";
import five from "../../assets/dice/5.png";
import six from "../../assets/dice/6.png";

const die: { [number: number]: string } = {
  1: one,
  2: two,
  3: three,
  4: four,
  5: five,
  6: six,
};

interface DiceProps {
  value: number;
}

const Die = ({ value }: DiceProps) => (
  <img className="img-fluid" src={die[value]} />
);

export default Die;
