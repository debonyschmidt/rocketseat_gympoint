import { Router } from 'express';
import Student from './app/models/student';

const routes = new Router();

routes.get('/', async (req,res) => {
  const student = await Student.create({
    name: 'Debony Schmidt',
    age: '30',
    weight: '65',
    height: '1',
  });

  return res.JSON(student);
})

export default routes;