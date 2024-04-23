import TransferRequest from "../../models/teacherAuth/requestModel.js";

export const transferRequest = async (req, res) => {
  try {
    const {
      fullName,
      schoolName,
      experience,
      city,
      cnic,
      email,
      message,
    } = req.body;

    const transferRequest = new TransferRequest({
      fullName,
      schoolName,
      experience,
      city,
      cnic,
      email,
      message,
    });

    await transferRequest.save();

    res.status(201).json({ success: true, message: 'Transfer request submitted successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Failed to submit transfer request.' });
  }
}
