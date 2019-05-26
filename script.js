window.onload = function() {
    navigator.getUserMedia = (navigator.getUserMedia || 
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia ||
        navigator.msGetUserMedia
        );

        if (navigator.getUserMedia) {
            navigator.getUserMedia(
                {video : true, audio : true},
                // Success function 
                function(LocalMediaStream) {
                    var video = document.getElementById("camera-stream");
                    video.srcObject = LocalMediaStream;
                },

                // Error
                function(err) {
                    console.log("The Following Error Occured When Trying To access The Device Camera: " + err);
                }
            );
        } else {
            alert("Sorry Your Browser Do Not Support Video Streaming");
        }
}