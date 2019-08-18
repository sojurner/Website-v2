import constellations from '../../assets/icons/constellations.svg';

const MainTimelineBackground = () => {
  return (
    <>
      <img src={constellations} alt={'Background Constellations'} />
      <style jsx>{`
        position: absolute;
        height: 100vh;
        width: 100vw;
        z-index: 0;
        top: 0;
        left: 0;
      `}</style>
    </>
  );
};

export default MainTimelineBackground;
