export default function authLayout({ children }) {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 font-inter p-4">
        {children}
      </div>
    </>
  );
}
