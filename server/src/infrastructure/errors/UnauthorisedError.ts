import { UNAUTHORIZED } from "http-status-codes";

export default class UnauthorisedError extends Error {
  httpStatus = UNAUTHORIZED;

  constructor(message) {
    super(message);
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}
