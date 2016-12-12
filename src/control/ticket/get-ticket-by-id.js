import TicketModel from '../../entity/ticket';

export default class GetTicketById {
  constructor(ticketId, callback) {
    TicketModel.findOne({
      _id: ticketId
    }, (err, ticket) => {
      if (err || !ticket) {
        global.gdsLogger.logError(err);
        callback({
          message: 'Failed getting a ticket'
        });
      } else {
        callback(undefined, ticket);
      }
    });
  }
}