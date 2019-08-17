const ListItem = props => (
  <>
    <li {...props} />
    <style>{`
      .contact__list__icon {
        padding: 5px 7px;
        border-radius: 50%;
        cursor: pointer
      }

      .contact__list__icon:hover {
        background: rgba(0, 0, 0, .05);
      }
    `}</style>
  </>
);

export default ListItem;
