import TicketModel from '../../entity/ticket';
export default class GetTicketByNumber {
  constructor(ticketNo, callback) {
    TicketModel.findOne({
      ticketNo: ticketNo
    }, (err, ticket) => {
      if (err || !ticket) {
        global.gdsLogger.logError(err);
        callback({
          message: 'Failed getting an ticket'
        });
      } else {
        callback(undefined, ticket);
      }
    });
  }
}