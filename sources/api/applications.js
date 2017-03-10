import axios from 'axios';

function getApplications() {
  return axios('/applications.json')
    .then((response) => {
      return response.data.applications;
    }).catch((error) => {
      throw error;
    });
}

export default { getApplications };
