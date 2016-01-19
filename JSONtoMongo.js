'use strict';
/* 
  Import modules/files you may need to correctly run the script. 
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config');
var listings;
/* Connect to your database */ 
mongoose.connect('mongodb://isa:123@ds047355.mongolab.com:47355/listing');

/* 
  Instantiate a mongoose model for each listing object in the JSON file, 
  and then save it to your Mongo database 
 */

 fs.readFile('listings.json', 'utf8', function(err, data) {
      listings = JSON.parse(data);
      console.log(listings.entries[1].name);

    // create a new user
    for (var i= 0; i < listings.entries.length; i++){
      var newList = Listing({
      code: listings.entries[i].code,
      name: listings.entries[i].name,
      coordinates: listings.entries[i].coordinates, 
      address: listings.entries[i].address
      }); 

      newList.save(function(err) {
      if (err) throw err;
      // console.log("Added list");
      });
    }
  });



/* 
  Once you've written + run the script, check out your MongoLab database to ensure that 
  it saved everything correctly. 
 */