import TicketModel from '../../entity/ticket';

export default class GetTicketById {
  constructor(ticketId, callback) {
    TicketModel.findOne({
      _id: ticketId
    }, (err, result) => {
      if (err) {
        global.gdsLogger.logError(err);
        callback({
          message: 'Failed getting an ticket'
        });
      } else {
        callback(undefined, result);
      }
    });
  }
}