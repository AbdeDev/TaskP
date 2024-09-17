import { prisma } from '../../lib/prisma';
import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export async function GET() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
  }

  // Récupérer les tâches pour l'utilisateur connecté
  const tasks = await prisma.task.findMany({
    where: {
      userId: session.user.id,
    },
  });

  return NextResponse.json(tasks);
}

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
  }

  const { title } = await req.json();

  // Créer une nouvelle tâche pour l'utilisateur connecté
  const task = await prisma.task.create({
    data: {
      title,
      completed: false,
      userId: session.user.id,
    },
  });

  return NextResponse.json(task);
}
