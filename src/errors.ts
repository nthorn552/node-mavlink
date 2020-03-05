export class CrcError extends Error {
  constructor(public message: string = "CRC not provided") {
    super(message);
    this.name = "CrcError";
    this.stack = (<any>new Error()).stack;
  }
}

export class UnknownMessageIdError extends Error {
  constructor(public message: string = "Unknown message ID") {
    super(message);
    this.name = "UnknownMessageIdError";
    this.stack = (<any>new Error()).stack;
  }
}
