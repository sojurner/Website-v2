const ResumeSkillBars = ({
  skills,

  delayBars
}) => {
  return Object.keys(skills).map((key, index) => {
    return (
      <>
        <g key={`bar-${index}`} className={`bar bar${index}`} height={5}>
          <rect
            className="lead-bar"
            width={500}
            height={4}
            rx="3"
            ry="1"
            x={skills[key].x}
            y={skills[key].y * 1.1 - 0.8}
          />
          <rect
            className={delayBars ? 'skill-bar-hide' : 'skill-bar-show'}
            style={{ transition: `${1 + index * 0.2}s linear` }}
            rx="5"
            ry="5"
            width={skills[key].width}
            height={skills[key].height}
            x={skills[key].x}
            y={skills[key].y * 1.1 - 3}
          />
          <text x="0" y={31 + 28 * index} className="bar-text">
            {key}
          </text>
        </g>
        <style jsx>{`
          .lead-bar {
            fill: #00000038 !important;
            border-radius: 0.5rem;
          }

          .bar {
            stroke: #94d6fc;
          }

          .bar:hover > .skill-bar-show {
            fill: #0968a3 !important;
            height: 10px;
          }

          .bar:hover > .bar-text {
            font-size: 1.7rem;
          }

          .bar-text {
            font-size: 1.3rem;
            font-weight: 100;
            transition: 0.1s linear;
          }

          .skill-bar-show {
            margin: 10rem 0;
            color: white;
            fill: #1e5082 !important;
            border-radius: 0.5rem;
          }

          .skill-bar-hide {
            width: 0px;
          }

          .tooltip-text {
            position: absolute;
            font-size: 1.4rem;
            fill-opacity: 1;
            transition: 0.2s linear;
            /* fill: rgb(72, 106, 168) !important; */
            letter-spacing: 2px;
            font-weight: bold;
            width: 10rem;
            height: 10rem;
          }

          .tooltip-text-hide {
            transition: 0.2s linear;

            fill-opacity: 0;
          }
        `}</style>
      </>
    );
  });
};

export default ResumeSkillBars;
