'use client';

export default function DebugPage() {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Observability Debug Page</h1>
      <p>Click the button below to trigger a Sentry error.</p>
      <button
        onClick={() => {
          throw new Error('Sentry Test Error: Storefront-Ops Debug');
        }}
        style={{
          padding: '10px 20px',
          backgroundColor: '#e11d48',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Break the App
      </button>
    </div>
  );
}
