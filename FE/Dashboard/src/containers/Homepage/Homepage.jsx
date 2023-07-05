import { Helmet, HelmetProvider } from "react-helmet-async";
import { styled } from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import banner from "assets/images/carousel/banner.svg";
import vector from "assets/images/carousel/vector.svg";
import text from "assets/images/carousel/text.svg";
import model1 from "assets/images/carousel/model 1.svg";
import model2 from "assets/images/carousel/model 2.svg";
import { Button } from "components/Button";
import bgchose from "assets/images/chosebrand/bgchose.svg";

const HomeStyled = styled.div`
  margin: 20px;
`;

const BgBanner = styled.div`
  background: url(${banner});
  height: 800px;
  width: 100%;
  display: flex;
  padding-left: 230px;
  align-items: center;
  background-repeat: no-repeat;
  background-size: cover;
  .text {
    width: 504px;
    height: 288px;
    margin-bottom: 50px;
    object-fit: cover;
  }
  .left {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 110px;
  }
  .right {
    display: flex;
  }
  .vector {
    position: absolute;
    width: 496.5px;
    height: 100.5px;
    right: 20%;
    top: 20%;
  }
  .model1 {
    width: 416px;
    height: 623px;
  }
  .model2 {
    width: 474px;
    height: 709px;
    position: absolute;
    left: 26%;
    top: 5%;
  }
`;

const ChoseBrand = styled.div`
  margin-top: 40px;
  background: url(${bgchose});
  width: 100%;
  min-height: 200px;
  background-repeat: no-repeat;
  background-size: cover;
  .title-chose {
    color: #000;
    text-align: center;
    font-size: 24px;
    font-weight: 400;
    text-transform: uppercase;
  }
`;

const Homepage = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <HomeStyled>
        <Carousel
          autoPlay={true}
          interval={3000}
          showThumbs={false}
          showArrows={false}
          showStatus={false}
        >
          <BgBanner>
            <div className="left">
              <img className="vector" src={vector} alt="vector line" />
              <img className="text" src={text} alt="sale text" />
              <Button>shop now</Button>
            </div>
            <div className="right">
              <img className="model1" src={model1} alt="model 1" />
              <div className="model">
                <img className="model2" src={model2} alt="model 2" />
              </div>
            </div>
          </BgBanner>
          <BgBanner></BgBanner>
        </Carousel>
        <ChoseBrand>
          <p className="title-chose">chose your brand</p>
        </ChoseBrand>
      </HomeStyled>
    </HelmetProvider>
  );
};

export default Homepage;
