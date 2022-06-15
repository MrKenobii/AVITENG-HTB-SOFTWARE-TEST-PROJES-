import express from 'express';

import { getCustomers, getCustomerById, createCustomer, updateCustomer, deleteCustomer, sendMail} from '../controllers/customers.js';

const router = express.Router();

router.get('/', getCustomers);
router.get('/:id', getCustomerById);
router.post('/',  createCustomer);
router.post('/email', sendMail);
router.patch('/:id', updateCustomer);
router.delete('/:id', deleteCustomer);

export default router;


