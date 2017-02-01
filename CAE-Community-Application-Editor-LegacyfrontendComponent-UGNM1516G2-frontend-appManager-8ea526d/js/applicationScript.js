/*
 * Copyright (c) 2015 Advanced Community Information Systems (ACIS) Group, Chair
 * of Computer Science 5 (Databases & Information Systems), RWTH Aachen
 * University, Germany All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this
 * list of conditions and the following disclaimer.
 * 
 * Redistributions in binary form must reproduce the above copyright notice,
 * this list of conditions and the following disclaimer in the documentation
 * and/or other materials provided with the distribution.
 * 
 * Neither the name of the ACIS Group nor the names of its contributors may be
 * used to endorse or promote products derived from this software without
 * specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 */

var client;

var init = function() {
  
  var iwcCallback = function(intent) {
    // define your reactions on incoming iwc events here
    console.log(intent);
  };
  
  client = new Las2peerWidgetLibrary("http://localhost:8080/app", iwcCallback);
  

  $('#loadList').on('click', function() {
    Loadlist();
  })
  $('#createButton').on('click', function() {
    createApp();
  })
  $('#List').on('click', function() {
    deleteApp();
  })
  $('#List').on('click', function() {
    updateApp();
  })
  $('#List').on('click', function() {
    addAdmin();
  })
}


// updateApp
var updateApp = function(){
  var updatedapp = null;
  client.sendRequest("PUT", "{id}", "", "", {}, true,
  function(data, type) {
    console.log(data);
  },
  function(error) {
    console.log(error);
  });
  $("#List").html("Upated Element");
  return updatedapp;
}


// deleteApp
var deleteApp = function(){
  var none = null;
  client.sendRequest("DELETE", "{id}", "", "", {}, true,
  function(data, type) {
    console.log(data);
  },
  function(error) {
    console.log(error);
  });
  $("#List").html("Upated Element");
  return none;
}


// createApp
var createApp = function(){
  var createdapp = null;
  var name = null;
  client.sendRequest("POST", "all", name, "application/json", {}, true,
  function(data, type) {
    console.log(data);
  },
  function(error) {
    console.log(error);
  });
  $("#statuslabel").html("Upated Element");
  return createdapp;
}


// addAdmin
var addAdmin = function(){
  var none = null;
  client.sendRequest("POST", "{id}/admin/{userid}", "", "", {}, true,
  function(data, type) {
    console.log(data);
  },
  function(error) {
    console.log(error);
  });
  return none;
}


// Loadlist
var Loadlist = function(){
  var list = null;
  client.sendRequest("GET", "users/me/manages", "", "", {}, true,
  function(data, type) {
    console.log(data);
  },
  function(error) {
    console.log(error);
  });
  $("#List").html("Upated Element");
  return list;
}


$(document).ready(function() {
  init();
});
