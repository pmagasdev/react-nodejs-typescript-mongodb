import { NOT_FOUND } from "http-status-codes";

export default class NotFoundError extends Error {
  httpStatus = NOT_FOUND;

  constructor(message) {
    super(message);
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}
