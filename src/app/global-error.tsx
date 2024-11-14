'use client';
import React from 'react';

export interface GlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  return (
    <html>
      <body>
        <div className="gap-4">
          <h2>{`Something globally went wrong! ${error.message}`}</h2>
          <button className="border" onClick={() => reset()}>
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
