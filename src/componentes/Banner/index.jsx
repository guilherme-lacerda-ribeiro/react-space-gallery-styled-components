import { styled } from "styled-components";
import banner from './banner.png'

const BannerEstilizado = styled.div`
  width: 100%;
  min-height: 328px;
  background-image: url( ${banner} );
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 20px;
  display: flex;
  align-items: center;
  color: #fff;
  font-weight: 400;
  font-size: 40px;
  line-height: 48px;

  span {
    max-width: 300px;
    margin-left: 64px;
  }
`

const Banner = () => {
  return (
    <BannerEstilizado>
      <span>A galeria mais completa de fotos do espaço!</span>
    </BannerEstilizado>
  )
}

export default Banner