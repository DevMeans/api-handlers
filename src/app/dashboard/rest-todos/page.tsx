export const dynamic = 'force-dynamic'
export const revalidate = 0
import prisma from "@/app/lib/prisma";
import { TodosGrid } from '../../todos/components/TodosGrid';
import { NewTodo } from "@/app/todos";
import { getUserSessionServer } from "@/app/auth/actions/auth-actions";
import { redirect } from "next/navigation";



export const metadata = {
  title: 'Listado de TODO',
  description: 'Listado de TODO',
};

export default async function RestTodos() {
  const user = await getUserSessionServer()
  if (!user) redirect('/api/auth/signin');

  const todos = await prisma.todo.findMany({ where: { userId: user.id }, orderBy: { description: 'asc' } })

  return (
    <div>
      <div className="w-full px-3 mx-5 mb-5">
        <NewTodo />
      </div>

      <TodosGrid todos={todos} />
    </div>
  );
}