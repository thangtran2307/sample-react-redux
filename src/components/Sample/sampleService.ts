import { ApiError, ApiErrorMessage } from '../../common/errorHandler';
import { SampleDetail } from './sampleInterfaces';

const GET_SAMPLE_BY_ID_URL = `${process.env.REACT_APP_BACKEND_ENDPOINT}/api/Sample/{sampleId}`;
const CREATE_UPDATE_SAMPLE_URL = `${process.env.REACT_APP_BACKEND_ENDPOINT}/api/Sample`;

async function getSampleByIdAsync(id: string) : Promise<SampleDetail> {
  if (navigator.onLine) {
    // Calling api to get sample by Id
    const response = await fetch(GET_SAMPLE_BY_ID_URL.replace('{sampleId}', id), {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    if (response.ok) {
      return data as SampleDetail;
    }
    return Promise.reject(new ApiError(data.message, data.errorDetail, data.statusCode));
  }

  // No internet connection
  return Promise.reject(new ApiError(ApiErrorMessage.NoInternet, [], 500));
}

async function createUpdateSampleAsync(
  sample: SampleDetail,
): Promise<SampleDetail> {
  if (navigator.onLine) {
    // Calling api to create / update sample
    const response = await fetch(CREATE_UPDATE_SAMPLE_URL, {
      method: sample.id ? 'PUT' : 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(sample),
    });

    const data = await response.json();
    if (response.ok) {
      return data as SampleDetail;
    }
    return Promise.reject(new ApiError(data.message, data.errorDetail, data.statusCode));
  }

  // No internet connection
  return Promise.reject(new ApiError(ApiErrorMessage.NoInternet, [], 500));
}

export {
  getSampleByIdAsync, createUpdateSampleAsync,
};
