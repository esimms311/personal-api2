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
      if(req.query.order) {
        if( req.query.order === 'asc') {
          user.occupations.sort();
        } else if (req.query.order === 'desc'){
          user.occupations.sort().reverse();
        }
      }
      res.status(200).json({
        occupations: user.occupations
      })
    },

getOccupationsLatest: function(req, res, next) {
    res.status(200).json({
      latestOccupation: user.occupations[user.occupations.length - 1]
    });
},

getHobbies: function(req, res, next) {
  res.status(200).json({
      hobbies: user.hobbies
  });
},

getHobbyType: function(req, res, next) {
    var filteredHobby = user.hobbies.filter(function(val){
      return val.type === req.params.type;
    });
    res.status(200).json({
      hobbies: filteredHobby
    });
},

getFamily: function(req, res, next) {
  res.status(200).json({
    family: user.family
  });
},

getFamilyGender: function(req, res, next) {
  var filteredFamily = user.family.filter(function(val){
    return val.gender === req.params.gender;
  });
  res.status(200).json({
    hobbies: filteredFamily
  });
},

getRestaurants: function(req, res, next) {
  res.status(200).json({
    restaurants: user.restaurants
  });
},

getRestaurantsName: function(req, res, next) {
  var filteredRestaurants = user.restaurants.filter(function(val){
    return val.name === req.params.name;
  });
  res.status(200).json({
    restaurants: filteredRestaurants
  })
}

}
