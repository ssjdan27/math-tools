import { Link, NavLink, Outlet } from 'react-router-dom'
import { PageContainer } from '../../components/ui/PageContainer'
import { classNames } from '../../lib/utils/classNames'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/cantor', label: 'Cantor' },
  { to: '/complex', label: 'Complex' },
  { to: '/barycentric', label: 'Barycentric' },
]

export const AppLayout = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="border-b border-slate-200 bg-white">
        <PageContainer>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <Link className="text-xl font-semibold tracking-tight text-slate-900" to="/">
              Math Tools
            </Link>
            <nav className="flex flex-wrap gap-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  className={({ isActive }) =>
                    classNames(
                      'rounded-md px-3 py-1.5 text-sm font-medium transition',
                      isActive ? 'bg-sky-100 text-sky-800' : 'text-slate-700 hover:bg-slate-100',
                    )
                  }
                  to={item.to}
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </div>
        </PageContainer>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}
