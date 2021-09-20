import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

interface BodyParams {
  email: string;
}

export default async (request: NextApiRequest, response: NextApiResponse) => {
  if (request.method === 'POST') {
    const { email } = request.body as BodyParams

    let transporter = nodemailer.createTransport({
      host: 'smtp.sendgrid.net',
      port: 465,
      secure: true,
      auth: {
        user: process.env.SENDGRID_USER,
        pass: process.env.SENDGRID_PSW,
      }
    })

    let info = await transporter.sendMail({
      from: '"TechCorp Website 👨‍💻" <mauricio@techcorp.dev>',
      to: "mauricio@techcorp.dev, cristian@techcorp.dev", 
      subject: "Website Potential Client ✔", 
      html: `<b>${email}</b> just provided its email! <br>
              Please contact this potential client.`, 
    });

    console.log("Message sent: %s", info.messageId);

    response.statusCode = 201
    response.json({ ok: true })
  } else {
    throw new Error(
      `The HTTP ${request.method} is not available for this route.`
    )
  }
}