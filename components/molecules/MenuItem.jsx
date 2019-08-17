import Link from 'next/link';

const MenuItem = ({ className, ...props }) => {
  return (
    <li className={className}>
      <Link {...props} />
    </li>
  );
};

export default MenuItem;
