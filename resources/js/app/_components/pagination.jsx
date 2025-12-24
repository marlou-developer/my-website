const defaultItems = [
  { id: 1, title: 'Back End Developer', department: 'Engineering', type: 'Full-time', location: 'Remote' },
  { id: 2, title: 'Front End Developer', department: 'Engineering', type: 'Full-time', location: 'Remote' },
  { id: 3, title: 'User Interface Designer', department: 'Design', type: 'Full-time', location: 'Remote' },
];

export default function Pagination({ items = defaultItems, currentPage = 1, itemsPerPage = 10 }) {
  const totalItems = items.length;
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  return (
    <nav
      aria-label="Pagination"
      className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 dark:border-white/10 dark:bg-transparent"
    >
      <div className="hidden sm:block">
        <p className="text-sm text-gray-700 dark:text-gray-300">
          Showing <span className="font-medium">{startItem}</span> to <span className="font-medium">{endItem}</span> of{' '}
          <span className="font-medium">{totalItems}</span> results
        </p>
      </div>
      <div className="flex flex-1 justify-between sm:justify-end">
        <button
          disabled={currentPage === 1}
          className="relative inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-700 inset-ring inset-ring-gray-300 hover:bg-gray-50 dark:bg-white/10 dark:text-gray-200 dark:inset-ring-white/5 dark:hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Previous
        </button>
        <button
          disabled={endItem >= totalItems}
          className="relative ml-3 inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-700 inset-ring inset-ring-gray-300 hover:bg-gray-50 dark:bg-white/10 dark:text-gray-200 dark:inset-ring-white/5 dark:hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>
    </nav>
  );
}
