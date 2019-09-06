import Typography from '../atoms/Typography';
import Icon from '../atoms/Icon';

const ScrollTo = ({ indicator, iconName, color, style, ...props }) => {
  return (
    <>
      <div {...props}>
        <Typography
          variant={'h2'}
          style={style}
          children={indicator ? indicator : ''}
        />
        <Icon iconName={iconName} size={3} color={color ? color : 'white'} />
      </div>
      <style jsx>{`
        .main__landing {
          position: absolute;
          bottom: 50px;
          left: 50%;
          z-index: 1;
          width: max-content;
          text-align: center;
          margin: 0 0 0 -54px;
          cursor: pointer;
        }

        .main__landing:hover {
          color: gray;
        }

        .main__description {
          text-align: center;
          cursor: pointer;
        }

        .footer {
          display: flex;
          justify-content: center;
          align-items: center;
          width: max-content;
          text-align: center;
          margin: 0 0 0 -54px;
          cursor: pointer;
          margin: auto;
        }

        .project__content {
          display: flex;
          justify-content: center;
          align-items: center;
          width: max-content;
          text-align: center;
          cursor: pointer;
          margin: auto;
        }

        .projects__landingHeader-scrollTo {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin-top: 80px;
          cursor: pointer;
        }
      `}</style>
    </>
  );
};

export default ScrollTo;
