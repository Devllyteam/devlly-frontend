class ApiError extends Error {
  statusCode: number;
  data: string | null;
  success: boolean;
  errors: string[];

  constructor(
    statusCode: number,
    message: string = "Something went wrong",
    errors: string[] = [],
    stack?: string
  ) {
    super(message);
    this.statusCode = statusCode;
    this.data = null;
    this.message = message;
    this.success = false;
    this.errors = errors;

    if (stack) {
      this.stack = stack;
    } else {
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, this.constructor);
      }
    }
  }
}

export { ApiError };
