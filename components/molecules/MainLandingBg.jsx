import mountains from '../../assets/icons/flatMountains.svg';
import cloud from '../../assets/icons/cloud.svg';
import sun from '../../assets/icons/sun.svg';

const MainLandingBackground = () => (
  <div className={'main__background'}>
    <img className={'main__background-mountains'} src={mountains} />
    <img className={'main__background-cloud1'} src={cloud} />
    <img className={'main__background-cloud2'} src={cloud} />
    <img className={'main__background-sun'} src={sun} />
    <style jsx>{`
      .main__background {
        position: absolute;
        bottom: 0;
        z-index: 0;
        height: 100%;
        width: 100%;
      }

      .main__background-mountains {
        height: 100%;
        width: 100%;
      }
      .main__background-cloud1 {
        position: absolute;
        left: 10%;
        top: 50%;
      }
      .main__background-cloud2 {
        position: absolute;
        right: 10%;
        top: 30%;
      }

      .main__background-sun {
        position: absolute;
        right: 50%;
        top: 35%;
      }
    `}</style>
  </div>
);

export default MainLandingBackground;
