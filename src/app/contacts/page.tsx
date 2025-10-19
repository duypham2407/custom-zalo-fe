'use client';

import { ProtectedRoute } from '@/components/ProtectedRoute';
import { DataTable } from '@/components/DataTable';
import { useState } from 'react';

interface Contact {
  id: string;
  name: string;
  phone: string;
  zaloId: string;
  tags: string;
}

export default function ContactsPage() {
  const [contacts, setContacts] = useState<Contact[]>([
    {
      id: '1',
      name: 'John Doe',
      phone: '0912345678',
      zaloId: 'zalo_123',
      tags: 'VIP, Premium',
    },
    {
      id: '2',
      name: 'Jane Smith',
      phone: '0987654321',
      zaloId: 'zalo_456',
      tags: 'Regular',
    },
  ]);

  const columns = [
    { key: 'name' as const, label: 'Name', sortable: true },
    { key: 'phone' as const, label: 'Phone', sortable: true },
    { key: 'zaloId' as const, label: 'Zalo ID', sortable: false },
    { key: 'tags' as const, label: 'Tags', sortable: false },
  ];

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Contacts</h1>
            <div className="flex gap-2">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Import CSV
              </button>
              <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                Export
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow">
            <DataTable columns={columns} data={contacts} />
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}

