import TicketModel from '../../entity/ticket';

export default class CreateTicket {
    constructor(data, callback) {
        TicketModel.create({
            patronId: data.patronId,
            itemId: data.itemId,
            jobId: data.jobId,
            startDate: data.startDate,
            endDate: data.endDate,
            status: 'OPEN',
            approverId: data.approverId
        }, (err, result) => {
            if (err) {
                global.gdsLogger.logError(err);
                callback({
                    message: 'Failed saving ticket'
                });
            } else {
                callback(undefined, result);
            }
        });
    }
}