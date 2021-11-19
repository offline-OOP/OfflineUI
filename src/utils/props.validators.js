export function oneOfArray (vars) {
  return (value) =>
      vars.indexOf(value) !== -1
}
