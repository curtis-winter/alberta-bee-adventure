import React, { useState, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function ErrorBoundary({ children }: Props) {
  const [hasError, setHasError] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  if (hasError) {
    return (
      <div className="min-h-screen bg-sky-50 flex flex-col items-center justify-center p-8">
        <div className="bg-white border-4 border-black p-8 max-w-md text-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <div className="text-6xl mb-4">⚠️</div>
          <h1 className="font-black text-2xl uppercase mb-4">Something went wrong</h1>
          <p className="text-stone-600 mb-6">{error?.message || 'An unexpected error occurred'}</p>
          <button
            onClick={() => { setHasError(false); setError(null); }}
            className="bg-black text-white font-black px-6 py-3 border-4 border-black hover:bg-stone-800 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return children;
}