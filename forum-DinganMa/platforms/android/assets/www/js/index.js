/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();





//=========================================
//variables
//=========================================

var topics = [
  {tittle: "Student Topics", posts: 14, Last_Post_User: {text:"Welcome to Student Topic",author:"Martin",date:"03/08/17"}
},
  {tittle: "Other Topics", posts: 5, Last_Post_User:{text:"Welcome to Other Topic",author:"Martin",date:"03/08/17"}},

];

var discuss = [
  {Subject:"Project one", Author: "Matin", Date:"03, Aug, 2017, 15:00PM"},
  {Subject:"Project two", Author: "ViVi", Date:"01, Aug, 2017, 18:00PM"}
];

//============================================
//function
//create on click
//=============================================
function createTopicOnclick(event,topic){
  event.on("click",function(){
    showSingleTopic(topic);
  });
}

function reply(noob,Subject){
  noob.on("click",function(){
    gotoalert(Subject);
  });
}

//=================================================
//create reply page function
//=========================================

function gotoalert(replyDetails){
     alert("You are trying to reply the " + replyDetails.Subject);
     var page = $("<div></div>");
     page.append("<h1 class='fontsize3'>"+replyDetails.Subject+"</h1>");
     page.append('<textarea name="textarea-18" id="textarea-18" rows="8" cols="40">Type your reply</textarea>');
     page.append('<form><fieldset data-role="controlgroup"><label for="select-native-11">Select font family</label><select name="select-native-11" id="select-native-11"><option value="#">Apple Chancery</option><option value="#">Calibri Light</option><option value="#">Ayuthaya</option></select><label for="select-native-12">Select Color</label><select name="select-native-12" id="select-native-12"><option value="#">Red</option><option value="#">Blue</option><option value="#">Yellow</option></select><label for="select-native-13">Select Font Size</label><select name="select-native-13" id="select-native-13"><option value="#">Small</option><option value="#">Middle</option><option value="#">Large</option></select></fieldset></form>');
     page.append("<form><button>submit</button>&nbsp;<button>cancel</button></form>");
       $("#maincontent").html(page);

   }

//==========================================================
//create create button function
//===========================================================
function showCreate(){
  var page = $("<div></div>");
  page.append("<h1 class='fontsize3'>New Post Details</h1>");

  page.append('<form><label for="search-1">Subject:</label><input name="search-1" id="search-1" type="search" value=""></form>')

  var post = $("<p>Post:</p>");

  page.append(post);



  page.append('<textarea name="textarea-18" id="textarea-18" rows="8" cols="40">Type your content here</textarea>');

   page.append("<form><button>submit</button>&nbsp;<button>cancel</button>&nbsp;<button>save as draft</button></form>");

  $("#maincontent").html(page);
}

//==================================================================
//create set button function
//======================================================================

function showSet(){
  var page =$("<div></div>");

  page.append("<h1 class='fontsize3'>User Setting</h1>");

  page.append('<form><label for="flip-2">Remember the password:</label><select name="flip-2" id="flip-2" data-role="flipswitch" data-theme="b"><option value="off">Off</option><option value="on">On</option></select></form>');

  page.append('<form><div data-role="rangeslider" data-theme="a" data-track-theme="b"><label for="range-3a">Topics per page in "Forum Topics" page:</label><input name="range-3a" id="range-3a" type="range" min="0" max="100" value="20"><label for="range-3b">Subjects per page in Topic pages:</label><input name="range-3b" id="range-3b" type="range" min="0" max="100" value="100"></div></form>');

  page.append('<form><br><label><input name="checkbox-0 " type="checkbox">Post Subjects Unknown</label></form>');




  $("#maincontent").html(page);



}



//  this function can show the forum Topics
function showForumTopics(){
  console.log("aaa")
    var page = $("<div></div>");
    page.append("<h1 class='fontsize3'>Forum Topics</h1>");



    var topicTable = $("<table class='topic'><tr><th>tittle</th><th>posts</th><th>LastPostUser</th></tr></table>");
//  loop through all the topics





    for (index in topics) {
      console.log(topics[index].tittle);
      var row = $("<tr></tr>");
      row.append("<td>" + topics[index].tittle +"</td>")
        row.append("<td>" + topics[index].posts +"</td>")
        row.append("<td>" + topics[index].Last_Post_User.author +"</td>")
        createTopicOnclick(row, topics[index]);
      topicTable.append(row);
    }
     page.append(topicTable);
// //  add page to web app
     $("#maincontent").html(page);
}



