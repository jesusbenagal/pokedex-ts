import { Card } from "react-bootstrap";
import { useColorType } from "../../hooks/useColorType";
import { Pokemon } from "../../interfaces/interfaces";

interface Props {
  pokemon: Pokemon;
}

export const PokeCard = ({ pokemon }: Props) => {
  const { name: nameType } = pokemon.types[0].type;

  const typeColor = useColorType(nameType);

  return (
    <Card
      style={{
        width: "20rem",
        backgroundColor: "#00D4FF",
        borderRadius: "32px 32px 32px 32px",
        border: "1px solid #00D4FF",
      }}
    >
      <Card.Img
        variant="top"
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
        style={{
          width: "150px",
          borderRadius: "10px 10px 10px 10px",
          backgroundColor: "#E5D7D7",
          margin: "auto",
          marginTop: "2rem",
        }}
      />
      <Card.Title style={{ textAlign: "center" }}>{pokemon.name}</Card.Title>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            width: "6rem",
            display: "flex",
            textAlign: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: ".1rem",
            marginBottom: "2rem",
          }}
        >
          <span>#{pokemon.id}</span>
          <span style={{ background: "#E5D7D7", border: "1px solid #000000" }}>
            Type
          </span>
          <span style={{ background: typeColor, border: "1px solid #000000" }}>
            {nameType}
          </span>
        </div>
      </div>
    </Card>
  );
};
