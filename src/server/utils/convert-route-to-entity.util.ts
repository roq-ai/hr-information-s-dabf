const mapping: Record<string, string> = {
  companies: 'company',
  employees: 'employee',
  'job-applications': 'job_application',
  'job-openings': 'job_opening',
  users: 'user',
  'vacation-requests': 'vacation_request',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