//===========================================
//create login button function
//=================================================

function showLoginPage(){
  console.log("aaa")
  // create the page
    var page = $("<div></div>");
    page.append("<h1 class='fontsize3'>Login Page</h1>");

    //Add the username field
    var username = $("<input type='text'></input>");

    var usernameline = $("<p>Username:</p>");

    usernameline.append(username);

    page.append(usernameline);

    var password = $("<input type='text'></input>");

    var passwordline = $("<p>Password:</p>");

    passwordline.append(password);

    page.append(passwordline);

    //add the login button
    var loginButton2 = $("<button>Login</button>")
    page.append(loginButton2);
    loginButton2.on("click",function(){
      console.log("logging in");
      showForumTopics();
    });

    $("#maincontent").html(page);
}


//================================
//show single topicDetails
//================================

function showSingleTopic(topicDetails){
     alert(topicDetails.Last_Post_User.text);
    var page = $("<div></div>");
      page.append("<h1 class='fontsize3'>"+topicDetails.tittle+"</h1>");
    var search = $('<form><label for="search-1">Search:</label><input name="search-1" id="search-1" type="search" value=""></form>');
    var searchbutton = $('<button class="ui-btn ui-btn-inline" style="padding: 5.5px 5px">search</button>')
    search.append(searchbutton);
    page.append(search);

    var createButton = $("<button>Create a new topic</button>");

    var markButton = $("<button>Mark All Read</button>");

    var setButton = $("<br><button>Setting</button>");

    page.append(createButton);

    page.append(setButton);

    page.append(markButton);



//================================================
//use the mark function,create funtion, Setting funtion and refresh function for each button
//=================================================

    markButton.on("click",function(){
      alert("Are you sure to mark all posts as read?");
    });

    createButton.on("click",function(){
      showCreate();
    });

    setButton.on("click",function(){
      showSet();
    });


//=======================================================================
//create a table when user click the row index ,they will go to this table
//=======================================================================

    var topicTable = $("<table class='topic'><tr><th>Subject</th><th>Author</th><th>Date</th></tr></table>");
    for (index in discuss) {
      console.log(discuss[index].Subject);
      var row = $("<tr></tr>");
      row.append("<td>" + discuss[index].Subject +"</td>")
        row.append("<td>" + discuss[index].Author +"</td>")
        row.append("<td>" + discuss[index].Date +"</td>")
        reply(row, discuss[index]);
      topicTable.append(row);
    }
     page.append(topicTable);
// //  add page to web app
      $("#maincontent").html(page);
}


//====================================================
//create a function for register button
//====================================================

function showRegisterPage(){
  console.log("bbb")
    var page = $("<div></div>");
    page.append("<h1 class='fontsize3'>Register Page</h1>");

    //============================================================
    //create a checkbox
    //=============================================================
    page.append('<form><label><input name="checkbox-0 " type="checkbox">Check the username</label></form>');

    //==============================================================
    //combine the text field with the button
    //==================================================================
    var username = $("<input type='text'></input>");

    var usernameline = $("<p>Username:</p>");

    usernameline.append(username);

    page.append(usernameline);

    var password = $("<input type='text'></input>");

    var passwordline = $("<p>Password:</p>");

    passwordline.append(password);

    page.append(passwordline);

    var repetpassword = $("<input type='text'></input>");

    var repetpasswordline = $("<p>RepetPassword:</p>");

    repetpasswordline.append(repetpassword);

    page.append(repetpasswordline);


//=====================================================
//create another register button and link it to register page
//======================================================

    var registerButton2 = $("<button>Register</button>")
    page.append(registerButton2);
    registerButton2.on("click",function(){
      showLoginPage();
    });
    $("#maincontent").html(page);
}


//======================================================
//link the html button to their page
//========================================================
    $(document).ready(function(){
    $("#loginButton").on("click",showLoginPage);
    $("#registerButton").on("click",showRegisterPage);
    $("#resetButton").on("click",showForumTopics);
    // $("#refreshButton").on("click",showSingleTopic);
    // $("#backButton").on("click",showForumTopics);
    showForumTopics();
});
