/* Fill out these functions using Mongoose queries*/
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config');
var listings;
/* Connect to your database */ 
mongoose.connect('mongodb://isa:123@ds047355.mongolab.com:47355/listing');


var findLibraryWest = function() {
  /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */
   Listing.find({ code: 'LBW' }, function(err, listing) {
      if (err) throw err;
      console.log(listing);
    });
};

var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */
  Listing.findOneAndRemove({code: 'CABL' }, function(err, listing) {
    if (err) throw err;
    console.log(listing);
    // Listing.remove(function(err) {
      // if (err) throw err;
    // });
  });
};

var updatePhelpsMemorial = function() {
  /*
    Phelps Memorial Hospital Center's address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
   */
  Listing.findOneAndUpdate({ address: "701 N Broadway, Sleepy Hollow, NY 10591, United States" }, { address: "102 Phelps Lab, Gainesville, FL 32611" }, function(err, listing ) {
      if (err) throw err;
      console.log(listing);
  });
};

var retrieveAllListings = function() {
  /* 
    Retrieve all listings in the database, and log them to the console. 
   */
  Listing.find({}, function(err, listing) {
    if (err) throw err;
    console.log(listing);
  });

};

findLibraryWest();
removeCable();
updatePhelpsMemorial();
retrieveAllListings();