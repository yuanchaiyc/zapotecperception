/*import csv files*/

var trial_ExpI_list = [
  {"sp0":"verde","zp0":"ya'a","pic0":"image/green.png","tone0":"H","phonation0":"R","sp1":"plaza","zp1":"ya'a","pic1":"image/plaza.jpg","tone1":"R","phonation1":"R","sp2":"San Andres Yaa","zp2":"ya'","pic2":"image/san_andres.png","tone2":"H","phonation2":"C","sp3":"carrizo","zp3":"ya","pic3":"image/carrizo.jpg","tone3":"F","phonation3":"M","sp4":"metal","zp4":"ya","pic4":"image/metal.png","tone4":"R","phonation4":"M","path":"dissertation_sound/expzp/yaa_fierro_original_150_pitch_manipulated_gl_1_5.wav","length":"150","glposition":"1","seq":"1","status":"test"}
  ,
  {"sp0":"verde","zp0":"ya'a","pic0":"image/green.png","tone0":"H","phonation0":"R","sp1":"plaza","zp1":"ya'a","pic1":"image/plaza.jpg","tone1":"R","phonation1":"R","sp2":"San Andres Yaa","zp2":"ya'","pic2":"image/san_andres.png","tone2":"H","phonation2":"C","sp3":"carrizo","zp3":"ya","pic3":"image/carrizo.jpg","tone3":"F","phonation3":"M","sp4":"metal","zp4":"ya","pic4":"image/metal.png","tone4":"R","phonation4":"M","path":"dissertation_sound/expzp/yaa_fierro_original_150_pitch_manipulated_gl_2_5.wav","length":"150","glposition":"2","seq":"2","status":"test"}
  ,
  {"sp0":"verde","zp0":"ya'a","pic0":"image/green.png","tone0":"H","phonation0":"R","sp1":"plaza","zp1":"ya'a","pic1":"image/plaza.jpg","tone1":"R","phonation1":"R","sp2":"San Andres Yaa","zp2":"ya'","pic2":"image/san_andres.png","tone2":"H","phonation2":"C","sp3":"carrizo","zp3":"ya","pic3":"image/carrizo.jpg","tone3":"F","phonation3":"M","sp4":"metal","zp4":"ya","pic4":"image/metal.png","tone4":"R","phonation4":"M","path":"dissertation_sound/expzp/yaa_fierro_original_150_pitch_manipulated_gl_3_5.wav","length":"150","glposition":"3","seq":"3","status":"test"}
  ,
  {"sp0":"verde","zp0":"ya'a","pic0":"image/green.png","tone0":"H","phonation0":"R","sp1":"plaza","zp1":"ya'a","pic1":"image/plaza.jpg","tone1":"R","phonation1":"R","sp2":"San Andres Yaa","zp2":"ya'","pic2":"image/san_andres.png","tone2":"H","phonation2":"C","sp3":"carrizo","zp3":"ya","pic3":"image/carrizo.jpg","tone3":"F","phonation3":"M","sp4":"metal","zp4":"ya","pic4":"image/metal.png","tone4":"R","phonation4":"M","path":"dissertation_sound/expzp/yaa_fierro_original_150_pitch_manipulated_gl_4_5.wav","length":"150","glposition":"4","seq":"4","status":"test"}
  ,
  {"sp0":"verde","zp0":"ya'a","pic0":"image/green.png","tone0":"H","phonation0":"R","sp1":"plaza","zp1":"ya'a","pic1":"image/plaza.jpg","tone1":"R","phonation1":"R","sp2":"San Andres Yaa","zp2":"ya'","pic2":"image/san_andres.png","tone2":"H","phonation2":"C","sp3":"carrizo","zp3":"ya","pic3":"image/carrizo.jpg","tone3":"F","phonation3":"M","sp4":"metal","zp4":"ya","pic4":"image/metal.png","tone4":"R","phonation4":"M","path":"dissertation_sound/expzp/yaa_fierro_original_150_pitch_manipulated_gl_5_5.wav","length":"150","glposition":"5","seq":"5","status":"test"}
  ,
  {"sp0":"verde","zp0":"ya'a","pic0":"image/green.png","tone0":"H","phonation0":"R","sp1":"plaza","zp1":"ya'a","pic1":"image/plaza.jpg","tone1":"R","phonation1":"R","sp2":"San Andres Yaa","zp2":"ya'","pic2":"image/san_andres.png","tone2":"H","phonation2":"C","sp3":"carrizo","zp3":"ya","pic3":"image/carrizo.jpg","tone3":"F","phonation3":"M","sp4":"metal","zp4":"ya","pic4":"image/metal.png","tone4":"R","phonation4":"M","path":"dissertation_sound/expzp/yaa_fierro_original_225_pitch_manipulated_gl_1_5.wav","length":"225","glposition":"1","seq":"6","status":"test"}
  ,
  {"sp0":"verde","zp0":"ya'a","pic0":"image/green.png","tone0":"H","phonation0":"R","sp1":"plaza","zp1":"ya'a","pic1":"image/plaza.jpg","tone1":"R","phonation1":"R","sp2":"San Andres Yaa","zp2":"ya'","pic2":"image/san_andres.png","tone2":"H","phonation2":"C","sp3":"carrizo","zp3":"ya","pic3":"image/carrizo.jpg","tone3":"F","phonation3":"M","sp4":"metal","zp4":"ya","pic4":"image/metal.png","tone4":"R","phonation4":"M","path":"dissertation_sound/expzp/yaa_fierro_original_225_pitch_manipulated_gl_2_5.wav","length":"225","glposition":"2","seq":"7","status":"test"}
  ,
  {"sp0":"verde","zp0":"ya'a","pic0":"image/green.png","tone0":"H","phonation0":"R","sp1":"plaza","zp1":"ya'a","pic1":"image/plaza.jpg","tone1":"R","phonation1":"R","sp2":"San Andres Yaa","zp2":"ya'","pic2":"image/san_andres.png","tone2":"H","phonation2":"C","sp3":"carrizo","zp3":"ya","pic3":"image/carrizo.jpg","tone3":"F","phonation3":"M","sp4":"metal","zp4":"ya","pic4":"image/metal.png","tone4":"R","phonation4":"M","path":"dissertation_sound/expzp/yaa_fierro_original_225_pitch_manipulated_gl_3_5.wav","length":"225","glposition":"3","seq":"8","status":"test"}
  ,
  {"sp0":"verde","zp0":"ya'a","pic0":"image/green.png","tone0":"H","phonation0":"R","sp1":"plaza","zp1":"ya'a","pic1":"image/plaza.jpg","tone1":"R","phonation1":"R","sp2":"San Andres Yaa","zp2":"ya'","pic2":"image/san_andres.png","tone2":"H","phonation2":"C","sp3":"carrizo","zp3":"ya","pic3":"image/carrizo.jpg","tone3":"F","phonation3":"M","sp4":"metal","zp4":"ya","pic4":"image/metal.png","tone4":"R","phonation4":"M","path":"dissertation_sound/expzp/yaa_fierro_original_225_pitch_manipulated_gl_4_5.wav","length":"225","glposition":"4","seq":"9","status":"test"}
  ,
  {"sp0":"verde","zp0":"ya'a","pic0":"image/green.png","tone0":"H","phonation0":"R","sp1":"plaza","zp1":"ya'a","pic1":"image/plaza.jpg","tone1":"R","phonation1":"R","sp2":"San Andres Yaa","zp2":"ya'","pic2":"image/san_andres.png","tone2":"H","phonation2":"C","sp3":"carrizo","zp3":"ya","pic3":"image/carrizo.jpg","tone3":"F","phonation3":"M","sp4":"metal","zp4":"ya","pic4":"image/metal.png","tone4":"R","phonation4":"M","path":"dissertation_sound/expzp/yaa_fierro_original_225_pitch_manipulated_gl_5_5.wav","length":"225","glposition":"5","seq":"10","status":"test"}
  ,
  {"sp0":"verde","zp0":"ya'a","pic0":"image/green.png","tone0":"H","phonation0":"R","sp1":"plaza","zp1":"ya'a","pic1":"image/plaza.jpg","tone1":"R","phonation1":"R","sp2":"San Andres Yaa","zp2":"ya'","pic2":"image/san_andres.png","tone2":"H","phonation2":"C","sp3":"carrizo","zp3":"ya","pic3":"image/carrizo.jpg","tone3":"F","phonation3":"M","sp4":"metal","zp4":"ya","pic4":"image/metal.png","tone4":"R","phonation4":"M","path":"dissertation_sound/expzp/yaa_fierro_original_300_pitch_manipulated_gl_1_5.wav","length":"300","glposition":"1","seq":"11","status":"test"}
  ,
  {"sp0":"verde","zp0":"ya'a","pic0":"image/green.png","tone0":"H","phonation0":"R","sp1":"plaza","zp1":"ya'a","pic1":"image/plaza.jpg","tone1":"R","phonation1":"R","sp2":"San Andres Yaa","zp2":"ya'","pic2":"image/san_andres.png","tone2":"H","phonation2":"C","sp3":"carrizo","zp3":"ya","pic3":"image/carrizo.jpg","tone3":"F","phonation3":"M","sp4":"metal","zp4":"ya","pic4":"image/metal.png","tone4":"R","phonation4":"M","path":"dissertation_sound/expzp/yaa_fierro_original_300_pitch_manipulated_gl_2_5.wav","length":"300","glposition":"2","seq":"12","status":"test"}
  ,
  {"sp0":"verde","zp0":"ya'a","pic0":"image/green.png","tone0":"H","phonation0":"R","sp1":"plaza","zp1":"ya'a","pic1":"image/plaza.jpg","tone1":"R","phonation1":"R","sp2":"San Andres Yaa","zp2":"ya'","pic2":"image/san_andres.png","tone2":"H","phonation2":"C","sp3":"carrizo","zp3":"ya","pic3":"image/carrizo.jpg","tone3":"F","phonation3":"M","sp4":"metal","zp4":"ya","pic4":"image/metal.png","tone4":"R","phonation4":"M","path":"dissertation_sound/expzp/yaa_fierro_original_300_pitch_manipulated_gl_3_5.wav","length":"300","glposition":"3","seq":"13","status":"test"}
  ,
  {"sp0":"verde","zp0":"ya'a","pic0":"image/green.png","tone0":"H","phonation0":"R","sp1":"plaza","zp1":"ya'a","pic1":"image/plaza.jpg","tone1":"R","phonation1":"R","sp2":"San Andres Yaa","zp2":"ya'","pic2":"image/san_andres.png","tone2":"H","phonation2":"C","sp3":"carrizo","zp3":"ya","pic3":"image/carrizo.jpg","tone3":"F","phonation3":"M","sp4":"metal","zp4":"ya","pic4":"image/metal.png","tone4":"R","phonation4":"M","path":"dissertation_sound/expzp/yaa_fierro_original_300_pitch_manipulated_gl_4_5.wav","length":"300","glposition":"4","seq":"14","status":"test"}
  ,
  {"sp0":"verde","zp0":"ya'a","pic0":"image/green.png","tone0":"H","phonation0":"R","sp1":"plaza","zp1":"ya'a","pic1":"image/plaza.jpg","tone1":"R","phonation1":"R","sp2":"San Andres Yaa","zp2":"ya'","pic2":"image/san_andres.png","tone2":"H","phonation2":"C","sp3":"carrizo","zp3":"ya","pic3":"image/carrizo.jpg","tone3":"F","phonation3":"M","sp4":"metal","zp4":"ya","pic4":"image/metal.png","tone4":"R","phonation4":"M","path":"dissertation_sound/expzp/yaa_fierro_original_300_pitch_manipulated_gl_5_5.wav","length":"300","glposition":"5","seq":"15","status":"test"}
  ,
  {"sp0":"verde","zp0":"ya'a","pic0":"image/green.png","tone0":"H","phonation0":"R","sp1":"plaza","zp1":"ya'a","pic1":"image/plaza.jpg","tone1":"R","phonation1":"R","sp2":"San Andres Yaa","zp2":"ya'","pic2":"image/san_andres.png","tone2":"H","phonation2":"C","sp3":"carrizo","zp3":"ya","pic3":"image/carrizo.jpg","tone3":"F","phonation3":"M","sp4":"metal","zp4":"ya","pic4":"image/metal.png","tone4":"R","phonation4":"M","path":"dissertation_sound/expzp/yaa_fierro_original_150_pitch_manipulated_gl_no.wav","length":"150","glposition":"0","seq":"16","status":"test"}
  ,
  {"sp0":"verde","zp0":"ya'a","pic0":"image/green.png","tone0":"H","phonation0":"R","sp1":"plaza","zp1":"ya'a","pic1":"image/plaza.jpg","tone1":"R","phonation1":"R","sp2":"San Andres Yaa","zp2":"ya'","pic2":"image/san_andres.png","tone2":"H","phonation2":"C","sp3":"carrizo","zp3":"ya","pic3":"image/carrizo.jpg","tone3":"F","phonation3":"M","sp4":"metal","zp4":"ya","pic4":"image/metal.png","tone4":"R","phonation4":"M","path":"dissertation_sound/expzp/yaa_fierro_original_225_pitch_manipulated_gl_no.wav","length":"225","glposition":"0","seq":"17","status":"test"}
  ,
  {"sp0":"verde","zp0":"ya'a","pic0":"image/green.png","tone0":"H","phonation0":"R","sp1":"plaza","zp1":"ya'a","pic1":"image/plaza.jpg","tone1":"R","phonation1":"R","sp2":"San Andres Yaa","zp2":"ya'","pic2":"image/san_andres.png","tone2":"H","phonation2":"C","sp3":"carrizo","zp3":"ya","pic3":"image/carrizo.jpg","tone3":"F","phonation3":"M","sp4":"metal","zp4":"ya","pic4":"image/metal.png","tone4":"R","phonation4":"M","path":"dissertation_sound/expzp/yaa_fierro_original_300_pitch_manipulated_gl_no.wav","length":"300","glposition":"0","seq":"18","status":"test"}
  ,
  {"sp0":"verde","zp0":"ya'a","pic0":"image/green.png","tone0":"H","phonation0":"R","sp1":"plaza","zp1":"ya'a","pic1":"image/plaza.jpg","tone1":"R","phonation1":"R","sp2":"San Andres Yaa","zp2":"ya'","pic2":"image/san_andres.png","tone2":"H","phonation2":"C","sp3":"carrizo","zp3":"ya","pic3":"image/carrizo.jpg","tone3":"F","phonation3":"M","sp4":"metal","zp4":"ya","pic4":"image/metal.png","tone4":"R","phonation4":"M","path":"dissertation_sound/expzp/yaa_fierro_original_150_pitch_manipulated_gl_release.wav","length":"150","glposition":"6","seq":"19","status":"test"}
  ,
  {"sp0":"verde","zp0":"ya'a","pic0":"image/green.png","tone0":"H","phonation0":"R","sp1":"plaza","zp1":"ya'a","pic1":"image/plaza.jpg","tone1":"R","phonation1":"R","sp2":"San Andres Yaa","zp2":"ya'","pic2":"image/san_andres.png","tone2":"H","phonation2":"C","sp3":"carrizo","zp3":"ya","pic3":"image/carrizo.jpg","tone3":"F","phonation3":"M","sp4":"metal","zp4":"ya","pic4":"image/metal.png","tone4":"R","phonation4":"M","path":"dissertation_sound/expzp/yaa_fierro_original_225_pitch_manipulated_gl_release.wav","length":"225","glposition":"6","seq":"20","status":"test"}
  ,
  {"sp0":"verde","zp0":"ya'a","pic0":"image/green.png","tone0":"H","phonation0":"R","sp1":"plaza","zp1":"ya'a","pic1":"image/plaza.jpg","tone1":"R","phonation1":"R","sp2":"San Andres Yaa","zp2":"ya'","pic2":"image/san_andres.png","tone2":"H","phonation2":"C","sp3":"carrizo","zp3":"ya","pic3":"image/carrizo.jpg","tone3":"F","phonation3":"M","sp4":"metal","zp4":"ya","pic4":"image/metal.png","tone4":"R","phonation4":"M","path":"dissertation_sound/expzp/yaa_fierro_original_300_pitch_manipulated_gl_release.wav","length":"300","glposition":"6","seq":"21","status":"test"}
  
  ]
