export default function Footer() {
  return (
    <footer className="mt-16 border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
      <div className="max-w-5xl mx-auto px-4 py-8 grid md:grid-cols-3 gap-6 text-sm">
        <div>
          <p className="font-semibold text-neutral-900 dark:text-neutral-100">ScholarlyEdge</p>
          <p className="text-neutral-600 dark:text-neutral-300 mt-1">Study smarter with videos, PDFs, notes, PYQ tests, and instant doubt support.</p>
        </div>
        <div className="text-neutral-600 dark:text-neutral-300 space-y-1">
          <p>For Grades 6-12</p>
          <p>JEE Preparation</p>
          <p>Ask a Teacher</p>
        </div>
        <div className="text-neutral-600 dark:text-neutral-300 space-y-1">
          <p>Privacy</p>
          <p>Terms</p>
          <p>Contact</p>
        </div>
      </div>
    </footer>
  );
}
