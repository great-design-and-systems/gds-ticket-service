import CreateTicket from '../control/ticket/create-ticket';
import GetTickets from '../control/ticket/get-tickets';
import GetTicketById from '../control/ticket/get-ticket-by-id';
import UpdateTicket from '../control/ticket/update-ticket';
import RemoveTicketById from '../control/ticket/remove-ticket-by-id';
import GetTicketByNumber from '../control/ticket/get-ticket-by-number';
import CreateVerificationLink from '../control/verification/create-verification-link';
export default class TicketService {

  createTicket(data, callback) {
    new CreateTicket(data, callback);
  }

  getTickets(paginate, callback) {
    new GetTickets(paginate, callback);
  }
  getTicketById(ticketId, callback) {
    new GetTicketById(ticketId, callback);
  }
  updateTicket(ticketId, ticket, callback) {
    new UpdateTicket(ticketId, ticket, callback);
  }
  removeTicketById(ticketId, callback) {
    new RemoveTicketById(ticketId, callback);
  }
  getTicketByNumber(ticketNo, callback) {
    new GetTicketByNumber(ticketNo, callback);
  }
  createVerificationLink(data, callback) {
    new CreateVerificationLink(data, callback);
  }
}