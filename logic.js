// Your web app's Firebase configuration
// added api key*
//*wont be posted in my git hub buddy or pal 
// added analystics for fun

var firebaseConfig = {
    apiKey: "AIzaSyCGyshcvOUxKhTAgMtuLuIToiKs8WW10J4",
    authDomain: "train-scheduler-66642069.firebaseapp.com",
    databaseURL: "https://train-scheduler-66642069.firebaseio.com",
    projectId: "train-scheduler-66642069",
    storageBucket: "train-scheduler-66642069.appspot.com",
    messagingSenderId: "288347089771",
    appId: "1:288347089771:web:ad165e337b63c5d4f67a2e",
    measurementId: "G-31GVFLYWMC"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// variables 
var trainData = firebase.database();
var train = "";
var destination = "";
var firstTrain = "";
var frequency = 0;
var minutes = 0;


("#run-search").on("click", function (event) {
    event.preventDefault()
    //variales to pull user input from textbox
    var train = $("#trainName")
        .val().trim();
    var destination = $("#destination")
        .val().trim();
    var trainTime = moment($("#trainTime")
        .val().trim(), "HH:mm").subtract(10, "years").format("X");
    var frequency = $("#frequency").val().trim();
    //variable to create local temporary object to hold input data
    var trainInput = {
        name: trainName,
        destination: destination,
        time: trainTime,
        frequency: frequency
    };