var practiceI_list = trial_ExpI_list.slice(0, 2);
var trial_ExpI_list_short = trial_ExpI_list.slice(0, 1);

var productionList = [{"sp":"verde", "zp":"ya'a", "tone":"H", "phonation":"R", "pic":"image/green.png"},
  {"sp":"plaza", "zp":"ya'a", "tone":"R", "phonation":"R", "pic":"image/plaza.jpg"},
  {"sp":"San Andres Yaa", "zp":"ya'", "tone":"H", "phonation":"C", "pic":"image/san_andres.png"},
  {"sp":"carrizo", "zp":"ya", "tone":"F", "phonation":"M", "pic":"image/carrizo.jpg"},
  {"sp":"metal", "zp":"ya", "tone":"R", "phonation":"M", "pic":"image/metal.png"}];

  var audioFile = [];

trial_all = trial_ExpI_list;

for (let i = 0; i < trial_all.length; i++){
	var path = trial_all[i].path;
	audioFile.push(path);
	}


/*javascript number starts from 0*/
/*curTrial is the trial number*/


function preloadAudio(url) {
    var audio = new Audio();
    // once this file loads, it will call loadedAudio()
    // the file will be kept by the browser as cache
    audio.addEventListener('canplaythrough', loadedAudio, false);
    audio.src = url;
}



