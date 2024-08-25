import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Contact, ContactDocument } from './contact.schema';

@Injectable()
export class ContactService {
  constructor(@InjectModel(Contact.name) private contactModel: Model<ContactDocument>) {}

  async createContact(contactData: Contact): Promise<Contact> {
    const newContact = new this.contactModel(contactData);
    return newContact.save();
  }

  async getContacts(): Promise<Contact[]> {
    return this.contactModel.find().exec();
  }
}
