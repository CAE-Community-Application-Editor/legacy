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
    if (intent.action == "ADMIN_ACHIEVEMENTS_BY_APPLICATION") {
      adminAchiemevementsByApplication(intent.data);
    }
    if (intent.action == "GET_ACHIEVEMENTS_BY_APPLICATION") {
      getAchievementsByApplication(intent.data);
    }
  };
  
  client = new Las2peerWidgetLibrary("http://localhost:8080/application/{id}/achievement/", iwcCallback);
  

}


// addWin
var addWin = function(){
  var achievementid = "initialized";
  client.sendIntent("ADD_WIN_TO_CURRENT_USER", achievementid);
}


// updateAchievement
var updateAchievement = function(){
  client.sendRequest("PUT", "{id}", "", "", {}, true,
  function(data, type) {
    console.log(data);
  },
  function(error) {
    console.log(error);
  });
}


// createAchievement
var createAchievement = function(){
  var id,type,name,score,rank = null;
  client.sendRequest("POST", "", id,type,name,score,rank, "application/json", {}, true,
  function(data, type) {
    console.log(data);
  },
  function(error) {
    console.log(error);
  });
}


// adminAchiemevementsByApplication
var adminAchiemevementsByApplication = function(){
  client.sendRequest("GET", "", "", "", {}, true,
  function(data, type) {
    console.log(data);
  },
  function(error) {
    console.log(error);
  });
  $("#achievementListAdmin").html("Upated Element");
}


// getAchievementsByApplication
var getAchievementsByApplication = function(){
  client.sendRequest("GET", "", "", "", {}, false,
  function(data, type) {
    console.log(data);
  },
  function(error) {
    console.log(error);
  });
  $("#achievementList").html("Upated Element");
}


// getAchievementAdmin
var getAchievementAdmin = function(){
  client.sendRequest("GET", "{id}", "", "", {}, true,
  function(data, type) {
    console.log(data);
  },
  function(error) {
    console.log(error);
  });
  $("#achievementAdmin").html("Upated Element");
}


$(document).ready(function() {
  init();
});
