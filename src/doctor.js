import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import './styles.css';
import userSearch from './doctorLookup';

$(document).ready(function() {
  $('form#doctorName').submit(function(event) {
    event.preventDefault();
    let searchName = $('#nameInput').val();
    console.log(searchName);
    let doctorSearch = new userSearch();
    console.log(doctorSearch);
    let promise = doctorSearch.getName(searchName);
    console.log(promise);
    $('#doctorInfo').empty();

    promise.then(function(response){
      let body = JSON.parse(response);
      var info = body.data;
      console.log(info);
      if(info.length === 0){
        $('#doctorInfo').text("there are no doctors avaible for that");
      } else {
        for (var i = 0; i < info.length; i++) {
          $('#doctorInfo').append(`<h3>${info[i].profile.first_name} ${info[i].profile.last_name} ${info[i].profile.title}</h3>`);
         $('#doctorInfo').append(`<li>Address: ${info[i].practices[0].visit_address.street} ${info[i].practices[0].visit_address.city} ${info[i].practices[0].visit_address.state} ${info[i].practices[0].visit_address.zip}</li>`);
         $('#doctorInfo').append(`<li>Phone: ${info[i].practices[0].phones[0].number} </li>`);

         if ('${info[i].practices.website}' !== undefined){
          $('#doctorInfo').append(`<li>Website: ${info[i].practices[0].website} </li>`);
        } else{
            $('#doctorInfo').append(`<li>Website: No Website </li>`);
           }
         }
        }

    });
  });
});
