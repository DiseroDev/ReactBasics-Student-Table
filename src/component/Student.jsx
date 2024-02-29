const Student = ({ id, name, age, major, university, averageGrade }) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{age}</td>
      <td>{major}</td>
      <td>{university}</td>
      <td>{averageGrade}</td>
    </tr>
  );
};

export default Student;
