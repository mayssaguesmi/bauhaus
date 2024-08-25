import { Controller, Post, Body, Get } from '@nestjs/common';
import { ContactService } from './contact.service';
import { Contact } from './contact.schema';

@Controller('contacts')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post()
  async createContact(@Body() contactData: Contact): Promise<Contact> {
    return this.contactService.createContact(contactData);
  }

  @Get()
  async getContacts(): Promise<Contact[]> {
    return this.contactService.getContacts();
  }
}
