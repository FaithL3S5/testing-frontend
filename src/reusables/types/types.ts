// types.ts
interface Contact {
  _id: string;
  contact_id: string;
  first_name: string;
  last_name: string;
  default_number: string;
  phone_numbers: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export default Contact;
