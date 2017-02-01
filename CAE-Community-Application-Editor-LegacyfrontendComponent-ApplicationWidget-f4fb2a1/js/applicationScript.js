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
  
  client = new Las2peerWidgetLibrary("http://localhost:8080/", iwcCallback);
  

  $('#incScroeActiveApp').on('click', function() {
    incScore();
  })
  $('#adminButton').on('click', function() {
    getAdministrated();
  })
  $('#activeAppAddUsage').on('click', function() {
    addUsage();
  })
  $('#showListButton').on('click', function() {
    getApplicationList();
  })
  $('#updateButton').on('click', function() {
    updateApplication();
  })
}


// getAdministratedApp
var getAdministratedApp = function(){
  client.sendRequest("GET", "{id}", "", "", {}, true,
  function(data, type) {
    console.log(data);
  },
  function(error) {
    console.log(error);
  });
  $("#adminApp").html("Upated Element");
  var appid = "initialized";
  client.sendIntent("EDIT_ACHIEVEMENTS", appid);
}


// updateApplication
var updateApplication = function(){
  var {name: name} = null;
  client.sendRequest("PUT", "{id}", {name: name}, "application/json", {}, true,
  function(data, type) {
    console.log(data);
  },
  function(error) {
    console.log(error);
  });
}


// getAdministrated
var getAdministrated = function(){
  client.sendRequest("GET", "administrated", "", "", {}, true,
  function(data, type) {
    console.log(data);
  },
  function(error) {
    console.log(error);
  });
  $("#adminList").html("Upated Element");
}


// getApplicationList
var getApplicationList = function(){
  client.sendRequest("GET", "", "", "", {}, false,
  function(data, type) {
    console.log(data);
  },
  function(error) {
    console.log(error);
  });
  $("#appList").html("Upated Element");
}


// createApplication
var createApplication = function(){
  var {name: name} = null;
  client.sendRequest("POST", "", {name: name}, "application/json", {}, true,
  function(data, type) {
    console.log(data);
  },
  function(error) {
    console.log(error);
  });
}


// getApplication
var getApplication = function(){
  client.sendRequest("GET", "{id}", "", "", {}, false,
  function(data, type) {
    console.log(data);
  },
  function(error) {
    console.log(error);
  });
  $("#activeApp").html("Upated Element");
  var appid = "initialized";
  client.sendIntent("SHOW_ACHIEVEMENTS", appid);
}


// incScore
var incScore = function(){
  var score, app = "initialized";
  client.sendIntent("INC_SCORE_OF_ACTIVE_USER", score, app);
}


// addUsage
var addUsage = function(){
  var appid = "initialized";
  client.sendIntent("ADD_USAGE", appid);
}


$(document).ready(function() {
  init();
});
