import prisma from "@/app/lib/prisma";



export const metadata = {
  title: 'Listado de TODO',
  description: 'Listado de TODO',
};

export default async function RestTodos() {
  const todos = await prisma.todo.findMany({ orderBy: { description: 'asc' } })
  return (
    <div>
      {JSON.stringify(todos)}
    </div>
  );
}