const ColorPalette = ({ setNoteData, noteData }) => {
  const colorList = ["primary", "secondary", "success", "warning"];
  return (
    <>
      <div className="btn-group me-2" role="group" aria-label="First group">
        {colorList.map((color) => {
          return (
            <>
              <button
                onClick={() => {
                  setNoteData({
                    ...noteData,
                    color: color,
                  });
                }}
                key={color}
                type="button"
                className={`btn btn-${color}`}
                value={color}
              >
                {color}
              </button>
            </>
          );
        })}
      </div>
    </>
  );
};
export { ColorPalette };
