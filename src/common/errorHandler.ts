import showModal from '../components/Common/Modal';

export enum ApiErrorMessage {
  NoInternet = 'No internet connection',
}

export class ApiError extends Error {
  statusCode: number;

  message: string;

  errorDetail: string[];

  public constructor(message: string, errorDetail: string[], statusCode: number) {
    super(message);
    this.message = message;
    this.errorDetail = errorDetail;
    this.statusCode = statusCode;
    this.name = 'ApiError';
  }
}

interface ApiErrorHandlerProps {
  error: any,
  type: 'SaveDraft' | 'SubmitForm' | 'Common', // Will add more in future
}

// This function is used to generate api error to handling.
export function createApiError(err: any) {
  if (err instanceof ApiError) {
    return err;
  }
  // This one could be internal error thrown by React
  const { message } = err;
  return new ApiError(message, [], 500);
}

// Use to handle api calling when save draft
export function apiErrorHandler(props: ApiErrorHandlerProps) {
  const { error, type } = props;

  // Api error that response from backend
  let title = '';
  let content = [''];

  const apiError = createApiError(error);

  if (type === 'Common') { // For all common api calling
    title = 'Unable to load';
    content = [apiError.message];
  }

  showModal({
    type: 'error',
    title,
    content,
  });
}
