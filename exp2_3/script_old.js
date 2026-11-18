/*import csv files*/

var trial_all_list = [
  {
    "sp0": "cesta",
    "zp0": "ga'",
    "pic0": "image/cesta.png",
    "tone0": "R",
    "phonation0": "C",
    "sp1": "nueve",
    "zp1": "ga",
    "pic1": "image/nueve.png",
    "tone1": "R",
    "phonation1": "M",
    "path": "dissertation_sound/practice/basket_extract_recale_int.wav",
    "length": "NA",
    "glposition": "NA",
    "glportion": "NA",
    "gltype": "NA",
    "f0_onset": "NA",
    "f0_offset": "NA",
    "correct_answer": "ga'",
    "seq": 1,
    "status": "practice"
  },
  {
    "sp0": "pesado",
    "zp0": "zi'i",
    "pic0": "image/pesado.png",
    "tone0": "H",
    "phonation0": "R",
    "sp1": "dolor",
    "zp1": "zi'",
    "pic1": "image/dolor.png",
    "tone1": "H",
    "phonation1": "C",
    "path": "dissertation_sound/practice/heavy_extract_recale_int.wav",
    "length": "NA",
    "glposition": "NA",
    "glportion": "NA",
    "gltype": "NA",
    "f0_onset": "NA",
    "f0_offset": "NA",
    "correct_answer": "zi'i",
    "seq": 2,
    "status": "practice"
  },
  {
    "sp0": "cesta",
    "zp0": "ga'",
    "pic0": "image/cesta.png",
    "tone0": "R",
    "phonation0": "C",
    "sp1": "nueve",
    "zp1": "ga",
    "pic1": "image/nueve.png",
    "tone1": "R",
    "phonation1": "M",
    "path": "dissertation_sound/practice/nine_extract_recale_int.wav",
    "length": "NA",
    "glposition": "NA",
    "glportion": "NA",
    "gltype": "NA",
    "f0_onset": "NA",
    "f0_offset": "NA",
    "correct_answer": "ga",
    "seq": 3,
    "status": "practice"
  },
  {
    "sp0": "pesado",
    "zp0": "zi'i",
    "pic0": "image/pesado.png",
    "tone0": "H",
    "phonation0": "R",
    "sp1": "dolor",
    "zp1": "zi'",
    "pic1": "image/dolor.png",
    "tone1": "H",
    "phonation1": "C",
    "path": "dissertation_sound/practice/pain_extract_recale_int.wav",
    "length": "NA",
    "glposition": "NA",
    "glportion": "NA",
    "gltype": "NA",
    "f0_onset": "NA",
    "f0_offset": "NA",
    "correct_answer": "zi'",
    "seq": 4,
    "status": "practice"
  },
  {
    "sp0": "diez",
    "zp0": "chi",
    "pic0": "image/diez.png",
    "tone0": "R",
    "phonation0": "M",
    "sp1": "voz",
    "zp1": "chi'i",
    "pic1": "image/voz.png",
    "tone1": "R",
    "phonation1": "R",
    "path": "dissertation_sound/practice/ten_extract_recale_int.wav",
    "length": "NA",
    "glposition": "NA",
    "glportion": "NA",
    "gltype": "NA",
    "f0_onset": "NA",
    "f0_offset": "NA",
    "correct_answer": "chi",
    "seq": 5,
    "status": "practice"
  },
  {
    "sp0": "diez",
    "zp0": "chi",
    "pic0": "image/diez.png",
    "tone0": "R",
    "phonation0": "M",
    "sp1": "voz",
    "zp1": "chi'i",
    "pic1": "image/voz.png",
    "tone1": "R",
    "phonation1": "R",
    "path": "dissertation_sound/practice/voice_extract_recale_int.wav",
    "length": "NA",
    "glposition": "NA",
    "glportion": "NA",
    "gltype": "NA",
    "f0_onset": "NA",
    "f0_offset": "NA",
    "correct_answer": "chi'i",
    "seq": 6,
    "status": "practice"
  },
  {
    "sp0": "diez",
    "zp0": "chi",
    "pic0": "image/diez.png",
    "tone0": "R",
    "phonation0": "M",
    "sp1": "voz",
    "zp1": "chi'i",
    "pic1": "image/voz.png",
    "tone1": "R",
    "phonation1": "R",
    "path": "dissertation_sound/exp1/chi-vowel-original_150_120_140_pitch_manipulated_1_2_gl_good_portion_withconsonant.wav",
    "length": "150",
    "glposition": "1",
    "glportion": "half",
    "gltype": "strong",
    "f0_onset": "120",
    "f0_offset": "140",
    "correct_answer": "NA",
    "seq": 7,
    "status": "exp1"
  },
  {
    "sp0": "diez",
    "zp0": "chi",
    "pic0": "image/diez.png",
    "tone0": "R",
    "phonation0": "M",
    "sp1": "voz",
    "zp1": "chi'i",
    "pic1": "image/voz.png",
    "tone1": "R",
    "phonation1": "R",
    "path": "dissertation_sound/exp1/chi-vowel-original_150_120_140_pitch_manipulated_1_3_gl_good_portion_withconsonant.wav",
    "length": "150",
    "glposition": "1",
    "glportion": "one third",
    "gltype": "strong",
    "f0_onset": "120",
    "f0_offset": "140",
    "correct_answer": "NA",
    "seq": 8,
    "status": "exp1"
  },
  {
    "sp0": "diez",
    "zp0": "chi",
    "pic0": "image/diez.png",
    "tone0": "R",
    "phonation0": "M",
    "sp1": "voz",
    "zp1": "chi'i",
    "pic1": "image/voz.png",
    "tone1": "R",
    "phonation1": "R",
    "path": "dissertation_sound/exp1/chi-vowel-original_150_120_140_pitch_manipulated_1_5_gl_good_portion_withconsonant.wav",
    "length": "150",
    "glposition": "1",
    "glportion": "one fifth",
    "gltype": "strong",
    "f0_onset": "120",
    "f0_offset": "140",
    "correct_answer": "NA",
    "seq": 9,
    "status": "exp1"
  },
  {
    "sp0": "diez",
    "zp0": "chi",
    "pic0": "image/diez.png",
    "tone0": "R",
    "phonation0": "M",
    "sp1": "voz",
    "zp1": "chi'i",
    "pic1": "image/voz.png",
    "tone1": "R",
    "phonation1": "R",
    "path": "dissertation_sound/exp1/chi-vowel-original_150_120_140_pitch_manipulated_3_5_gl_good_portion_withconsonant.wav",
    "length": "150",
    "glposition": "3",
    "glportion": "one fifth",
    "gltype": "strong",
    "f0_onset": "120",
    "f0_offset": "140",
    "correct_answer": "NA",
    "seq": 10,
    "status": "exp1"
  },
  {
    "sp0": "diez",
    "zp0": "chi",
    "pic0": "image/diez.png",
    "tone0": "R",
    "phonation0": "M",
    "sp1": "voz",
    "zp1": "chi'i",
    "pic1": "image/voz.png",
    "tone1": "R",
    "phonation1": "R",
    "path": "dissertation_sound/exp1/chi-vowel-original_150_120_140_pitch_manipulated_3_5_gl_weakgl_good_portion_withconsonant.wav",
    "length": "150",
    "glposition": "3",
    "glportion": "one fifth",
    "gltype": "weak",
    "f0_onset": "120",
    "f0_offset": "140",
    "correct_answer": "NA",
    "seq": 11,
    "status": "exp1"
  },
  {
    "sp0": "diez",
    "zp0": "chi",
    "pic0": "image/diez.png",
    "tone0": "R",
    "phonation0": "M",
    "sp1": "voz",
    "zp1": "chi'i",
    "pic1": "image/voz.png",
    "tone1": "R",
    "phonation1": "R",
    "path": "dissertation_sound/exp1/chi-vowel-original_150_120_140_pitch_manipulated_modal_good_portion_withconsonant.wav",
    "length": "150",
    "glposition": "0",
    "glportion": "NA",
    "gltype": "NA",
    "f0_onset": "120",
    "f0_offset": "140",
    "correct_answer": "NA",
    "seq": 12,
    "status": "exp1"
  },
  {
    "sp0": "diez",
    "zp0": "chi",
    "pic0": "image/diez.png",
    "tone0": "R",
    "phonation0": "M",
    "sp1": "voz",
    "zp1": "chi'i",
    "pic1": "image/voz.png",
    "tone1": "R",
    "phonation1": "R",
    "path": "dissertation_sound/exp1/chi-vowel-original_225_120_140_pitch_manipulated_1_2_gl_good_portion_withconsonant.wav",
    "length": "225",
    "glposition": "1",
    "glportion": "half",
    "gltype": "strong",
    "f0_onset": "120",
    "f0_offset": "140",
    "correct_answer": "NA",
    "seq": 13,
    "status": "exp1"
  },
  {
    "sp0": "diez",
    "zp0": "chi",
    "pic0": "image/diez.png",
    "tone0": "R",
    "phonation0": "M",
    "sp1": "voz",
    "zp1": "chi'i",
    "pic1": "image/voz.png",
    "tone1": "R",
    "phonation1": "R",
    "path": "dissertation_sound/exp1/chi-vowel-original_225_120_140_pitch_manipulated_1_3_gl_good_portion_withconsonant.wav",
    "length": "225",
    "glposition": "1",
    "glportion": "one third",
    "gltype": "strong",
    "f0_onset": "120",
    "f0_offset": "140",
    "correct_answer": "NA",
    "seq": 14,
    "status": "exp1"
  },
  {
    "sp0": "diez",
    "zp0": "chi",
    "pic0": "image/diez.png",
    "tone0": "R",
    "phonation0": "M",
    "sp1": "voz",
    "zp1": "chi'i",
    "pic1": "image/voz.png",
    "tone1": "R",
    "phonation1": "R",
    "path": "dissertation_sound/exp1/chi-vowel-original_225_120_140_pitch_manipulated_1_5_gl_good_portion_withconsonant.wav",
    "length": "225",
    "glposition": "1",
    "glportion": "one fifth",
    "gltype": "strong",
    "f0_onset": "120",
    "f0_offset": "140",
    "correct_answer": "NA",
    "seq": 15,
    "status": "exp1"
  },
  {
    "sp0": "diez",
    "zp0": "chi",
    "pic0": "image/diez.png",
    "tone0": "R",
    "phonation0": "M",
    "sp1": "voz",
    "zp1": "chi'i",
    "pic1": "image/voz.png",
    "tone1": "R",
    "phonation1": "R",
    "path": "dissertation_sound/exp1/chi-vowel-original_225_120_140_pitch_manipulated_3_5_gl_good_portion_withconsonant.wav",
    "length": "225",
    "glposition": "3",
    "glportion": "one fifth",
    "gltype": "strong",
    "f0_onset": "120",
    "f0_offset": "140",
    "correct_answer": "NA",
    "seq": 16,
    "status": "exp1"
  },
  {
    "sp0": "diez",
    "zp0": "chi",
    "pic0": "image/diez.png",
    "tone0": "R",
    "phonation0": "M",
    "sp1": "voz",
    "zp1": "chi'i",
    "pic1": "image/voz.png",
    "tone1": "R",
    "phonation1": "R",
    "path": "dissertation_sound/exp1/chi-vowel-original_225_120_140_pitch_manipulated_3_5_gl_weakgl_good_portion_withconsonant.wav",
    "length": "225",
    "glposition": "3",
    "glportion": "one fifth",
    "gltype": "weak",
    "f0_onset": "120",
    "f0_offset": "140",
    "correct_answer": "NA",
    "seq": 17,
    "status": "exp1"
  },
  {
    "sp0": "diez",
    "zp0": "chi",
    "pic0": "image/diez.png",
    "tone0": "R",
    "phonation0": "M",
    "sp1": "voz",
    "zp1": "chi'i",
    "pic1": "image/voz.png",
    "tone1": "R",
    "phonation1": "R",
    "path": "dissertation_sound/exp1/chi-vowel-original_225_120_140_pitch_manipulated_modal_good_portion_withconsonant.wav",
    "length": "225",
    "glposition": "0",
    "glportion": "NA",
    "gltype": "NA",
    "f0_onset": "120",
    "f0_offset": "140",
    "correct_answer": "NA",
    "seq": 18,
    "status": "exp1"
  },
  {
    "sp0": "diez",
    "zp0": "chi",
    "pic0": "image/diez.png",
    "tone0": "R",
    "phonation0": "M",
    "sp1": "voz",
    "zp1": "chi'i",
    "pic1": "image/voz.png",
    "tone1": "R",
    "phonation1": "R",
    "path": "dissertation_sound/exp1/chi-vowel-original_300_120_140_pitch_manipulated_1_2_gl_good_portion_withconsonant.wav",
    "length": "300",
    "glposition": "1",
    "glportion": "half",
    "gltype": "strong",
    "f0_onset": "120",
    "f0_offset": "140",
    "correct_answer": "NA",
    "seq": 19,
    "status": "exp1"
  },
  {
    "sp0": "diez",
    "zp0": "chi",
    "pic0": "image/diez.png",
    "tone0": "R",
    "phonation0": "M",
    "sp1": "voz",
    "zp1": "chi'i",
    "pic1": "image/voz.png",
    "tone1": "R",
    "phonation1": "R",
    "path": "dissertation_sound/exp1/chi-vowel-original_300_120_140_pitch_manipulated_1_3_gl_good_portion_withconsonant.wav",
    "length": "300",
    "glposition": "1",
    "glportion": "one third",
    "gltype": "strong",
    "f0_onset": "120",
    "f0_offset": "140",
    "correct_answer": "NA",
    "seq": 20,
    "status": "exp1"
  },
  {
    "sp0": "diez",
    "zp0": "chi",
    "pic0": "image/diez.png",
    "tone0": "R",
    "phonation0": "M",
    "sp1": "voz",
    "zp1": "chi'i",
    "pic1": "image/voz.png",
    "tone1": "R",
    "phonation1": "R",
    "path": "dissertation_sound/exp1/chi-vowel-original_300_120_140_pitch_manipulated_1_5_gl_good_portion_withconsonant.wav",
    "length": "300",
    "glposition": "1",
    "glportion": "one fifth",
    "gltype": "strong",
    "f0_onset": "120",
    "f0_offset": "140",
    "correct_answer": "NA",
    "seq": 21,
    "status": "exp1"
  },
  {
    "sp0": "diez",
    "zp0": "chi",
    "pic0": "image/diez.png",
    "tone0": "R",
    "phonation0": "M",
    "sp1": "voz",
    "zp1": "chi'i",
    "pic1": "image/voz.png",
    "tone1": "R",
    "phonation1": "R",
    "path": "dissertation_sound/exp1/chi-vowel-original_300_120_140_pitch_manipulated_3_5_gl_good_portion_withconsonant.wav",
    "length": "300",
    "glposition": "3",
    "glportion": "one fifth",
    "gltype": "strong",
    "f0_onset": "120",
    "f0_offset": "140",
    "correct_answer": "NA",
    "seq": 22,
    "status": "exp1"
  },
  {
    "sp0": "diez",
    "zp0": "chi",
    "pic0": "image/diez.png",
    "tone0": "R",
    "phonation0": "M",
    "sp1": "voz",
    "zp1": "chi'i",
    "pic1": "image/voz.png",
    "tone1": "R",
    "phonation1": "R",
    "path": "dissertation_sound/exp1/chi-vowel-original_300_120_140_pitch_manipulated_3_5_gl_weakgl_good_portion_withconsonant.wav",
    "length": "300",
    "glposition": "3",
    "glportion": "one fifth",
    "gltype": "weak",
    "f0_onset": "120",
    "f0_offset": "140",
    "correct_answer": "NA",
    "seq": 23,
    "status": "exp1"
  },
  {
    "sp0": "diez",
    "zp0": "chi",
    "pic0": "image/diez.png",
    "tone0": "R",
    "phonation0": "M",
    "sp1": "voz",
    "zp1": "chi'i",
    "pic1": "image/voz.png",
    "tone1": "R",
    "phonation1": "R",
    "path": "dissertation_sound/exp1/chi-vowel-original_300_120_140_pitch_manipulated_modal_good_portion_withconsonant.wav",
    "length": "300",
    "glposition": "0",
    "glportion": "NA",
    "gltype": "NA",
    "f0_onset": "120",
    "f0_offset": "140",
    "correct_answer": "NA",
    "seq": 24,
    "status": "exp1"
  },
  {
    "sp0": "cesta",
    "zp0": "ga'",
    "pic0": "image/cesta.png",
    "tone0": "R",
    "phonation0": "C",
    "sp1": "nueve",
    "zp1": "ga",
    "pic1": "image/nueve.png",
    "tone1": "R",
    "phonation1": "M",
    "path": "dissertation_sound/exp1/ga-vowel-original_150_120_140_pitch_manipulated_gl_5_5_withconsonant.wav",
    "length": "150",
    "glposition": "5",
    "glportion": "one fifth",
    "gltype": "strong",
    "f0_onset": "120",
    "f0_offset": "140",
    "correct_answer": "NA",
    "seq": 25,
    "status": "exp1"
  },
  {
    "sp0": "cesta",
    "zp0": "ga'",
    "pic0": "image/cesta.png",
    "tone0": "R",
    "phonation0": "C",
    "sp1": "nueve",
    "zp1": "ga",
    "pic1": "image/nueve.png",
    "tone1": "R",
    "phonation1": "M",
    "path": "dissertation_sound/exp1/ga-vowel-original_150_120_140_pitch_manipulated_modal_end_attenuate.wav",
    "length": "150",
    "glposition": "0",
    "glportion": "NA",
    "gltype": "attenuate",
    "f0_onset": "120",
    "f0_offset": "140",
    "correct_answer": "NA",
    "seq": 26,
    "status": "exp1"
  },
  {
    "sp0": "cesta",
    "zp0": "ga'",
    "pic0": "image/cesta.png",
    "tone0": "R",
    "phonation0": "C",
    "sp1": "nueve",
    "zp1": "ga",
    "pic1": "image/nueve.png",
    "tone1": "R",
    "phonation1": "M",
    "path": "dissertation_sound/exp1/ga-vowel-original_150_120_140_pitch_manipulated_modal_withconsonant.wav",
    "length": "150",
    "glposition": "0",
    "glportion": "NA",
    "gltype": "NA",
    "f0_onset": "120",
    "f0_offset": "140",
    "correct_answer": "NA",
    "seq": 27,
    "status": "exp1"
  },
  {
    "sp0": "cesta",
    "zp0": "ga'",
    "pic0": "image/cesta.png",
    "tone0": "R",
    "phonation0": "C",
    "sp1": "nueve",
    "zp1": "ga",
    "pic1": "image/nueve.png",
    "tone1": "R",
    "phonation1": "M",
    "path": "dissertation_sound/exp1/ga-vowel-original_225_120_140_pitch_manipulated_gl_5_5_withconsonant.wav",
    "length": "225",
    "glposition": "5",
    "glportion": "one fifth",
    "gltype": "strong",
    "f0_onset": "120",
    "f0_offset": "140",
    "correct_answer": "NA",
    "seq": 28,
    "status": "exp1"
  },
  {
    "sp0": "cesta",
    "zp0": "ga'",
    "pic0": "image/cesta.png",
    "tone0": "R",
    "phonation0": "C",
    "sp1": "nueve",
    "zp1": "ga",
    "pic1": "image/nueve.png",
    "tone1": "R",
    "phonation1": "M",
    "path": "dissertation_sound/exp1/ga-vowel-original_225_120_140_pitch_manipulated_modal_end_attenuate.wav",
    "length": "225",
    "glposition": "0",
    "glportion": "NA",
    "gltype": "attenuate",
    "f0_onset": "120",
    "f0_offset": "140",
    "correct_answer": "NA",
    "seq": 29,
    "status": "exp1"
  },
  {
    "sp0": "cesta",
    "zp0": "ga'",
    "pic0": "image/cesta.png",
    "tone0": "R",
    "phonation0": "C",
    "sp1": "nueve",
    "zp1": "ga",
    "pic1": "image/nueve.png",
    "tone1": "R",
    "phonation1": "M",
    "path": "dissertation_sound/exp1/ga-vowel-original_225_120_140_pitch_manipulated_modal_withconsonant.wav",
    "length": "225",
    "glposition": "0",
    "glportion": "NA",
    "gltype": "NA",
    "f0_onset": "120",
    "f0_offset": "140",
    "correct_answer": "NA",
    "seq": 30,
    "status": "exp1"
  },
  {
    "sp0": "cesta",
    "zp0": "ga'",
    "pic0": "image/cesta.png",
    "tone0": "R",
    "phonation0": "C",
    "sp1": "nueve",
    "zp1": "ga",
    "pic1": "image/nueve.png",
    "tone1": "R",
    "phonation1": "M",
    "path": "dissertation_sound/exp1/ga-vowel-original_300_120_140_pitch_manipulated_gl_5_5_withconsonant.wav",
    "length": "300",
    "glposition": "5",
    "glportion": "one fifth",
    "gltype": "strong",
    "f0_onset": "120",
    "f0_offset": "140",
    "correct_answer": "NA",
    "seq": 31,
    "status": "exp1"
  },
  {
    "sp0": "cesta",
    "zp0": "ga'",
    "pic0": "image/cesta.png",
    "tone0": "R",
    "phonation0": "C",
    "sp1": "nueve",
    "zp1": "ga",
    "pic1": "image/nueve.png",
    "tone1": "R",
    "phonation1": "M",
    "path": "dissertation_sound/exp1/ga-vowel-original_300_120_140_pitch_manipulated_modal_end_attenuate.wav",
    "length": "300",
    "glposition": "0",
    "glportion": "NA",
    "gltype": "attenuate",
    "f0_onset": "120",
    "f0_offset": "140",
    "correct_answer": "NA",
    "seq": 32,
    "status": "exp1"
  },
  {
    "sp0": "cesta",
    "zp0": "ga'",
    "pic0": "image/cesta.png",
    "tone0": "R",
    "phonation0": "C",
    "sp1": "nueve",
    "zp1": "ga",
    "pic1": "image/nueve.png",
    "tone1": "R",
    "phonation1": "M",
    "path": "dissertation_sound/exp1/ga-vowel-original_300_120_140_pitch_manipulated_modal_withconsonant.wav",
    "length": "300",
    "glposition": "0",
    "glportion": "NA",
    "gltype": "NA",
    "f0_onset": "120",
    "f0_offset": "140",
    "correct_answer": "NA",
    "seq": 33,
    "status": "exp1"
  },
  {
    "sp0": "cesta",
    "zp0": "ga'",
    "pic0": "image/cesta.png",
    "tone0": "R",
    "phonation0": "C",
    "sp1": "nueve",
    "zp1": "ga",
    "pic1": "image/nueve.png",
    "tone1": "R",
    "phonation1": "M",
    "path": "dissertation_sound/exp1/ga-vowel-original-breathy_150_breathy_120_140_pitch_manipulated_modal_breathy.wav",
    "length": "150",
    "glposition": "0",
    "glportion": "NA",
    "gltype": "breathy",
    "f0_onset": "120",
    "f0_offset": "140",
    "correct_answer": "NA",
    "seq": 34,
    "status": "exp1"
  },
  {
    "sp0": "cesta",
    "zp0": "ga'",
    "pic0": "image/cesta.png",
    "tone0": "R",
    "phonation0": "C",
    "sp1": "nueve",
    "zp1": "ga",
    "pic1": "image/nueve.png",
    "tone1": "R",
    "phonation1": "M",
    "path": "dissertation_sound/exp1/ga-vowel-original-breathy_225_breathy_120_140_pitch_manipulated_modal_breathy.wav",
    "length": "225",
    "glposition": "0",
    "glportion": "NA",
    "gltype": "breathy",
    "f0_onset": "120",
    "f0_offset": "140",
    "correct_answer": "NA",
    "seq": 35,
    "status": "exp1"
  },
  {
    "sp0": "cesta",
    "zp0": "ga'",
    "pic0": "image/cesta.png",
    "tone0": "R",
    "phonation0": "C",
    "sp1": "nueve",
    "zp1": "ga",
    "pic1": "image/nueve.png",
    "tone1": "R",
    "phonation1": "M",
    "path": "dissertation_sound/exp1/ga-vowel-original-breathy_300_breathy_120_140_pitch_manipulated_modal_breathy.wav",
    "length": "300",
    "glposition": "0",
    "glportion": "NA",
    "gltype": "breathy",
    "f0_onset": "120",
    "f0_offset": "140",
    "correct_answer": "NA",
    "seq": 36,
    "status": "exp1"
  },
  {
    "sp0": "pesado",
    "zp0": "zi'i",
    "pic0": "image/pesado.png",
    "tone0": "H",
    "phonation0": "R",
    "sp1": "dolor",
    "zp1": "zi'",
    "pic1": "image/dolor.png",
    "tone1": "H",
    "phonation1": "C",
    "path": "dissertation_sound/exp1/zi-concatenated_change_int_150_130_140_pitch_manipulated_1_2_gl_good_portion_withconsonant.wav",
    "length": "150",
    "glposition": "1",
    "glportion": "half",
    "gltype": "strong",
    "f0_onset": "130",
    "f0_offset": "140",
    "correct_answer": "NA",
    "seq": 37,
    "status": "exp1"
  },
  {
    "sp0": "pesado",
    "zp0": "zi'i",
    "pic0": "image/pesado.png",
    "tone0": "H",
    "phonation0": "R",
    "sp1": "dolor",
    "zp1": "zi'",
    "pic1": "image/dolor.png",
    "tone1": "H",
    "phonation1": "C",
    "path": "dissertation_sound/exp1/zi-concatenated_change_int_150_130_140_pitch_manipulated_1_3_gl_good_portion_withconsonant.wav",
    "length": "150",
    "glposition": "1",
    "glportion": "one third",
    "gltype": "strong",
    "f0_onset": "130",
    "f0_offset": "140",
    "correct_answer": "NA",
    "seq": 38,
    "status": "exp1"
  },
  {
    "sp0": "pesado",
    "zp0": "zi'i",
    "pic0": "image/pesado.png",
    "tone0": "H",
    "phonation0": "R",
    "sp1": "dolor",
    "zp1": "zi'",
    "pic1": "image/dolor.png",
    "tone1": "H",
    "phonation1": "C",
    "path": "dissertation_sound/exp1/zi-concatenated_change_int_150_130_140_pitch_manipulated_1_5_gl_good_portion_withconsonant.wav",
    "length": "150",
    "glposition": "1",
    "glportion": "one fifth",
    "gltype": "strong",
    "f0_onset": "130",
    "f0_offset": "140",
    "correct_answer": "NA",
    "seq": 39,
    "status": "exp1"
  },
  {
    "sp0": "pesado",
    "zp0": "zi'i",
    "pic0": "image/pesado.png",
    "tone0": "H",
    "phonation0": "R",
    "sp1": "dolor",
    "zp1": "zi'",
    "pic1": "image/dolor.png",
    "tone1": "H",
    "phonation1": "C",
    "path": "dissertation_sound/exp1/zi-concatenated_change_int_150_130_140_pitch_manipulated_2_2_gl_good_portion_withconsonant.wav",
    "length": "150",
    "glposition": "2",
    "glportion": "half",
    "gltype": "strong",
    "f0_onset": "130",
    "f0_offset": "140",
    "correct_answer": "NA",
    "seq": 40,
    "status": "exp1"
  },
  {
    "sp0": "pesado",
    "zp0": "zi'i",
    "pic0": "image/pesado.png",
    "tone0": "H",
    "phonation0": "R",
    "sp1": "dolor",
    "zp1": "zi'",
    "pic1": "image/dolor.png",
    "tone1": "H",
    "phonation1": "C",
    "path": "dissertation_sound/exp1/zi-concatenated_change_int_150_130_140_pitch_manipulated_2_5_gl_good_portion_withconsonant.wav",
    "length": "150",
    "glposition": "2",
    "glportion": "one fifth",
    "gltype": "strong",
    "f0_onset": "130",
    "f0_offset": "140",
    "correct_answer": "NA",
    "seq": 41,
    "status": "exp1"
  },
  {
    "sp0": "pesado",
    "zp0": "zi'i",
    "pic0": "image/pesado.png",
    "tone0": "H",
    "phonation0": "R",
    "sp1": "dolor",
    "zp1": "zi'",
    "pic1": "image/dolor.png",
    "tone1": "H",
    "phonation1": "C",
    "path": "dissertation_sound/exp1/zi-concatenated_change_int_150_130_140_pitch_manipulated_3_3_gl_good_portion_withconsonant.wav",
    "length": "150",
    "glposition": "3",
    "glportion": "one third",
    "gltype": "strong",
    "f0_onset": "130",
    "f0_offset": "140",
    "correct_answer": "NA",
    "seq": 42,
    "status": "exp1"
  },
  {
    "sp0": "pesado",
    "zp0": "zi'i",
    "pic0": "image/pesado.png",
    "tone0": "H",
    "phonation0": "R",
    "sp1": "dolor",
    "zp1": "zi'",
    "pic1": "image/dolor.png",
    "tone1": "H",
    "phonation1": "C",
    "path": "dissertation_sound/exp1/zi-concatenated_change_int_150_130_140_pitch_manipulated_3_5_gl_good_portion_withconsonant.wav",
    "length": "150",
    "glposition": "3",
    "glportion": "one fifth",
    "gltype": "strong",
    "f0_onset": "130",
    "f0_offset": "140",
    "correct_answer": "NA",
    "seq": 43,
    "status": "exp1"
  },
  {
    "sp0": "pesado",
    "zp0": "zi'i",
    "pic0": "image/pesado.png",
    "tone0": "H",
    "phonation0": "R",
    "sp1": "dolor",
    "zp1": "zi'",
    "pic1": "image/dolor.png",
    "tone1": "H",
    "phonation1": "C",
    "path": "dissertation_sound/exp1/zi-concatenated_change_int_150_130_140_pitch_manipulated_4_5_gl_good_portion_withconsonant.wav",
    "length": "150",
    "glposition": "4",
    "glportion": "one fifth",
    "gltype": "strong",
    "f0_onset": "130",
    "f0_offset": "140",
    "correct_answer": "NA",
    "seq": 44,
    "status": "exp1"
  },
  {
    "sp0": "pesado",
    "zp0": "zi'i",
    "pic0": "image/pesado.png",
    "tone0": "H",
    "phonation0": "R",
    "sp1": "dolor",
    "zp1": "zi'",
    "pic1": "image/dolor.png",
    "tone1": "H",
    "phonation1": "C",
    "path": "dissertation_sound/exp1/zi-concatenated_change_int_150_130_140_pitch_manipulated_5_5_gl_good_portion_withconsonant.wav",
    "length": "150",
    "glposition": "5",
    "glportion": "one fifth",
    "gltype": "strong",
    "f0_onset": "130",
    "f0_offset": "140",
    "correct_answer": "NA",
    "seq": 45,
    "status": "exp1"
  },
  {
    "sp0": "pesado",
    "zp0": "zi'i",
    "pic0": "image/pesado.png",
    "tone0": "H",
    "phonation0": "R",
    "sp1": "dolor",
    "zp1": "zi'",
    "pic1": "image/dolor.png",
    "tone1": "H",
    "phonation1": "C",
    "path": "dissertation_sound/exp1/zi-concatenated_change_int_225_130_140_pitch_manipulated_1_2_gl_good_portion_withconsonant.wav",
    "length": "225",
    "glposition": "1",
    "glportion": "half",
    "gltype": "strong",
    "f0_onset": "130",
    "f0_offset": "140",
    "correct_answer": "NA",
    "seq": 46,
    "status": "exp1"
  },
  {
    "sp0": "pesado",
    "zp0": "zi'i",
    "pic0": "image/pesado.png",
    "tone0": "H",
    "phonation0": "R",
    "sp1": "dolor",
    "zp1": "zi'",
    "pic1": "image/dolor.png",
    "tone1": "H",
    "phonation1": "C",
    "path": "dissertation_sound/exp1/zi-concatenated_change_int_225_130_140_pitch_manipulated_1_3_gl_good_portion_withconsonant.wav",
    "length": "225",
    "glposition": "1",
    "glportion": "one third",
    "gltype": "strong",
    "f0_onset": "130",
    "f0_offset": "140",
    "correct_answer": "NA",
    "seq": 47,
    "status": "exp1"
  },
  {
    "sp0": "pesado",
    "zp0": "zi'i",
    "pic0": "image/pesado.png",
    "tone0": "H",
    "phonation0": "R",
    "sp1": "dolor",
    "zp1": "zi'",
    "pic1": "image/dolor.png",
    "tone1": "H",
    "phonation1": "C",
    "path": "dissertation_sound/exp1/zi-concatenated_change_int_225_130_140_pitch_manipulated_1_5_gl_good_portion_withconsonant.wav",
    "length": "225",
    "glposition": "1",
    "glportion": "one fifth",
    "gltype": "strong",
    "f0_onset": "130",
    "f0_offset": "140",
    "correct_answer": "NA",
    "seq": 48,
    "status": "exp1"
  },
  {
    "sp0": "pesado",
    "zp0": "zi'i",
    "pic0": "image/pesado.png",
    "tone0": "H",
    "phonation0": "R",
    "sp1": "dolor",
    "zp1": "zi'",
    "pic1": "image/dolor.png",
    "tone1": "H",
    "phonation1": "C",
    "path": "dissertation_sound/exp1/zi-concatenated_change_int_225_130_140_pitch_manipulated_2_2_gl_good_portion_withconsonant.wav",
    "length": "225",
    "glposition": "2",
    "glportion": "half",
    "gltype": "strong",
    "f0_onset": "130",
    "f0_offset": "140",
    "correct_answer": "NA",
    "seq": 49,
    "status": "exp1"
  },
  {
    "sp0": "pesado",
    "zp0": "zi'i",
    "pic0": "image/pesado.png",
    "tone0": "H",
    "phonation0": "R",
    "sp1": "dolor",
    "zp1": "zi'",
    "pic1": "image/dolor.png",
    "tone1": "H",
    "phonation1": "C",
    "path": "dissertation_sound/exp1/zi-concatenated_change_int_225_130_140_pitch_manipulated_2_5_gl_good_portion_withconsonant.wav",
    "length": "225",
    "glposition": "2",
    "glportion": "one fifth",
    "gltype": "strong",
    "f0_onset": "130",
    "f0_offset": "140",
    "correct_answer": "NA",
    "seq": 50,
    "status": "exp1"
  },
  {
    "sp0": "pesado",
    "zp0": "zi'i",
    "pic0": "image/pesado.png",
    "tone0": "H",
    "phonation0": "R",
    "sp1": "dolor",
    "zp1": "zi'",
    "pic1": "image/dolor.png",
    "tone1": "H",
    "phonation1": "C",
    "path": "dissertation_sound/exp1/zi-concatenated_change_int_225_130_140_pitch_manipulated_3_3_gl_good_portion_withconsonant.wav",
    "length": "225",
    "glposition": "3",
    "glportion": "one third",
    "gltype": "strong",
    "f0_onset": "130",
    "f0_offset": "140",
    "correct_answer": "NA",
    "seq": 51,
    "status": "exp1"
  },
  {
    "sp0": "pesado",
    "zp0": "zi'i",
    "pic0": "image/pesado.png",
    "tone0": "H",
    "phonation0": "R",
    "sp1": "dolor",
    "zp1": "zi'",
    "pic1": "image/dolor.png",
    "tone1": "H",
    "phonation1": "C",
    "path": "dissertation_sound/exp1/zi-concatenated_change_int_225_130_140_pitch_manipulated_3_5_gl_good_portion_withconsonant.wav",
    "length": "225",
    "glposition": "3",
    "glportion": "one fifth",
    "gltype": "strong",
    "f0_onset": "130",
    "f0_offset": "140",
    "correct_answer": "NA",
    "seq": 52,
    "status": "exp1"
  },
  {
    "sp0": "pesado",
    "zp0": "zi'i",
    "pic0": "image/pesado.png",
    "tone0": "H",
    "phonation0": "R",
    "sp1": "dolor",
    "zp1": "zi'",
    "pic1": "image/dolor.png",
    "tone1": "H",
    "phonation1": "C",
    "path": "dissertation_sound/exp1/zi-concatenated_change_int_225_130_140_pitch_manipulated_4_5_gl_good_portion_withconsonant.wav",
    "length": "225",
    "glposition": "4",
    "glportion": "one fifth",
    "gltype": "strong",
    "f0_onset": "130",
    "f0_offset": "140",
    "correct_answer": "NA",
    "seq": 53,
    "status": "exp1"
  },
  {
    "sp0": "pesado",
    "zp0": "zi'i",
    "pic0": "image/pesado.png",
    "tone0": "H",
    "phonation0": "R",
    "sp1": "dolor",
    "zp1": "zi'",
    "pic1": "image/dolor.png",
    "tone1": "H",
    "phonation1": "C",
    "path": "dissertation_sound/exp1/zi-concatenated_change_int_225_130_140_pitch_manipulated_5_5_gl_good_portion_withconsonant.wav",
    "length": "225",
    "glposition": "5",
    "glportion": "one fifth",
    "gltype": "strong",
    "f0_onset": "130",
    "f0_offset": "140",
    "correct_answer": "NA",
    "seq": 54,
    "status": "exp1"
  },
  {
    "sp0": "pesado",
    "zp0": "zi'i",
    "pic0": "image/pesado.png",
    "tone0": "H",
    "phonation0": "R",
    "sp1": "dolor",
    "zp1": "zi'",
    "pic1": "image/dolor.png",
    "tone1": "H",
    "phonation1": "C",
    "path": "dissertation_sound/exp1/zi-concatenated_change_int_300_130_140_pitch_manipulated_1_2_gl_good_portion_withconsonant.wav",
    "length": "300",
    "glposition": "1",
    "glportion": "half",
    "gltype": "strong",
    "f0_onset": "130",
    "f0_offset": "140",
    "correct_answer": "NA",
    "seq": 55,
    "status": "exp1"
  },
  {
    "sp0": "pesado",
    "zp0": "zi'i",
    "pic0": "image/pesado.png",
    "tone0": "H",
    "phonation0": "R",
    "sp1": "dolor",
    "zp1": "zi'",
    "pic1": "image/dolor.png",
    "tone1": "H",
    "phonation1": "C",
    "path": "dissertation_sound/exp1/zi-concatenated_change_int_300_130_140_pitch_manipulated_1_3_gl_good_portion_withconsonant.wav",
    "length": "300",
    "glposition": "1",
    "glportion": "one third",
    "gltype": "strong",
    "f0_onset": "130",
    "f0_offset": "140",
    "correct_answer": "NA",
    "seq": 56,
    "status": "exp1"
  },
  {
    "sp0": "pesado",
    "zp0": "zi'i",
    "pic0": "image/pesado.png",
    "tone0": "H",
    "phonation0": "R",
    "sp1": "dolor",
    "zp1": "zi'",
    "pic1": "image/dolor.png",
    "tone1": "H",
    "phonation1": "C",
    "path": "dissertation_sound/exp1/zi-concatenated_change_int_300_130_140_pitch_manipulated_1_5_gl_good_portion_withconsonant.wav",
    "length": "300",
    "glposition": "1",
    "glportion": "one fifth",
    "gltype": "strong",
    "f0_onset": "130",
    "f0_offset": "140",
    "correct_answer": "NA",
    "seq": 57,
    "status": "exp1"
  },
  {
    "sp0": "pesado",
    "zp0": "zi'i",
    "pic0": "image/pesado.png",
    "tone0": "H",
    "phonation0": "R",
    "sp1": "dolor",
    "zp1": "zi'",
    "pic1": "image/dolor.png",
    "tone1": "H",
    "phonation1": "C",
    "path": "dissertation_sound/exp1/zi-concatenated_change_int_300_130_140_pitch_manipulated_2_2_gl_good_portion_withconsonant.wav",
    "length": "300",
    "glposition": "2",
    "glportion": "half",
    "gltype": "strong",
    "f0_onset": "130",
    "f0_offset": "140",
    "correct_answer": "NA",
    "seq": 58,
    "status": "exp1"
  },
  {
    "sp0": "pesado",
    "zp0": "zi'i",
    "pic0": "image/pesado.png",
    "tone0": "H",
    "phonation0": "R",
    "sp1": "dolor",
    "zp1": "zi'",
    "pic1": "image/dolor.png",
    "tone1": "H",
    "phonation1": "C",
    "path": "dissertation_sound/exp1/zi-concatenated_change_int_300_130_140_pitch_manipulated_2_5_gl_good_portion_withconsonant.wav",
    "length": "300",
    "glposition": "2",
    "glportion": "one fifth",
    "gltype": "strong",
    "f0_onset": "130",
    "f0_offset": "140",
    "correct_answer": "NA",
    "seq": 59,
    "status": "exp1"
  },
  {
    "sp0": "pesado",
    "zp0": "zi'i",
    "pic0": "image/pesado.png",
    "tone0": "H",
    "phonation0": "R",
    "sp1": "dolor",
    "zp1": "zi'",
    "pic1": "image/dolor.png",
    "tone1": "H",
    "phonation1": "C",
    "path": "dissertation_sound/exp1/zi-concatenated_change_int_300_130_140_pitch_manipulated_3_3_gl_good_portion_withconsonant.wav",
    "length": "300",
    "glposition": "3",
    "glportion": "one third",
    "gltype": "strong",
    "f0_onset": "130",
    "f0_offset": "140",
    "correct_answer": "NA",
    "seq": 60,
    "status": "exp1"
  },
  {
    "sp0": "pesado",
    "zp0": "zi'i",
    "pic0": "image/pesado.png",
    "tone0": "H",
    "phonation0": "R",
    "sp1": "dolor",
    "zp1": "zi'",
    "pic1": "image/dolor.png",
    "tone1": "H",
    "phonation1": "C",
    "path": "dissertation_sound/exp1/zi-concatenated_change_int_300_130_140_pitch_manipulated_3_5_gl_good_portion_withconsonant.wav",
    "length": "300",
    "glposition": "3",
    "glportion": "one fifth",
    "gltype": "strong",
    "f0_onset": "130",
    "f0_offset": "140",
    "correct_answer": "NA",
    "seq": 61,
    "status": "exp1"
  },
  {
    "sp0": "pesado",
    "zp0": "zi'i",
    "pic0": "image/pesado.png",
    "tone0": "H",
    "phonation0": "R",
    "sp1": "dolor",
    "zp1": "zi'",
    "pic1": "image/dolor.png",
    "tone1": "H",
    "phonation1": "C",
    "path": "dissertation_sound/exp1/zi-concatenated_change_int_300_130_140_pitch_manipulated_4_5_gl_good_portion_withconsonant.wav",
    "length": "300",
    "glposition": "4",
    "glportion": "one fifth",
    "gltype": "strong",
    "f0_onset": "130",
    "f0_offset": "140",
    "correct_answer": "NA",
    "seq": 62,
    "status": "exp1"
  },
  {
    "sp0": "pesado",
    "zp0": "zi'i",
    "pic0": "image/pesado.png",
    "tone0": "H",
    "phonation0": "R",
    "sp1": "dolor",
    "zp1": "zi'",
    "pic1": "image/dolor.png",
    "tone1": "H",
    "phonation1": "C",
    "path": "dissertation_sound/exp1/zi-concatenated_change_int_300_130_140_pitch_manipulated_5_5_gl_good_portion_withconsonant.wav",
    "length": "300",
    "glposition": "5",
    "glportion": "one fifth",
    "gltype": "strong",
    "f0_onset": "130",
    "f0_offset": "140",
    "correct_answer": "NA",
    "seq": 63,
    "status": "exp1"
  }
 ];

