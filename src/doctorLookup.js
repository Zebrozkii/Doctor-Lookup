import $ from 'jquery';

export default class userSearch{
 getName(searchName) {
   let url = "https://api.betterdoctor.com/2016-03-01/doctors?name=$" + searchName + "&location=or-portland&user_key=" + process.env.exports.apiKey;
return new Promise(function(resolve,reject){
  let request = new XMLHttpRequest();
  request.onload = function() {
    if (this.status ===200) {
      resolve(request.response);
    }else {
      $('.apiError').text("there was a error"+ this.status);
    }
  }
  request.open("GET", url, true);
  request.send();
});

 }
}
