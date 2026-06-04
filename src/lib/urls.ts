const base = import.meta.env.BASE_URL || '/';

function normalizeBase() {
  if (base === '/') {
    return '/';
  }

  return `/${base.replace(/^\/+|\/+$/g, '')}/`;
}

export function withBase(path: string) {
  const normalizedBase = normalizeBase();
  const normalizedPath = `/${path.replace(/^\/+/, '')}`;

  if (normalizedBase !== '/' && normalizedPath.startsWith(normalizedBase)) {
    return normalizedPath;
  }

  if (normalizedPath === '/') {
    return normalizedBase;
  }

  return normalizedBase === '/'
    ? normalizedPath
    : `${normalizedBase.replace(/\/$/, '')}${normalizedPath}`;
}

export function absoluteUrl(path: string, site: URL | string) {
  const siteUrl = site.toString().replace(/\/$/, '');
  return `${siteUrl}${withBase(path)}`;
}
