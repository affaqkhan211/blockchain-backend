import Teacher from "../../models/teacherAuth/teacherModel.js";
import jwt from "jsonwebtoken"

export const registerTeacher = async (req,res) => {
    try {
        const { name, schoolName, experience, city, email, password, cnic } = req.body;

        const existingTeacher = await Teacher.findOne({ $or: [{ email }, { cnic }] });
        if (existingTeacher) {
          return res.status(409).json({ error: 'Email or CNIC already in use' });
        }
    
        const newTeacher = new Teacher({
          name,
          schoolName,
          experience,
          city,
          email,
          password,
          cnic
        });

    
        await newTeacher.save();
    
        res.status(201).json({ message: "Teacher registered successfully" });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
}


export const loginTeacher = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the teacher by email
    const teacher = await Teacher.findOne({ email });

    // Check if the teacher exists and the password is correct (Note: In production, use bcrypt for secure password comparison)
    if (teacher && teacher.password === password) {
      const token = jwt.sign({ email: teacher.email }, 'Affaqkhan211', { expiresIn: '1h' });

      res.status(200).json({ message: 'Login successful', token });
    } else {
      res.status(401).json({ error: 'Invalid credentials' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const teacherProfile = async (req, res) => {
  try {
    // Find many teachers (all teachers in the collection)
    const teachers = await Teacher.find({});

    if (!teachers || teachers.length === 0) {
      return res.status(404).json({ error: 'No teachers found' });
    }

    // Return the array of teacher profiles
    res.status(200).json(teachers.map(teacher => ({
      name: teacher.name,
      schoolName: teacher.schoolName,
      experience: teacher.experience,
      city: teacher.city,
      email: teacher.email,
      cnic: teacher.cnic,
    })));
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};