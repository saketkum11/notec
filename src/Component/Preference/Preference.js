import { useNote } from "../../Context/Note-context/Note-context";
import { ACTION_TYPE } from "../../Reducer/service";

const Preference = ({ noteData, setNoteData }) => {
  const preferenceList = ["High", "Medium", "Low"];
  const { noteState, noteDispatch } = useNote();
  return (
    <>
      <div
        className="btn-group"
        role="group"
        aria-label="Basic radio toggle button group"
      >
        {preferenceList.map((preference) => {
          return (
            <>
              <input
                onClick={(event) => {
                  noteDispatch({
                    type: ACTION_TYPE.ADD_PREFRENCE,
                    payload: event.target.value,
                  });
                }}
                key={preference}
                type="radio"
                className="btn-check btn-primary"
                name={preference}
                id={preference}
                autoComplete="off"
                value={preference}
              />
              <label className="btn btn-outline-secondary" htmlFor={preference}>
                {preference}
              </label>
            </>
          );
        })}
      </div>
    </>
  );
};
export { Preference };
