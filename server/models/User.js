var mongoose = require('mongoose')
var Schema = mongoose.Schema
var bcrypt = require('bcrypt-nodejs')

var TransactionSchema = new mongoose.Schema({
  from: { type: String, unique: false },
  to: { type: String, unique: false },
  amount: { type: Number },
  timestamp: { type: Date, default: Date.now }
})

var UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  checkingBalance: { type: Number, default: 250 },
  savingsBalance: { type: Number, default: 500 },
  transactions: [TransactionSchema],
  isClosed: { type: Boolean, default: false },
  dob: Date,
  ssn: String,
  name: String
})

UserSchema.pre('save', function (next) {
  var user = this
  if (this.isModified('password') || this.isNew) {
    bcrypt.genSalt(10, function (err, salt) {
      if (err) {
        return next(err)
      }
      bcrypt.hash(user.password, salt, null, function (err, hash) {
        if (err) {
          return next(err)
        }
        user.password = hash
        next()
      })
    })
  } else {
    return next()
  }
})

UserSchema.methods.comparePassword = function (passw, cb) {
  bcrypt.compare(passw, this.password, function (err, isMatch) {
    if (err) {
      return cb(err)
    }
    cb(null, isMatch)
  })
}
UserSchema.methods.close = function (cb) {
  this.isClosed = true
  this.save()
  cb(this)
}
UserSchema.methods.open = function (cb) {
  this.isClosed = false
  this.save()
  cb(this)
}
module.exports = mongoose.model('User', UserSchema)
