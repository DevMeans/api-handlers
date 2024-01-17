import prisma from "@/app/lib/prisma";
import { TodosGrid } from '../../todos/components/TodosGrid';



export const metadata = {
  title: 'Listado de TODO',
  description: 'Listado de TODO',
};

export default async function RestTodos() {
  const todos = await prisma.todo.findMany({ orderBy: { description: 'asc' } })
  return (
    <div>
      <TodosGrid  todos={todos}/>
    </div>
  );
}