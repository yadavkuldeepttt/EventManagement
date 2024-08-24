import Participant from "../models/userDetails.js";
import Transport from "../models/transportDetails.js"; 

const saveParticipant = async (req, res) => {
    try {
        const { userDetails, transportDetails } = req.body;
      
        console.log(userDetails,"userdetails");
        console.log("--------------------------");
        console.log(transportDetails,"transportDetails");
      
        const newUser = new Participant(userDetails.objDetails);
        const newTransport = new Transport(transportDetails.objDetails);
    
        if (!newUser || !newTransport) {
      return res.status(400).send({ message: 'Missing userDetails or transportObj' });
    }
      console.log(newUser, "newUser");
      console.log(newTransport, "newTransport");
      
      
    await newUser.save();
    await newTransport.save();
    
    res.status(200).send({ message: 'Data saved successfully' });
  } catch (error) {
    res.status(500).send({ message: 'Failed to save data', error });
  }
};

export default saveParticipant;