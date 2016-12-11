import TicketModel from '../../entity/ticket';
export default class GetTickets {
  constructor(paginate, callback) {
    TicketModel.paginate({}, paginate, (err, result) => {
      if (err) {
        global.gdsLogger.logError(err);
        callback({
          message: 'Failed getting tickets'
        });
      } else {
        callback(undefined, result);
      }
    });
  }
}