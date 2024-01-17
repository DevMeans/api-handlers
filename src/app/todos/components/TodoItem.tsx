import { Todo } from '@prisma/client'
import React from 'react'

interface Props{
    todo:Todo
}

export const TodoItem = ({todo}:Props) => {
  return (
    <div>{todo.description}</div>
  )
}
