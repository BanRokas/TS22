const List = ({ type, items }) => {

  // const ListType = type;

  const inlineStyle = {
    color: "orange",
    backgroundColor: "black"
  };

  return (
    // <ListType style={inlineStyle}>
      // {
      //   items.map((item, i) => 
      //     <li key={i}>{item}</li>
      //   )
      // }
    // </ListType>
    type === 'ul' ? 
    <ul style={inlineStyle}>
      {
        items.map((item, i) => 
          <li key={i}>{item}</li>
        )
      }
    </ul> : 
    <ol style={inlineStyle}>
      {
        items.map((item, i) => 
          <li key={i}>{item}</li>
        )
      }
    </ol>
  );
}
 
export default List;