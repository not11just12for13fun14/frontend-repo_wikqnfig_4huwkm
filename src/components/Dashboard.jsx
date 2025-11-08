import { useState } from 'react';
import { Home, PlayCircle, FileText, BookOpen, MessageSquare } from 'lucide-react';

const tabs = [
  { key: 'videos', label: 'Videos', icon: PlayCircle },
  { key: 'pdfs', label: 'PDFs', icon: FileText },
  { key: 'notes', label: 'Notes', icon: BookOpen },
  { key: 'chat', label: 'Chat', icon: MessageSquare },
];

export default function Dashboard() {
  const [active, setActive] = useState('videos');

  return (
    <section className="min-h-[70vh]">
      <div className="max-w-5xl mx-auto px-4 py-6">
        <div className="flex items-center gap-2 mb-4 text-neutral-900 dark:text-neutral-100">
          <Home size={18} />
          <h2 className="text-xl font-semibold">Dashboard</h2>
        </div>

        <div className="grid gap-6">
          <div className="flex overflow-x-auto no-scrollbar gap-2">
            {tabs.map(({ key, label, icon: Icon }) => (
              <button
                key={key}
                onClick={() => setActive(key)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border transition text-sm whitespace-nowrap ${
                  active === key
                    ? 'bg-indigo-600 text-white border-indigo-600'
                    : 'border-neutral-200 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800'
                }`}
              >
                <Icon size={18} /> {label}
              </button>
            ))}
          </div>

          <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-4">
            {active === 'videos' && <Videos />}
            {active === 'pdfs' && <PDFs />}
            {active === 'notes' && <Notes />}
            {active === 'chat' && <Chat />}
          </div>
        </div>
      </div>

      <BottomNav active={active} setActive={setActive} />
    </section>
  );
}

function BottomNav({ active, setActive }) {
  return (
    <nav className="fixed bottom-4 left-0 right-0 mx-auto max-w-md w-[90%] rounded-2xl backdrop-blur bg-white/80 dark:bg-neutral-900/80 border border-neutral-200 dark:border-neutral-800 shadow-lg">
      <div className="grid grid-cols-4">
        {tabs.map(({ key, label, icon: Icon }) => (
          <button
            key={key}
            onClick={() => setActive(key)}
            className={`flex flex-col items-center gap-1 py-3 text-xs ${
              active === key ? 'text-indigo-600' : 'text-neutral-600 dark:text-neutral-300'
            }`}
          >
            <Icon size={20} />
            {label}
          </button>
        ))}
      </div>
    </nav>
  );
}

function Videos() {
  const items = [
    { title: 'Motion in a Straight Line', grade: 'Class 11', duration: '12:45' },
    { title: 'Trigonometry Basics', grade: 'Class 10', duration: '08:12' },
    { title: 'Atoms and Molecules', grade: 'Class 9', duration: '15:30' },
  ];
  return (
    <div className="grid gap-3">
      {items.map((v, i) => (
        <div key={i} className="flex items-center justify-between rounded-lg border border-neutral-200 dark:border-neutral-800 p-3">
          <div>
            <p className="font-medium text-neutral-900 dark:text-neutral-100">{v.title}</p>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">{v.grade}</p>
          </div>
          <span className="text-xs text-neutral-600 dark:text-neutral-300">{v.duration}</span>
        </div>
      ))}
    </div>
  );
}

function PDFs() {
  const items = [
    { title: 'Electrostatics Notes', size: '1.2 MB' },
    { title: 'CBSE Class 9: Chemistry', size: '900 KB' },
    { title: 'JEE PYQ 2018-2023', size: '2.5 MB' },
  ];
  return (
    <div className="grid gap-3">
      {items.map((d, i) => (
        <div key={i} className="flex items-center justify-between rounded-lg border border-neutral-200 dark:border-neutral-800 p-3">
          <div>
            <p className="font-medium text-neutral-900 dark:text-neutral-100">{d.title}</p>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">{d.size}</p>
          </div>
          <button className="text-xs px-3 py-1.5 rounded-full border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-200">Open</button>
        </div>
      ))}
    </div>
  );
}

function Notes() {
  return (
    <div className="grid gap-3">
      <textarea
        className="w-full h-40 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 p-3 text-sm text-neutral-800 dark:text-neutral-100 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        placeholder="Write your quick notes here..."
      />
      <button className="self-start inline-flex items-center gap-2 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 text-sm transition">
        Save Note
      </button>
    </div>
  );
}

function Chat() {
  const [messages, setMessages] = useState([
    { role: 'teacher', text: 'Hi! What are you stuck on today?' },
  ]);
  const [input, setInput] = useState('');

  const send = () => {
    if (!input.trim()) return;
    setMessages((m) => [...m, { role: 'student', text: input.trim() }]);
    setInput('');
  };

  return (
    <div className="grid gap-3">
      <div className="max-h-56 overflow-y-auto space-y-2 pr-1">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`max-w-[80%] rounded-2xl px-3 py-2 text-sm ${
              m.role === 'teacher'
                ? 'bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-100'
                : 'bg-indigo-600 text-white ml-auto'
            }`}
          >
            {m.text}
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && send()}
          className="flex-1 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 text-neutral-800 dark:text-neutral-100 placeholder-neutral-400"
          placeholder="Ask a doubt..."
        />
        <button onClick={send} className="rounded-full bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 text-sm">Send</button>
      </div>
    </div>
  );
}
