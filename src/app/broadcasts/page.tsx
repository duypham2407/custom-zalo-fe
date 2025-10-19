'use client';

import { ProtectedRoute } from '@/components/ProtectedRoute';
import { DataTable } from '@/components/DataTable';
import { useState } from 'react';

interface Broadcast {
  id: string;
  title: string;
  status: 'pending' | 'running' | 'done' | 'failed';
  recipients: number;
  createdAt: string;
}

export default function BroadcastsPage() {
  const [broadcasts, setBroadcasts] = useState<Broadcast[]>([
    {
      id: '1',
      title: 'Summer Sale Campaign',
      status: 'done',
      recipients: 1500,
      createdAt: '2024-01-15',
    },
    {
      id: '2',
      title: 'New Product Launch',
      status: 'running',
      recipients: 2000,
      createdAt: '2024-01-16',
    },
  ]);

  const columns = [
    { key: 'title' as const, label: 'Title', sortable: true },
    { key: 'status' as const, label: 'Status', sortable: true },
    { key: 'recipients' as const, label: 'Recipients', sortable: true },
    { key: 'createdAt' as const, label: 'Created', sortable: true },
  ];

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Broadcasts</h1>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              New Broadcast
            </button>
          </div>

          <div className="bg-white rounded-lg shadow">
            <DataTable columns={columns} data={broadcasts} />
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}

