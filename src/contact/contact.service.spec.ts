import { Test, TestingModule } from '@nestjs/testing';
import { ContactService } from './contact.service';
import { getModelToken } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Contact } from './contact.schema';

describe('ContactService', () => {
  let service: ContactService;
  let model: Model<Contact>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ContactService,
        {
          provide: getModelToken(Contact.name),
          useValue: {
            new: jest.fn().mockResolvedValue({}),
            constructor: jest.fn().mockResolvedValue({}),
            find: jest.fn(),
            findOne: jest.fn(),
            save: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<ContactService>(ContactService);
    model = module.get<Model<Contact>>(getModelToken(Contact.name));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // Ajoutez des tests pour les méthodes du service
});
