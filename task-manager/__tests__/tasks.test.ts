/*
import { describe, it, expect, vi } from 'vitest';
import { GET, POST, DELETE, PATCH } from '@/app/api/tasks/route';
import { createMocks } from 'node-mocks-http';
import { prisma } from '../app/lib/prisma';

vi.mock('@/lib/prisma');

// Mock de la session utilisateur pour les tests authentifiés
vi.mock('next-auth', () => ({
  getServerSession: vi.fn(),
}));

describe('API /tasks', () => {
  
  it('GET devrait retourner 401 si l\'utilisateur n\'est pas authentifié', async () => {
    const { req, res } = createMocks({
      method: 'GET',
    });

    (require('next-auth').getServerSession as vi.Mock).mockResolvedValue(null);

    await GET(req as any, res as any);

    expect(res._getStatusCode()).toBe(401);
    expect(res._getData()).toContain('Not authenticated');
  });

  it('GET devrait retourner les tâches de l\'utilisateur authentifié', async () => {
    const fakeTasks = [{ id: 1, title: 'Test task', completed: false }];

    (prisma.task.findMany as vi.Mock).mockResolvedValue(fakeTasks);
    (require('next-auth').getServerSession as vi.Mock).mockResolvedValue({ user: { id: 1 } });

    const { req, res } = createMocks({
      method: 'GET',
    });

    await GET(req as any, res as any);

    expect(res._getStatusCode()).toBe(200);
    expect(JSON.parse(res._getData())).toEqual(fakeTasks);
  });

  it('POST devrait ajouter une nouvelle tâche pour un utilisateur authentifié', async () => {
    const newTask = { id: 1, title: 'New Task', completed: false };
    
    (prisma.task.create as vi.Mock).mockResolvedValue(newTask);
    (require('next-auth').getServerSession as vi.Mock).mockResolvedValue({ user: { id: 1 } });

    const { req, res } = createMocks({
      method: 'POST',
      body: JSON.stringify({ title: 'New Task' }),
    });

    await POST(req as any, res as any);

    expect(res._getStatusCode()).toBe(200);
    expect(JSON.parse(res._getData())).toEqual(newTask);
  });

  it('POST devrait retourner 401 si l\'utilisateur n\'est pas authentifié', async () => {
    const { req, res } = createMocks({
      method: 'POST',
      body: JSON.stringify({ title: 'New Task' }),
    });

    (require('next-auth').getServerSession as vi.Mock).mockResolvedValue(null);

    await POST(req as any, res as any);

    expect(res._getStatusCode()).toBe(401);
    expect(res._getData()).toContain('Not authenticated');
  });

  it('DELETE devrait supprimer une tâche pour un utilisateur authentifié', async () => {
    (prisma.task.delete as vi.Mock).mockResolvedValue({});
    (require('next-auth').getServerSession as vi.Mock).mockResolvedValue({ user: { id: 1 } });

    const { req, res } = createMocks({
      method: 'DELETE',
      body: JSON.stringify({ id: 1 }),
    });

    await DELETE(req as any, res as any);

    expect(res._getStatusCode()).toBe(200);
    expect(JSON.parse(res._getData()).message).toBe('Task deleted successfully');
  });

  it('PATCH devrait mettre à jour une tâche pour un utilisateur authentifié', async () => {
    const updatedTask = { id: 1, title: 'Updated Task', completed: true };
    
    (prisma.task.update as vi.Mock).mockResolvedValue(updatedTask);
    (require('next-auth').getServerSession as vi.Mock).mockResolvedValue({ user: { id: 1 } });

    const { req, res } = createMocks({
      method: 'PATCH',
      body: JSON.stringify({ id: 1, completed: true }),
    });

    await PATCH(req as any, res as any);

    expect(res._getStatusCode()).toBe(200);
    expect(JSON.parse(res._getData())).toEqual(updatedTask);
  });
});
*/