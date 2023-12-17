const g = 'git'
export default {
  pull: (remote) => `${g} pull ${remote}`,
  clone: (remote) => `${g} clone ${remote}`,
  branch: (remote) => `${g} branch`,
}
