export default function iterateThroughObject(reportWithIterator) {
  const employees = [];
  for (let employee of reportWithIterator) {
    employees.push(employee);
  }
  return employees.join(' | ');
}
