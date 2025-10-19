'use client';

import { ProtectedRoute } from '@/components/ProtectedRoute';
import { SkeletonLoader } from '@/components/Skeleton';
import { useState, useEffect } from 'react';

export default function DashboardPage() {
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    totalBroadcasts: 0,
    totalMessages: 0,
    totalContacts: 0,
    activeOAs: 0,
  });

  useEffect(() => {
    // Simulate loading data
    setTimeout(() => {
      setStats({
        totalBroadcasts: 42,
        totalMessages: 1250,
        totalContacts: 3500,
        activeOAs: 5,
      });
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Dashboard</h1>

          {loading ? (
            <SkeletonLoader />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-gray-600 text-sm font-medium">
                  Total Broadcasts
                </h3>
                <p className="text-3xl font-bold text-gray-900 mt-2">
                  {stats.totalBroadcasts}
                </p>
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-gray-600 text-sm font-medium">
                  Total Messages
                </h3>
                <p className="text-3xl font-bold text-gray-900 mt-2">
                  {stats.totalMessages}
                </p>
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-gray-600 text-sm font-medium">
                  Total Contacts
                </h3>
                <p className="text-3xl font-bold text-gray-900 mt-2">
                  {stats.totalContacts}
                </p>
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-gray-600 text-sm font-medium">
                  Active OAs
                </h3>
                <p className="text-3xl font-bold text-gray-900 mt-2">
                  {stats.activeOAs}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </ProtectedRoute>
  );
}

