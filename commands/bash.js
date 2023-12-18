const echo = (target) => `echo -n "${target}"`

export default {
  echo,
  ls: () => 'ls',
  mkdir: (dir) => `mkdir ${dir}`,
  write: (filename, content) => `${echo(content)} | cat > "${filename}"`,
  cd: (dir) => `cd ${dir}`,
}
