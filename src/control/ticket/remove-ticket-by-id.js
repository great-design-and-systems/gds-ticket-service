import TicketModel from '../../entity/ticket';

export default class RemoveTicketById {
    constructor(id, callback) {
        TicketModel.remove({
            _id: id
        }, (err) => {
            if (err) {
                global.gdsLogger.error(err);
                callback({
                    message: 'Failed saving ticket'
                });
            } else {
                callback();
            }
        });
    }
}