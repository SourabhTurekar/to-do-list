import Delete from "@mui/icons-material/DeleteForeverSharp";

const ListIteams = (props) => {
  const { fnDeleteHandler } = props;
  return (
    <>
      <div className="list-box">
        {props.listItems.map((ele) => (
          <div key={ele} className="list-item-box">
            <span className="list-text">{ele}</span>
            <span className="delete-icon" onClick={() => fnDeleteHandler(ele)}>
              <Delete />
            </span>
          </div>
        ))}
      </div>
    </>
  );
};
export default ListIteams;
