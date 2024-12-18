import styled from "styled-components"

const RodapeEsilizado = styled.footer`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  background-color: #04244F;
  margin-top: 70px;
  padding: 0 46px;

  ul {
    display: flex;
    gap: 35px;
    padding: 0;
  }

  li {
    list-style: none;
    margin: 0;
  }

  p {
    font-size: 16px;
  }
`

const Rodape = () => {
  return (
    <RodapeEsilizado>
      <ul>
        <li>
          <a href="">
            <img src="/icones/facebook.png" alt="Facebook" />
          </a>
        </li>
        <li>
          <a href="">
            <img src="/icones/twitter.png" alt="Twitter" />
          </a>
        </li>
        <li>
          <a href="">
            <img src="/icones/instagram.png" alt="Instagram" />
          </a>
        </li>
      </ul>
      <p>Desenvolvido por Guilherme.</p>
    </RodapeEsilizado>
  )
}

export default Rodape