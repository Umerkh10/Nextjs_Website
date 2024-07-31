"use server"
import nodemailer from "nodemailer"


export default async function ContactEmail(state, formData) {
    try {
        const first_name = formData.get("first_name")
        const email_address = formData.get("email_address")
        const last_name = formData.get("last_name")
        const subject = formData.get("subject")
        const cover = formData.get("cover")


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
            subject: 'Contact Us Form',
            text: 'Hello world?',
            html: `
                <div style="font-family: Arial, sans-serif; line-height: 1.6;">
                    <p><b>Details:</b></p>
                    <ul>
                        <li><b>First Name:</b> ${first_name}</li>
                        <li><b>Last Name:</b> ${last_name}</li>
                        <li><b>Email Address:</b> ${email_address}</li>
                        <li><b>Subject:</b> ${subject}</li>
                        <li><b>Cover:</b> ${cover}</li>
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









