import { Request, Response, NextFunction } from 'express';

interface ErrorDetail {
  [key: string]: unknown; // Use unknown or a more specific type based on your data structure
}

class ApiError extends Error {
  statusCode: number;
  issueCode: number;
  details: ErrorDetail[];

  constructor(
    statusCode: number,
    message: string,
    issueCode: number = 0,
    details: ErrorDetail[] = []
  ) {
    super(message);
    Object.setPrototypeOf(this, new.target.prototype); // restore prototype chain
    this.statusCode = statusCode;
    this.issueCode = issueCode;
    this.details = details;
  }

  static badRequest(msg: string, details: ErrorDetail[] = []): ApiError {
    return new ApiError(400, msg, 1, details);
  }

  static internal(msg: string, details: ErrorDetail[] = []): ApiError {
    return new ApiError(500, msg, 0, details);
  }

  // Other specific static methods for different types of errors can be added here
}

const errorHandler = (
  err: Error | ApiError,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  if (err instanceof ApiError) {
    res.status(err.statusCode).json({
      statusCode: err.statusCode,
      issueCode: err.issueCode,
      message: err.message,
      details: err.details,
    });
  } else {
    res.status(500).json({
      statusCode: 500,
      message: 'Internal server error',
      details: [],
    });
  }
};

export { errorHandler, ApiError };
