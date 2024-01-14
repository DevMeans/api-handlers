import prisma from '@/app/lib/prisma';
import { Segment } from 'next/dist/server/app-render/types';
import { NextResponse, NextRequest } from 'next/server'

export async function GET(request: Request,{params}:Segment) { 
  const { id } =params
  const todo = await prisma.todo.findFirst({where:{id}})
  if(!todo){
    return NextResponse.json({message:`Todo con el id ${id} no existe`},{status:404})
  }
  return NextResponse.json(todo)
}

