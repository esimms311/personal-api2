var user = require('../user.js');


module.exports = {

getName: function(req, res, next) {
  res.status(200).json({
    name: user.name
  });
},

getLocation: function(req, res, next) {
  res.status(200).json({
    location: user.location
  });
},

getOccupations: function(req, res, next) {
  res.status(200).json({
    
  })
}



}
