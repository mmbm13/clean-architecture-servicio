import * as express from 'express';

abstract class BaseController {
  // or even private
  protected req!: express.Request;

  protected res!: express.Response;

  protected abstract executeImpl (): Promise<void | unknown>;

  public execute(req: express.Request, res: express.Response): void {
    this.req = req;
    this.res = res;
    this.executeImpl();
  }

  public static jsonResponse(res: express.Response, code: number, message: string) {
    return res.status(code).json({ message });
  }

  public static ok<T>(res: express.Response, dto?: T) {
    if (!dto) {
      return res.status(200).json(dto);
    }
    return res.sendStatus(200);
  }

  public static created(res: express.Response) {
    return res.sendStatus(201);
  }

  public clientError(message?: string) {
    return BaseController.jsonResponse(this.res, 400, message || 'Unauthorized');
  }

  public fail(error: Error | string) {
    console.log(error);
    return this.res.status(500).json({
      message: error.toString(),
    });
  }
}

export default BaseController;
