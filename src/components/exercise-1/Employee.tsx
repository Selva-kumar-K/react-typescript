type Employee = {
  name: string;
  title: string;
};

interface EmployeeCardProps {
  item: Employee;
}

export default function Employee({ item }: EmployeeCardProps) {
  return (
    <div className="max-w-md rounded-md bg-gray-100 m-4 p-3 shadow-xl">
      <h1 className="text-3xl font-medium">{item.name}</h1>
      <p className="text-gray-500 font-semibold">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis
        tenetur ratione non ab aperiam, corporis nobis atque reprehenderit
        deleniti architecto eligendi assumenda error voluptatibus harum
        voluptatem corrupti fuga, necessitatibus quod.
      </p>

      <h1 className="text-2xl text-blue-400 font-semibold">{item.title}</h1>
    </div>
  );
}
