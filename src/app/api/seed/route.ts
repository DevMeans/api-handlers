import prisma from '@/app/lib/prisma'
import { NextResponse, NextRequest } from 'next/server'
import bcrypt from 'bcryptjs';

export async function GET(request: Request) {
    await prisma.todo.deleteMany()
    await prisma.user.deleteMany()
    const user = await prisma.user.create({
        data: {
            email: 'test1@gmail.com',
            password: bcrypt.hashSync('1234'),
            roles: ['user', 'super-user', 'client'],
            todos: {
                create:
                    [
                        { description: 'Píedra del alma', complete: true },
                        { description: 'Píedra del poder' },
                        { description: 'Píedra del tiempo' },
                        { description: 'Píedra del espacio' },
                        { description: 'Píedra del realidad' }
                    ]

            }
        }
    })
    /* const todo = await prisma.todo.createMany({
      
     })*/
    // console.log(todo)
    return NextResponse.json({ message: 'Seed execute' })
}