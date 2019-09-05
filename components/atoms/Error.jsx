import Icon from '@mdi/react';
import { mdiCheck } from '@mdi/js';

const Error = ({ touched, message }) => {
  if (!Boolean(touched)) {
    return <p className="blank">&nbsp;</p>;
  }

  if (message) {
    return <p className={'error'} children={message} />;
  }

  return <p className={'verified'} children={<Icon path={mdiCheck} />} />;
};

export default Error;
