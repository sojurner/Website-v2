const Toggle = ({ activeSwitch, handleChange, toggleProps }) => {
  return (
    <>
      <div
        onClick={() =>
          handleChange(toggleProps.findIndex(prop => prop !== activeSwitch))
        }
      >
        <p className={activeSwitch} />
      </div>
      <style jsx>{`
        width: 40px;
        height: 20px;
        position: relative;
        border: 2px solid lightgray;
        border-radius: 40px;
        background: rgba(160, 144, 3, 0.2);
        cursor: pointer;

        div:hover p {
          background: #a1ff6270;
        }

        p {
          height: 18px;
          width: 18px;
          position: absolute;
          top: 0;
          left: 0;
          border-radius: 50%;
          border: 1px solid rgb(197, 176, 0);
          background: white;
          transition: 0.2s linear;
        }

        p.personal {
          transform: translate3d(0, 0, 0);
        }
        p.professional {
          transform: translate3d(20px, 0, 0);
        }
      `}</style>
    </>
  );
};

export default Toggle;
