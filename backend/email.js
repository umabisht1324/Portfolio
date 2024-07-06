const express = require("express");
const nodemailer = require("nodemailer");
const router = express.Router();

router.post("/send", async (req, res) => {
    const { name, email, message } = req.body;

    // console.log("Request received:", req.body);  

    
    let transporter = nodemailer.createTransport({
        service: 'gmail', 
        auth: {
            user: 'qty8114@gmail.com', 
            pass: 'ochx ttks mvrn ohrk'  
        }
    });

    // Setup email data
    let mailOptions = {
        from: email, 
        to: 'qty8114@gmail.com', 
        subject: 'Contact Form Submission', 
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}` 
    };

    try {
        // Send mail with defined transport object
        await transporter.sendMail(mailOptions);
        res.status(200).send({ message: "Email sent successfully!" });
    } catch (error) {
        console.error("Error sending email:", error);  // Log the error
        res.status(500).send({ error: "Failed to send email." });
    }
});

module.exports = router;
