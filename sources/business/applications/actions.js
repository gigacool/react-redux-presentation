export const fetchApplications = () => ({
  type: 'APPLICATIONS_FETCH'
});

export const fetchApplicationsPending = () => ({
  type: 'APPLICATIONS_FETCH_PENDING'
});

export const fetchApplicationsSuccess = (applications) => ({
  type: 'APPLICATIONS_FETCH_SUCCESS',
  payload: {
    applications: applications
  }
});

export const fetchApplicationsFailure = (error) => ({
  type: 'APPLICATIONS_FETCH_FAILURE',
  payload: {
    error: error
  }
});

export const filterApplications = (filter) => ({
  type: 'APPLICATIONS_FILTER_BY_NAME',
  payload: {
    filter: filter.toLocaleLowerCase()
  }
});
