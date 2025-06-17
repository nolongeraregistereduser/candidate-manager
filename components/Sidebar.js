import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname();
  
  const isActive = (path) => {
    return pathname === path || pathname.startsWith(`${path}/`);
  };

  return (
    <aside className="w-64 bg-white border-r border-gray-200 h-screen flex flex-col flex-shrink-0">
      {/* Brand/Logo */}
      <div className="h-16 flex items-center px-6 border-b">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded bg-yellow-500 text-white flex items-center justify-center font-bold">
            R
          </div>
          <span className="text-lg font-semibold text-gray-800">Recruitment</span>
        </div>
      </div>
      
      {/* Navigation Menu */}
      <nav className="flex-1 py-6 px-4">
        <ul className="space-y-1">
          <li>
            <Link href="/dashboard" 
              className={`flex items-center px-4 py-2.5 rounded-lg ${
                isActive('/dashboard') 
                  ? 'bg-gray-100 text-gray-900' 
                  : 'text-gray-600 hover:bg-gray-50'
              }`}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
              Dashboard
            </Link>
          </li>
          <li>
            <Link href="/candidates" 
              className={`flex items-center px-4 py-2.5 rounded-lg ${
                isActive('/candidates') 
                  ? 'bg-blue-50 text-blue-700' 
                  : 'text-gray-600 hover:bg-gray-50'
              }`}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              Candidates
              <span className="ml-auto bg-gray-200 text-gray-800 text-xs font-medium rounded-full px-2 py-0.5">
                43
              </span>
            </Link>
          </li>
          <li>
            <Link href="/settings" 
              className={`flex items-center px-4 py-2.5 rounded-lg ${
                isActive('/settings') 
                  ? 'bg-gray-100 text-gray-900' 
                  : 'text-gray-600 hover:bg-gray-50'
              }`}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Settings
            </Link>
          </li>
        </ul>
      </nav>
      
      {/* User Profile Section */}
      <div className="border-t p-4">
        <div className="flex items-center">
          <div className="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 font-semibold">
            N
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-700">Admin User</p>
            <p className="text-xs text-gray-500">admin@example.com</p>
          </div>
        </div>
      </div>
    </aside>
  );
}