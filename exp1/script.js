/*import csv files*/

var trial_all_list = [
  {"sp0":"verde","zp0":"ya'a","pic0":"image/green.png","tone0":"H","phonation0":"R","sp1":"plaza","zp1":"ya'a","pic1":"image/plaza.jpg","tone1":"R","phonation1":"R","sp2":"San Andres Yaa","zp2":"ya'","pic2":"image/san_andres.png","tone2":"H","phonation2":"C","sp3":"carrizo","zp3":"ya","pic3":"image/carrizo.jpg","tone3":"F","phonation3":"M","sp4":"metal","zp4":"yaa","pic4":"image/metal.png","tone4":"R","phonation4":"M","sp5":"cerro","zp5":"ya'a","pic5":"image/cerro.jpg","tone5":"L","phonation5":"R","path":"dissertation_sound/practice/carrizo-AFJ-2-vowel_manipulation_intensity.wav","length":"NA","glposition":"NA","f0_onset":"NA","f0_offset":"NA","seq":"1","status":"practice"}
  ,
  {"sp0":"verde","zp0":"ya'a","pic0":"image/green.png","tone0":"H","phonation0":"R","sp1":"plaza","zp1":"ya'a","pic1":"image/plaza.jpg","tone1":"R","phonation1":"R","sp2":"San Andres Yaa","zp2":"ya'","pic2":"image/san_andres.png","tone2":"H","phonation2":"C","sp3":"carrizo","zp3":"ya","pic3":"image/carrizo.jpg","tone3":"F","phonation3":"M","sp4":"metal","zp4":"yaa","pic4":"image/metal.png","tone4":"R","phonation4":"M","sp5":"cerro","zp5":"ya'a","pic5":"image/cerro.jpg","tone5":"L","phonation5":"R","path":"dissertation_sound/practice/fierro-AFJ-2-vowel_manipulation_intensity.wav","length":"NA","glposition":"NA","f0_onset":"NA","f0_offset":"NA","seq":"2","status":"practice"}
  ,
  {"sp0":"verde","zp0":"ya'a","pic0":"image/green.png","tone0":"H","phonation0":"R","sp1":"plaza","zp1":"ya'a","pic1":"image/plaza.jpg","tone1":"R","phonation1":"R","sp2":"San Andres Yaa","zp2":"ya'","pic2":"image/san_andres.png","tone2":"H","phonation2":"C","sp3":"carrizo","zp3":"ya","pic3":"image/carrizo.jpg","tone3":"F","phonation3":"M","sp4":"metal","zp4":"yaa","pic4":"image/metal.png","tone4":"R","phonation4":"M","sp5":"cerro","zp5":"ya'a","pic5":"image/cerro.jpg","tone5":"L","phonation5":"R","path":"dissertation_sound/practice/plaza-AFJ-47-vowel_manipulation_intensity.wav","length":"NA","glposition":"NA","f0_onset":"NA","f0_offset":"NA","seq":"3","status":"practice"}
  ,
  {"sp0":"verde","zp0":"ya'a","pic0":"image/green.png","tone0":"H","phonation0":"R","sp1":"plaza","zp1":"ya'a","pic1":"image/plaza.jpg","tone1":"R","phonation1":"R","sp2":"San Andres Yaa","zp2":"ya'","pic2":"image/san_andres.png","tone2":"H","phonation2":"C","sp3":"carrizo","zp3":"ya","pic3":"image/carrizo.jpg","tone3":"F","phonation3":"M","sp4":"metal","zp4":"yaa","pic4":"image/metal.png","tone4":"R","phonation4":"M","sp5":"cerro","zp5":"ya'a","pic5":"image/cerro.jpg","tone5":"L","phonation5":"R","path":"dissertation_sound/practice/san_andres_yaa-AFJ-2-vowel_manipulation_intensity.wav","length":"NA","glposition":"NA","f0_onset":"NA","f0_offset":"NA","seq":"4","status":"practice"}
  ,
  {"sp0":"verde","zp0":"ya'a","pic0":"image/green.png","tone0":"H","phonation0":"R","sp1":"plaza","zp1":"ya'a","pic1":"image/plaza.jpg","tone1":"R","phonation1":"R","sp2":"San Andres Yaa","zp2":"ya'","pic2":"image/san_andres.png","tone2":"H","phonation2":"C","sp3":"carrizo","zp3":"ya","pic3":"image/carrizo.jpg","tone3":"F","phonation3":"M","sp4":"metal","zp4":"yaa","pic4":"image/metal.png","tone4":"R","phonation4":"M","sp5":"cerro","zp5":"ya'a","pic5":"image/cerro.jpg","tone5":"L","phonation5":"R","path":"dissertation_sound/practice/verde-AFJ-41-vowel_manipulation_intensity.wav","length":"NA","glposition":"NA","f0_onset":"NA","f0_offset":"NA","seq":"5","status":"practice"}
  ,
  {"sp0":"verde","zp0":"ya'a","pic0":"image/green.png","tone0":"H","phonation0":"R","sp1":"plaza","zp1":"ya'a","pic1":"image/plaza.jpg","tone1":"R","phonation1":"R","sp2":"San Andres Yaa","zp2":"ya'","pic2":"image/san_andres.png","tone2":"H","phonation2":"C","sp3":"carrizo","zp3":"ya","pic3":"image/carrizo.jpg","tone3":"F","phonation3":"M","sp4":"metal","zp4":"yaa","pic4":"image/metal.png","tone4":"R","phonation4":"M","sp5":"cerro","zp5":"ya'a","pic5":"image/cerro.jpg","tone5":"L","phonation5":"R","path":"dissertation_sound/practice/cerro-AFJ-2-vowel_manipulation_intensity.wav","length":"NA","glposition":"NA","f0_onset":"NA","f0_offset":"NA","seq":"6","status":"practice"}
  ,
  {"sp0":"casa","zp0":"yo'o","pic0":"image/casa.jpg","tone0":"F","phonation0":"R","sp1":"cal","zp1":"yo'o","pic1":"image/cal.jpg","tone1":"R","phonation1":"R","sp2":"NA","zp2":"NA","pic2":"NA","tone2":"NA","phonation2":"NA","sp3":"NA","zp3":"NA","pic3":"NA","tone3":"NA","phonation3":"NA","sp4":"NA","zp4":"NA","pic4":"NA","tone4":"NA","phonation4":"NA","sp5":"NA","zp5":"NA","pic5":"NA","tone5":"NA","phonation5":"NA","path":"dissertation_sound/practice/casa-vowel_manipulation_intensity.wav","length":"NA","glposition":"NA","f0_onset":"NA","f0_offset":"NA","seq":"7","status":"practice"}
  ,
  {"sp0":"casa","zp0":"yo'o","pic0":"image/casa.jpg","tone0":"F","phonation0":"R","sp1":"cal","zp1":"yo'o","pic1":"image/cal.jpg","tone1":"R","phonation1":"R","sp2":"NA","zp2":"NA","pic2":"NA","tone2":"NA","phonation2":"NA","sp3":"NA","zp3":"NA","pic3":"NA","tone3":"NA","phonation3":"NA","sp4":"NA","zp4":"NA","pic4":"NA","tone4":"NA","phonation4":"NA","sp5":"NA","zp5":"NA","pic5":"NA","tone5":"NA","phonation5":"NA","path":"dissertation_sound/practice/cal-vowel_manipulation_intensity.wav","length":"NA","glposition":"NA","f0_onset":"NA","f0_offset":"NA","seq":"8","status":"practice"}
  ,
  {"sp0":"agrietado","zp0":"be","pic0":"image/agrietado.jpg","tone0":"F","phonation0":"M","sp1":"viento","zp1":"be'","pic1":"image/viento.jpg","tone1":"F","phonation1":"C","sp2":"NA","zp2":"NA","pic2":"NA","tone2":"NA","phonation2":"NA","sp3":"NA","zp3":"NA","pic3":"NA","tone3":"NA","phonation3":"NA","sp4":"NA","zp4":"NA","pic4":"NA","tone4":"NA","phonation4":"NA","sp5":"NA","zp5":"NA","pic5":"NA","tone5":"NA","phonation5":"NA","path":"dissertation_sound/practice/viento-AFM-2-vowel_manipulation_intensity.wav","length":"NA","glposition":"NA","f0_onset":"NA","f0_offset":"NA","seq":"9","status":"practice"}
  ,
  {"sp0":"agrietado","zp0":"be","pic0":"image/agrietado.jpg","tone0":"F","phonation0":"M","sp1":"viento","zp1":"be'","pic1":"image/viento.jpg","tone1":"F","phonation1":"C","sp2":"NA","zp2":"NA","pic2":"NA","tone2":"NA","phonation2":"NA","sp3":"NA","zp3":"NA","pic3":"NA","tone3":"NA","phonation3":"NA","sp4":"NA","zp4":"NA","pic4":"NA","tone4":"NA","phonation4":"NA","sp5":"NA","zp5":"NA","pic5":"NA","tone5":"NA","phonation5":"NA","path":"dissertation_sound/practice/agrietado-AFM-2-vowel_manipulation_intensity.wav","length":"NA","glposition":"NA","f0_onset":"NA","f0_offset":"NA","seq":"10","status":"practice"}
  ,
  {"sp0":"verde","zp0":"ya'a","pic0":"image/green.png","tone0":"H","phonation0":"R","sp1":"plaza","zp1":"ya'a","pic1":"image/plaza.jpg","tone1":"R","phonation1":"R","sp2":"San Andres Yaa","zp2":"ya'","pic2":"image/san_andres.png","tone2":"H","phonation2":"C","sp3":"carrizo","zp3":"ya","pic3":"image/carrizo.jpg","tone3":"F","phonation3":"M","sp4":"metal","zp4":"yaa","pic4":"image/metal.png","tone4":"R","phonation4":"M","sp5":"cerro","zp5":"ya'a","pic5":"image/cerro.jpg","tone5":"L","phonation5":"R","path":"dissertation_sound/exp1/yaa_fierro_original_150_pitch_manipulated_gl_1_5.wav","length":"150","glposition":"1","f0_onset":"100","f0_offset":"120","seq":"11","status":"exp1"}
  ,
  {"sp0":"verde","zp0":"ya'a","pic0":"image/green.png","tone0":"H","phonation0":"R","sp1":"plaza","zp1":"ya'a","pic1":"image/plaza.jpg","tone1":"R","phonation1":"R","sp2":"San Andres Yaa","zp2":"ya'","pic2":"image/san_andres.png","tone2":"H","phonation2":"C","sp3":"carrizo","zp3":"ya","pic3":"image/carrizo.jpg","tone3":"F","phonation3":"M","sp4":"metal","zp4":"yaa","pic4":"image/metal.png","tone4":"R","phonation4":"M","sp5":"cerro","zp5":"ya'a","pic5":"image/cerro.jpg","tone5":"L","phonation5":"R","path":"dissertation_sound/exp1/yaa_fierro_original_150_pitch_manipulated_gl_2_5.wav","length":"150","glposition":"2","f0_onset":"100","f0_offset":"120","seq":"12","status":"exp1"}
  ,
  {"sp0":"verde","zp0":"ya'a","pic0":"image/green.png","tone0":"H","phonation0":"R","sp1":"plaza","zp1":"ya'a","pic1":"image/plaza.jpg","tone1":"R","phonation1":"R","sp2":"San Andres Yaa","zp2":"ya'","pic2":"image/san_andres.png","tone2":"H","phonation2":"C","sp3":"carrizo","zp3":"ya","pic3":"image/carrizo.jpg","tone3":"F","phonation3":"M","sp4":"metal","zp4":"yaa","pic4":"image/metal.png","tone4":"R","phonation4":"M","sp5":"cerro","zp5":"ya'a","pic5":"image/cerro.jpg","tone5":"L","phonation5":"R","path":"dissertation_sound/exp1/yaa_fierro_original_150_pitch_manipulated_gl_3_5.wav","length":"150","glposition":"3","f0_onset":"100","f0_offset":"120","seq":"13","status":"exp1"}
  ,
  {"sp0":"verde","zp0":"ya'a","pic0":"image/green.png","tone0":"H","phonation0":"R","sp1":"plaza","zp1":"ya'a","pic1":"image/plaza.jpg","tone1":"R","phonation1":"R","sp2":"San Andres Yaa","zp2":"ya'","pic2":"image/san_andres.png","tone2":"H","phonation2":"C","sp3":"carrizo","zp3":"ya","pic3":"image/carrizo.jpg","tone3":"F","phonation3":"M","sp4":"metal","zp4":"yaa","pic4":"image/metal.png","tone4":"R","phonation4":"M","sp5":"cerro","zp5":"ya'a","pic5":"image/cerro.jpg","tone5":"L","phonation5":"R","path":"dissertation_sound/exp1/yaa_fierro_original_150_pitch_manipulated_gl_4_5.wav","length":"150","glposition":"4","f0_onset":"100","f0_offset":"120","seq":"14","status":"exp1"}
  ,
  {"sp0":"verde","zp0":"ya'a","pic0":"image/green.png","tone0":"H","phonation0":"R","sp1":"plaza","zp1":"ya'a","pic1":"image/plaza.jpg","tone1":"R","phonation1":"R","sp2":"San Andres Yaa","zp2":"ya'","pic2":"image/san_andres.png","tone2":"H","phonation2":"C","sp3":"carrizo","zp3":"ya","pic3":"image/carrizo.jpg","tone3":"F","phonation3":"M","sp4":"metal","zp4":"yaa","pic4":"image/metal.png","tone4":"R","phonation4":"M","sp5":"cerro","zp5":"ya'a","pic5":"image/cerro.jpg","tone5":"L","phonation5":"R","path":"dissertation_sound/exp1/yaa_fierro_original_150_pitch_manipulated_gl_5_5.wav","length":"150","glposition":"5","f0_onset":"100","f0_offset":"120","seq":"15","status":"exp1"}
  ,
  {"sp0":"verde","zp0":"ya'a","pic0":"image/green.png","tone0":"H","phonation0":"R","sp1":"plaza","zp1":"ya'a","pic1":"image/plaza.jpg","tone1":"R","phonation1":"R","sp2":"San Andres Yaa","zp2":"ya'","pic2":"image/san_andres.png","tone2":"H","phonation2":"C","sp3":"carrizo","zp3":"ya","pic3":"image/carrizo.jpg","tone3":"F","phonation3":"M","sp4":"metal","zp4":"yaa","pic4":"image/metal.png","tone4":"R","phonation4":"M","sp5":"cerro","zp5":"ya'a","pic5":"image/cerro.jpg","tone5":"L","phonation5":"R","path":"dissertation_sound/exp1/yaa_fierro_original_225_pitch_manipulated_gl_1_5.wav","length":"225","glposition":"1","f0_onset":"100","f0_offset":"120","seq":"16","status":"exp1"}
  ,
  {"sp0":"verde","zp0":"ya'a","pic0":"image/green.png","tone0":"H","phonation0":"R","sp1":"plaza","zp1":"ya'a","pic1":"image/plaza.jpg","tone1":"R","phonation1":"R","sp2":"San Andres Yaa","zp2":"ya'","pic2":"image/san_andres.png","tone2":"H","phonation2":"C","sp3":"carrizo","zp3":"ya","pic3":"image/carrizo.jpg","tone3":"F","phonation3":"M","sp4":"metal","zp4":"yaa","pic4":"image/metal.png","tone4":"R","phonation4":"M","sp5":"cerro","zp5":"ya'a","pic5":"image/cerro.jpg","tone5":"L","phonation5":"R","path":"dissertation_sound/exp1/yaa_fierro_original_225_pitch_manipulated_gl_2_5.wav","length":"225","glposition":"2","f0_onset":"100","f0_offset":"120","seq":"17","status":"exp1"}
  ,
  {"sp0":"verde","zp0":"ya'a","pic0":"image/green.png","tone0":"H","phonation0":"R","sp1":"plaza","zp1":"ya'a","pic1":"image/plaza.jpg","tone1":"R","phonation1":"R","sp2":"San Andres Yaa","zp2":"ya'","pic2":"image/san_andres.png","tone2":"H","phonation2":"C","sp3":"carrizo","zp3":"ya","pic3":"image/carrizo.jpg","tone3":"F","phonation3":"M","sp4":"metal","zp4":"yaa","pic4":"image/metal.png","tone4":"R","phonation4":"M","sp5":"cerro","zp5":"ya'a","pic5":"image/cerro.jpg","tone5":"L","phonation5":"R","path":"dissertation_sound/exp1/yaa_fierro_original_225_pitch_manipulated_gl_3_5.wav","length":"225","glposition":"3","f0_onset":"100","f0_offset":"120","seq":"18","status":"exp1"}
  ,
  {"sp0":"verde","zp0":"ya'a","pic0":"image/green.png","tone0":"H","phonation0":"R","sp1":"plaza","zp1":"ya'a","pic1":"image/plaza.jpg","tone1":"R","phonation1":"R","sp2":"San Andres Yaa","zp2":"ya'","pic2":"image/san_andres.png","tone2":"H","phonation2":"C","sp3":"carrizo","zp3":"ya","pic3":"image/carrizo.jpg","tone3":"F","phonation3":"M","sp4":"metal","zp4":"yaa","pic4":"image/metal.png","tone4":"R","phonation4":"M","sp5":"cerro","zp5":"ya'a","pic5":"image/cerro.jpg","tone5":"L","phonation5":"R","path":"dissertation_sound/exp1/yaa_fierro_original_225_pitch_manipulated_gl_4_5.wav","length":"225","glposition":"4","f0_onset":"100","f0_offset":"120","seq":"19","status":"exp1"}
  ,
  {"sp0":"verde","zp0":"ya'a","pic0":"image/green.png","tone0":"H","phonation0":"R","sp1":"plaza","zp1":"ya'a","pic1":"image/plaza.jpg","tone1":"R","phonation1":"R","sp2":"San Andres Yaa","zp2":"ya'","pic2":"image/san_andres.png","tone2":"H","phonation2":"C","sp3":"carrizo","zp3":"ya","pic3":"image/carrizo.jpg","tone3":"F","phonation3":"M","sp4":"metal","zp4":"yaa","pic4":"image/metal.png","tone4":"R","phonation4":"M","sp5":"cerro","zp5":"ya'a","pic5":"image/cerro.jpg","tone5":"L","phonation5":"R","path":"dissertation_sound/exp1/yaa_fierro_original_225_pitch_manipulated_gl_5_5.wav","length":"225","glposition":"5","f0_onset":"100","f0_offset":"120","seq":"20","status":"exp1"}
  ,
  {"sp0":"verde","zp0":"ya'a","pic0":"image/green.png","tone0":"H","phonation0":"R","sp1":"plaza","zp1":"ya'a","pic1":"image/plaza.jpg","tone1":"R","phonation1":"R","sp2":"San Andres Yaa","zp2":"ya'","pic2":"image/san_andres.png","tone2":"H","phonation2":"C","sp3":"carrizo","zp3":"ya","pic3":"image/carrizo.jpg","tone3":"F","phonation3":"M","sp4":"metal","zp4":"yaa","pic4":"image/metal.png","tone4":"R","phonation4":"M","sp5":"cerro","zp5":"ya'a","pic5":"image/cerro.jpg","tone5":"L","phonation5":"R","path":"dissertation_sound/exp1/yaa_fierro_original_300_pitch_manipulated_gl_1_5.wav","length":"300","glposition":"1","f0_onset":"100","f0_offset":"120","seq":"21","status":"exp1"}
  ,
  {"sp0":"verde","zp0":"ya'a","pic0":"image/green.png","tone0":"H","phonation0":"R","sp1":"plaza","zp1":"ya'a","pic1":"image/plaza.jpg","tone1":"R","phonation1":"R","sp2":"San Andres Yaa","zp2":"ya'","pic2":"image/san_andres.png","tone2":"H","phonation2":"C","sp3":"carrizo","zp3":"ya","pic3":"image/carrizo.jpg","tone3":"F","phonation3":"M","sp4":"metal","zp4":"yaa","pic4":"image/metal.png","tone4":"R","phonation4":"M","sp5":"cerro","zp5":"ya'a","pic5":"image/cerro.jpg","tone5":"L","phonation5":"R","path":"dissertation_sound/exp1/yaa_fierro_original_300_pitch_manipulated_gl_2_5.wav","length":"300","glposition":"2","f0_onset":"100","f0_offset":"120","seq":"22","status":"exp1"}
  ,
  {"sp0":"verde","zp0":"ya'a","pic0":"image/green.png","tone0":"H","phonation0":"R","sp1":"plaza","zp1":"ya'a","pic1":"image/plaza.jpg","tone1":"R","phonation1":"R","sp2":"San Andres Yaa","zp2":"ya'","pic2":"image/san_andres.png","tone2":"H","phonation2":"C","sp3":"carrizo","zp3":"ya","pic3":"image/carrizo.jpg","tone3":"F","phonation3":"M","sp4":"metal","zp4":"yaa","pic4":"image/metal.png","tone4":"R","phonation4":"M","sp5":"cerro","zp5":"ya'a","pic5":"image/cerro.jpg","tone5":"L","phonation5":"R","path":"dissertation_sound/exp1/yaa_fierro_original_300_pitch_manipulated_gl_3_5.wav","length":"300","glposition":"3","f0_onset":"100","f0_offset":"120","seq":"23","status":"exp1"}
  ,
  {"sp0":"verde","zp0":"ya'a","pic0":"image/green.png","tone0":"H","phonation0":"R","sp1":"plaza","zp1":"ya'a","pic1":"image/plaza.jpg","tone1":"R","phonation1":"R","sp2":"San Andres Yaa","zp2":"ya'","pic2":"image/san_andres.png","tone2":"H","phonation2":"C","sp3":"carrizo","zp3":"ya","pic3":"image/carrizo.jpg","tone3":"F","phonation3":"M","sp4":"metal","zp4":"yaa","pic4":"image/metal.png","tone4":"R","phonation4":"M","sp5":"cerro","zp5":"ya'a","pic5":"image/cerro.jpg","tone5":"L","phonation5":"R","path":"dissertation_sound/exp1/yaa_fierro_original_300_pitch_manipulated_gl_4_5.wav","length":"300","glposition":"4","f0_onset":"100","f0_offset":"120","seq":"24","status":"exp1"}
  ,
  {"sp0":"verde","zp0":"ya'a","pic0":"image/green.png","tone0":"H","phonation0":"R","sp1":"plaza","zp1":"ya'a","pic1":"image/plaza.jpg","tone1":"R","phonation1":"R","sp2":"San Andres Yaa","zp2":"ya'","pic2":"image/san_andres.png","tone2":"H","phonation2":"C","sp3":"carrizo","zp3":"ya","pic3":"image/carrizo.jpg","tone3":"F","phonation3":"M","sp4":"metal","zp4":"yaa","pic4":"image/metal.png","tone4":"R","phonation4":"M","sp5":"cerro","zp5":"ya'a","pic5":"image/cerro.jpg","tone5":"L","phonation5":"R","path":"dissertation_sound/exp1/yaa_fierro_original_300_pitch_manipulated_gl_5_5.wav","length":"300","glposition":"5","f0_onset":"100","f0_offset":"120","seq":"25","status":"exp1"}
  ,
  {"sp0":"verde","zp0":"ya'a","pic0":"image/green.png","tone0":"H","phonation0":"R","sp1":"plaza","zp1":"ya'a","pic1":"image/plaza.jpg","tone1":"R","phonation1":"R","sp2":"San Andres Yaa","zp2":"ya'","pic2":"image/san_andres.png","tone2":"H","phonation2":"C","sp3":"carrizo","zp3":"ya","pic3":"image/carrizo.jpg","tone3":"F","phonation3":"M","sp4":"metal","zp4":"yaa","pic4":"image/metal.png","tone4":"R","phonation4":"M","sp5":"cerro","zp5":"ya'a","pic5":"image/cerro.jpg","tone5":"L","phonation5":"R","path":"dissertation_sound/exp1/yaa_fierro_original_150_pitch_manipulated_gl_no.wav","length":"150","glposition":"0","f0_onset":"100","f0_offset":"120","seq":"26","status":"exp1"}
  ,
  {"sp0":"verde","zp0":"ya'a","pic0":"image/green.png","tone0":"H","phonation0":"R","sp1":"plaza","zp1":"ya'a","pic1":"image/plaza.jpg","tone1":"R","phonation1":"R","sp2":"San Andres Yaa","zp2":"ya'","pic2":"image/san_andres.png","tone2":"H","phonation2":"C","sp3":"carrizo","zp3":"ya","pic3":"image/carrizo.jpg","tone3":"F","phonation3":"M","sp4":"metal","zp4":"yaa","pic4":"image/metal.png","tone4":"R","phonation4":"M","sp5":"cerro","zp5":"ya'a","pic5":"image/cerro.jpg","tone5":"L","phonation5":"R","path":"dissertation_sound/exp1/yaa_fierro_original_225_pitch_manipulated_gl_no.wav","length":"225","glposition":"0","f0_onset":"100","f0_offset":"120","seq":"27","status":"exp1"}
  ,
  {"sp0":"verde","zp0":"ya'a","pic0":"image/green.png","tone0":"H","phonation0":"R","sp1":"plaza","zp1":"ya'a","pic1":"image/plaza.jpg","tone1":"R","phonation1":"R","sp2":"San Andres Yaa","zp2":"ya'","pic2":"image/san_andres.png","tone2":"H","phonation2":"C","sp3":"carrizo","zp3":"ya","pic3":"image/carrizo.jpg","tone3":"F","phonation3":"M","sp4":"metal","zp4":"yaa","pic4":"image/metal.png","tone4":"R","phonation4":"M","sp5":"cerro","zp5":"ya'a","pic5":"image/cerro.jpg","tone5":"L","phonation5":"R","path":"dissertation_sound/exp1/yaa_fierro_original_300_pitch_manipulated_gl_no.wav","length":"300","glposition":"0","f0_onset":"100","f0_offset":"120","seq":"28","status":"exp1"}
  ,
  {"sp0":"verde","zp0":"ya'a","pic0":"image/green.png","tone0":"H","phonation0":"R","sp1":"plaza","zp1":"ya'a","pic1":"image/plaza.jpg","tone1":"R","phonation1":"R","sp2":"San Andres Yaa","zp2":"ya'","pic2":"image/san_andres.png","tone2":"H","phonation2":"C","sp3":"carrizo","zp3":"ya","pic3":"image/carrizo.jpg","tone3":"F","phonation3":"M","sp4":"metal","zp4":"yaa","pic4":"image/metal.png","tone4":"R","phonation4":"M","sp5":"cerro","zp5":"ya'a","pic5":"image/cerro.jpg","tone5":"L","phonation5":"R","path":"dissertation_sound/exp1/yaa_fierro_original_150_pitch_manipulated_gl_release.wav","length":"150","glposition":"6","f0_onset":"100","f0_offset":"120","seq":"29","status":"exp1"}
  ,
  {"sp0":"verde","zp0":"ya'a","pic0":"image/green.png","tone0":"H","phonation0":"R","sp1":"plaza","zp1":"ya'a","pic1":"image/plaza.jpg","tone1":"R","phonation1":"R","sp2":"San Andres Yaa","zp2":"ya'","pic2":"image/san_andres.png","tone2":"H","phonation2":"C","sp3":"carrizo","zp3":"ya","pic3":"image/carrizo.jpg","tone3":"F","phonation3":"M","sp4":"metal","zp4":"yaa","pic4":"image/metal.png","tone4":"R","phonation4":"M","sp5":"cerro","zp5":"ya'a","pic5":"image/cerro.jpg","tone5":"L","phonation5":"R","path":"dissertation_sound/exp1/yaa_fierro_original_225_pitch_manipulated_gl_release.wav","length":"225","glposition":"6","f0_onset":"100","f0_offset":"120","seq":"30","status":"exp1"}
  ,
  {"sp0":"verde","zp0":"ya'a","pic0":"image/green.png","tone0":"H","phonation0":"R","sp1":"plaza","zp1":"ya'a","pic1":"image/plaza.jpg","tone1":"R","phonation1":"R","sp2":"San Andres Yaa","zp2":"ya'","pic2":"image/san_andres.png","tone2":"H","phonation2":"C","sp3":"carrizo","zp3":"ya","pic3":"image/carrizo.jpg","tone3":"F","phonation3":"M","sp4":"metal","zp4":"yaa","pic4":"image/metal.png","tone4":"R","phonation4":"M","sp5":"cerro","zp5":"ya'a","pic5":"image/cerro.jpg","tone5":"L","phonation5":"R","path":"dissertation_sound/exp1/yaa_fierro_original_300_pitch_manipulated_gl_release.wav","length":"300","glposition":"6","f0_onset":"100","f0_offset":"120","seq":"31","status":"exp1"}
  ,
  {"sp0":"verde","zp0":"ya'a","pic0":"image/green.png","tone0":"H","phonation0":"R","sp1":"plaza","zp1":"ya'a","pic1":"image/plaza.jpg","tone1":"R","phonation1":"R","sp2":"San Andres Yaa","zp2":"ya'","pic2":"image/san_andres.png","tone2":"H","phonation2":"C","sp3":"carrizo","zp3":"ya","pic3":"image/carrizo.jpg","tone3":"F","phonation3":"M","sp4":"metal","zp4":"yaa","pic4":"image/metal.png","tone4":"R","phonation4":"M","sp5":"cerro","zp5":"ya'a","pic5":"image/cerro.jpg","tone5":"L","phonation5":"R","path":"dissertation_sound/exp1/yaa_fierro_original_150_pitch_manipulated_gl_5_5_release.wav","length":"150","glposition":"7","f0_onset":"100","f0_offset":"120","seq":"32","status":"exp1"}
  ,
  {"sp0":"verde","zp0":"ya'a","pic0":"image/green.png","tone0":"H","phonation0":"R","sp1":"plaza","zp1":"ya'a","pic1":"image/plaza.jpg","tone1":"R","phonation1":"R","sp2":"San Andres Yaa","zp2":"ya'","pic2":"image/san_andres.png","tone2":"H","phonation2":"C","sp3":"carrizo","zp3":"ya","pic3":"image/carrizo.jpg","tone3":"F","phonation3":"M","sp4":"metal","zp4":"yaa","pic4":"image/metal.png","tone4":"R","phonation4":"M","sp5":"cerro","zp5":"ya'a","pic5":"image/cerro.jpg","tone5":"L","phonation5":"R","path":"dissertation_sound/exp1/yaa_fierro_original_225_pitch_manipulated_gl_5_5_release.wav","length":"225","glposition":"7","f0_onset":"100","f0_offset":"120","seq":"33","status":"exp1"}
  ,
  {"sp0":"verde","zp0":"ya'a","pic0":"image/green.png","tone0":"H","phonation0":"R","sp1":"plaza","zp1":"ya'a","pic1":"image/plaza.jpg","tone1":"R","phonation1":"R","sp2":"San Andres Yaa","zp2":"ya'","pic2":"image/san_andres.png","tone2":"H","phonation2":"C","sp3":"carrizo","zp3":"ya","pic3":"image/carrizo.jpg","tone3":"F","phonation3":"M","sp4":"metal","zp4":"yaa","pic4":"image/metal.png","tone4":"R","phonation4":"M","sp5":"cerro","zp5":"ya'a","pic5":"image/cerro.jpg","tone5":"L","phonation5":"R","path":"dissertation_sound/exp1/yaa_fierro_original_300_pitch_manipulated_gl_5_5_release.wav","length":"300","glposition":"7","f0_onset":"100","f0_offset":"120","seq":"34","status":"exp1"}
  ,
  {"sp0":"carrizo","zp0":"ya","pic0":"image/carrizo.jpg","tone0":"F","phonation0":"M","sp1":"metal","zp1":"yaa","pic1":"image/metal.png","tone1":"R","phonation1":"M","sp2":"NA","zp2":"NA","pic2":"NA","tone2":"NA","phonation2":"NA","sp3":"NA","zp3":"NA","pic3":"NA","tone3":"NA","phonation3":"NA","sp4":"NA","zp4":"NA","pic4":"NA","tone4":"NA","phonation4":"NA","sp5":"NA","zp5":"NA","pic5":"NA","tone5":"NA","phonation5":"NA","path":"dissertation_sound/exp2/yaa_fierro_original_230_95_125_pitch_manipulated.wav","length":"230","glposition":"0","f0_onset":"95","f0_offset":"125","seq":"35","status":"exp2"}
  ,
  {"sp0":"casa","zp0":"yo'o","pic0":"image/casa.jpg","tone0":"F","phonation0":"R","sp1":"cal","zp1":"yo'o","pic1":"image/cal.jpg","tone1":"R","phonation1":"R","sp2":"NA","zp2":"NA","pic2":"NA","tone2":"NA","phonation2":"NA","sp3":"NA","zp3":"NA","pic3":"NA","tone3":"NA","phonation3":"NA","sp4":"NA","zp4":"NA","pic4":"NA","tone4":"NA","phonation4":"NA","sp5":"NA","zp5":"NA","pic5":"NA","tone5":"NA","phonation5":"NA","path":"dissertation_sound/exp2/tierra-RBP-1-original_230_95_125_pitch_manipulated_gl_3_5.wav","length":"230","glposition":"3","f0_onset":"95","f0_offset":"125","seq":"36","status":"exp2"}
  ,
  {"sp0":"carrizo","zp0":"ya","pic0":"image/carrizo.jpg","tone0":"F","phonation0":"M","sp1":"metal","zp1":"yaa","pic1":"image/metal.png","tone1":"R","phonation1":"M","sp2":"NA","zp2":"NA","pic2":"NA","tone2":"NA","phonation2":"NA","sp3":"NA","zp3":"NA","pic3":"NA","tone3":"NA","phonation3":"NA","sp4":"NA","zp4":"NA","pic4":"NA","tone4":"NA","phonation4":"NA","sp5":"NA","zp5":"NA","pic5":"NA","tone5":"NA","phonation5":"NA","path":"dissertation_sound/exp2/yaa_fierro_original_230_100_120_pitch_manipulated.wav","length":"230","glposition":"0","f0_onset":"100","f0_offset":"120","seq":"37","status":"exp2"}
  ,
  {"sp0":"casa","zp0":"yo'o","pic0":"image/casa.jpg","tone0":"F","phonation0":"R","sp1":"cal","zp1":"yo'o","pic1":"image/cal.jpg","tone1":"R","phonation1":"R","sp2":"NA","zp2":"NA","pic2":"NA","tone2":"NA","phonation2":"NA","sp3":"NA","zp3":"NA","pic3":"NA","tone3":"NA","phonation3":"NA","sp4":"NA","zp4":"NA","pic4":"NA","tone4":"NA","phonation4":"NA","sp5":"NA","zp5":"NA","pic5":"NA","tone5":"NA","phonation5":"NA","path":"dissertation_sound/exp2/tierra-RBP-1-original_230_100_120_pitch_manipulated_gl_3_5.wav","length":"230","glposition":"3","f0_onset":"100","f0_offset":"120","seq":"38","status":"exp2"}
  ,
  {"sp0":"carrizo","zp0":"ya","pic0":"image/carrizo.jpg","tone0":"F","phonation0":"M","sp1":"metal","zp1":"yaa","pic1":"image/metal.png","tone1":"R","phonation1":"M","sp2":"NA","zp2":"NA","pic2":"NA","tone2":"NA","phonation2":"NA","sp3":"NA","zp3":"NA","pic3":"NA","tone3":"NA","phonation3":"NA","sp4":"NA","zp4":"NA","pic4":"NA","tone4":"NA","phonation4":"NA","sp5":"NA","zp5":"NA","pic5":"NA","tone5":"NA","phonation5":"NA","path":"dissertation_sound/exp2/yaa_fierro_original_230_105_115_pitch_manipulated.wav","length":"230","glposition":"0","f0_onset":"105","f0_offset":"115","seq":"39","status":"exp2"}
  ,
  {"sp0":"casa","zp0":"yo'o","pic0":"image/casa.jpg","tone0":"F","phonation0":"R","sp1":"cal","zp1":"yo'o","pic1":"image/cal.jpg","tone1":"R","phonation1":"R","sp2":"NA","zp2":"NA","pic2":"NA","tone2":"NA","phonation2":"NA","sp3":"NA","zp3":"NA","pic3":"NA","tone3":"NA","phonation3":"NA","sp4":"NA","zp4":"NA","pic4":"NA","tone4":"NA","phonation4":"NA","sp5":"NA","zp5":"NA","pic5":"NA","tone5":"NA","phonation5":"NA","path":"dissertation_sound/exp2/tierra-RBP-1-original_230_105_115_pitch_manipulated_gl_3_5.wav","length":"230","glposition":"3","f0_onset":"105","f0_offset":"115","seq":"40","status":"exp2"}
  ,
  {"sp0":"carrizo","zp0":"ya","pic0":"image/carrizo.jpg","tone0":"F","phonation0":"M","sp1":"metal","zp1":"yaa","pic1":"image/metal.png","tone1":"R","phonation1":"M","sp2":"NA","zp2":"NA","pic2":"NA","tone2":"NA","phonation2":"NA","sp3":"NA","zp3":"NA","pic3":"NA","tone3":"NA","phonation3":"NA","sp4":"NA","zp4":"NA","pic4":"NA","tone4":"NA","phonation4":"NA","sp5":"NA","zp5":"NA","pic5":"NA","tone5":"NA","phonation5":"NA","path":"dissertation_sound/exp2/yaa_fierro_original_230_110_110_pitch_manipulated.wav","length":"230","glposition":"0","f0_onset":"110","f0_offset":"110","seq":"41","status":"exp2"}
  ,
  {"sp0":"casa","zp0":"yo'o","pic0":"image/casa.jpg","tone0":"F","phonation0":"R","sp1":"cal","zp1":"yo'o","pic1":"image/cal.jpg","tone1":"R","phonation1":"R","sp2":"NA","zp2":"NA","pic2":"NA","tone2":"NA","phonation2":"NA","sp3":"NA","zp3":"NA","pic3":"NA","tone3":"NA","phonation3":"NA","sp4":"NA","zp4":"NA","pic4":"NA","tone4":"NA","phonation4":"NA","sp5":"NA","zp5":"NA","pic5":"NA","tone5":"NA","phonation5":"NA","path":"dissertation_sound/exp2/tierra-RBP-1-original_230_110_110_pitch_manipulated_gl_3_5.wav","length":"230","glposition":"3","f0_onset":"110","f0_offset":"110","seq":"42","status":"exp2"}
  ,
  {"sp0":"carrizo","zp0":"ya","pic0":"image/carrizo.jpg","tone0":"F","phonation0":"M","sp1":"metal","zp1":"yaa","pic1":"image/metal.png","tone1":"R","phonation1":"M","sp2":"NA","zp2":"NA","pic2":"NA","tone2":"NA","phonation2":"NA","sp3":"NA","zp3":"NA","pic3":"NA","tone3":"NA","phonation3":"NA","sp4":"NA","zp4":"NA","pic4":"NA","tone4":"NA","phonation4":"NA","sp5":"NA","zp5":"NA","pic5":"NA","tone5":"NA","phonation5":"NA","path":"dissertation_sound/exp2/yaa_fierro_original_230_115_105_pitch_manipulated.wav","length":"230","glposition":"0","f0_onset":"115","f0_offset":"105","seq":"43","status":"exp2"}
  ,
  {"sp0":"casa","zp0":"yo'o","pic0":"image/casa.jpg","tone0":"F","phonation0":"R","sp1":"cal","zp1":"yo'o","pic1":"image/cal.jpg","tone1":"R","phonation1":"R","sp2":"NA","zp2":"NA","pic2":"NA","tone2":"NA","phonation2":"NA","sp3":"NA","zp3":"NA","pic3":"NA","tone3":"NA","phonation3":"NA","sp4":"NA","zp4":"NA","pic4":"NA","tone4":"NA","phonation4":"NA","sp5":"NA","zp5":"NA","pic5":"NA","tone5":"NA","phonation5":"NA","path":"dissertation_sound/exp2/tierra-RBP-1-original_230_115_105_pitch_manipulated_gl_3_5.wav","length":"230","glposition":"3","f0_onset":"115","f0_offset":"105","seq":"44","status":"exp2"}
  ,
  {"sp0":"carrizo","zp0":"ya","pic0":"image/carrizo.jpg","tone0":"F","phonation0":"M","sp1":"metal","zp1":"yaa","pic1":"image/metal.png","tone1":"R","phonation1":"M","sp2":"NA","zp2":"NA","pic2":"NA","tone2":"NA","phonation2":"NA","sp3":"NA","zp3":"NA","pic3":"NA","tone3":"NA","phonation3":"NA","sp4":"NA","zp4":"NA","pic4":"NA","tone4":"NA","phonation4":"NA","sp5":"NA","zp5":"NA","pic5":"NA","tone5":"NA","phonation5":"NA","path":"dissertation_sound/exp2/yaa_fierro_original_230_120_100_pitch_manipulated.wav","length":"230","glposition":"0","f0_onset":"120","f0_offset":"100","seq":"45","status":"exp2"}
  ,
  {"sp0":"casa","zp0":"yo'o","pic0":"image/casa.jpg","tone0":"F","phonation0":"R","sp1":"cal","zp1":"yo'o","pic1":"image/cal.jpg","tone1":"R","phonation1":"R","sp2":"NA","zp2":"NA","pic2":"NA","tone2":"NA","phonation2":"NA","sp3":"NA","zp3":"NA","pic3":"NA","tone3":"NA","phonation3":"NA","sp4":"NA","zp4":"NA","pic4":"NA","tone4":"NA","phonation4":"NA","sp5":"NA","zp5":"NA","pic5":"NA","tone5":"NA","phonation5":"NA","path":"dissertation_sound/exp2/tierra-RBP-1-original_230_120_100_pitch_manipulated_gl_3_5.wav","length":"230","glposition":"3","f0_onset":"120","f0_offset":"100","seq":"46","status":"exp2"}
  ,
  {"sp0":"carrizo","zp0":"ya","pic0":"image/carrizo.jpg","tone0":"F","phonation0":"M","sp1":"metal","zp1":"yaa","pic1":"image/metal.png","tone1":"R","phonation1":"M","sp2":"NA","zp2":"NA","pic2":"NA","tone2":"NA","phonation2":"NA","sp3":"NA","zp3":"NA","pic3":"NA","tone3":"NA","phonation3":"NA","sp4":"NA","zp4":"NA","pic4":"NA","tone4":"NA","phonation4":"NA","sp5":"NA","zp5":"NA","pic5":"NA","tone5":"NA","phonation5":"NA","path":"dissertation_sound/exp2/yaa_fierro_original_230_125_95_pitch_manipulated.wav","length":"230","glposition":"0","f0_onset":"125","f0_offset":"95","seq":"47","status":"exp2"}
  ,
  {"sp0":"casa","zp0":"yo'o","pic0":"image/casa.jpg","tone0":"F","phonation0":"R","sp1":"cal","zp1":"yo'o","pic1":"image/cal.jpg","tone1":"R","phonation1":"R","sp2":"NA","zp2":"NA","pic2":"NA","tone2":"NA","phonation2":"NA","sp3":"NA","zp3":"NA","pic3":"NA","tone3":"NA","phonation3":"NA","sp4":"NA","zp4":"NA","pic4":"NA","tone4":"NA","phonation4":"NA","sp5":"NA","zp5":"NA","pic5":"NA","tone5":"NA","phonation5":"NA","path":"dissertation_sound/exp2/tierra-RBP-1-original_230_125_95_pitch_manipulated_gl_3_5.wav","length":"230","glposition":"3","f0_onset":"125","f0_offset":"95","seq":"48","status":"exp2"}
  ,
  {"sp0":"agrietado","zp0":"be","pic0":"image/agrietado.jpg","tone0":"F","phonation0":"M","sp1":"viento","zp1":"be'","pic1":"image/viento.jpg","tone1":"F","phonation1":"C","sp2":"NA","zp2":"NA","pic2":"NA","tone2":"NA","phonation2":"NA","sp3":"NA","zp3":"NA","pic3":"NA","tone3":"NA","phonation3":"NA","sp4":"NA","zp4":"NA","pic4":"NA","tone4":"NA","phonation4":"NA","sp5":"NA","zp5":"NA","pic5":"NA","tone5":"NA","phonation5":"NA","path":"dissertation_sound/exp3/gl_release.wav","length":"181","glposition":"6","f0_onset":"125","f0_offset":"98","seq":"49","status":"exp3"}
  ,
  {"sp0":"agrietado","zp0":"be","pic0":"image/agrietado.jpg","tone0":"F","phonation0":"M","sp1":"viento","zp1":"be'","pic1":"image/viento.jpg","tone1":"F","phonation1":"C","sp2":"NA","zp2":"NA","pic2":"NA","tone2":"NA","phonation2":"NA","sp3":"NA","zp3":"NA","pic3":"NA","tone3":"NA","phonation3":"NA","sp4":"NA","zp4":"NA","pic4":"NA","tone4":"NA","phonation4":"NA","sp5":"NA","zp5":"NA","pic5":"NA","tone5":"NA","phonation5":"NA","path":"dissertation_sound/exp3/modal.wav","length":"181","glposition":"0","f0_onset":"125","f0_offset":"98","seq":"50","status":"exp3"}
  ,
  {"sp0":"agrietado","zp0":"be","pic0":"image/agrietado.jpg","tone0":"F","phonation0":"M","sp1":"viento","zp1":"be'","pic1":"image/viento.jpg","tone1":"F","phonation1":"C","sp2":"NA","zp2":"NA","pic2":"NA","tone2":"NA","phonation2":"NA","sp3":"NA","zp3":"NA","pic3":"NA","tone3":"NA","phonation3":"NA","sp4":"NA","zp4":"NA","pic4":"NA","tone4":"NA","phonation4":"NA","sp5":"NA","zp5":"NA","pic5":"NA","tone5":"NA","phonation5":"NA","path":"dissertation_sound/exp3/gl.wav","length":"181","glposition":"5","f0_onset":"125","f0_offset":"98","seq":"51","status":"exp3"}
  ,
  {"sp0":"agrietado","zp0":"be","pic0":"image/agrietado.jpg","tone0":"F","phonation0":"M","sp1":"viento","zp1":"be'","pic1":"image/viento.jpg","tone1":"F","phonation1":"C","sp2":"NA","zp2":"NA","pic2":"NA","tone2":"NA","phonation2":"NA","sp3":"NA","zp3":"NA","pic3":"NA","tone3":"NA","phonation3":"NA","sp4":"NA","zp4":"NA","pic4":"NA","tone4":"NA","phonation4":"NA","sp5":"NA","zp5":"NA","pic5":"NA","tone5":"NA","phonation5":"NA","path":"dissertation_sound/exp3/gl_5_5_release.wav","length":"181","glposition":"7","f0_onset":"125","f0_offset":"98","seq":"52","status":"exp3"}
  
  ];

