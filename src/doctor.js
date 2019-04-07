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

  });
});
