import nodemailer from "nodemailer";

export default async function handler(req, res) {

    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method Not Allowed" });
    }

    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
        return res.status(400).json({ message: "All fields are required" });
    }

    try {
        const EMAIL_USER = "feel619patel@gmail.com";
        const EMAIL_PASS = "rekxoqgxcclxljml";
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: EMAIL_USER,
                pass: EMAIL_PASS,
            },
        });

        await transporter.sendMail({
            from: `"Website Contact" <${EMAIL_USER}>`,
            to: EMAIL_USER,
            subject: subject,
            html: `
        <h3>New Contact Message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/> ${message}</p>
      `,
        });

        return res.status(200).json({ message: "Email sent successfully" });

    } catch (error) {
        return res.status(500).json({ message: "Email failed to send" });
    }
}
