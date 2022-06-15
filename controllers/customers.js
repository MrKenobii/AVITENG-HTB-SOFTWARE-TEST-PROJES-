import Customer from "../models/customerModel.js";
import nodemailer from "nodemailer";
export const getCustomers = async (req, res) => {
    try {
        const customers = await Customer.findAll();
        res.json(customers);
    } catch (error) {
            res.json({ messsage: error.message});
    }
}
export const getCustomerById = async (req, res) => {
    try {
        const customer = await Customer.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(customer[0]);
    } catch (error) {
            res.json({ messsage: error.message});
    }
}
export const createCustomer = async (req, res) => {
    try {
        await Customer.create(req.body);
        res.json({
            "message": "Customer Created"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const updateCustomer = async (req, res) => {
    try {
        await Customer.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Customer Updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const deleteCustomer = async (req, res) => {
    try {
        await Customer.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Customer Deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}

export const sendMail = async (req, res) => {
  
    

    var transport = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "5b73d7b208dda9",
          pass: "00ea4275c4fc2e"
        }
      });
    
    var mailOptions = {
      from: 'anldygc35@windowslive.com',
      to: req.body.checkedItems,
      subject: 'Test Nodemailer with Mailtrap',
      text: req.body.message,
        
    };
    
    transport.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }
      console.log('Email sent: ' + info.response);
    });
    
}