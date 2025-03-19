import EmployeeCard from "./components/exercise-2/Employees";
import Heading from "./components/exercise-3/Heading";
import IconButton from "./components/exercise-4/IconButton";

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
      <Heading isLarge>This is important!</Heading>

      <IconButton
        className="text-red-500 flex gap-2"
        disabled
        onClick={() => console.log("Clicked")}
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-alarm-clock"
          >
            <circle cx="12" cy="13" r="8" />
            <path d="M12 9v4l2 2" />
            <path d="M5 3 2 6" />
            <path d="m22 6-3-3" />
            <path d="M6.38 18.7 4 21" />
            <path d="M17.64 18.67 20 21" />
          </svg>
        }
      >
        Clock
      </IconButton>

      <IconButton
        className="text-teal-500 flex gap-2"
        disabled
        onClick={() => console.log("Clicked")}
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-annoyed"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M8 15h8" />
            <path d="M8 9h2" />
            <path d="M14 9h2" />
          </svg>
        }
      >
        Smiley
      </IconButton>
    </>
  );
}
