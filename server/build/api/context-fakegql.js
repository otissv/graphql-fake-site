'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _helpersFakegql = require('./helpers-fakegql');

exports.default = {
  Address: function Address(query, args, context) {
    return (0, _helpersFakegql.resolve)({ connector: 'address', method: 'generate', context: context, query: query });
  },
  AddressList: function AddressList(query, args, context) {
    return (0, _helpersFakegql.resolve)({ connector: 'address', method: 'generateN', context: context, query: query });
  },
  Card: function Card(query, args, context) {
    return (0, _helpersFakegql.resolve)({ connector: 'card', method: 'generate', context: context, query: query });
  },
  CardList: function CardList(query, args, context) {
    return (0, _helpersFakegql.resolve)({ connector: 'card', method: 'generateN', context: context, query: query });
  },
  Color: function Color(query, args, context) {
    return (0, _helpersFakegql.resolve)({ connector: 'color', method: 'generate', context: context, query: query });
  },
  ColorList: function ColorList(query, args, context) {
    return (0, _helpersFakegql.resolve)({ connector: 'color', method: 'generateN', context: context, query: query });
  },
  Commerce: function Commerce(query, args, context) {
    return (0, _helpersFakegql.resolve)({ connector: 'commerce', method: 'generate', context: context, query: query });
  },
  CommerceList: function CommerceList(query, args, context) {
    return (0, _helpersFakegql.resolve)({ connector: 'commerce', method: 'generateN', context: context, query: query });
  },
  Company: function Company(query, args, context) {
    return (0, _helpersFakegql.resolve)({ connector: 'company', method: 'generate', context: context, query: query });
  },
  CompanyList: function CompanyList(query, args, context) {
    return (0, _helpersFakegql.resolve)({ connector: 'company', method: 'generateN', context: context, query: query });
  },
  Database: function Database(query, args, context) {
    return (0, _helpersFakegql.resolve)({ connector: 'database', method: 'generate', context: context, query: query });
  },
  DatabaseList: function DatabaseList(query, args, context) {
    return (0, _helpersFakegql.resolve)({ connector: 'database', method: 'generateN', context: context, query: query });
  },
  DateTime: function DateTime(query, args, context) {
    return (0, _helpersFakegql.resolve)({ connector: 'dateTime', method: 'generate', context: context, query: query });
  },
  DateTimeList: function DateTimeList(query, args, context) {
    return (0, _helpersFakegql.resolve)({ connector: 'dateTime', method: 'generateN', context: context, query: query });
  },
  Fake: function Fake(query, args, context) {
    return (0, _helpersFakegql.resolve)({ connector: 'fake', method: 'generate', context: context, query: query });
  },
  FakeList: function FakeList(query, args, context) {
    return (0, _helpersFakegql.resolve)({ connector: 'fake', method: 'generateN', context: context, query: query });
  },
  Finance: function Finance(query, args, context) {
    return (0, _helpersFakegql.resolve)({ connector: 'finance', method: 'generate', context: context, query: query });
  },
  FinanceList: function FinanceList(query, args, context) {
    return (0, _helpersFakegql.resolve)({ connector: 'finance', method: 'generateN', context: context, query: query });
  },
  Hacker: function Hacker(query, args, context) {
    return (0, _helpersFakegql.resolve)({ connector: 'hacker', method: 'generate', context: context, query: query });
  },
  HackerList: function HackerList(query, args, context) {
    return (0, _helpersFakegql.resolve)({ connector: 'hacker', method: 'generateN', context: context, query: query });
  },
  Image: function Image(query, args, context) {
    return (0, _helpersFakegql.resolve)({ connector: 'image', method: 'generate', context: context, query: query });
  },
  ImageList: function ImageList(query, args, context) {
    return (0, _helpersFakegql.resolve)({ connector: 'image', method: 'generateN', context: context, query: query });
  },
  Internet: function Internet(query, args, context) {
    return (0, _helpersFakegql.resolve)({ connector: 'internet', method: 'generate', context: context, query: query });
  },
  InternetList: function InternetList(query, args, context) {
    return (0, _helpersFakegql.resolve)({ connector: 'internet', method: 'generateN', context: context, query: query });
  },
  Lorem: function Lorem(query, args, context) {
    return (0, _helpersFakegql.resolve)({ connector: 'lorem', method: 'generate', context: context, query: query });
  },
  LoremList: function LoremList(query, args, context) {
    return (0, _helpersFakegql.resolve)({ connector: 'lorem', method: 'generateN', context: context, query: query });
  },
  Misc: function Misc(query, args, context) {
    return (0, _helpersFakegql.resolve)({ connector: 'misc', method: 'generate', context: context, query: query });
  },
  MiscList: function MiscList(query, args, context) {
    return (0, _helpersFakegql.resolve)({ connector: 'misc', method: 'generateN', context: context, query: query });
  },
  Numbers: function Numbers(query, args, context) {
    return (0, _helpersFakegql.resolve)({ connector: 'numbers', method: 'generate', context: context, query: query });
  },
  NumbersList: function NumbersList(query, args, context) {
    return (0, _helpersFakegql.resolve)({ connector: 'numbers', method: 'generateN', context: context, query: query });
  },
  Person: function Person(query, args, context) {
    return (0, _helpersFakegql.resolve)({ connector: 'person', method: 'generate', context: context, query: query });
  },
  PersonList: function PersonList(query, args, context) {
    return (0, _helpersFakegql.resolve)({ connector: 'person', method: 'generateN', context: context, query: query });
  },
  Phone: function Phone(query, args, context) {
    return (0, _helpersFakegql.resolve)({ connector: 'phone', method: 'generate', context: context, query: query });
  },
  PhoneList: function PhoneList(query, args, context) {
    return (0, _helpersFakegql.resolve)({ connector: 'phone', method: 'generateN', context: context, query: query });
  },
  System: function System(query, args, context) {
    return (0, _helpersFakegql.resolve)({ connector: 'system', method: 'generate', context: context, query: query });
  },
  SystemList: function SystemList(query, args, context) {
    return (0, _helpersFakegql.resolve)({ connector: 'system', method: 'generateN', context: context, query: query });
  },


  // Custom  ==============================================================
  CardTransaction: function CardTransaction(query, args, context) {
    return (0, _helpersFakegql.resolve)({ connector: 'cardTransaction', method: 'generate', context: context, query: query });
  },
  CardTransactionList: function CardTransactionList(query, args, context) {
    return (0, _helpersFakegql.resolve)({ connector: 'cardTransaction', method: 'generateN', context: context, query: query });
  },
  Message: function Message(query, args, context) {
    return (0, _helpersFakegql.resolve)({ connector: 'message', method: 'generate', context: context, query: query });
  },
  MessageList: function MessageList(query, args, context) {
    return (0, _helpersFakegql.resolve)({ connector: 'message', method: 'generateN', context: context, query: query });
  },
  Meta: function Meta(query, args, context) {
    return (0, _helpersFakegql.resolve)({ connector: 'meta', method: 'generate', context: context, query: query });
  },
  MetaList: function MetaList(query, args, context) {
    return (0, _helpersFakegql.resolve)({ connector: 'meta', method: 'generateN', context: context, query: query });
  },
  Transaction: function Transaction(query, args, context) {
    return (0, _helpersFakegql.resolve)({ connector: 'transaction', method: 'generate', context: context, query: query });
  },
  TransactionList: function TransactionList(query, args, context) {
    return (0, _helpersFakegql.resolve)({ connector: 'transaction', method: 'generateN', context: context, query: query });
  },
  User: function User(query, args, context) {
    return (0, _helpersFakegql.resolve)({ connector: 'user', method: 'generate', context: context, query: query });
  },
  UserList: function UserList(query, args, context) {
    return (0, _helpersFakegql.resolve)({ connector: 'user', method: 'generateN', context: context, query: query });
  }
};