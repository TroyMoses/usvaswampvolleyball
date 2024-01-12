import { connect } from '../../../dbConfig/dbConfig';
import Member from '../../../models/memberModel';
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

connect();


export async function POST(request: NextRequest) {

    const user = process.env.EMAIL_USER;

    try {

        const reqBody = await request.json();
        const {fname, lname, gender, email, category } = reqBody;

        const newMember = new Member({
            fname,
            lname,
            gender,
            email,
            category,
        });

        await newMember.save();
        

        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: user,
                pass: process.env.EMAIL_PASS,
            },
        });

        try {
            await transporter.sendMail({
                from: user,
                to: user,
                subject: 'New Member has registered',
                html: `
                    <p>Name: ${fname} ${lname}</p>
                    <p>Gender: ${gender}</p>
                    <p>Email: ${email}</p>
                    <p>Category: ${category}</p>
                `
            });

            await transporter.sendMail({
                from: user,
                to: email,
                replyTo: email,
                subject: 'Registered Successfully',
                html: `<p>Thank you so much, ${lname} for joining usva swamp volleyball association. 
                We will contact you very soon.</p>`
            });

        } catch (error) {
            return NextResponse.json({error: error});
        }

    } catch (error) {
        return NextResponse.json({
            error: error.message,
        }, {status: 500})
    }
}