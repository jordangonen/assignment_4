//users
var sessionUser;
var currentView;
var newUser = false;


//array of user account objects
var users = [

         user1 = {
                door: {
                        state:3,  // 0 for down, 1 for coming down, 2 for going up, 3 for up
                        temp: 72,
                        hum: 34,
                        motion: true, // boolean

                },
                email:"rocketman@up.nk",
                password:"bestkorea",
                phone:"5555555555",
                id:1234563,
                settings: {
                        name: "Home",
                        temp: true,
                        hum: true,
                        motion: true,
                        autoClose: 14,
                        autoOpen: 200,
                        mobile: {
                                open: true,
                                close: true,
                                openFor: 11,
                        }

                }
        },
         user2 = {
                door: {
                        state:0,  // 0 for down, 1 for coming down, 2 for going up, 3 for up
                        temp: 72,
                        hum: 34,
                        motion: true, // boolean

                },
                email:"dotard@down.us",
                password:"maga",
                phone:"5555555566",
                id:9876123,
                settings: {
                        name: "Home",
                        temp: true,
                        hum: true,
                        motion: true,
                        autoClose: 14,
                        autoOpen: 200,
                        mobile: {
                                open: true,
                                close: true,
                                openFor: 11,
                        }

                }
        }



];




//main page initilization function

function mainSetter() {
        titleSetter();
        settingsSetter();

        if (sessionUser.door.state == 0) {
                document.getElementById('open').style.backgroundColor = 'rgb(65, 159, 49)';
        }
        if (sessionUser.door.state == 3) {
                document.getElementById('open').style.backgroundColor = 'rgb(247, 47, 47)';
        }



}

function titleSetter() {
        if (sessionUser.door.state == 0) {
                stateName = "Down";
                document.getElementById('close-btn').innerHTML = "Open"
        }

        if (sessionUser.door.state == 3) {
                stateName = "Up";
                document.getElementById('close-btn').innerHTML = "Close"
        }
        if (sessionUser.door.state == 1) {
                stateName = "Goin Up";

        }
        if (sessionUser.door.state == 2) {
                stateName = "Going Down";

        }
        document.getElementById('card-title').innerHTML = "Door is " + stateName;

}

function settingsSetter() {
        document.getElementById('garage-name').value =sessionUser.settings.name;
        document.getElementById('garage-id').value =sessionUser.id;
        document.getElementById('temp-check').checked =sessionUser.settings.temp;
        document.getElementById('hum-check').checked =sessionUser.settings.hum;
        document.getElementById('motion-check').checked =sessionUser.settings.motion
        document.getElementById('example-number-input').value =sessionUser.settings.autoClose;
        document.getElementById('yard-input').value =sessionUser.settings.autoOpen;
        document.getElementById('door-opens-check').checked =sessionUser.settings.mobile.open;
        document.getElementById('door-closes-check').checked =sessionUser.settings.mobile.close;
        document.getElementById('door-open-check').checked =sessionUser.settings.mobile.openFor;
}

function sensorDisplay() {
        var tempState = document.getElementById('temp-check').checked;
        console.log(document.getElementById('temp-check').checked);
        var humState = document.getElementById('hum-check').checked;
        var motionState = document.getElementById('motion-check').checked;

        if (tempState == true) {
                document.getElementById('temp-display').innerHTML = sessionUser.door.temp;
        }
        if (tempState == false) {
                document.getElementById('temp-display').innerHTML = "";
        }
        if (humState == true) {
                document.getElementById('hum-display').innerHTML = sessionUser.door.hum;
        }
        if (humState == false) {
                document.getElementById('hum-display').innerHTML = "";
        }
        if (motionState == true) {
                document.getElementById('motion-display').innerHTML = sessionUser.door.motion;
        }
        if (motionState == false) {
                document.getElementById('motion-display').innerHTML = "";
        }
}


// Display Element

function displayElement(hide, show) {
  document.getElementById(hide).style.display = 'none';
  document.getElementById(show).style.display = 'block';
  currentView = show;
}
function singleDisplay(x) {
  document.getElementById(x).style.display ='block';
}

