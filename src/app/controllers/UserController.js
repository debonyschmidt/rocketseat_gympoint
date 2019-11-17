import Users from '../models/Users';

class UserController {
  async store(req, res) {
    const userExists = await Users.findOne({ where: { email: req.body.email }});

    if (userExists) {
      return res.status(400).json({ error: "User already exists." });
    }

    const { id, name, email } = await Users.create(req.body);

    return res.json({
      id, 
      name, 
      email, 
    });
  }
}

export default new UserController();