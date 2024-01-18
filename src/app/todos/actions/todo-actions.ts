'use server'

import prisma from "@/app/lib/prisma"
import { Todo } from '@prisma/client';

export const toggleTodo = async(id:string,complete:boolean):Promise<Todo>=>{
    
    const todo=await prisma.todo.findFirst({where:{id}})
        if(!todo){
            throw `Todo con el id ${id} no encontrado`
        }
        const updateTodo = await prisma.todo.update({

            where:{id},
            data:{complete}
        })
        return updateTodo

}
