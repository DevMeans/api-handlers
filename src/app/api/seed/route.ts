import prisma from '@/app/lib/prisma'
import { NextResponse, NextRequest } from 'next/server'

export async function GET(request: Request) {
    await prisma.todo.deleteMany()
    const todo = await prisma.todo.createMany({
        data: [
            { description: 'Píedra del alma', complete: true },
            { description: 'Píedra del poder' },
            { description: 'Píedra del tiempo' },
            { description: 'Píedra del espacio' },
            { description: 'Píedra del realidad' }
        ]
    })
    console.log(todo)
    return NextResponse.json({ message: 'Seed execute' })
}