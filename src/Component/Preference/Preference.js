const Preference = ({ noteData, setNoteData }) => {
  const preferenceList = ["High", "Medium", "Low"];
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
                  setNoteData({ ...noteData, preference: event.target.value });
                }}
                key={preference}
                type="radio"
                className="btn-check"
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
