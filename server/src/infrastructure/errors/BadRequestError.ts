import { BAD_REQUEST } from "http-status-codes";

export default class BadRequestError extends Error {
  httpStatus = BAD_REQUEST;

  constructor(message) {
    super(message);
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}
