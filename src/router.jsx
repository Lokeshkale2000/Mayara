import { useState, useEffect } from 'react'

// Read current hash from URL e.g. #/about → /about
function getPath() {
  return window.location.hash.replace('#', '') || '/'
}

export function useRouter() {
  const [path, setPath] = useState(getPath)

  useEffect(() => {
    const onChange = () => setPath(getPath())
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])

  const navigate = (to) => { window.location.hash = to }

  return { path, navigate }
}

export function Link({ to, children, className, style }) {
  return (
    <a
      href={`#${to}`}
      className={className}
      style={style}
      onClick={(e) => { e.preventDefault(); window.location.hash = to }}
    >
      {children}
    </a>
  )
}

export function NavLink({ to, children, className, end }) {
  const { path } = useRouter()
  const isActive = end ? path === to : path.startsWith(to)
  const cls = typeof className === 'function' ? className({ isActive }) : className
  return (
    <a
      href={`#${to}`}
      className={cls}
      onClick={(e) => { e.preventDefault(); window.location.hash = to }}
    >
      {children}
    </a>
  )
}

export function Routes({ children }) {
  const { path } = useRouter()
  const routes = Array.isArray(children) ? children : [children]
  const match = routes.find((r) => {
    if (r.props.path === '*') return false
    return r.props.index ? path === '/' : path === r.props.path
  })
  const fallback = routes.find((r) => r.props.path === '*')
  return match ? match.props.element : fallback ? fallback.props.element : null
}

export function Route() { return null }
