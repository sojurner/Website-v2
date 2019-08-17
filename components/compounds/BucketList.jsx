import Icon from '../atoms/Icon';

const BucketList = ({ bucketList, header }) => {
  return (
    <>
      <table>
        <tbody>
          <tr>
            <th />
            <th>{header}</th>
          </tr>
          {bucketList.map((item, index) => {
            const { in_progress, completed, description, iconName } = item;
            return (
              <tr key={`bucket-${index}`}>
                <td
                  className={
                    in_progress
                      ? 'bucket-in-progress'
                      : completed
                      ? 'bucket-completed'
                      : 'bucket-incomplete'
                  }
                >
                  {iconName ? (
                    <Icon
                      style={{ marginTop: 7 }}
                      size={0.75}
                      iconName={iconName}
                    />
                  ) : (
                    '~~~'
                  )}
                </td>
                <td
                  className={
                    in_progress
                      ? 'bucket-in-progress'
                      : completed
                      ? 'bucket-completed'
                      : 'bucket-incomplete'
                  }
                >
                  {description}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <style jsx>{`
        table {
          font-family: grotesque;
          list-style-type: none;
          color: gray;
          min-width: 300px;
          max-width: 300px;
          margin: 20px auto;
        }

        th {
          text-align: left;
          font-size: 20px;
          text-transform: capitalize;
        }

        td {
          font-size: 18px;
          font-weight: bold;
          line-height: 25px;
          text-align: left;
          padding: 0 10px;
        }

        .bucket-completed {
          text-decoration-line: line-through;
          color: #358100;
          fill: #358100;
        }

        .bucket-in-progress {
          color: rgb(197, 176, 0);
          fill: rgb(197, 176, 0);
        }

        .bucket-incomplete {
          color: rgb(191, 191, 191);
          fill: rgb(191, 191, 191);
        }
      `}</style>
    </>
  );
};

export default BucketList;
