import { createElement } from 'react';
import '../../styles/base/_typography.scss';

const Typography = ({ variant, ...props }) =>
  createElement(variant, { ...props });

export default Typography;
