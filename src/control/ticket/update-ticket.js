import TicketModel from '../../entity/ticket';
export default class UpdateTicket {
  constructor(ticketId, ticket, callback) {
    TicketModel.findByIdAndUpdate(ticketId, ticket, (err, result) => {
      if (err) {
        global.gdsLogger.logError(err);
        callback({
          message: 'Failed updating ticket'
        });
      } else {
        callback(undefined, result);
      }
    });
  }
}