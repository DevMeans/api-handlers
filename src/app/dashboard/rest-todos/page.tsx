import prisma from "@/app/lib/prisma";
import { TodosGrid } from '../../todos/components/TodosGrid';
import { NewTodo } from "@/app/todos";



export const metadata = {
  title: 'Listado de TODO',
  description: 'Listado de TODO',
};

export default async function RestTodos() {
  const todos = await prisma.todo.findMany({ orderBy: { description: 'asc' } })
  return (
    <div>
      <div className="w-full px-3 mx-5 mb-5">
        <NewTodo />
      </div>
      
      <TodosGrid  todos={todos}/>
    </div>
  );
}