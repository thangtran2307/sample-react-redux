import { ApiError, ApiErrorMessage } from '../../common/errorHandler';
import { Sample } from './dashboardInterfaces';

const GET_ALL_SAMPLES_URL = `${process.env.REACT_APP_BACKEND_ENDPOINT}/api/Sample`;

async function getAllSamplesAsync(): Promise<Sample[]> {
  if (navigator.onLine) {
    // Calling api to get list all samples
    const response = await fetch(GET_ALL_SAMPLES_URL, {
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

async function getAllOtherAsync(): Promise<Sample[]> {
  if (navigator.onLine) {
    // Calling api to get list all samples
    const response = await fetch(GET_ALL_SAMPLES_URL, {
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

export {
  getAllSamplesAsync, getAllOtherAsync,
};
