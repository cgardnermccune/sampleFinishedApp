//This file holds any configuration variables we may need 
//'config.js' is ignored by git to protect sensitive information, such as your database's username and password
//copy this file's contents to another file 'config.js' and store your MongoLab uri there

module.exports = {
  db: {
    uri: 'mongodb://medhir:medhir99@ds061984.mongolab.com:61984/listings', //place the URI of your mongo database here.
  }, 
  googleMaps: {
    key: 'AIzaSyD2_8KtkVdoJi_CKNOEWfxCnO4hi_KjqcM'
  },
  port: 8080
};