import * as fs from 'fs';

export default async function getPostText() {
  // Generate the text for your post here. You can return a string or a promise that resolves to a string
  
  // read entire file (hardcoded 'text.txt') into an array, pick random line to return
  var array = fs.readFileSync('./PiersBText','utf8').toString().split("\n");
  
  //console.log(array.length);

  // get rid of empty strings (used for formatting)
  array = array.filter(function(n){ return n.length > 0});
   
  // choose one of the lines...
  var x = Math.floor(Math.random() * array.length);
  var line = array[x];
  
  // troubleshooting stats
  console.log("----------------------")
  console.log("STATS (POST-FILTERING)")
  console.log("----------------------")
  console.log("array.length = " + array.length);
  console.log("index = " + x);
  console.log("line.length = " + line.length);
  if (line.length > 300) {
    console.log("ERROR: line.length > 300!")
  }
  console.log("pos = " + line + "\n");
  //console.log(array);

  // implement a (while) check to ensure strings are >= 300 characters?
  // filter command (e.g. checking for empty, above) would work for this
  
  
  // if text is short enough, append hashtag.
  // do i want this? set to false for default
  var use_hashtag = false;
  
  var hashtag = new String ( " #HHGG");
  if (line.length < 294) {
    if (use_hashtag) {
      line = line.concat(hashtag.toString());
    }
  }

  return line;

  //return "Hello from the Bluesky API";
}
