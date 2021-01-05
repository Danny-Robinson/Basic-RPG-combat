import HealthBar from "./healthbar";

interface CharacterCardProps {
  image: string;
  health?: number;
  name: string;
  imageRight?: boolean;
}

const Avatar = ({ image, name }: Partial<CharacterCardProps>) => (
  <div className="col">
    <img className="img-fluid" src={image} />
    <div>{name}</div>
  </div>
);

const Health = ({ health = 100 }: Partial<CharacterCardProps>) => (
  <div className="col flex">
    <HealthBar health={health} />
  </div>
);

const CharacterCard = ({
  name,
  image,
  health,
  imageRight,
}: CharacterCardProps) => (
  <div className="container">
    <div className="row">
      {!imageRight ? (
        <>
          <Avatar image={image} name={name} />
          <Health health={health} />
        </>
      ) : (
        <>
          <Health health={health} />
          <Avatar image={image} name={name} />
        </>
      )}
    </div>
  </div>
);

export default CharacterCard;
