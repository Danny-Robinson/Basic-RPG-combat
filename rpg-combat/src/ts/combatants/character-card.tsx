import HealthBar from "./healthbar";

interface CharacterCardProps {
  image: string;
  health: number;
  name: string;
  imageRight?: boolean;
}

const Avatar = ({ image, name }: Partial<CharacterCardProps>) => (
  <>
    <img className="img-fluid" src={image} />
    <div>{name}</div>
  </>
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
          <div className="col">
            <Avatar image={image} name={name} />
          </div>
          <div className="col">
            <HealthBar health={health} />
          </div>
        </>
      ) : (
        <>
          <div className="col">
            <HealthBar health={health} />
          </div>
          <div className="col">
            <Avatar image={image} name={name} />
          </div>
        </>
      )}
    </div>
  </div>
);

export default CharacterCard;
