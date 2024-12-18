import styled from 'styled-components'
import tags from './tags.json'

const TagsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  margin: 56px 0 39px;
`

const ParagrafoEstilizado = styled.p`
  font-size: 24px;
  line-height: 29px;
  color: #D9D9D9;
`

const BotoesContainer = styled.div`
  display: flex;
  gap: 24px;
`

const BotaoEstilizado = styled.button`
  background: rgba(217, 217, 217, 0.3);
  display: inline;
  width: fit-content;
  color: #fff;
  border-radius: 10px;
  border: solid 2px transparent;
  padding: 10px 8px;
  height: 49px;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    border-color: #C98CF1;
  }
`

const Tags = () => {
  return (
    <TagsContainer>
      <ParagrafoEstilizado>Busque por tags:</ParagrafoEstilizado>
      <BotoesContainer>
        {tags.map(tag =>
          <BotaoEstilizado key={tag.id}>{tag.titulo}</BotaoEstilizado>
        )}
      </BotoesContainer>
    </TagsContainer>
  )
}

export default Tags