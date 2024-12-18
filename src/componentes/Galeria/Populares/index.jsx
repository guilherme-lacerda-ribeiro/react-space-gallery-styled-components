import styled from "styled-components"
import Titulo from "../../Titulo"
import populares from './populares.json'

const PopularesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  img {
    width: 212px;
    border-radius: 24px;
  }
`

const BotaoEstilizado = styled.button`
  margin: 20px 0;
  width: 100%;
  border-radius: 10px;
  padding: 16px 24px;
  background-color: transparent;
  border: solid 2px #C98CF1;
  color: #fff;
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
`

const Populares = () => {
  return (
    <section>
      <Titulo $alinhamento='center'>Populares</Titulo>
      <PopularesContainer>
        {populares.map((popular) =>
          <img key={popular.id} src={popular.path} alt={popular.alt} />
        )}
      </PopularesContainer>
      <BotaoEstilizado>Ver mais</BotaoEstilizado>
    </section>
  )
}

export default Populares