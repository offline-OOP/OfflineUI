/** *
 * Returns a function that checks if the passed string is in the array
 *
 * @param { Array<String> } vars
 */
export function oneOfArray(vars: Array<string>) {
  return (value: string) => vars.indexOf(value) !== -1;
}

export default {
  oneOfArray,
};
