import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

// Send contact form submission email to admin
export const sendContactForm = async (req, res) => {
  try {
    const { topic, name, email, company, location, message } = req.body;

    // Set up the transporter (using Gmail service here)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Compose the email options
    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: process.env.ADMIN_EMAIL, // Admin email where contact form will be sent
      subject: `Contact Form Submission - ${topic}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Topic:</strong> ${topic}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || "N/A"}</p>
        <p><strong>Location:</strong> ${location || "N/A"}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Respond with a success message
    res.status(200).json({ msg: "Email sent successfully." });
  } catch (err) {
    console.error("Error sending email:", err);
    res.status(500).json({ msg: "Failed to send email." });
  }
};
