'use client';

import { ProtectedRoute } from '@/components/ProtectedRoute';
import { useState } from 'react';

interface Message {
  id: string;
  sender: string;
  content: string;
  timestamp: string;
  direction: 'in' | 'out';
}

export default function MessagesPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'Customer 1',
      content: 'Hello, I have a question about your product',
      timestamp: '2024-01-16 10:30',
      direction: 'in',
    },
    {
      id: '2',
      sender: 'You',
      content: 'Hi! How can I help you?',
      timestamp: '2024-01-16 10:31',
      direction: 'out',
    },
  ]);

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Messages</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Conversation List */}
            <div className="bg-white rounded-lg shadow">
              <div className="p-4 border-b">
                <h2 className="font-bold text-gray-900">Conversations</h2>
              </div>
              <div className="divide-y">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="p-4 hover:bg-gray-50 cursor-pointer border-l-4 border-transparent hover:border-blue-600"
                  >
                    <p className="font-medium text-gray-900">Customer {i}</p>
                    <p className="text-sm text-gray-600">Last message...</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Chat Area */}
            <div className="lg:col-span-2 bg-white rounded-lg shadow flex flex-col">
              <div className="p-4 border-b">
                <h2 className="font-bold text-gray-900">Customer 1</h2>
              </div>

              <div className="flex-1 p-4 overflow-y-auto space-y-4">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${
                      msg.direction === 'out' ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    <div
                      className={`max-w-xs px-4 py-2 rounded-lg ${
                        msg.direction === 'out'
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-200 text-gray-900'
                      }`}
                    >
                      <p>{msg.content}</p>
                      <p className="text-xs mt-1 opacity-70">{msg.timestamp}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 border-t">
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Type a message..."
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}

