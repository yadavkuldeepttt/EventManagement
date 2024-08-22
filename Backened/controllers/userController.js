import nodemailer from 'nodemailer';
import User from '../models/userModel.js';


const inviteUser = async (req, res) => {
    try {
        
        const { username, useremail, userrole } = req.body;
        const newUser = new User({ username, useremail, userrole });
        await newUser.save();


   const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'yadavkuldeepdell@gmail.com', 
        pass: 'egtl nigw zrfq mddv',
              },
          });
        
        
       const mailOptions = {
      from: 'yadavkuldeepdell@gmail.com',
      to: useremail,
      subject: 'Invitation to join our platform as staff',
      text: `Hello ${username}! You have been invited to join our platform with the role of ${userrole}. Click the link to join: http://http://localhost:5173/`,
    };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error("Error sending email:" + error);
                res.status(500).json({ message: 'Error sending invitation email' });
            }
            else {
                console.log("Email sent " + info.response);
                res.status(201).json({ message: "Invitation email sent successfully" });

            }

        });

    } catch (error)
    {
        console.error("Error inviting user: " + error);
        res.status(500).json({ error: "Internal Server Error" });

    }
}
export default inviteUser;