var loaded = 0;
function loadedAudio() {
    // this will be called every time an audio file is loaded
    // we keep track of the loaded files vs the requested files
    loaded++;
    if (loaded == audioFile.length){
    	// all have loaded
    	console.log("All audios are preloaded");
    }
}




for (let i = 0; i < audioFile.length; i++) {
    preloadAudio(audioFile[i]);
}


/*preload all the images*/

var images = [trial_ExpI_list[0]["pic0"], trial_ExpI_list[0]["pic1"], trial_ExpI_list[0]["pic2"], trial_ExpI_list[0]["pic3"], trial_ExpI_list[0]["pic4"]];

var htmlStr = "";
for (var i = 0; i <= 4; i++) {
  htmlStr =
    htmlStr +
    "<img src="+images[i]+">";
}
$("#preload").html(htmlStr);


      var curTrial = 0;
      var curTimeStart = 0;
      var curTimeEnd = 0;
      var responseTime = 0;
/*trialnum is the number shown on the top of the div*/
      var trialnum = 1;
/*totalnum is the number of total trials within one block*/
      var totalnum = practiceI_list.length;
/*starnum is the number that the star is blank*/
      var starnum = 1;
/*starid is the id of the star that is chosen to be blank*/      
      var starid = "";
/*radioselectedList save the value of the radio button selected in the identification task*/
      var radioselectedList = [];
