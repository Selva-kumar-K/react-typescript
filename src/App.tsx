import EmployeeCard from "./components/exercise-2/Employees";

export default function App() {
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
    <main>
      {employees.map((employee) => (
        <EmployeeCard key={employee.name} item={employee} />
      ))}
    </main>
  );
}
