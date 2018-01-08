import { resolve } from './helpers-fakegql';


export default {
  Address (query, args, context) {
    return resolve({ connector: 'address', method: 'generate', context, query });
  },

  AddressList (query, args, context) {
    return resolve({ connector: 'address', method: 'generateN', context, query });
  },

  Card (query, args, context) {
    return resolve({ connector: 'card', method: 'generate', context, query });
  },

  CardList (query, args, context) {
    return resolve({ connector: 'card', method: 'generateN', context, query });
  },

  Color (query, args, context) {
    return resolve({ connector: 'color', method: 'generate', context, query });
  },

  ColorList (query, args, context) {
    return resolve({ connector: 'color', method: 'generateN', context, query });
  },

  Commerce (query, args, context) {
    return resolve({ connector: 'commerce', method: 'generate', context, query });
  },

  CommerceList (query, args, context) {
    return resolve({ connector: 'commerce', method: 'generateN', context, query });
  },

  Company (query, args, context) {
    return resolve({ connector: 'company', method: 'generate', context, query });
  },

  CompanyList (query, args, context) {
    return resolve({ connector: 'company', method: 'generateN', context, query });
  },

  Database (query, args, context) {
    return resolve({ connector: 'database', method: 'generate', context, query });
  },

  DatabaseList (query, args, context) {
    return resolve({ connector: 'database', method: 'generateN', context, query });
  },

  DateTime (query, args, context) {
    return resolve({ connector: 'dateTime', method: 'generate', context, query });
  },

  DateTimeList (query, args, context) {
    return resolve({ connector: 'dateTime', method: 'generateN', context, query });
  },

  Fake (query, args, context) {
    return resolve({ connector: 'fake', method: 'generate', context, query });
  },

  FakeList (query, args, context) {
    return resolve({ connector: 'fake', method: 'generateN', context, query });
  },

  Finance (query, args, context) {
    return resolve({ connector: 'finance', method: 'generate', context, query });
  },

  FinanceList (query, args, context) {
    return resolve({ connector: 'finance', method: 'generateN', context, query });
  },

  Hacker (query, args, context) {
    return resolve({ connector: 'hacker', method: 'generate', context, query });
  },

  HackerList (query, args, context) {
    return resolve({ connector: 'hacker', method: 'generateN', context, query });
  },

  Image (query, args, context) {
    return resolve({ connector: 'image', method: 'generate', context, query });
  },

  ImageList (query, args, context) {
    return resolve({ connector: 'image', method: 'generateN', context, query });
  },

  Internet (query, args, context) {
    return resolve({ connector: 'internet', method: 'generate', context, query });
  },

  InternetList (query, args, context) {
    return resolve({ connector: 'internet', method: 'generateN', context, query });
  },

  Lorem (query, args, context) {
    return resolve({ connector: 'lorem', method: 'generate', context, query });
  },

  LoremList (query, args, context) {
    return resolve({ connector: 'lorem', method: 'generateN', context, query });
  },

  Misc (query, args, context) {
    return resolve({ connector: 'misc', method: 'generate', context, query });
  },

  MiscList (query, args, context) {
    return resolve({ connector: 'misc', method: 'generateN', context, query });
  },

  Numbers (query, args, context) {
    return resolve({ connector: 'numbers', method: 'generate', context, query });
  },

  NumbersList (query, args, context) {
    return resolve({ connector: 'numbers', method: 'generateN', context, query });
  },

  Person (query, args, context) {
    return resolve({ connector: 'person', method: 'generate', context, query });
  },

  PersonList (query, args, context) {
    return resolve({ connector: 'person', method: 'generateN', context, query });
  },

  Phone (query, args, context) {
    return resolve({ connector: 'phone', method: 'generate', context, query });
  },

  PhoneList (query, args, context) {
    return resolve({ connector: 'phone', method: 'generateN', context, query });
  },

  System (query, args, context) {
    return resolve({ connector: 'system', method: 'generate', context, query });
  },

  SystemList (query, args, context) {
    return resolve({ connector: 'system', method: 'generateN', context, query });
  },

  // Custom  ==============================================================
  CardTransaction (query, args, context) {
    return resolve({ connector: 'cardTransaction', method: 'generate', context, query });
  },

  CardTransactionList (query, args, context) {
    return resolve({ connector: 'cardTransaction', method: 'generateN', context, query });
  },

  Meeting (query, args, context) {
    return resolve({ connector: 'meeting', method: 'generate', context, query });
  },

  MeetingList (query, args, context) {
    return resolve({ connector: 'meeting', method: 'generateN', context, query });
  },

  Message (query, args, context) {
    return resolve({ connector: 'message', method: 'generate', context, query });
  },

  MessageList (query, args, context) {
    return resolve({ connector: 'message', method: 'generateN', context, query });
  },

  Meta (query, args, context) {
    return resolve({ connector: 'meta', method: 'generate', context, query });
  },

  MetaList (query, args, context) {
    return resolve({ connector: 'meta', method: 'generateN', context, query });
  },

  Transaction (query, args, context) {
    return resolve({ connector: 'transaction', method: 'generate', context, query });
  },

  TransactionList (query, args, context) {
    return resolve({ connector: 'transaction', method: 'generateN', context, query });
  },

  User (query, args, context) {
    return resolve({ connector: 'user', method: 'generate', context, query });
  },

  UserList (query, args, context) {
    return resolve({ connector: 'user', method: 'generateN', context, query });
  }
};
