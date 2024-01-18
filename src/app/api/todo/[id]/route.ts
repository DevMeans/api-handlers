import prisma from '@/app/lib/prisma';
import { Segment } from 'next/dist/server/app-render/types';
import { NextResponse, NextRequest } from 'next/server'
import * as yup from 'yup';
const postSchema = yup.object({
  description: yup.string(),
  complete: yup.boolean().optional().default(false)
})
export async function GET(request: Request, { params }: Segment) {
  const { id } = params
  const todo = await prisma.todo.findFirst({ where: { id } })
  if (!todo) {
    return NextResponse.json({ message: `Todo con el id ${id} no existe` }, { status: 404 })
  }
  return NextResponse.json(todo)
}

export async function PUT(request: Request, { params }: Segment) {
  const { id } = params
  const todo = await prisma.todo.findFirst({ where: { id } })
  if (!todo) {
    return NextResponse.json({ message: `Todo con el id ${id} no existe` }, { status: 404 })
  }
  try {
    const { complete, description } = await postSchema.validate(await request.json())
    const todo = await prisma.todo.update({ data: { complete, description, }, where: { id } })
    return NextResponse.json(todo)
  } catch (error) {
    return NextResponse.json(error, { status: 400 })
  }

}