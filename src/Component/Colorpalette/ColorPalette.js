import { useNote } from "../../Context/Note-context/Note-context";
import { ACTION_TYPE } from "../../Reducer/service";

const ColorPalette = ({ setNoteData, noteData, note }) => {
  const colorList = ["primary", "secondary", "success", "warning"];
  const { noteState, noteDispatch } = useNote();

  console.log("note from color palette", noteState);
  return (
    <>
      <div className="btn-group me-2" role="group" aria-label="First group">
        {colorList.map((color) => {
          return (
            <>
              <button
                onClick={() => {
                  noteDispatch({
                    type: ACTION_TYPE.ADD_COLOR,
                    payload: color,
                  });
                  setNoteData({
                    ...noteData,
                    color: [color],
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
