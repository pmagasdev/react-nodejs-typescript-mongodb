import { INTERNAL_SERVER_ERROR } from "http-status-codes";

export default class InternalServerError extends Error {
  httpStatus = INTERNAL_SERVER_ERROR;

  constructor(message) {
    super(message);
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}