// login button
document.getElementById("login-btn").addEventListener("click", function() {

        var email = document.getElementById('email').value;
        var password = document.getElementById('pw').value;
        if (email == user1.email && password == user1.password ) {

                console.log("USER 1 LOGIN"); //replace with call to display function
                sessionUser = user1;
                mainSetter();
                displayElement("login-page","main-page");
                document.getElementById('logout-li').innerHTML = '<a href="#" id="logout">Logout</a>';
                document.getElementById("logout").addEventListener("click", function() {
                    displayElement(currentView,"login-page");
                    sessionUser = '';
                    currentView = 'login-page';
                    document.getElementById('logout-li').innerHTML = '';

                });

        }
        if (email == user2.email && password == user2.password) {

                console.log("USER 2 LOGIN");//replace with call to display function
                sessionUser = user2;

                mainSetter();
                displayElement("login-page","main-page");
                document.getElementById('logout-li').innerHTML = '<a href="#" id="logout">Logout</a>';
                document.getElementById("logout").addEventListener("click", function() {
                        displayElement(currentView,"login-page");
                        sessionUser = '';
                        currentView = 'login-page';
                        document.getElementById('logout-li').innerHTML = '';
                });


        }

                if (newUser == true) {
                        if (email == user3.email && password == user3.password) {

                                console.log("USER 3 LOGIN");//replace with call to display function
                                sessionUser = user3;
                                mainSetter();
                                displayElement("login-page","main-page");
                                document.getElementById('logout-li').innerHTML = '<a href="#" id="logout">Logout</a>';
                                document.getElementById("logout").addEventListener("click", function() {
                                        displayElement(currentView,"login-page");
                                        sessionUser = '';
                                        currentView = 'login-page';
                                        document.getElementById('logout-li').innerHTML = '';
                                });
                        }
                        if(email != user1.email && email != user2.email && email != user3.email) {
                                alert("Wrong Login Details. Try Again.");
                                console.log("WRONG LOGIN INFO");//replace with print to page of inncorrect password or email
                        }

                }
        if(newUser == false && email != user1.email && email != user2.email) {
                alert("Wrong Login Details. Try Again.");
                console.log("WRONG LOGIN INFO");//replace with print to page of inncorrect password or email
        }

});
// forgot-password-button
document.getElementById("forgot-pwd-btn").addEventListener("click", function() {
    displayElement("login-page","request-page");
});
// forgot-password-button
document.getElementById("forgot-pwd-btn").addEventListener("click", function() {
    displayElement("login-page","request-page");
});
document.getElementById("create-account-btn").addEventListener("click", function() {
    displayElement("login-page","create-page");
});
document.getElementById("complete-creation-btn").addEventListener("click", function() {


    if(document.getElementById("email-registration").value != "" &&
    document.getElementById("email-registration").value != "" &&
    document.getElementById("pw-registration").value != "" &&
    document.getElementById("phone-registration").value != "" &&
    document.getElementById("id-registration").value != "") {


      user3 = {
             door: {
                     state:3,  // 0 for down, 1 for coming down, 2 for going up, 3 for up
                     temp: 72,
                     hum: 34,
                     motion: true, // boolean

             },
             email:"",
             password:"",
             phone:"",
             id:"",
             settings: {
                     name: "Home",
                     temp: true,
                     hum: true,
                     motion: true,
                     autoClose: 14,
                     autoOpen: 200,
                     mobile: {
                             open: true,
                             close: true,
                             openFor: 11,
                     }

             }
      };

      user3.email = document.getElementById("email-registration").value;
      user3.password = document.getElementById("pw-registration").value;
      user3.phone = document.getElementById("phone-registration").value;
      user3.id = document.getElementById("id-registration").value;
      newUser=true;
      users.push["user3"];
      displayElement("create-page","login-page");

    } else {
      alert("Please fill out the entire form.")
    }



});
document.getElementById("request-pwd-btn").addEventListener("click", function() {
    passWrite();
});


document.getElementById("settings-btn").addEventListener("click", function() {
    displayElement("main-page","edit-page");
});
document.getElementById("save-btn").addEventListener("click", function() {
        sensorDisplay();
    displayElement("edit-page","main-page");
});
document.getElementById('nav-doors').addEventListener('click', function() {
        if (currentView != 'login-page') {
                displayElement(currentView,"main-page");
        }

});
document.getElementById("close-btn").addEventListener("click", function() {
    stateChange();
});






// state change animation function for door open and close
function stateChange() {
        //
        // green rgb(65, 159, 49)
        // red rgb(247, 47, 47)
        if (sessionUser.door.state == 0) { //down to up animation
                sessionUser.door.state = 1;
                console.log(sessionUser.door.state);
                titleSetter();

                document.getElementById('open').style.backgroundColor  = 'rgb(247, 231, 12)';

                setTimeout(function(){ document.getElementById('open').style.backgroundColor  = 'rgb(247, 47, 49)';
                sessionUser.door.state = 3;
                console.log(sessionUser.door.state);
                titleSetter();

                }, 5000);

        }
        if (sessionUser.door.state == 3) { // up to down animation
                sessionUser.door.state = 2;
                titleSetter();
                document.getElementById('open').style.backgroundColor  = 'rgb(247, 231, 12)';

                setTimeout(function(){ document.getElementById('open').style.backgroundColor  = 'rgb(65, 159, 49)';
                sessionUser.door.state = 0;
                titleSetter();

                }, 5000);

        }

}

//retrive forgoten passwords

function passWrite() {
        var requestUser;
        if (document.getElementById('request-email').value == user1.email) {
                requestUser = user1;

        }
        if (document.getElementById('request-email').value == user2.email) {
                requestUser = user2;
        }
        if (newUser == true) {
                if (document.getElementById('request-email').value == user1.email) {
                        requestUser = user1;

                }
        }

        console.log(requestUser);
        alert('Your password is ' + requestUser.password);
        document.getElementById('password-display').innerHTML =  '<button id="back-to-main">Back to Login</button>';
        document.getElementById("back-to-main").addEventListener("click", function() {
                passScrape();
            displayElement("request-page","login-page");
        });
}
function passScrape() {
        document.getElementById('password-display').innerHTML = '';
}
