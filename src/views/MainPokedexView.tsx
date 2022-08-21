import { useContext } from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import { PokeCard } from "../components/PokeCard/PokeCard";
import { PokedexContext } from "../context/PokedexContext";
import { usePagination } from "../hooks/usePagination";

export const MainPokedexView = () => {
  const { pokedexState } = useContext(PokedexContext);
  const { pokemons } = pokedexState;

  const { filteredPokemons, nextPage, onSearchChange, prevPage, search } =
    usePagination(pokemons);

  return (
    <>
      <Container
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "1rem",
          paddingTop: "1rem",
        }}
      >
        <button onClick={prevPage}>Back</button>
        <button onClick={nextPage}>Next</button>
        <input
          type="text"
          className="form-control"
          placeholder="Buscar Pokemon"
          value={search}
          onChange={onSearchChange}
        />
      </Container>
      <Container>
        {filteredPokemons().length === 0 ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Spinner
              animation="grow"
              variant="info"
              style={{ marginTop: "3rem" }}
            />
          </div>
        ) : (
          <Row md={3}>
            {filteredPokemons().map((pokemon) => (
              <Col key={pokemon.id} className="p-3">
                <PokeCard pokemon={pokemon} />
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </>
  );
};
