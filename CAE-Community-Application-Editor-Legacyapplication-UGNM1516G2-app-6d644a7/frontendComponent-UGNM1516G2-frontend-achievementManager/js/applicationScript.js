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
    if (intent.action == "selectedApp") {
      loadList(intent.data);
    }
    if (intent.action == "selectedApp") {
      createAchievement(intent.data);
    }
  };
  
  client = new Las2peerWidgetLibrary("http://localhost:8080/achievements", iwcCallback);
  

  $('#createButton').on('click', function() {
    createAchievement();
  })
  $('#list').on('click', function() {
    updateAchievement();
  })
  $('#list').on('click', function() {
    deleteAchievement();
  })
  $('#refreshListButton').on('click', function() {
    loadList();
  })
}


// updateAchievement
var updateAchievement = function(){
  var none = null;
  var data = null;
  client.sendRequest("PUT", "{id}", data, "application/json", {}, true,
  function(data, type) {
    console.log(data);
  },
  function(error) {
    console.log(error);
  });
  return none;
}


// loadList
var loadList = function(appid){
  var list = null;
  client.sendRequest("GET", "app/{appid}/all", "", "", {}, true,
  function(data, type) {
    console.log(data);
  },
  function(error) {
    console.log(error);
  });
  $("#list").html("Upated Element");
  return list;
}


// createAchievement
var createAchievement = function(appid){
  var achievement = null;
  var achievement = null;
  client.sendRequest("POST", "all", achievement, "application/json", {}, true,
  function(data, type) {
    console.log(data);
  },
  function(error) {
    console.log(error);
  });
  return achievement;
}


// deleteAchievement
var deleteAchievement = function(){
  var none = null;
  var data = null;
  client.sendRequest("DELETE", "{id}", data, "application/json", {}, true,
  function(data, type) {
    console.log(data);
  },
  function(error) {
    console.log(error);
  });
  return none;
}


$(document).ready(function() {
  init();
});
