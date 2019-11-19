import Students from '../models/Students';

class StudentController {
  async store(req, res) {
    const studentExists = await Students.findOne({ where: { email: req.body.email }});

    if (studentExists) {
      return res.status(400).json({ error: "Student already exists." });
    }

    const { id, name, email, age, weight, height } = await Students.create(req.body);

    return res.json({
      id, 
      name, 
      email, 
      age, 
      weight, 
      height,
    });
  }

  async update(req, res) {

    const student = Students.findByPk(req.studentId);

    console.log(student);

    return res.json({ ok: true });
  }
}

export default new StudentController();