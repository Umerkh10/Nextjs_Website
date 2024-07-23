"use server"
import nodemailer from "nodemailer"


export default async function EmailAction(state, formData) {
    try {
        const name = formData.get("name")
        const email = formData.get("email")
        const phone = formData.get("phone")
        const selection = formData.get("selection")

        // const nodemailer = require('nodemailer');

   
        const transporter = nodemailer.createTransport({
            host: 'mail.graderz.org',
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: 'testing@graderz.org', // your SMTP username
                pass: '31$}f_25ddl#' // your SMTP password
            }
        });

        let mailOptions = {
            from: '"Graderz.org" <testing@graderz.org>', 
            to: 'mumarkhan383@gmail.com',
            subject: 'Hello ✔', 
            text: 'Hello world?', 
            html:  `
            <div style="font-family: Arial, sans-serif; line-height: 1.6;">
                <h2>Welcome to Graderz.org!</h2>
                <p>Hello <b>${name}</b>,</p>
                <p>Thank you for joining our community. We are excited to have you!</p>
                <p><b>Your Details:</b></p>
                <ul>
                    <li><b>Name:</b> ${name}</li>
                    <li><b>Email Address:</b> ${email}</li>
                    <li><b>Phone Number:</b> ${phone}</li>
                    <li><b>Subject:</b> ${selection}</li>
                </ul>
                <p>Best regards,<br>Graderz.org</p>
            </div>
`
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent: %s', info.messageId);
            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        });

        return { success: "Form Sumitted Successfully" }
    } catch (error) {
        return { error: "Something Went Wrong" }
    }

}









