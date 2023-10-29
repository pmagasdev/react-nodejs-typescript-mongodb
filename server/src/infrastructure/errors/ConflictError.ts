import { CONFLICT } from "http-status-codes";

export default class ConflictError extends Error {
  httpStatus = CONFLICT;

  constructor(message) {
    super(message);
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}
