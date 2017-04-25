import { normalize, schema } from 'normalizr';

const ApplicationSchema = new schema.Entity('applications', {
  id: '',
  name:'name',
});

function applyFilter(applications, filter) {
  let visibleAppsLength = 0;
  let results = applications.map((application) => {
    let visible = application.name.toLocaleLowerCase().indexOf(filter) >= 0;
    if (visible) visibleAppsLength++;
    return { ...application, visible: visible };
  });
  return {visibleAppsLength: visibleAppsLength, applications: results};
}

function updateScores(applications) {
  const visibleApps = applications.filter((application) => {
    return application.visible;
  });
  let aggregate = visibleApps.reduce((result, application) => {
    for (let key in application.results) {
      if (typeof result[key] === 'undefined') {
        result[key] = application.results[key];
      }
      else {
        result[key] = result[key] + application.results[key];
      }
    }
    return result;
  }, {});

  for(let key in aggregate) {
    aggregate[key] = aggregate[key] / visibleApps.length;
  }
  const results = [
    {title:'Total Quality', value:aggregate[60017], hasValue:visibleApps.length>0},
    {title:'Security', value:aggregate[60016], hasValue:visibleApps.length>0},
    {title:'Robustness', value:aggregate[60013], hasValue:visibleApps.length>0},
    {title:'Efficiency', value:aggregate[60014], hasValue:visibleApps.length>0},
    {title:'Changeability', value:aggregate[60012], hasValue:visibleApps.length>0},
    {title:'Transferability', value:aggregate[60011], hasValue:visibleApps.length>0},
  ];
  return results;
}

export const applications = function(state = { fetched: false, scores:[]}, action) {
  let data;
  switch (action.type) {
    case 'APPLICATIONS_FETCH_PENDING':
      return { fetched: false, applications:[], filter:'', scores:[] };
    case 'APPLICATIONS_FETCH_SUCCESS':
      data = applyFilter(action.payload.applications, '');
      return {
        fetched: true,
        filter:'',
        applications: data.applications,
        visibleAppsLength: data.visibleAppsLength,
        scores:updateScores(data.applications)
      };
    case 'APPLICATIONS_FETCH_FAILURE':
      return {
        error: action.payload.error
      };
    case 'APPLICATIONS_FILTER_BY_NAME':
      data = applyFilter(state.applications, action.payload.filter);
      return {
        ...state,
        filter:action.payload.filter,
        applications: data.applications,
        visibleAppsLength: data.visibleAppsLength,
        scores:updateScores(data.applications)
      };
    default: return state;
  }
};
