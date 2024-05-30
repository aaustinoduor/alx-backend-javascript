export default function createReportObject(employeesList) {
  return {
    allEmployees: employeesList,
    // eslint-disable-next-line
    getNumberOfDepartments(employeesList) {
      return Object.keys(employeesList).length;
    },
  };
}
