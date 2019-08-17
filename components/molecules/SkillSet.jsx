import Icon from '../atoms/Icon';

const SkillSet = ({ skills, ...props }) => {
  return (
    <>
      <div {...props}>
        {skills.map(skillProps => (
          <Icon {...skillProps} size={1} style={{ margin: 5 }} />
        ))}
      </div>
      <style jsx>{`
        div {
          display: flex;
          flex-flow: row wrap;
          max-width: 180px;
        }
      `}</style>
    </>
  );
};

export default SkillSet;
