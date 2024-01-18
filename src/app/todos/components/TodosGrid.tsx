'use client'
import { Todo } from '@prisma/client'
import React from 'react'
import { TodoItem } from './TodoItem';
//import * as api from '@/app/todos/helpers/todos'
import { useRouter } from 'next/navigation';
import { toggleTodo } from '../actions/todo-actions';
interface Props {
  todos?: Todo[]
}

export const TodosGrid = ({ todos = [] }: Props) => {

  const router = useRouter()
  /*
  const toggleTodo = async (id: string, complete: boolean) => {
    const updateTodo = await api.Updatetodo(id, complete);
    router.refresh()
  } //TODO: router.refresh() solo refresca lo que se tenga que hacer en los cambios mas no en los demas componentes
*/

  return (
    <div className='grid grid-cols-3 sm:grid-cols-3 gap-2'>
      {
        todos.map((todo) => {
          return <TodoItem toggleTodo={toggleTodo}  key={todo.id} todo={todo} /**/  />
        })
      }
    </div>
  )
}
