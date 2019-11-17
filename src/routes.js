import { Router } from 'express';
import Students from './app/models/Students';

const routes = new Router();

routes.get('/', async (req,res) => {
  const students = await Students.create({
    name: 'Debony Schmidt',
    email: 'debony@gmail.com',
    age: '30',
    weight: '65',
    height: '1.67',
  })

  return res.json(students);
})

export default routes;