var practiceI_list = trial_all_list.slice(0, 10);
var trial_ExpI_list = trial_all_list.slice(10, trial_all_list.length);

var productionList = [{"sp":"verde", "zp":"ya'a", "tone":"H", "phonation":"R", "pic":"image/green.png"},
  {"sp":"plaza", "zp":"ya'a", "tone":"R", "phonation":"R", "pic":"image/plaza.jpg"},
  {"sp":"San Andres Yaa", "zp":"ya'", "tone":"H", "phonation":"C", "pic":"image/san_andres.png"},
  {"sp":"carrizo", "zp":"ya", "tone":"F", "phonation":"M", "pic":"image/carrizo.jpg"},
  {"sp":"metal", "zp":"yaa", "tone":"R", "phonation":"M", "pic":"image/metal.png"},
  {"sp":"viento", "zp":"be'", "tone":"F", "phonation":"C", "pic":"image/viento.jpg"},
  {"sp":"agrietado", "zp":"be", "tone":"F", "phonation":"M", "pic":"image/agrietado.jpg"},
  {"sp":"cerro", "zp":"ya'a", "tone":"L", "phonation":"R", "pic":"image/cerro.jpg"},
  {"sp":"casa", "zp":"yo'o", "tone":"F", "phonation":"R", "pic":"image/casa.jpg"},
  {"sp":"cal", "zp":"yo'o", "tone":"R", "phonation":"R", "pic":"image/cal.jpg"}
];

