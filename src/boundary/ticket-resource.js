import TicketService from './tickets';
import {
  GDSDomainDTO,
  GDSDomainPaginateHelper
} from 'gds-config';

const API = process.env.API_NAME || '/api/ticket/';

export default class TicketResource {
  constructor(app) {
    const ticketService = new TicketService();

    app.get('/', (req, res) => {
      const domain = new GDSDomainDTO();
      domain.addPost('createTicket', 'http://' + req.headers.host + API + 'create-ticket');
      domain.addGet('getTickets', 'http://' + req.headers.host + API + 'get-tickets');
      domain.addGet('getTicketById', 'http://' + req.headers.host + API + 'get-ticket-by-id/:ticketId');
      domain.addPut('updateTicket', 'http://' + req.headers.host + API + 'update-ticket/:ticketId');
      domain.addDelete('removeTicket', 'http://' + req.headers.host + API + 'remove-ticket/:ticketId');
      domain.addGet('getTicketByNumber', 'http://' + req.headers.host + API + 'get-ticket-by-number/:ticketNo');
      res.status(200).send(domain);
    });

    app.post(API + 'create-ticket', (req, res) => {
      ticketService.createTicket(req.body, (err, result) => {
        if (err) {
          res.status(500).send(new GDSDomainDTO('ERROR_MESSAGE',
            err.message
          ))
        } else {
          const createDomain = new GDSDomainDTO('CREATE-TICKET', {'ticketNo' : result.ticketNo});
          createDomain.addGet('getTicketById', 'http://' + req.headers.host + API + 'get-ticket-by-id/' + result._id);
          createDomain.addPut('updateTicket', 'http://' + req.headers.host + API + 'update-ticket/' + result._id);
          createDomain.addDelete('removeTicket', 'http://' + req.headers.host + API + 'remove-ticket/' + result._id);
          createDomain.addGet('getTicketByName', 'http://' + req.headers.host + API + 'get-ticket-by-number/' + result.ticketNo);
          res.status(200).send(createDomain);
        }
      });
    });

    app.get(API + 'get-tickets', (req, res) => {
      ticketService.getTickets(new GDSDomainPaginateHelper(req),
        (err, result) => {
          if (err) {
            res.status(500).send(new GDSDomainDTO('ERROR_MESSAGE',
              err.message
            ))
          } else {
            res.status(200).send(new GDSDomainDTO('GET-TICKETS', result));
          }
        });
    });

    app.get(API + 'get-ticket-by-id/:ticketId', (req, res) => {
      ticketService.getTicketById(req.params.ticketId, (err, result) => {
        if (err) {
          res.status(500).send(new GDSDomainDTO('ERROR_MESSAGE',
            err.message
          ))
        } else {
          const domain = new GDSDomainDTO('GET-TICKET-BY-ID', result);
          domain.addPut('updateTicket', 'http://' + req.headers.host + API + 'update-ticket/' + result._id);
          domain.addDelete('removeTicket', 'http://' + req.headers.host + API + 'remove-ticket/' + result._id);
          res.status(200).send(domain);
        }
      });
    });

    app.put(API + 'update-ticket/:ticketId', (req, res) => {
      ticketService.updateTicket(req.params.ticketId, req.body, (err, result) => {
        if (err) {
          res.status(500).send(new GDSDomainDTO('ERROR_MESSAGE',
            err.message
          ))
        } else {
          const domain = new GDSDomainDTO('UPDATE-TICKET', 'Ticket has been updated');
          domain.addGet('getTicketsById', 'http://' + req.headers.host + API + 'get-ticket-by-id/' + result._id);
          domain.addDelete('removeTicket', 'http://' + req.headers.host + API + 'remove-ticket/' + result._id);
          res.status(200).send(domain);
        }
      });
    });

    app.delete(API + 'remove-ticket/:ticketId', (req, res) => {
      ticketService.removeTicketById(req.params.ticketId, (err) => {
        if (err) {
          res.status(500).send(new GDSDomainDTO('ERROR_MESSAGE',
            err.message
          ))
        } else {
          res.status(200).send(new GDSDomainDTO('REMOVE-TICKET', 'Ticket has been removed'));
        }
      });
    });

    app.get(API + 'get-ticket-by-number/:ticketNo', (req, res) => {
      ticketService.getTicketByNumber(req.params.ticketNo, (err, result) => {
        if (err) {
          res.status(500).send(new GDSDomainDTO('ERROR_MESSAGE',
            err.message
          ))
        } else {
          const domain = new GDSDomainDTO('GET-TICKET-BY-NUMBER', result);
          domain.addPut('updateTicket', 'http://' + req.headers.host + API + 'update-ticket/' + result._id);
          domain.addDelete('removeTicket', 'http://' + req.headers.host + API + 'remove-ticket/' + result._id);
          res.status(200).send(domain);
        }
      });
    });

  }
}