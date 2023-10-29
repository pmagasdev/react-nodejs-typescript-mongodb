import { PRECONDITION_FAILED } from "http-status-codes";

export default class PreconditionError extends Error {
  httpStatus = PRECONDITION_FAILED;

  constructor(message) {
    super(message);
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}
