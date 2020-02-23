var mainApp = {};

function logOut() {
    firebase.auth().signOut().then(console.log).catch(function(err) {
        console.log(err)
    })

}




window.addEventListener('load', function() {

    console.log("window loaded")
    var firebase = app_fireBase;
    var uid = null;
    firebase.auth().onAuthStateChanged(function(user) {
        console.log(user)
        if (user) {
            console.log('logged in')

        } else {

            console.log('logged out')
            window.location.href = './login.html'
        }

    });
})