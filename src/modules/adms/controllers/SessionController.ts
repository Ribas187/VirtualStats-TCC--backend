import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { AuthenticateAdmService } from '../services/AuthenticateAdmService';

class SessionController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { email, senha } = req.body;

    const createSession = container.resolve(AuthenticateAdmService);

    const data = await createSession.execute({ email, senha });

    return res.json(data);
  }
}

export { SessionController };
