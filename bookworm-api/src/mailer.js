import nodemailer from "nodemailer";

const from = '"Fanfik <info@fanfik.com>';

function setup() {
    return nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });
}

export function sendConfirmationEmail(user) {
    const transport = setup();
    const email = {
        from,
        to: user.email,
        subject: "Welcome to Fanfik",
        text: `
        Welcome to Fanfik. Please, confirm tour email.
        ${user.generateConfirmationUrl()}
        `
    }

    transport.sendMail(email);
}