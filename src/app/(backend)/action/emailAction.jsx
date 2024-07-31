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
            host: 'business76.web-hosting.com',
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: 'support@webnike.com', // your SMTP username
                pass: 'ch.lF$}deEjC' // your SMTP password
            }
        });

        let mailOptions = {
            from: 'support@webnike.com', 
            to: 'support@webnike.com',
            subject: 'Service Form', 
            text: 'Hello world?', 
            html:  `
            <div style="font-family: Arial, sans-serif; line-height: 1.6;">
                <p><b> Details:</b></p>
                <ul>
                    <li><b>Name:</b> ${name}</li>
                    <li><b>Email Address:</b> ${email}</li>
                    <li><b>Phone Number:</b> ${phone}</li>
                    <li><b>Subject:</b> ${selection}</li>
                </ul>
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









