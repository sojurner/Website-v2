import Icon from '../atoms/Icon';

const SkillSet = ({ skills, ...props }) => {
  return (
    <>
      <div {...props}>
        {skills.map(skillProps => (
          <div className={`${props.className}-container`}>
            <Icon {...skillProps} size={1} style={{ margin: 5 }} />
          </div>
        ))}
      </div>
      <style jsx>{`
        .main__skillset {
          background: #ffffff38;
          display: flex;
          flex-flow: row wrap;
          margin-top: 10px;
          border-radius: 10px;
          width: max-content;
        }

        .main__skillset2 {
          background: #ffffff38;
          display: flex;
          flex-flow: row wrap;

          border-radius: 10px;
          width: max-content;
          margin: 10px 0 auto auto;
        }

        .main__skillset-container {
          transition: 0.2s linear;
        }

        .main__skillset-container:hover {
          transform: scale(1.5);
        }

        .about__skillset {
          max-width: 260px;
          display: flex;
          flex-flow: row wrap;
        }
      `}</style>
    </>
  );
};

export default SkillSet;
