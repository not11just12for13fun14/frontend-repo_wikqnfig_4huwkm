import { useState } from 'react';

export default function AuthModals({ open, mode, onClose, onSwitch, onVerified }) {
  const [step, setStep] = useState('form'); // form | otp

  const closeAll = () => {
    setStep('form');
    onClose();
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-30 grid place-items-center bg-black/40 p-4">
      <div className="w-full max-w-md rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 shadow-xl">
        {step === 'form' ? (
          <AuthForm mode={mode} onClose={closeAll} onSwitch={onSwitch} onNext={() => setStep('otp')} />
        ) : (
          <OTPForm onClose={closeAll} onVerified={() => { onVerified(); closeAll(); }} />
        )}
      </div>
    </div>
  );
}

function AuthForm({ mode, onClose, onSwitch, onNext }) {
  return (
    <div className="grid gap-4">
      <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
        {mode === 'login' ? 'Welcome back' : 'Create your account'}
      </h3>

      <div className="grid gap-3">
        {mode === 'register' && (
          <input className="rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 px-3 py-2 text-sm text-neutral-800 dark:text-neutral-100" placeholder="Full name" />
        )}
        <input type="email" className="rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 px-3 py-2 text-sm text-neutral-800 dark:text-neutral-100" placeholder="Email" />
        <input type="password" className="rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 px-3 py-2 text-sm text-neutral-800 dark:text-neutral-100" placeholder="Password" />
      </div>

      <button onClick={onNext} className="rounded-full bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 text-sm">Continue</button>

      <p className="text-xs text-neutral-600 dark:text-neutral-300">
        {mode === 'login' ? "Don't have an account?" : 'Already have an account?'}{' '}
        <button onClick={onSwitch} className="text-indigo-600 hover:underline">{mode === 'login' ? 'Register' : 'Login'}</button>
      </p>

      <button onClick={onClose} className="text-xs text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 self-start">Close</button>
    </div>
  );
}

function OTPForm({ onClose, onVerified }) {
  return (
    <div className="grid gap-4">
      <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">Enter OTP</h3>
      <p className="text-sm text-neutral-600 dark:text-neutral-300">We sent a 6-digit code to your email/phone.</p>
      <div className="grid grid-cols-6 gap-2">
        {Array.from({ length: 6 }).map((_, i) => (
          <input key={i} maxLength={1} className="text-center rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 px-2 py-2 text-sm text-neutral-800 dark:text-neutral-100" />
        ))}
      </div>
      <button onClick={onVerified} className="rounded-full bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 text-sm">Verify</button>
      <button onClick={onClose} className="text-xs text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 self-start">Close</button>
    </div>
  );
}
