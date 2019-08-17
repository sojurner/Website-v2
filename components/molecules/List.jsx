import ListItem from '../atoms/ListItem';
import Icon from '../atoms/Icon';

const List = ({ listItems, openTab, direction, ...props }) => {
  return (
    <>
      <ul {...props}>
        {listItems.map(listItemProps => {
          const { url, name, tooltip } = listItemProps;
          return (
            <ListItem
              className={'contact__list__icon'}
              children={<Icon color={'gray'} iconName={name} size={1} />}
              onClick={
                url
                  ? () => openTab(url)
                  : () => (window.location.href = `mailto:${url}`)
              }
            />
          );
        })}
      </ul>
      <style jsx>{`
        display: flex;
        list-style: none;
        flex-direction: ${direction};
        justify-content: space-evenly;
        padding: 0;
        width: ${direction !== 'row' ? '40px' : '200px'};
      `}</style>
    </>
  );
};

export default List;
