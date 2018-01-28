
const ipfsPathRegexp = /\/ipfs\/.*\//

export function getRoutePrefix(options = { fallback: '' }) {
  const location = window.location.href || window.location
  return ipfsPathRegexp.test(location) ? ipfsPathRegexp.exec(location)[0].slice(0, -1) : options.fallback
}
