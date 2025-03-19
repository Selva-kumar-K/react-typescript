import EmployeeCard from "./components/exercise-2/Employees";
import Heading from "./components/exercise-3/Heading";

export default function App() {
  const name = "Selva";
  const employees = [
    {
      name: "Selva",
      title: "Software Engineer",
    },
    {
      name: "Nithish",
      title: "Animation Designer",
      website: "https://www.google.com",
    },
  ];
  return (
    <>
      <main>
        {employees.map((employee) => (
          <EmployeeCard key={employee.name} item={employee} />
        ))}
      </main>

      <Heading>Hello World!</Heading>
      <Heading>Hello {name}</Heading>
      <Heading>Hello {name.length}</Heading>
      <Heading>Hello {name.length && 2}</Heading>
      <Heading>
        Hello <strong>{name}</strong>
      </Heading>
      <Heading></Heading>
    </>
  );
}