var audioFile = [];


for (let i = 0; i < trial_all_list.length; i++){
	var path = trial_all_list[i].path;
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

var images = ["image/green.png", "image/plaza.jpg", "image/san_andres.png", "image/carrizo.jpg", "image/metal.png", "image/viento.jpg", "image/agrietado.jpg", "image/cerro.jpg"];



var htmlStr = "";
for (var i = 0; i <= images.length-1; i++) {
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
      var csvFile = [["trial_num", "radio_value", "word_selected", "tone_selected", "phon_selected", "word_list", "sound", "stimuli_length", "stimuli_gl", "stimuli_f0_onset", "stimuli_f0_offset", "trial_sequence", "response_time", "response_time_Date", "experiment_no"]];

      /*wordListString stores the string version of the options displayed on the screen*/
      var wordListString = "";
         
/*Shuffle the practiceList in the beginning to randomize the order*/      
      var practiceListRandom = jsPsych.randomization.repeat(practiceI_list, 1);
/*Shuffle the trialList in the beginning to randomize the order*/
      var trialListRandom_repeatI = jsPsych.randomization.repeat(trial_ExpI_list, 1);
      var trialListRandom_repeatII = jsPsych.randomization.repeat(trial_ExpI_list, 1);

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
        
        curTimeStart = performance.now();
        curTimeStartDate = new Date();
        




        $("#trialnum").text(trialnum+"/"+totalnum+"   ("+curTrial+")");
        /* show the trialDiv */
        $("#trialDiv").show();
        $("#trialnumdiv").show();
    
        if (trialListRandom[curTrial].sp2 !== "NA"){
          $("#checkbox3").show();
          $("#checkbox4").show();
          $("#checkbox5").show();
          $("#checkbox6").show();
/*shuffle the index to randomize the option order*/
          
         var wordListIndex =  jsPsych.randomization.repeat([0,1,2,3,4,5],1);
         var key0 = "sp"+wordListIndex[0];
         var key1 = "sp"+wordListIndex[1];
         var key2 = "sp"+wordListIndex[2];
         var key3 = "sp"+wordListIndex[3];
         var key4 = "sp"+wordListIndex[4];
         var key5 = "sp"+wordListIndex[5];

         var zpkey0 = "zp"+wordListIndex[0];
         var zpkey1 = "zp"+wordListIndex[1];
         var zpkey2 = "zp"+wordListIndex[2];
         var zpkey3 = "zp"+wordListIndex[3];
         var zpkey4 = "zp"+wordListIndex[4];
         var zpkey5 = "zp"+wordListIndex[5];

         var pic0 = "pic"+wordListIndex[0];
         var pic1 = "pic"+wordListIndex[1];
         var pic2 = "pic"+wordListIndex[2];
         var pic3 = "pic"+wordListIndex[3];
         var pic4 = "pic"+wordListIndex[4];
         var pic5 = "pic"+wordListIndex[5];

         var tone0 = "tone"+wordListIndex[0];
         var tone1 = "tone"+wordListIndex[1];
         var tone2 = "tone"+wordListIndex[2];
         var tone3 = "tone"+wordListIndex[3];
         var tone4 = "tone"+wordListIndex[4];
         var tone5 = "tone"+wordListIndex[5];

         var phon0 = "phonation"+wordListIndex[0];
         var phon1 = "phonation"+wordListIndex[1];
         var phon2 = "phonation"+wordListIndex[2];
         var phon3 = "phonation"+wordListIndex[3];
         var phon4 = "phonation"+wordListIndex[4];
         var phon5 = "phonation"+wordListIndex[5];

         zpwordList = [trialListRandom[curTrial][zpkey0], trialListRandom[curTrial][zpkey1],trialListRandom[curTrial][zpkey2],trialListRandom[curTrial][zpkey3],trialListRandom[curTrial][zpkey4],trialListRandom[curTrial][zpkey5]];
         wordList = [trialListRandom[curTrial][key0], trialListRandom[curTrial][key1],trialListRandom[curTrial][key2],trialListRandom[curTrial][key3],trialListRandom[curTrial][key4],trialListRandom[curTrial][key5]];
         toneList = [trialListRandom[curTrial][tone0], trialListRandom[curTrial][tone1],trialListRandom[curTrial][tone2],trialListRandom[curTrial][tone3],trialListRandom[curTrial][tone4],trialListRandom[curTrial][tone5]]
         picList = [trialListRandom[curTrial][pic0], trialListRandom[curTrial][pic1], trialListRandom[curTrial][pic2], trialListRandom[curTrial][pic3], trialListRandom[curTrial][pic4],trialListRandom[curTrial][pic5]]
         phonList = [trialListRandom[curTrial][phon0], trialListRandom[curTrial][phon1], trialListRandom[curTrial][phon2], trialListRandom[curTrial][phon3], trialListRandom[curTrial][phon4],trialListRandom[curTrial][phon5]]
         
         $('#word1labelzp').html(zpwordList[0]); 
         $('#word2labelzp').html(zpwordList[1]); 
         $('#word3labelzp').html(zpwordList[2]);  
         $('#word4labelzp').html(zpwordList[3]); 
         $('#word5labelzp').html(zpwordList[4]);
         $('#word6labelzp').html(zpwordList[5]);

         $('#word1label').html(wordList[0]); 
         $('#word2label').html(wordList[1]); 
         $('#word3label').html(wordList[2]);  
         $('#word4label').html(wordList[3]); 
         $('#word5label').html(wordList[4]);
         $('#word6label').html(wordList[5]);

         $('#word1image').attr("src",picList[0]);
         $('#word2image').attr("src",picList[1]);
         $('#word3image').attr("src",picList[2]);
         $('#word4image').attr("src",picList[3]);
         $('#word5image').attr("src",picList[4]);
         $('#word6image').attr("src",picList[5]);
         
        wordListString = wordList.join('-');
        optionList.push(wordList);
         $("#submit").on("click", CheckSelect);
        } 
        else{
          $("#checkbox3").hide();
          $("#checkbox4").hide();
          $("#checkbox5").hide();
          $("#checkbox6").hide();

          var wordListIndex =  jsPsych.randomization.repeat([0,1],1);
          var key0 = "sp"+wordListIndex[0];
          var key1 = "sp"+wordListIndex[1];
 
          var zpkey0 = "zp"+wordListIndex[0];
          var zpkey1 = "zp"+wordListIndex[1];
 
          var pic0 = "pic"+wordListIndex[0];
          var pic1 = "pic"+wordListIndex[1];
 
          var tone0 = "tone"+wordListIndex[0];
          var tone1 = "tone"+wordListIndex[1];
 
          var phon0 = "phonation"+wordListIndex[0];
          var phon1 = "phonation"+wordListIndex[1];
 
          zpwordList = [trialListRandom[curTrial][zpkey0], trialListRandom[curTrial][zpkey1]];
          wordList = [trialListRandom[curTrial][key0], trialListRandom[curTrial][key1]];
          toneList = [trialListRandom[curTrial][tone0], trialListRandom[curTrial][tone1]];
          picList = [trialListRandom[curTrial][pic0], trialListRandom[curTrial][pic1]];
          phonList = [trialListRandom[curTrial][phon0], trialListRandom[curTrial][phon1]];
          
          $('#word1labelzp').html(zpwordList[0]); 
          $('#word2labelzp').html(zpwordList[1]); 
 
          $('#word1label').html(wordList[0]); 
          $('#word2label').html(wordList[1]); 
 
          $('#word1image').attr("src",picList[0]);
          $('#word2image').attr("src",picList[1]);
          
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
            curTimeEnd = performance.now();
            curTimeEndDate = new Date();
            responseTime = curTimeEnd - curTimeStart;
            responseTimeDate = curTimeEndDate - curTimeStartDate;
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
            var stimuli_f0_onset = trialListRandom[curTrial].f0_onset;
            var stimuli_f0_offset = trialListRandom[curTrial].f0_offset;
            var exp_num = trialListRandom[curTrial].status;
            var curresultList = [curTrial, radioselectedValue, wordselectedValue, toneselectedValue, phonselectedValue, wordListString, stimuli_path, stimuli_length, stimuli_gl, stimuli_f0_onset, stimuli_f0_offset, trialListRandom[curTrial].seq, responseTime, responseTimeDate, exp_num];
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
        $("#word6").prop("checked", false);
        
        $("#trialnumdiv").hide();
        $("#trialDiv").hide();

        $('#submit').unbind('click');
        $('#play').unbind('click');
        
        trialnum = trialnum + 1;
        curTrial = curTrial + 1;

        
        if (curTrial < practiceLength) {
          if (curTrial == 3) {
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
            totalnum = trial_ExpI_list.length;
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
        var curresultList = [curTrial, production_sp, production_zp, production_tone, production_phonation, "expproduct"];
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