/*wordselecteList save the character of the radio button for word identification*/
      var wordselectedList = [];
/*optionList save the options shown on the screen with the order that is displayed on the screen*/
      var optionList = [];
/*wordList is the randomized words element in the trialList list*/
      var wordList = [];
      var toneList = [];

/*csvFile is the csv that will be saved at the end of the experiment*/
      var csvFile = [["trial_num", "radio_value", "word_selected", "tone_selected", "phon_selected", "word_list", "sound", "stimuli_length", "stimuli_gl", "trial_sequence", "response_time", "experiment_no"]];

      /*wordListString stores the string version of the options displayed on the screen*/
      var wordListString = "";
         
/*Shuffle the practiceList in the beginning to randomize the order*/      
      var practiceListRandom = jsPsych.randomization.repeat(practiceI_list, 1);
/*Shuffle the trialList in the beginning to randomize the order*/
      var trialListRandom_repeatI = jsPsych.randomization.repeat(trial_ExpI_list, 1);
      var trialListRandom_repeatII = jsPsych.randomization.repeat(trial_ExpI_list_short, 1);

      var productionListRandom = jsPsych.randomization.repeat(productionList, 1);                 

      var trialListRandom = practiceListRandom.concat(trialListRandom_repeatI, trialListRandom_repeatII);

      var practiceLength = practiceListRandom.length;
      var partILength = practiceListRandom.length + trialListRandom_repeatI.length;
      var partIILength = practiceListRandom.length + trialListRandom_repeatI.length + trialListRandom_repeatII.length;

