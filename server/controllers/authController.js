import { z } from 'zod';
import { loginUser, registerUser } from '../services/authService.js';

const AuthSchema = z.object({
  name: z.string().min(2).optional(),
  email: z.string().email(),
  password: z.string().min(8)
});

export async function register(req, res, next) {
  try {
    const body = AuthSchema.required({ name: true }).parse(req.body);
    const user = await registerUser(body);
    res.status(201).json({ user });
  } catch (error) {
    if (error.name === 'ZodError') error.status = 400;
    next(error);
  }
}

export async function login(req, res, next) {
  try {
    const body = AuthSchema.omit({ name: true }).parse(req.body);
    res.json(await loginUser(body));
  } catch (error) {
    if (error.name === 'ZodError') error.status = 400;
    next(error);
  }
}
