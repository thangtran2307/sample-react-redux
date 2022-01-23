import { ApiError, ApiErrorMessage } from '../../common/errorHandler';
import { Sample } from './dashboardInterfaces';

const SAMPLES_URL = `${process.env.REACT_APP_BACKEND_ENDPOINT}/api/Sample`;

async function getAllSamplesAsync(): Promise<Sample[]> {
  if (navigator.onLine) {
    // Calling api to get list all samples
    const response = await fetch(SAMPLES_URL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    if (response.ok) {
      return data as Sample[];
    }
    return Promise.reject(new ApiError(data.message, data.errorDetail, data.statusCode));
  }

  // No internet connection
  return Promise.reject(new ApiError(ApiErrorMessage.NoInternet, [], 500));
}

async function deleteSampleByIdAsync(sampleId: string): Promise<any> {
  if (navigator.onLine) {
    // Calling api to delete sample by id
    const bodyRequest = {
      id: sampleId,
    };

    const response = await fetch(SAMPLES_URL, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bodyRequest),
    });

    if (response.ok) {
      return true;
    }

    const data = await response.json();
    return Promise.reject(new ApiError(data.message, data.errorDetail, data.statusCode));
  }

  // No internet connection
  return Promise.reject(new ApiError(ApiErrorMessage.NoInternet, [], 500));
}

export {
  getAllSamplesAsync, deleteSampleByIdAsync,
};
