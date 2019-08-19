const TechStacks = ({ list, ...props }) => {
  return (
    <>
      <div {...props}>
        {list.map(tech => (
          <img
            src={`https://res.cloudinary.com/paulkim/image/upload/v1552393728/images/skills/${tech}.png`}
          />
        ))}
      </div>
    </>
  );
};

export default TechStacks;