var practiceI_list = trial_all_list.slice(0, 6);
var trial_ExpI_list = trial_all_list.slice(6, trial_all_list.length);

var productionList = [
  {
    "sp": "cesta",
    "zp": "ga'",
    "pic": "image/cesta.png",
    "tone": "R",
    "phonation": "C"
  },
  {
    "sp": "nueve",
    "zp": "ga",
    "pic": "image/nueve.png",
    "tone": "R",
    "phonation": "M"
  },
  {
    "sp": "pesado",
    "zp": "zi'i",
    "pic": "image/pesado.png",
    "tone": "H",
    "phonation": "R"
  },
  {
    "sp": "dolor",
    "zp": "zi'",
    "pic": "image/dolor.png",
    "tone": "H",
    "phonation": "C"
  },
  {
    "sp": "diez",
    "zp": "chi",
    "pic": "image/diez.png",
    "tone": "R",
    "phonation": "M"
  },
  {
    "sp": "voz",
    "zp": "chi'i",
    "pic": "image/voz.png",
    "tone": "R",
    "phonation": "R"
  }
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

var images = ["image/cesta.png", "image/cover_image.jpg", "image/diez.png", "image/dolor.png", "image/nueve.png", "image/pesado.png", "image/voz.png"];



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
      var csvFile = [["trial_num", "radio_value", "word_selected", "tone_selected", "phon_selected", "word_list", "sound", "stimuli_length", "stimuli_glposition", "stimuli_glportion","stimuli_gltype", "stimuli_f0_onset", "stimuli_f0_offset", "correct_answer", "trial_sequence", "response_time", "response_time_Date", "experiment_no"]];

      /*wordListString stores the string version of the options displayed on the screen*/
      var wordListString = "";
         
/*Shuffle the practiceList in the beginning to randomize the order*/      
      var practiceListRandom = jsPsych.randomization.repeat(practiceI_list, 1);
/*Shuffle the trialList in the beginning to randomize the order*/
      var trialListRandom_repeatI = jsPsych.randomization.repeat(trial_ExpI_list, 1);
      var trialListRandom_repeatII = jsPsych.randomization.repeat(trial_ExpI_list, 1);
      var trialListRandom_repeatIII = jsPsych.randomization.repeat(trial_ExpI_list, 1);
      var productionListRandom = jsPsych.randomization.repeat(productionList, 1);                 

      var trialListRandom = practiceListRandom.concat(trialListRandom_repeatI, trialListRandom_repeatII, trialListRandom_repeatIII);

      var practiceLength = practiceListRandom.length;
      var partILength = practiceListRandom.length + trialListRandom_repeatI.length;
      var partIILength = practiceListRandom.length + trialListRandom_repeatI.length + trialListRandom_repeatII.length + + trialListRandom_repeatIII.length;
      var totalnum = trialListRandom.length;
/*beginning of the function*/

      
      /* This gets called when they click the button 
        on the instructions page */
      function StartHolder(){
        $("#doneWithDebriefing").unbind("click");
        $("#debriefing").hide();
        $("#startholderdiv").show();
        $("#startholderExperimentButton").on("click", StartExperiment); 
      }







      function StartExperiment() {
        $("#startholderdiv").hide();
        $("#startholderExperimentButton").unbind("click");
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
        




        $("#trialnum").text(trialnum+"/"+totalnum);
        /* show the trialDiv */
        $("#trialDiv").show();
        $("#trialnumdiv").show();
    

/*shuffle the index to randomize the option order*/
          

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
            var stimuli_glposition = trialListRandom[curTrial].glposition;
            var stimuli_glportion = trialListRandom[curTrial].glportion;
            var stimuli_gltype = trialListRandom[curTrial].gltype;
            var stimuli_f0_onset = trialListRandom[curTrial].f0_onset;
            var stimuli_f0_offset = trialListRandom[curTrial].f0_offset;
            var correct_answer = trialListRandom[curTrial].correct_answer;
            var exp_num = trialListRandom[curTrial].status;
            var curresultList = [curTrial, radioselectedValue, wordselectedValue, toneselectedValue, phonselectedValue, wordListString, stimuli_path, stimuli_length, stimuli_glposition, stimuli_glportion, stimuli_gltype, stimuli_f0_onset, stimuli_f0_offset, correct_answer, trialListRandom[curTrial].seq, responseTime, responseTimeDate, exp_num];
            csvFile.push(curresultList);
            
            DoneWithScale();
            
          }    
        }


/*unselect all the radio buttons*/


      function DoneWithScale() {
        $("#word1").prop("checked", false);
        $("#word2").prop("checked", false);
        
        $("#trialnumdiv").hide();
        $("#trialDiv").hide();

        $('#submit').unbind('click');
        $('#play').unbind('click');
        
        trialnum = trialnum + 1;
        curTrial = curTrial + 1;

        
        if (curTrial <= practiceLength) {
          if (curTrial % 6 == 0) {
            ShowStar()
          }else{
            setTimeout(ShowTrial, 0);
          }
        } 
        
        else if(curTrial > practiceLength && curTrial < totalnum){
        if ((curTrial-12) % 20 == 0) {
            ShowStar()
          }else{
            setTimeout(ShowTrial, 0);
          }
        }

          else if (curTrial == totalnum){
          setTimeout(StartProduction, 500);

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
        $("#EndBreak").unbind("click");
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
        $("#distraction").show();

        $("#EndBreak").on("click", HideStar); 

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