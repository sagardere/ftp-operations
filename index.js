var Client = require('ftp');
var fs = require('fs');

//this application perform diffrent operations on files using ftp server.

var c = new Client();
c.on('ready', function() {
  // c.list(function(err, list) {
  //   if (err) throw err;
  //   console.dir(list);
  //   });
  // // Retrieves the server's operating system
  // c.system(function(err , OS ){
  //   if (err){
  //      console.log(err);
  //     }
  //   else{
  //      console.log("Current operating system: " + OS);
  //    }
  // });
  // //  Retrieves the size of path
  // c.size("/home/sagar/Desktop/sqrinfo/ftp/ftp-operations.js" , function(err , numBytes ){
  //   if (err){
  //      console.log(err);
  //     }
  //   else{
  //      console.log("Size of current path is : " + numBytes + "kb");
  //    }
  // });
  // // Retrieves the last modified date and time for path
  // c.lastMod("/home/sagar/Desktop/sqrinfo/ftp/ftp-operations.js" , function(err , lastModified ){
  //   if (err){
  //      console.log(err);
  //     }
  //   else{
  //      console.log("Last modified : " + lastModified);
  //    }
  // });
  // //Information about the server's status.
  // c.status(function(err,status){
  //   if (err){
  //      console.log(err);
  //     }
  //   else{
  //      console.log(status);
  //    }
  // });
  // //Sets the transfer data type to Binary..
  // c.binary(function(err){
  //   if (err){
  //      console.log(err);
  //     }
  //   else{
  //      console.log("Transfer data type set to Binary");
  //    }
  // });
  // //Sets the transfer data type to ASCII..
  // c.ascii(function(err){
  //   if (err){
  //      console.log(err);
  //     }
  //   else{
  //      console.log("Transfer data type set to ASCII");
  //    }
  // });
  // //Upload local file to the server
  //  c.put('uploadfile.txt', 'uploadfilecopy.remote-copy.txt', function(err) {
  //   if (err){
  //      console.dir(err);
  //     }
  //   else{
  //      console.log(" File upload successful...");
  //    }
  // });
  // //Download file from the server
  //  c.get('enqueuedpartial_file.csv', function(err, stream) {
  //   if (err){
  //      console.dir(err);
  //     }
  //     else{
  //      // stream.once('close', function() { c.end(); });
  //       stream.pipe(fs.createWriteStream('enqueuedpartial_file.csv'));
  //       console.log("File successfully Downloaded from server")
  //     }
  // });
  // //Delete perticular file not delete any folder using this operation
  // c.delete("/home/sagar/Desktop/sqrinfo/ftp/Downloadfilecopy.local-copy.txt",function(err){
  //   if (err){
  //      console.dir(err);
  //     }
  //   else{
  //      console.log("Delete file successfully");
  //    }
  // });
  // //All Information About a directory
  // c.list  (function(err, list) {
  //   if (err) throw err;
  //   console.dir(list);
  //   });
  // //create directory
  // c.mkdir("/home/sagar/Desktop/sqrinfo/ftp/CreatedDirectory",false , function(err){
  //   if (err){
  //      console.dir(err);
  //     }
  //   else{
  //      console.log(" Directory Created");
  //    }
  // });
  // // Removed Directory
  // c.rmdir("/home/sagar/Desktop/sqrinfo/ftp/CreatedDirectory",false , function(err){
  //   if (err){
  //      console.dir(err);
  //     }
  //   else{
  //      console.log(" Directory Removed");
  //    }
  // });
  // // Changes the working directory to the parent of the current directory.
  // c.cdup(function(err){
  //   if (err){
  //      console.dir(err);
  //     }
  //   else{
  //      console.log(" Directory change parent of the current directory ");
  //    }
  // });
  // //Changes the current working directory to path.
  // c.cwd("/home/sagar/Desktop/sqrinfo/ftp" , function(err,currentDir){
  //   if (err){
  //      console.log(err);
  //     }
  //   else{
  //      console.log("Directory change successfully...");
  //    }
  // });
  // //Retrieves the current working directory.
  // c.pwd(function(err , cwd ){
  //   if (err){
  //      console.log(err);
  //     }
  //   else{
  //      console.log("Current working directory : " + cwd);
  //    }
  // });
  // // Sets the file byte offset for the next file transfer action.
  // c.restart("get" , function(err ){
  //   if (err){
  //      console.log(err);
  //     }
  //   else{
  //      console.log("Sets the file byte offset for the next file transfer action ");
  //    }
  // });
  c.end();
});
// If occure any error when creating connection
c.on('error', function(error) {
  console.log('err', error)
});
// close the all connection wh all are complited
c.end();
c.connect({
  host: "YourCredentials",
  port: 21, // defaults to 21
  user: "userName", // defaults to "anonymous"
  password: "Password" // defaults to "@anonymous"
});