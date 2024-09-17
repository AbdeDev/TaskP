import { prisma } from '../../lib/prisma';
import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

// Récupérer les tâches
export async function GET() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
  }

  const tasks = await prisma.task.findMany({
    where: {
      userId: session.user.id,
    },
  });

  return NextResponse.json(tasks);
}

// Ajouter une tâche
export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
  }

  const { title } = await req.json();

  const task = await prisma.task.create({
    data: {
      title,
      completed: false,
      userId: session.user.id,
    },
  });

  return NextResponse.json(task);
}

// Supprimer une tâche
export async function DELETE(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
  }

  const { id } = await req.json();

  try {
    await prisma.task.delete({
      where: {
        id: Number(id),
      },
    });

    return NextResponse.json({ message: 'Task deleted successfully' });
  } catch (error) {
    return NextResponse.json({ error: 'Task not found or could not be deleted' }, { status: 404 });
  }
}

// Mettre à jour l'état "completed" d'une tâche
export async function PATCH(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
  }

  const { id, completed } = await req.json();

  try {
    const updatedTask = await prisma.task.update({
      where: {
        id: Number(id),
      },
      data: {
        completed,
      },
    });

    return NextResponse.json(updatedTask);
  } catch (error) {
    return NextResponse.json({ error: 'Task not found or could not be updated' }, { status: 404 });
  }
}