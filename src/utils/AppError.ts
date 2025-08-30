export default class AppError extends Error {
  statusCode: number;
  message: string;
  status: string;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
    this.message = message;
    this.status = `${statusCode}`.startsWith("4") ? "faile" : "error";
  }
}