/*beginning of the function*/

      
      /* This gets called when they click the button 
        on the instructions page */
      function StartHolder(){
        $("#doneWithDebriefing").unbind("click");
        $("#debriefing").hide();
        $("#startholderdiv").show();
        $("#startholderExperimentButton").on("click", StartInstruction); 
      }



      function StartInstruction(){
      $("#startholderExperimentButton").unbind("click");
      $("#startholderdiv").hide();
      $("#instructions").show();
                
      $("#startExperimentButton").on("click", StartExperiment);        
      }






      function StartExperiment() {
        $("#instructions").hide();
        $("#startExperimentButton").unbind("click");
        ShowTrial();
      }
      
      function HideFixation() {
        $("#fixation").hide()
      }
      
      
      function ShowTrial() {
        $("#EndExperimentIPartIButton").unbind("click");
        $("#EndPracticeButton").unbind("click");
        $("#EndExperimentIIPartIButton").unbind("click");
        $("#EndPracticeIButton").unbind("click");
        $("#EndExperimentIButton").unbind("click");

        $("#doneExperimentIPartI").hide();
        $("#doneExperimentIPartII").hide();
        $("#donePracticeI").hide();
        $("#doneExperimentIIPartI").hide();
        $("#doneExperimentIIPartII").hide();
        $("#doneExperimentIIPartIII").hide();
        $("#donePracticeII").hide();
        
        
        $("#fixation").show();
        setTimeout(HideFixation, 500);
        setTimeout(Runs500msAfterFixation, 500);
      }

      function Runs500msAfterFixation() {
        /* This runs 500ms after ShowTrial is called */
        /*set sound attribute, specify which sound will be played*/

              $("#sound").attr(
          "src",
          trialListRandom[curTrial].path
        );  
      
        /*Play the sound when the page is loaded*/
        
        var playPromise = document.getElementById("sound").play();

        if (playPromise !== undefined) {
            playPromise.then(_ => {
      // Automatic playback started!
      // Show playing UI.
            })
            .catch(error => {
      // Auto-play was prevented
      // Show paused UI.
          });
        }
        
        /*replay the sound on click*/
        $('#play').on('click', function () {
          $('#sound')[0].play();
        });
        
        curTimeStart = new Date();
        

    
        if (trialListRandom[curTrial].sp4 !== undefined){
        $("#trialnum").text(trialnum+"/"+totalnum+"   ("+curTrial+")");
        /* show the trialDiv */
        $("#trialDiv").show();
        $("#trialnumdiv").show();

          
/*shuffle the index to randomize the option order*/
          
         var wordListIndex =  jsPsych.randomization.repeat([0,1,2,3,4],1);
         var key0 = "sp"+wordListIndex[0];
         var key1 = "sp"+wordListIndex[1];
         var key2 = "sp"+wordListIndex[2];
         var key3 = "sp"+wordListIndex[3];
         var key4 = "sp"+wordListIndex[4];

         var zpkey0 = "zp"+wordListIndex[0];
         var zpkey1 = "zp"+wordListIndex[1];
         var zpkey2 = "zp"+wordListIndex[2];
         var zpkey3 = "zp"+wordListIndex[3];
         var zpkey4 = "zp"+wordListIndex[4];

         var pic0 = "pic"+wordListIndex[0];
         var pic1 = "pic"+wordListIndex[1];
         var pic2 = "pic"+wordListIndex[2];
         var pic3 = "pic"+wordListIndex[3];
         var pic4 = "pic"+wordListIndex[4];

         var tone0 = "tone"+wordListIndex[0];
         var tone1 = "tone"+wordListIndex[1];
         var tone2 = "tone"+wordListIndex[2];
         var tone3 = "tone"+wordListIndex[3];
         var tone4 = "tone"+wordListIndex[4];

         var phon0 = "phonation"+wordListIndex[0];
         var phon1 = "phonation"+wordListIndex[1];
         var phon2 = "phonation"+wordListIndex[2];
         var phon3 = "phonation"+wordListIndex[3];
         var phon4 = "phonation"+wordListIndex[4];

         zpwordList = [trialListRandom[curTrial][zpkey0], trialListRandom[curTrial][zpkey1],trialListRandom[curTrial][zpkey2],trialListRandom[curTrial][zpkey3],trialListRandom[curTrial][zpkey4]];
         wordList = [trialListRandom[curTrial][key0], trialListRandom[curTrial][key1],trialListRandom[curTrial][key2],trialListRandom[curTrial][key3],trialListRandom[curTrial][key4]];
         toneList = [trialListRandom[curTrial][tone0], trialListRandom[curTrial][tone1],trialListRandom[curTrial][tone2],trialListRandom[curTrial][tone3],trialListRandom[curTrial][tone4]]
         picList = [trialListRandom[curTrial][pic0], trialListRandom[curTrial][pic1], trialListRandom[curTrial][pic2], trialListRandom[curTrial][pic3], trialListRandom[curTrial][pic4]]
         phonList = [trialListRandom[curTrial][phon0], trialListRandom[curTrial][phon1], trialListRandom[curTrial][phon2], trialListRandom[curTrial][phon3], trialListRandom[curTrial][phon4]]
         
         $('#word1labelzp').html(zpwordList[0]); 
         $('#word2labelzp').html(zpwordList[1]); 
         $('#word3labelzp').html(zpwordList[2]);  
         $('#word4labelzp').html(zpwordList[3]); 
         $('#word5labelzp').html(zpwordList[4]);

         $('#word1label').html(wordList[0]); 
         $('#word2label').html(wordList[1]); 
         $('#word3label').html(wordList[2]);  
         $('#word4label').html(wordList[3]); 
         $('#word5label').html(wordList[4]);

         $('#word1image').attr("src",picList[0]);
         $('#word2image').attr("src",picList[1]);
         $('#word3image').attr("src",picList[2]);
         $('#word4image').attr("src",picList[3]);
         $('#word5image').attr("src",picList[4]);
         
        wordListString = wordList.join('-');
        optionList.push(wordList);
         $("#submit").on("click", CheckSelect);
        } 
        /*save the options in the order displayed into a string and push it to the csv file*/
      }
      
      

      /*check if a word is selected*/
      function CheckSelect() {
        if ($('input[name=ExpI]:checked').val() == undefined) {
          alert("Por favor selecciona qué palabra escuchaste.")
        }
        else{
            
/*push the trial number, radio value, word value, and scale value to the csv file*/ 
            curTimeEnd = new Date();
            responseTime = curTimeEnd - curTimeStart
            var radioselectedValue = $('input[name=ExpI]:checked').val();
            radioselectedList.push(radioselectedValue);
            var wordselectedValue = wordList[parseInt($('input[name=ExpI]:checked').val())-1];
            var toneselectedValue = toneList[parseInt($('input[name=ExpI]:checked').val())-1];   
            var phonselectedValue = phonList[parseInt($('input[name=ExpI]:checked').val())-1];
            wordselectedList.push(wordselectedValue);
            var stimuli_path = trialListRandom[curTrial].path;
          /*stimuli_length get the length of the stimuli*/
            var stimuli_length = trialListRandom[curTrial].length;
          /*stimuli_tone get the tone of the stimuli*/
          /*stimuli_gl get the tone of the stimuli*/
            var stimuli_gl = trialListRandom[curTrial].glposition;
            var curresultList = [curTrial, radioselectedValue, wordselectedValue, toneselectedValue, phonselectedValue, wordListString, stimuli_path, stimuli_length, stimuli_gl, trialListRandom[curTrial].seq, responseTime, "exp1"];
            csvFile.push(curresultList);
            
            DoneWithScale();
            
          }    
        }


