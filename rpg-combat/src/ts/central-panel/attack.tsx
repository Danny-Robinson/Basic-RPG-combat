import { connect, ConnectedProps } from "react-redux";
import { Characters } from "../combatants/contants";
import { StoreState } from "../redux-common/store";
import { assignDice, dealDamage, writeToFeed } from "./actions";

interface OwnProps {
  characters: ReadonlyArray<Characters>;
}

export type AttackProps = ConnectedProps<typeof connector> & OwnProps;

const Attack = ({
  assignDice,
  dealDamage,
  writeToFeed,
  characters,
  health0 = 100,
  health1 = 100,
}: AttackProps) => {
  const onAttack = () => {
    const rolls = [rollDie(), rollDie(), rollDie(), rollDie()];
    assignDice(characters[0], [rolls[0], rolls[1]]);
    assignDice(characters[1], [rolls[2], rolls[3]]);
    const damage = calculateDamage(rolls);
    if (damage > 0) {
      dealDamage(characters[1], damage);
      writeToFeed(`You dealt ${damage} damage`);
      if (health1 - damage <= 0) {
        writeToFeed("VICTORY", "bg-success");
      }
    } else {
      dealDamage(characters[0], -damage);
      writeToFeed(`You recieved ${-damage} damage`);
      if (health0 + damage <= 0) {
        writeToFeed("YOU DIED", "bg-danger");
      }
    }
  };

  return (
    <button type="button" className="btn btn-danger" onClick={onAttack}>
      Attack!
    </button>
  );
};

const rollDie = () => Math.floor(Math.random() * 6) + 1;

const calculateDamage = (rolls: ReadonlyArray<number>) =>
  rolls[0] + rolls[1] - rolls[2] - rolls[3];

export const mapState = (state: StoreState, props: OwnProps) => ({
  health0: state?.characterHealth[props.characters[0]],
  health1: state?.characterHealth[props.characters[1]],
});

const connector = connect(mapState, {
  assignDice,
  dealDamage,
  writeToFeed,
});

export default connector(Attack);
