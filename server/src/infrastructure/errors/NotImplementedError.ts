import { NOT_IMPLEMENTED } from "http-status-codes";

export default class NotImplementedError extends Error {
  httpStatus = NOT_IMPLEMENTED;

  constructor(message) {
    super(message);
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}