/*unselect all the radio buttons*/


      function DoneWithScale() {
        $("#word1").prop("checked", false);
        $("#word2").prop("checked", false);
        $("#word3").prop("checked", false);
        $("#word4").prop("checked", false);
        $("#word5").prop("checked", false);
        
        $("#trialnumdiv").hide();
        $("#trialDiv").hide();

        $('#submit').unbind('click');
        $('#play').unbind('click');
        
        trialnum = trialnum + 1;
        curTrial = curTrial + 1;

        
        if (curTrial < practiceLength) {
          if (curTrial == 1) {
            ShowStar()
          }else{
            setTimeout(ShowTrial, 0);
          }
        } 
        
        
        
        else if (curTrial == practiceLength){
            trialnum = 1;
            totalnum = trial_ExpI_list.length;
            setTimeout(DoneWithPracticeI, 500);          
        } 
        
        else if ((curTrial > practiceLength) && (curTrial < partILength)){
	if ((trialnum-1) % 10 == 0) {
            ShowStar()
          }else{
            setTimeout(ShowTrial, 0);
          }
          }   
        else if (curTrial == (partILength)){
            trialnum = 1;
            totalnum = trial_ExpI_list_short.length;
            setTimeout(DoneWithExperimentIPartI, 500);
        } 

        
          else if((curTrial > (partILength)) && (curTrial < partIILength)){
	if ((trialnum-1) % 10 == 0) {
            ShowStar()
          }else{
            setTimeout(ShowTrial, 0);
          }
          }
          else if (curTrial == partIILength){
          setTimeout(DoneWithExperimentI, 500);

                    let csvContent = "data:text/csv;charset=utf-8," 
    + csvFile.map(e => e.join(",")).join("\n");
          var dataToServer = {
          id: "YC"+$("#subjectid").val()+"exp1",
          experimenter: "YC",
          experimentName: "IdentificationTaskTestExp1",
          curData: JSON.stringify(csvContent),

          }
        $.post("https://psyc241.ucsd.edu/Turk/save.php", dataToServer);

          }
        }
      
      function HideStar() {
        $("#distraction").hide();
        ShowTrial();
        $(starid).unbind("click");
      }
      
      function DoneWithExperimentIPartI(){
        $("#doneExperimentIPartI").show();
        $("#EndExperimentIPartIButton").on("click", ShowTrial);

      }

      function DoneWithPracticeI(){
        $("#donePracticeI").show();
        $("#EndPracticeButton").on("click", ShowTrial);

      }


      function DoneWithExperimentIIPartI(){
        $("#doneExperimentIIPartI").show();
        $("#EndExperimentIIPartIButton").on("click", ShowTrial);

      }


      function DoneWithPracticeII(){
        $("#donePracticeII").show();
        $("#EndPracticeIIButton").on("click", ShowTrial);

      }

      
      function ShowStar() {
        starnum = Math.floor((Math.random() * 5) + 1);
        starid = "#star"+starnum;
        $(starid).text("\u2606");
        $("#distraction").show();
        $(starid).click(function(){
            $(starid).text("\u2605");
            setTimeout(HideStar, 500);
        })

      }
      
      
      
      function DoneWithExperimentI() {
        $("#doneExperimentI").show();
        $("#EndExperimentIButton").on("click", StartProduction);

      }
      

  
      function StartProduction(){
        $("#doneExperimentI").hide();
        $("#instructionProductiondiv").show();
        $("#startProductiondivButton").on("click", ShowProduction);
        var curresultList = ["curTrial", "production_sp", "production_zp", "production_tone", "production_phonation", "experiment_no"];
        csvFile.push(curresultList)
        curTrial = 0;
        trialnum = 1;
        totalnum = productionListRandom.length;
      }



      function ShowProduction(){
        $("#instructionProductiondiv").hide();
        $("#fixation").show();
        setTimeout(HideFixation, 500);
        setTimeout(RunProduction, 500);
      }      

      function RunProduction(){
        $("#productionnum").text(trialnum+"/"+totalnum+"   ("+curTrial+")");
        /* show the trialDiv */
        $("#productiondiv").show();
        $("#productionnumdiv").show();

        var production_sp = productionListRandom[curTrial].sp;
        var production_zp = productionListRandom[curTrial].zp;
        var production_pic = productionListRandom[curTrial].pic;
        var production_tone = productionListRandom[curTrial].tone;
        var production_phonation = productionListRandom[curTrial].phonation;

        $("#ProductionTextSpanish").text(production_sp);
        $("#ProductionText").text(production_zp);
        $('#ProductionTrialImage').attr("src",production_pic);
        $("#productionButton").on("click", CheckProduction);
        var curresultList = [curTrial, production_sp, production_zp, production_tone, production_phonation, "exp3"];
        csvFile.push(curresultList);

      }
      

      function CheckProduction(){
        $('#productionButton').unbind('click');
        curTrial = curTrial + 1;
        trialnum = trialnum + 1;
        

        $("#productiondiv").hide();
        if (curTrial < productionListRandom.length){
          ShowProduction();
        } else {
          DoneWithDebriefing();
        }
        
      }

      

      function DoneWithProduction() {
        $("#debriefing").show();
        $('#doneWithDebriefing').on("click", DoneWithDebriefing);
      }

     function CheckIdInput(){
       var input = document.getElementById('subjectid');

      if(input.value.length == 0){
       alert("请输入被试编号")
      } else {
        StartHolder();
      }
       
     }



      function DoneWithDebriefing() {
        
        $("#done").show();

        

var subjectHead = ["id", "userAgent"];
var subjectInfo = [$("#subjectid").val(), navigator.userAgent]

csvFile.push([]);
csvFile.push(subjectHead);
csvFile.push(subjectInfo);

var filename = "YC" + $("#subjectid").val() + ".csv"        
        
        
let csvContent = "data:text/csv;charset=utf-8," 
    + csvFile.map(e => e.join(",")).join("\n");

var encodedUri = encodeURI(csvContent);
var link = document.createElement("a");
link.setAttribute("href", encodedUri);
link.setAttribute("download", filename);
document.body.appendChild(link); // Required for FF

link.click();
        /* AJAX */
        /*$.post("https://psyc241.ucsd.edu/Turk/save.php", dataToServer);*/
          
          var dataToServer = {
          id: "YCSY"+$("#subjectid").val(),
          experimenter: "YC",
          experimentName: "IdentificationTaskTest",
          curData: JSON.stringify(csvContent),
          };

        
        $.post("https://psyc241.ucsd.edu/Turk/save.php", dataToServer);
      }
      
      $("#doneWithDebriefing").on("click", CheckIdInput);