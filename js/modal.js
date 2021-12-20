function open_close() {
    console.log("llegue");

    $(document).ready(function () {
        var video_screen = document.getElementById('myFrame');
        var video_screen2 = document.getElementById('myFrame2');
        var video_screen3 = document.getElementById('myFrame3');
        var video_screen4 = document.getElementById('myFrame4');
        var video_screen5 = document.getElementById('myFrame5');
        var video_screen6 = document.getElementById('myFrame6');
        var video_screen7 = document.getElementById('myFrame7');
        var video_screen8 = document.getElementById('myFrame8');
        var video_screen9 = document.getElementById('myFrame9');
        var video_screen10 = document.getElementById('myFrame10');
        var video_screen11 = document.getElementById('myFrame11');
        var video_screen12 = document.getElementById('myFrame12');
        var video_screen13 = document.getElementById('myFrame13');
        var video_screen14 = document.getElementById('myFrame14');
        var video_screen15 = document.getElementById('myFrame15');

        var play_pause_status = "play";


        function play_pause() {
            if (play_pause_status == "pause") {

            }
            else {
                video_screen.pause();
                video_screen2.pause();
                video_screen3.pause();
                video_screen4.pause();
                video_screen5.pause();
                video_screen6.pause();
                video_screen7.pause();
                video_screen8.pause();
                video_screen9.pause();
                video_screen10.pause();
                video_screen11.pause();
                video_screen12.pause();
                video_screen13.pause();
                video_screen14.pause();
                video_screen15.pause();
               
                console.log("llgue pause " + play_pause_status.toString());
                play_pause_status = "pause";
            }
        }
        

        play_pause();
    });

   
}