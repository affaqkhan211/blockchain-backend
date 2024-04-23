import TransferRequest from "../../models/teacherAuth/requestModel.js";

export const allRequests = async (req,res) => {
    try {
        const transferRequests = await TransferRequest.find();
        res.json({ success: true, transferRequests });
      } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Failed to fetch transfer requests.' });
      }
}