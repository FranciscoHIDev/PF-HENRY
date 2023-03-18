const mongoose = require("mongoose");

const userCompraSchema = mongoose.Schema({

  id_shop: {
    type: String,
  },

  date_created: {
    type: String,
  },
  
  id_vendedor: {
    type: String,
  },

  action: {
    type: String,
    enum: ["", "payment.created"],
  },

  email: {
    type: String,
  },

  status_shop: {
    type: String,
    default: "checking"
  }

});

module.exports = mongoose.model("UserCompraSchema", userCompraSchema);