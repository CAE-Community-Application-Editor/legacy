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
      loadAchievedList(intent.data);
    }
    if (intent.action == "selectedApp") {
      loadUnachievedList(intent.data);
    }
  };
  
  client = new Las2peerWidgetLibrary("htttp://localhost:8080/achievements", iwcCallback);
  

  $('#notachievedbutton').on('click', function() {
    loadUnachievedList();
  })
  $('#achievedbutton').on('click', function() {
    loadAchievedList();
  })
}


// loadAchievedList
var loadAchievedList = function(appid){
  var list = null;
  client.sendRequest("GET", "app/{appid}/user/{userid}/all", "", "", {}, true,
  function(data, type) {
    console.log(data);
  },
  function(error) {
    console.log(error);
  });
  $("#achievementList").html("Upated Element");
  return list;
}


// loadUnachievedList
var loadUnachievedList = function(appid){
  var list = null;
  client.sendRequest("GET", "app/{appid}/notachieved/{userid}", "", "", {}, true,
  function(data, type) {
    console.log(data);
  },
  function(error) {
    console.log(error);
  });
  $("#achievementList").html("Upated Element");
  return list;
}


$(document).ready(function() {
  init();
});