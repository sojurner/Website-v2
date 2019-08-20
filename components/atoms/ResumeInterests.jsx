import Icon from '../atoms/Icon';

export default () => (
  <section className="resume-interests">
    <h4 className="interests">
      <Icon iconName={'Interest'} size={1.2} />
      Interests
    </h4>
    <ul className="interests-list">
      <li className="interest-item">
        <Icon iconName={'Music'} size={1.2} />
        <span>Music</span>
      </li>
      <li className="interest-item">
        <Icon iconName={'Baseball'} size={1.2} />
        <span>Baseball</span>
      </li>
      <li className="interest-item">
        <Icon iconName={'Hiking'} size={1.2} />
        <span>Hiking</span>
      </li>
      <li className="interest-item">
        <Icon iconName={'Panda'} size={1.2} />
        <span>Travel</span>
      </li>
    </ul>
  </section>
);
