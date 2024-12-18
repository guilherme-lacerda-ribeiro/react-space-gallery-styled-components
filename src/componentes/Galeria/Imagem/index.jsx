import styled from "styled-components"

const FigureEstilizado = styled.figure`
  display: flex;
  flex-direction: column;
  width: ${(props) => (props.$expandida ? '90%' : '48%')};
  min-width: ${(props) => (props.$expandida ? 'auto' : '400px')};
  margin: 0;
  position: relative;
`

const ImagemEstilizado = styled.img`
  border-radius: 15px 15px 0 0;
`

const LegendaEslitizado = styled.figcaption`
  border-radius: 0 0 15px 15px;
  background-color: #001634;
  padding: 16px;
  position: relative;
`

const TituloEstilizado = styled.h3`
  color: #fff;
  font-weight: 700;
  font-size: 20px;
  line-height: 32px;
  margin: 0;
`

const FonteEstilizado = styled.p`
  color: #fff;
  font-weight: 400;
  font-size: 20px;
  margin: 0;
`

const BotaoContainer = styled.div`
  position: absolute;
  right: 16px;
  bottom: 16px;
  display: flex;
  gap: 20px;
`

const BotaoEstilizado = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`

const Imagem = ({ foto, expandida = false, aoZoomSolicitado, aoAlternarFavorito }) => {

  const iconeFavorito = foto.favorita ? "/icones/favorito-ativo.png" : "/icones/favorito.png"

  return (
    <FigureEstilizado key={foto.id}>
      <ImagemEstilizado src={foto.path} alt={`Imagem ${foto.titulo}`} />
      <LegendaEslitizado>
        <TituloEstilizado>{foto.titulo}</TituloEstilizado>
        <FonteEstilizado>Fonte: {foto.fonte}</FonteEstilizado>
        <BotaoContainer>
          <BotaoEstilizado>
            <img src={iconeFavorito} alt="" onClick={() => aoAlternarFavorito(foto)}/>
          </BotaoEstilizado>
          {!expandida &&
            <BotaoEstilizado onClick={() => aoZoomSolicitado( foto )}>
              <img src="/icones/expandir.png" alt="" />
            </BotaoEstilizado>
          }
        </BotaoContainer>
      </LegendaEslitizado>
    </FigureEstilizado>
  )
}

export default Imagem