
const Students = ({student, students}) => {

  return (
    <>
        <h1>
            {student === "Justin" ? "Howdy Justin" : `Howdy ${student}`}
        </h1>
        {students.map((student, index) => (
            <p key={index}>{student}</p>
        ))}
    </>
  );
}

export default Students