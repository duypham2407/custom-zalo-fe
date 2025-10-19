'use client';

import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/store/authStore';
import { useToast } from '@/components/Toast';

export default function LoginPage() {
  const router = useRouter();
  const { setUser, setToken } = useAuthStore();
  const { toasts, addToast, removeToast } = useToast();

  const handleZaloLogin = () => {
    const appId = process.env.NEXT_PUBLIC_ZALO_APP_ID;
    const redirectUri = encodeURIComponent(
      `${window.location.origin}/api/auth/callback`
    );
    const oauthUrl = `https://oauth.zaloapp.com/v4/auth?app_id=${appId}&redirect_uri=${redirectUri}`;
    window.location.href = oauthUrl;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-2xl p-8 max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Zalo Marketing</h1>
          <p className="text-gray-600 mt-2">Professional Marketing Automation</p>
        </div>

        <button
          onClick={handleZaloLogin}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition duration-200"
        >
          Login with Zalo
        </button>

        <p className="text-center text-gray-600 text-sm mt-6">
          By logging in, you agree to our Terms of Service
        </p>
      </div>

      {toasts.map((toast) => (
        <div key={toast.id} className="fixed top-4 right-4">
          {/* Toast will be rendered by ToastContainer */}
        </div>
      ))}
    </div>
  );
}

