import styled from "styled-components"
import Imagem from "../Galeria/Imagem"

const Overlay = styled.div`
  background-color: rgba(0,0,0,0.7);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;

  dialog {
    background: transparent;
    border: none;

    figure {
      width: 80vw;
      max-width: 1000px;
      height: 740px;
    }

    button.fechar {
      position: absolute;
      top: 32px;
      right: 24px;
      background: url('icones/fechar.png') no-repeat;
      width: 24px;
      height: 24px;
      border: none;
      cursor: pointer;
    }
  }
`

const ModalZoom = ({ foto, aoFechar, aoAlternarFavorito }) => {
  return (
    <>
      {/* !!foto = !foto transforma em booleano para evitar o undefined, null por exemplo */}

      {/* !!foto = !foto se for undefined ou null vira true */}
      {/* !!foto = !!foto se for undefined ou null vira false */}

      {/* !!foto = !foto se for um objeto vira false porque está negando */}
      {/* !!foto = !!foto se for um objeto vira true porque negou o !foto */}
      {foto &&
        <Overlay>
          <dialog open={!!foto} onClose={aoFechar}>
            <Imagem foto={foto} expandida={true} aoAlternarFavorito={aoAlternarFavorito}/>
            <form method="dialog">
              <button type="submit" className="fechar"/>
            </form>
          </dialog>
        </Overlay>
      }
    </>
  )
}

export default ModalZoom