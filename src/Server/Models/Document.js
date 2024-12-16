const mongoose = require('mongoose');

const DocumentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  approvedUsers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  status: { type: String, enum: ['Pending', 'Approved'], default: 'Pending' },
});

module.exports = mongoose.model('Document', DocumentSchema);
