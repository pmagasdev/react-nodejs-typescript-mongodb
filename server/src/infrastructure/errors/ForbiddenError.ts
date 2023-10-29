import { FORBIDDEN } from "http-status-codes";

export default class ForbiddenError extends Error {
  httpStatus = FORBIDDEN;

  constructor(message) {
    super(message);
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}
