import "./TypeIcon.css"
const TypeIcon = ({ typeStyle }) => {
  return ( 
    <div 
      className="type-icon-container"
      style={{
        "backgroundColor": typeStyle["color"]
      }}
      >
      {typeStyle["icon"]}
    </div>
   );
}

export default TypeIcon;