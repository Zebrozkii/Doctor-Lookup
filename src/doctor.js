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
    promise.then(function(response){
      $('#doctor-info').empty();
      let body = JSON.parse(response);
      var info = $('#doctor-info');
      console.log(info);
      
    });
  });
});
