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
    if (intent.action == "selectedUser") {
      loadAchievedList(intent.data);
    }
    if (intent.action == "selectedUser") {
      loadUser(intent.data);
    }
    if (intent.action == "selectedUser") {
      loadAppList(intent.data);
    }
  };
  
  client = new Las2peerWidgetLibrary("http://localhost:8080/profil", iwcCallback);
  

  $('#refreshButton').on('click', function() {
    loadAchievedList();
  })
  $('#refreshButton').on('click', function() {
    loadAppList();
  })
  $('#refreshButton').on('click', function() {
    loadUser();
  })
}


// loadAchievedList
var loadAchievedList = function(userid){
  var list = null;
  client.sendRequest("GET", "{id}/apps/{appid}/achieved", "", "", {}, true,
  function(data, type) {
    console.log(data);
  },
  function(error) {
    console.log(error);
  });
  $("#list").html("Upated Element");
  return list;
}


// loadUser
var loadUser = function(userid){
  var user = null;
  client.sendRequest("GET", "{id}/user", "", "", {}, true,
  function(data, type) {
    console.log(data);
  },
  function(error) {
    console.log(error);
  });
  $("#name").html("Upated Element");
  return user;
}


// loadAppList
var loadAppList = function(userid){
  var list = null;
  client.sendRequest("GET", "{id}/apps", "", "", {}, true,
  function(data, type) {
    console.log(data);
  },
  function(error) {
    console.log(error);
  });
  $("#list").html("Upated Element");
  return list;
}


$(document).ready(function() {
  init();
});
