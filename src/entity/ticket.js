import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';
import autoIncrement from 'mongoose-auto-increment';

const TicketSchema = mongoose.Schema({
  ticketNo: {
    type: String,
    required: [true, 'Ticket no. is required.'],
    unique: true
  },
  patronId: {
    type: String,
    required: [true, 'Patron id is required.']
  },
  itemId: {
    type: String,
    required: [true, 'Item id is required']
  },
  jobId: String,
  startDate: Date,
  endDate: Date,
  status: String,
  approverId: String,
  dateApproved: Date,
  createdOn: {
    type: Date,
    default: Date.now
  }
});
TicketSchema.plugin(mongoosePaginate);
TicketSchema.plugin(autoIncrement.plugin, {
  model: 'ticket',
  field: 'ticketNo',
  startAt: 100000,
  incrementBy: 1
});

const TicketModel = mongoose.model('ticket', TicketSchema);

export default TicketModel;