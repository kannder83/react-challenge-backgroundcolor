const ShowColorBackground = ({ colorBg, setColorBg }) => {
  return (
    <div className="box-color">
      <div className="box-color_bg" style={{ backgroundColor: `${colorBg}` }}>
        Color here
      </div>
    </div>
  );
};

export default ShowColorBackground;
