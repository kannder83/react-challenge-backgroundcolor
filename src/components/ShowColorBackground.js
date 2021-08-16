const ShowColorBackground = ({ colorBg }) => {
  return (
    <div className="box-color">
      <div className="box-color_bg" style={{ backgroundColor: `${colorBg}` }}>
        {colorBg === "" ? `👨‍💻` : colorBg.toLowerCase()}
      </div>
    </div>
  );
};

export default ShowColorBackground;
