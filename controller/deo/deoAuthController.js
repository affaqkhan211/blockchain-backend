import DEO from "../../models/deoAuth/deoModel.js";
import jwt from "jsonwebtoken";

export const registerDeo = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingDeo = await DEO.findOne({ $or: [{ email }] });
    if (existingDeo) {
      return res.status(409).json({ error: 'Email already in use' });
    }

    const newDeo = new DEO({
      name,
      email,
      password,
    });

    await newDeo.save();

    res.status(201).json({ message: "DEO registered successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

export const loginDeo = async (req, res) => {
  try {
    const { email, password } = req.body;

    const deo = await DEO.findOne({ email });

    if (deo && deo.password === password) {
      const token = jwt.sign({ email: deo.email }, 'Affaqkhan211', { expiresIn: '1h' });

      res.status(200).json({ message: 'Login successful', token });
    } else {
      res.status(401).json({ error: 'Invalid credentials' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const deoProfile = async (req, res) => {
    try {
        // Find the DEO using the decoded userId from the middleware
        const deo = await DEO.findOne({ _id: req.userId });
    
        if (!deo) {
          return res.status(404).json({ error: 'DEO not found' });
        }
    
        // Return the DEO profile
        res.status(200).json({
          name: deo.name,
          email: deo.email,
          // Add other profile details as needed
        });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
}
