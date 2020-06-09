// Script made by Peter Meindertsma for www.triviaplaza.com in 2014
var seriesdone = "";
var questions = [];
window.questions = questions;
var tsize = "inherit";
function StartGame(i, qnr, score) {
	if (i > 0) {
	var bla = document.getElementById('content');
	var bla1 = document.getElementById('nav'); 	
	var bla2 = document.getElementById('subnav'); 	
	var bla3 = document.getElementById('search');
	var bla4 = document.getElementById('footer');
		if (i == 11) { loadQuestions('https://www.triviaplaza.com/getq.php?gid='+cnr+'&amp;buster='+Math.random()); document.getElementById('bannercat').innerHTML = ''; document.getElementById('sidebanner').innerHTML = ''; document.getElementById('bottombanner').innerHTML = ''; document.getElementById('main').innerHTML = '<div id=\"content2\"><div id=\"qascreen\" style=\"width: 990px; height: 599px; left: 0px;\">&nbsp;</div></div>' + document.getElementById('main').innerHTML; document.getElementById('content2').className = "opa00"; document.getElementById('content2').style.visibility="visible"; 
									document.getElementById('content2').className = "opa02"; bla3.className = bla4.className = "opa08";}
		if (i == 10) { document.getElementById('content2').className = "opa04"; bla3.className = bla4.className = "opa06";}
		if (i == 9) { document.getElementById('content2').className = "opa06"; bla3.className = bla4.className = "opa04";}
		if (i == 8) { document.getElementById('content2').className = "opa08"; bla3.className = bla4.className = "opa02";}
		if (i == 7) { document.getElementById('content2').className = "opa10"; bla.style.visibility=bla1.style.visibility=bla2.style.visibility=bla3.style.visibility=bla4.style.visibility="hidden";}
		if (i == 6) { document.getElementById('qascreen').style.width="912px"; document.getElementById('qascreen').style.marginLeft="39px"; document.getElementById('qascreen').style.height="566px";}
		if (i == 5) { document.getElementById('qascreen').style.width="834px"; document.getElementById('qascreen').style.marginLeft="78px";	document.getElementById('qascreen').style.height="532px";}
		if (i == 4) { document.getElementById('qascreen').style.width="756px"; document.getElementById('qascreen').style.marginLeft="117px"; document.getElementById('qascreen').style.height="498px";}
		if (i == 3) { document.getElementById('qascreen').style.width="678px"; document.getElementById('qascreen').style.marginLeft="156px"; document.getElementById('qascreen').style.height="464px";}
		if (i == 2) { document.getElementById('qascreen').style.width="600px"; document.getElementById('qascreen').style.marginLeft="195px"; document.getElementById('qascreen').style.height="430px";}
		if (i == 1) { CheckLoaded(11,qnr,score);}
	i--;
	setTimeout(function(){StartGame(i,qnr,score);},50);
	} 	
}	
function CheckLoaded(j,qnr,score) {
	j--;
	if (j > 0) {
		if (questions.length > 0)	
		{
			setTimeout(function(){PreLoadImages();},0);
			document.getElementById('content2').innerHTML = '\
			<div id=\"qabread\"> &gt; <a href=\"' + decodeURIComponent(topcaturl) + '\">' + topcat + '</a> &gt; <a href=\"' + tabcaturl + '\">' + tabcat + '</a> &gt; <a href=\"' + actcaturl + '\" class=\"actcat\">' + actcat + '</a></div>\
			<div id=\"qaquestion\">' + qnr + '<span class=\"qnr\">/10</span></div>\
			<div id=\"qascore\">' + score + '<span class=\"qnr\"> pnts</span></div>\
			<div id=\"qascreen\"><table border=\"0\"><tr><td id=\"qques\"><div id=\"qaques\"></div></td></tr><tr><td id=\"qqatrib\"><div id=\"qaatrib\"></div></td></tr></table></div>\
			<div id=\"qabuttons\"><div id=\"qbutton1\">&nbsp;</div><div id=\"qbutton2\">&nbsp;</div><div id=\"qbutton3\">&nbsp;</div><div id=\"qbutton4\">&nbsp;</div></div>';
			setTimeout(function(){BuiltScreen(10,qnr,0,0,0,0,0,tsize);},300);
		}
		else 
		{ setTimeout(function(){CheckLoaded(j,qnr,score);},100); }
	} 		
	else { document.getElementById('content2').innerHTML = '<div id=\"qascreen\"><table border=\"0\"><tr><td id=\"qques\"><div id=\"qaques\"></div></td></tr><tr><td id=\"qqatrib\" valign\"top\"><div id=\"qaatrib\">Loading takes too long<br/>Please <a href=\"'+ actcaturl +'\">reload this page</a></div></td></tr></table></div>'; }
}	

function ReStartGame(p) {
	if (p > 0) {
		if (p == 4) { loadQuestions('https://www.triviaplaza.com/getq.php?gid='+cnr+'&amp;buster='+Math.random());
								document.getElementById('endresulthead').style.opacity="0.7"; document.getElementById('endresulthead').style.filter="alpha(opacity=70)";
								document.getElementById('endresulttext').style.opacity="0.7"; document.getElementById('endresulttext').style.filter="alpha(opacity=70)";
								document.getElementById('endresultgrade').style.opacity="0.7"; document.getElementById('endresultgrade').style.filter="alpha(opacity=70)";								
								document.getElementById('endresultcomment').style.opacity="0.7"; document.getElementById('endresultcomment').style.filter="alpha(opacity=70)";								
								document.getElementById('graphgrid').style.opacity="0.7"; document.getElementById('graphgrid').style.filter="alpha(opacity=70)";
								}
		if (p == 3) { 
								document.getElementById('endresulthead').style.opacity="0.3"; document.getElementById('endresulthead').style.filter="alpha(opacity=30)";
								document.getElementById('endresulttext').style.opacity="0.3"; document.getElementById('endresulttext').style.filter="alpha(opacity=30)";
								document.getElementById('endresultgrade').style.opacity="0.3"; document.getElementById('endresultgrade').style.filter="alpha(opacity=30)";								
								document.getElementById('endresultcomment').style.opacity="0.3"; document.getElementById('endresultcomment').style.filter="alpha(opacity=30)";								
								document.getElementById('graphgrid').style.opacity="0.3"; document.getElementById('graphgrid').style.filter="alpha(opacity=30)";
								}
		if (p == 2) { 
								document.getElementById('endresulthead').style.opacity="0.0"; document.getElementById('endresulthead').style.filter="alpha(opacity=0)";
								document.getElementById('endresulttext').style.opacity="0.0"; document.getElementById('endresulttext').style.filter="alpha(opacity=0)";
								document.getElementById('endresultgrade').style.opacity="0.0"; document.getElementById('endresultgrade').style.filter="alpha(opacity=0)";								
								document.getElementById('endresultcomment').style.opacity="0.0"; document.getElementById('endresultcomment').style.filter="alpha(opacity=0)";								
								document.getElementById('graphgrid').style.opacity="0.0"; document.getElementById('graphgrid').style.filter="alpha(opacity=0)";
								document.getElementById('qascreen').style.width="680px"; document.getElementById('qascreen').style.marginLeft="-40px"; }
		if (p == 1) { document.getElementById('qascreen').style.width="620px"; document.getElementById('qascreen').style.marginLeft="-15px"; 
		StartGame(1,1,0); 
		//setTimeout(function(){StartGame(1,1,0);},250);
		}
	p--;
	setTimeout(function(){ReStartGame(p);},100);
	}
}	


function BuiltScreen(j,qnr,posA,posB,posC,posD,score,tsize) {
	if (j > 0) {
		var bla = document.getElementById('content2'); 
		if (j == 10) { 
				gatc(qnr); // count virtual pageview
				document.getElementById('qaquestion').innerHTML = qnr + '<span class=\"qnr\">/10</span></div>';
				var blaquess = document.getElementById('qques'); var blaqqaat = document.getElementById('qqatrib');
				blaquess.style.height = '65px'; blaqqaat.style.height = '320px'; /* 65 - 355 */
				if (decodeURIComponent(window.questions[qnr][12]) == "") { blaquess.style.height = '0px'; blaqqaat.style.height = '415px';}
				if ((decodeURIComponent(window.questions[qnr][2]) == "") && (decodeURIComponent(window.questions[qnr][11]) != -1)) { blaquess.style.height = '415px'; blaqqaat.style.height = '0px';}
				}
		if (j == 9) { 	var blaques = document.getElementById('qaques'); var blaqaat = document.getElementById('qaatrib'); blaques.style.visibility="visible"; blaqaat.style.visibility="visible";
						blaques.style.opacity="1.0"; blaques.style.filter="alpha(opacity=100)"; blaqaat.style.opacity="1.0"; blaqaat.style.filter="alpha(opacity=100)";
						blaques.innerHTML = QuestionSizer(decodeURIComponent(window.questions[qnr][12]));
						var blaqaat = document.getElementById('qaatrib'); 
						if (decodeURIComponent(window.questions[qnr][11]) == -1) { 
							if (decodeURIComponent(window.questions[qnr][7]) == -1) { var imgextention = "gif"; } else { var imgextention = "jpg";}
							if (decodeURIComponent(window.questions[qnr][10]) == -1) { var addborder = " class=\"imgborder\""; } else { var addborder = "";}
							blaqaat.innerHTML = '<img src=\"https://www.triviaplaza.com/' + decodeURIComponent(window.questions[qnr][9]) + '/' + decodeURIComponent(window.questions[qnr][1]) + '.' + imgextention + '\" ' + addborder + '>';}
						else { blaqaat.innerHTML = AtribSizer(decodeURIComponent(window.questions[qnr][2])); }

						//randomize answer positions
						var randomnumber=Math.floor(Math.random()*4)+1
						switch(randomnumber) {
							case 1: var posA = window.questions[qnr][3]; var posB = window.questions[qnr][4]; var posC = window.questions[qnr][5]; var posD = window.questions[qnr][6]; randy = 1; break;
							case 2: var posA = window.questions[qnr][6]; var posB = window.questions[qnr][3]; var posC = window.questions[qnr][4]; var posD = window.questions[qnr][5]; randy = 2; break;
							case 3: var posA = window.questions[qnr][5]; var posB = window.questions[qnr][6]; var posC = window.questions[qnr][3]; var posD = window.questions[qnr][4]; randy = 3; break;  
							case 4: var posA = window.questions[qnr][4]; var posB = window.questions[qnr][5]; var posC = window.questions[qnr][6]; var posD = window.questions[qnr][3]; randy = 4; break;
						}
					if ((decodeURIComponent(posA).length > 30) || (decodeURIComponent(posB).length > 30) || (decodeURIComponent(posC).length > 30) || (decodeURIComponent(posD).length > 30)) { tsize = "0.85em";} else { tsize = "1.0em";} 
					}
		if (j == 4) { var blaqb1 = document.getElementById('qbutton1'); blaqb1.style.visibility="visible"; blaqb1.innerHTML = '<a onClick=\"CheckAnswer(' + qnr + ',' + score + ',\'' + posA + '\',' + randy + ')\"><table><tr><td>' + decodeURIComponent(posA) + '</td></tr></table></a>'; blaqb1.style.opacity="1.0"; blaqb1.style.filter="alpha(opacity=100)"; blaqb1.style.fontSize=tsize;}
		if (j == 3) { var blaqb2 = document.getElementById('qbutton2'); blaqb2.style.visibility="visible"; blaqb2.innerHTML = '<a onClick=\"CheckAnswer(' + qnr + ',' + score + ',\'' + posB + '\',' + randy + ')\"><table><tr><td>' + decodeURIComponent(posB) + '</td></tr></table></a>'; blaqb2.style.opacity="1.0"; blaqb2.style.filter="alpha(opacity=100)"; blaqb2.style.fontSize=tsize;}
		if (j == 2) { var blaqb3 = document.getElementById('qbutton3'); blaqb3.style.visibility="visible"; blaqb3.innerHTML = '<a onClick=\"CheckAnswer(' + qnr + ',' + score + ',\'' + posC + '\',' + randy + ')\"><table><tr><td>' + decodeURIComponent(posC) + '</td></tr></table></a>'; blaqb3.style.opacity="1.0"; blaqb3.style.filter="alpha(opacity=100)"; blaqb3.style.fontSize=tsize;}
		if (j == 1) { var blaqb4 = document.getElementById('qbutton4'); blaqb4.style.visibility="visible"; blaqb4.innerHTML = '<a onClick=\"CheckAnswer(' + qnr + ',' + score + ',\'' + posD + '\',' + randy + ')\"><table><tr><td>' + decodeURIComponent(posD) + '</td></tr></table></a>'; blaqb4.style.opacity="1.0"; blaqb4.style.filter="alpha(opacity=100)"; blaqb4.style.fontSize=tsize;}

	}
	j--;
	setTimeout(function(){BuiltScreen(j,qnr,posA,posB,posC,posD,score,tsize);},150);
}	

function CheckAnswer(qnr,score,answer,randy) {
	var qqdone = ""; this.waittime = 3000; var agiven = "";
	  switch(randy) {
		case 1: var posA = window.questions[qnr][3]; var posB = window.questions[qnr][4]; var posC = window.questions[qnr][5]; var posD = window.questions[qnr][6]; break;
		case 2: var posA = window.questions[qnr][6]; var posB = window.questions[qnr][3]; var posC = window.questions[qnr][4]; var posD = window.questions[qnr][5]; break;
		case 3: var posA = window.questions[qnr][5]; var posB = window.questions[qnr][6]; var posC = window.questions[qnr][3]; var posD = window.questions[qnr][4]; break;  
		case 4: var posA = window.questions[qnr][4]; var posB = window.questions[qnr][5]; var posC = window.questions[qnr][6]; var posD = window.questions[qnr][3]; break;
		}
	var blaqb1 = document.getElementById('qbutton1'); blaqb1.innerHTML = '<a id=\"qdone1\" class=\"qdone\"><table><tr><td>' + decodeURIComponent(posA) + '</td></tr></table></a>';
	var blaqb2 = document.getElementById('qbutton2'); blaqb2.innerHTML = '<a id=\"qdone2\" class=\"qdone\"><table><tr><td>' + decodeURIComponent(posB) + '</td></tr></table></a>';
	var blaqb3 = document.getElementById('qbutton3'); blaqb3.innerHTML = '<a id=\"qdone3\" class=\"qdone\"><table><tr><td>' + decodeURIComponent(posC) + '</td></tr></table></a>';
	var blaqb4 = document.getElementById('qbutton4'); blaqb4.innerHTML = '<a id=\"qdone4\" class=\"qdone\"><table><tr><td>' + decodeURIComponent(posD) + '</td></tr></table></a>';

	if (randy == 1) { qqdone = "qdone1"; }
	if (randy == 2) { qqdone = "qdone2"; }	
	if (randy == 3) { qqdone = "qdone3"; }
	if (randy == 4) { qqdone = "qdone4"; }	

		if (decodeURIComponent(answer) == decodeURIComponent(window.questions[qnr][3])) 
	{ 	score = score + 1; agiven = "0";
		FeedBackIcon(30,'qcorrect');
		document.getElementById(qqdone).className += " qcorrect";
		setTimeout(function(){UpdateScore(score)},500);
	}
	else
	{ 
		this.waittime = 4000;
		FeedBackIcon(30,'qincorrect');
		//check which wrong answer has been clicked
		if (decodeURIComponent(answer) == decodeURIComponent(posA)) { qidone = "qdone1"; if (randy == 2) { agiven = 3;} if (randy == 3) { agiven = 2;} if (randy == 4) { agiven = 1;}}
		if (decodeURIComponent(answer) == decodeURIComponent(posB)) { qidone = "qdone2"; if (randy == 1) { agiven = 1;} if (randy == 3) { agiven = 3;} if (randy == 4) { agiven = 2;}}		
		if (decodeURIComponent(answer) == decodeURIComponent(posC)) { qidone = "qdone3"; if (randy == 1) { agiven = 2;} if (randy == 2) { agiven = 1;} if (randy == 4) { agiven = 3;}}
		if (decodeURIComponent(answer) == decodeURIComponent(posD)) { qidone = "qdone4"; if (randy == 1) { agiven = 3;} if (randy == 2) { agiven = 2;} if (randy == 3) { agiven = 1;}}
		document.getElementById(qidone).className += " qincorrect";
		setTimeout(function(){ShowCorrectAnswer(qqdone,10)},500);
	}
	var qid = decodeURIComponent(window.questions[qnr][1]);
	var qnr = qnr + 1;
	if (qnr == 2) {seriesdone = cnr + '-379_';}
	seriesdone = seriesdone + qid + '-' + agiven + '_';
	if (qnr > 10) { SpeedUpEnd(10,score); }   // 10
	else { SpeedUp(10, 15,qnr,0,0,0,0,score,tsize); }
	if (qnr == 11) { setTimeout(function(){DocScore(seriesdone);},this.waittime+50);}  // qnr == 11
}

function SpeedUp(q,a,qnr,b,c,d,e,score,tsize) {
	if (q > 0) { 
		if (q == 1) { FadeQ(10); BuiltScreen(a,qnr,b,c,d,e,score,tsize); }
		else if (this.waittime == 1) { q = 0; FadeQ(1); BuiltScreen(a,qnr,b,c,d,e,score,tsize);}
		setTimeout(function(){SpeedUp(q,a,qnr,b,c,d,e,score,tsize);},Math.ceil(this.waittime/10));
	q--;
	}
}
function SpeedUpEnd(q,score) {
	if (q > 0) { 
		if (q == 1) { FadeQ(10); ShowEndResults(25,score); }
		else if (this.waittime == 1) { q = 0; FadeQ(1); ShowEndResults(25,score);}
		setTimeout(function(){SpeedUpEnd(q,score);},Math.ceil(this.waittime/10));
	q--;
	}
}

function UpdateScore(score) {
	if (score == 1) { var points = "point" } else { var points = "points";}
	var qqscore = document.getElementById('qascore'); qqscore.innerHTML = score + '<span class=\"qnr\"> ' + points + '</span>';
	return qqscore;
}
function ShowCorrectAnswer(qqdone,k) {	
	if (k > 0) {
	
	if (k == 10) { document.getElementById(qqdone).className += " qcorrect"; }
	if (k == 9) { document.getElementById(qqdone).className = "qdone"; }
	if (k == 8) { document.getElementById(qqdone).className += " qcorrect"; }
	if (k == 7) { document.getElementById(qqdone).className = "qdone"; }
	if (k == 6) { document.getElementById(qqdone).className += " qcorrect"; }
	k--;
	setTimeout(function(){ShowCorrectAnswer(qqdone,k);},250);
	}
}

function FadeQ(p) {
	if (p > 0) {
	var blaques = document.getElementById('qaques'); var blaqaat = document.getElementById('qaatrib'); var blaqb1 = document.getElementById('qbutton1'); var blaqb2 = document.getElementById('qbutton2'); var blaqb3 = document.getElementById('qbutton3'); var blaqb4 = document.getElementById('qbutton4');
	if (p == 10) { blaques.style.opacity="0.8"; blaques.style.filter="alpha(opacity=80)"; blaqaat.style.opacity="0.8"; blaqaat.style.filter="alpha(opacity=80)";}	
	if (p == 9) { blaques.style.opacity="0.6"; blaques.style.filter="alpha(opacity=60)"; blaqaat.style.opacity="0.6"; blaqaat.style.filter="alpha(opacity=60)";}	
	if (p == 8) { blaques.style.opacity="0.4"; blaques.style.filter="alpha(opacity=40)"; blaqaat.style.opacity="0.4"; blaqaat.style.filter="alpha(opacity=40)";} 
	if (p == 7) { blaques.style.opacity="0.2"; blaques.style.filter="alpha(opacity=20)"; blaqaat.style.opacity="0.2"; blaqaat.style.filter="alpha(opacity=20)";}
	if (p == 6) { blaques.style.visibility="hidden"; blaqaat.style.visibility="hidden"; blaques.style.opacity="0.0"; blaques.style.filter="alpha(opacity=0)"; blaqaat.style.opacity="0.0"; blaqaat.style.filter="alpha(opacity=0)"; }
	if (p == 5) { blaqb1.style.opacity="0.8"; blaqb1.style.filter="alpha(opacity=80)"; blaqb2.style.opacity="0.8"; blaqb2.style.filter="alpha(opacity=80)"; blaqb3.style.opacity="0.8"; blaqb3.style.filter="alpha(opacity=80)"; blaqb4.style.opacity="0.8"; blaqb4.style.filter="alpha(opacity=80)";}	
	if (p == 4) { blaqb1.style.opacity="0.6"; blaqb1.style.filter="alpha(opacity=60)"; blaqb2.style.opacity="0.6"; blaqb2.style.filter="alpha(opacity=60)"; blaqb3.style.opacity="0.6"; blaqb3.style.filter="alpha(opacity=60)"; blaqb4.style.opacity="0.6"; blaqb4.style.filter="alpha(opacity=60)";}	
	if (p == 3) { blaqb1.style.opacity="0.4"; blaqb1.style.filter="alpha(opacity=40)"; blaqb2.style.opacity="0.4"; blaqb2.style.filter="alpha(opacity=40)"; blaqb3.style.opacity="0.4"; blaqb3.style.filter="alpha(opacity=40)"; blaqb4.style.opacity="0.4"; blaqb4.style.filter="alpha(opacity=40)";}	
	if (p == 2) { blaqb1.style.opacity="0.2"; blaqb1.style.filter="alpha(opacity=20)"; blaqb2.style.opacity="0.2"; blaqb2.style.filter="alpha(opacity=20)"; blaqb3.style.opacity="0.2"; blaqb3.style.filter="alpha(opacity=20)"; blaqb4.style.opacity="0.2"; blaqb4.style.filter="alpha(opacity=20)";}	
	if (p == 1) { blaqb1.style.visibility="hidden"; blaqb2.style.visibility="hidden"; blaqb3.style.visibility="hidden"; blaqb4.style.visibility="hidden"; blaqb1.style.opacity="0.0"; blaqb1.style.filter="alpha(opacity=0)"; blaqb2.style.opacity="0"; blaqb2.style.filter="alpha(opacity=0)"; blaqb3.style.opacity="0"; blaqb3.style.filter="alpha(opacity=0)"; blaqb4.style.opacity="0"; blaqb4.style.filter="alpha(opacity=0)";}
	p--;
	setTimeout(function(){FadeQ(p);},100);
	}
}

function ShowEndResults(r,score) {
	if (r > 0) {	
		if (r == 25) { document.getElementById('qaquestion').style.opacity="0.7"; document.getElementById('qaquestion').style.filter="alpha(opacity=70)"; document.getElementById('qascore').style.opacity="0.7"; document.getElementById('qascore').style.filter="alpha(opacity=70)"; }
		if (r == 21) { document.getElementById('qaquestion').style.opacity="0.3"; document.getElementById('qaquestion').style.filter="alpha(opacity=30)"; document.getElementById('qascore').style.opacity="0.3"; document.getElementById('qascore').style.filter="alpha(opacity=30)"; }
		if (r == 22) { document.getElementById('qaquestion').style.visibility="hidden"; document.getElementById('qascore').style.visibility="hidden"; }
		if (r == 21) { document.getElementById('qascreen').style.width="620px"; document.getElementById('qascreen').style.marginLeft="-15px"; }
		if (r == 20) { document.getElementById('qascreen').style.width="650px"; document.getElementById('qascreen').style.marginLeft="-25px";}
		if (r == 19) { document.getElementById('qascreen').style.width="680px"; document.getElementById('qascreen').style.marginLeft="-40px";}
		if (r == 18) { document.getElementById('qascreen').style.width="710px"; document.getElementById('qascreen').style.marginLeft="-55px"; }
		if (r == 17) { document.getElementById('qascreen').style.width="740px"; document.getElementById('qascreen').style.marginLeft="-70px";}
		if (r == 16) { document.getElementById('qascreen').innerHTML = '\
		<div id=\"endresulthead\">'+ actcat + ' quiz results:</div>\
		<div id=\"endresulttext\"></div><div id=\"endresultgrade\"></div><div id=\"endresultcomment\"></div>'; 
		   /* radial-gradient(#E3E1EB, #cdcbd6) */
		}
		if (r == 15) {document.getElementById('qabuttons').style.visibility="hidden"; 
				if (!((score == 0) || (score == 1) || (score == 2) || (score == 3) || (score == 4) || (score == 5) || (score == 6) || (score == 7) || (score == 8) || (score == 9) || (score == 10)) ) { score = 0;}  
				}
				
		if (r == 14) { 
			switch(score) { 
			    case 10: var rcolor = "#00cc00"; break;
			    case  9: var rcolor = "#00b300"; break;
			    case  8: var rcolor = "#009900"; break;
			    case  7: var rcolor = "#008000"; break;
			    case  6: var rcolor = "#006600"; break;
			    case  5: var rcolor = "#990000"; break;
			    case  4: var rcolor = "#b30000"; break;
			    case  3: var rcolor = "#b30000"; break;
			    case  2: var rcolor = "#cc0000"; break;
			    case  1: var rcolor = "#cc0000"; break;
			    case  0: var rcolor = "#cc0000"; break;
			    default: var rcolor = "#000000"; break;
				} 
			ShowGraph(10,avgscore,score,rcolor); }
		if (r == 1) { 
			var rcomment = "";
			switch(score) { 
			    case 10: var gradeimg = "grade-a"; var fgrade = "A"; var rcolor = "#00cc00"; rcomment = "Excellent!"; break;
			    case  9: var gradeimg = "grade-a-minus"; var fgrade = "A-"; var rcolor = "#00b300"; rcomment = "Very good!"; break;
			    case  8: var gradeimg = "grade-b"; var fgrade = "B"; var rcolor = "#009900"; rcomment = "Good"; break;
			    case  7: var gradeimg = "grade-c"; var fgrade = "C"; var rcolor = "#008000"; rcomment = "Fine"; break;
			    case  6: var gradeimg = "grade-d"; var fgrade = "D"; var rcolor = "#006600"; rcomment = "Marginal"; break;
			    case  5: var gradeimg = "grade-f-plus"; var fgrade = "F+"; var rcolor = "#990000"; rcomment = "Bad"; break;
			    case  4: var gradeimg = "grade-f"; var fgrade = "F"; var rcolor = "#b30000"; rcomment = "Pretty bad"; break;
			    case  3: var gradeimg = "grade-f"; var fgrade = "F"; var rcolor = "#b30000"; rcomment = "Pretty bad"; break;
			    case  2: var gradeimg = "grade-f-minus"; var fgrade = "F-"; var rcolor = "#cc0000"; rcomment = "Very bad"; break;
			    case  1: var gradeimg = "grade-f-minus"; var fgrade = "F-"; var rcolor = "#cc0000"; rcomment = "Very bad"; break;
			    case  0: var gradeimg = "grade-f-minus"; var fgrade = "F-"; var rcolor = "#cc0000"; rcomment = "VERY bad!"; break;
			    default: var gradeimg = "empty"; var fgrade = ""; var rcolor = "#000000"; rcomment = ""; break;
				} 
			document.getElementById('endresultgrade').innerHTML = '<img src=\"https://www.triviaplaza.com/g/' + gradeimg + '.png\">';
			document.getElementById("endresultcomment").style.color = rcolor;
			document.getElementById('endresultcomment').innerHTML = rcomment;
			document.getElementById('endresulttext').innerHTML = '\
				<table border="0\">\
				<tr><td class=\"bigger\">Your score:</td><td class=\"bigger cent\"><span class=\"endresultscore\" style=\"color:' + rcolor + '\">' + score + '</span></td></tr>\
				<tr><td>Average score:</td><td class=\"cent\">' + avgscore + '</td></tr>\
				<tr><td>Total plays:</td><td class=\"cent\">' + plays + '</td></tr>\
				</table>';
				window.questions = [];
				gatc(11); gaev(score);
			setTimeout(function(){ShowEndButtons(3,score,fgrade);},500);
			}
	r--;
	setTimeout(function(){ShowEndResults(r,score);},100);
	}	
}	

function ShowEndButtons(t,score,fgrade) {
	if (t > 0) {
	if (t == 3) { 
		var div = document.createElement('div'); 
		var bla = document.getElementById('content2'); 
		bla.appendChild(div);
		 div.id = 'buttonagain'; 
		 div.innerHTML = '<a href=\"#\" onclick=\"ReStartGame(4); if(typeof ga == \'function\') { ga(\'send\', \'event\', \'Play Again Button\', \'' + topcat + ' play again\', \'' + actcat + ' play again\', '+ score + ');}\">&laquo; Again</a>'; } 
	if (t == 2 && score > 5) { 
		if (score > 8) { var article = "an";} 
		else { var article = "a";} 
		var div = document.createElement('div'); 
		var bla = document.getElementById('content2'); 
		bla.appendChild(div); div.id = 'buttonfbshare'; 
		div.innerHTML = '<a onClick=\" window.open(\'https://www.facebook.com/sharer/sharer.php?u=' + actcaturl + '\', \'fbshare\', \'width=640,height=320\'); if(typeof ga == \'function\') { ga(\'send\', \'event\', \'Facebook Score Shares\', \'' + topcat + ' FBshare\', \'' + actcat + ' FB share\', ' + score + '); }\" href=#><div class=\"small\">Share on</div>FaceBook</a>'; } 
	if (t == 1) { var div = document.createElement('div'); var bla = document.getElementById('content2'); bla.appendChild(div); div.id = 'buttondone'; div.innerHTML = '<a href=\"' + tabcaturl + '\">Done &raquo;</a>'; } 
	t--;
	setTimeout(function(){ShowEndButtons(t,score,fgrade);},200);
	}
}

function FeedBackIcon(s,img) {
	if (s > 0) {
	if (s == 30) { var div = document.createElement('div'); var bla = document.getElementById('content2'); bla.appendChild(div); div.id = 'fbicon'; div.innerHTML = '<a href=\"#\" onClick=\"SpeedIt()\"><img src=\"https://www.triviaplaza.com/g/'+ img + 'big.png\"></a>'; div.style.opacity="1.0"; div.style.filter="alpha(opacity=100)"; div.style.visibility="visible";}
	if (this.waittime == 1)	{ s = 1; };
	if (s == 5) { var div = document.getElementById('fbicon'); div.style.opacity="0.8"; div.style.filter="alpha(opacity=80)"; }
	if (s == 4) { var div = document.getElementById('fbicon'); div.style.opacity="0.6"; div.style.filter="alpha(opacity=60)"; }	
	if (s == 3) { var div = document.getElementById('fbicon'); div.style.opacity="0.4"; div.style.filter="alpha(opacity=40)"; }
	if (s == 2) { var div = document.getElementById('fbicon'); div.style.opacity="0.2"; div.style.filter="alpha(opacity=20)";} 
	if (s == 1) { var div = document.getElementById('fbicon'); div.style.opacity="0.0"; div.style.filter="alpha(opacity=00)"; div.style.visibility="hidden"; div.parentNode.removeChild(div);	}
	s--;
	setTimeout(function(){FeedBackIcon(s,img);},100);
	}	
}
function SpeedIt() {
	this.waittime = 1;
	return this.waittime;
}

function DocScore(done) {
    var xhr;
    if (window.XMLHttpRequest) xhr = new XMLHttpRequest(); // all browsers
    else xhr = new ActiveXObject("Microsoft.XMLHTTP");     // for IE
    var url = 'https://www.triviaplaza.com/writeqs.php?qnrs='+btoa(done);
    xhr.open('POST', url, true);
    xhr.send();
    return false;
}	

function loadQuestions(url) {
var xmlhttp;
var x,xx,i;
if (window.XMLHttpRequest) { xmlhttp=new XMLHttpRequest(); }
else { xmlhttp=new ActiveXObject("Microsoft.XMLHTTP"); }
xmlhttp.onreadystatechange=function()
{ if (xmlhttp.readyState==4 && xmlhttp.status==200)
    { 	x=xmlhttp.responseXML.documentElement.getElementsByTagName("Q");
		for (var teller = 1; teller < 11; teller++) { window.questions[teller] = []; }
	    for (i=0;i<x.length;i++) 
	    { for (j=1;j<13;j++) 
	    	{	tagname = 'A' + j;
				xx=x[i].getElementsByTagName(tagname);
				{
					try
						{
						if (xx[0].firstChild.nodeValue == " ") { xx[0].firstChild.nodeValue = "";} 
						window.questions[i+1][j] = xx[0].firstChild.nodeValue;
						}
					catch (er)
					{
						window.questions[i+1][j] = "";
					}
				}	
			}
		}
	}
}
xmlhttp.open("POST",url,true);
xmlhttp.send();
return window.questions;
}

function ShowGraph(w,avg, score, rcolor) {
if (w > 0) {
	if (w == 10) { 
		var div = document.createElement('div'); var bla = document.getElementById('qascreen'); bla.appendChild(div);
		div.id = 'graphgrid'; div.innerHTML = '\
		<div id=\"graphunit\">points</div>\
		<div id=\"graphscales">\
			<div id=\"g10\">10<span>-</span></div>\
			<div id=\"g9\">9<span>-</span></div>\
			<div id=\"g8\">8<span>-</span></div>\
			<div id=\"g7\">7<span>-</span></div>\
			<div id=\"g6\">6<span>-</span></div>\
			<div id=\"g5\">5<span>-</span></div>\
			<div id=\"g4\">4<span>-</span></div>\
			<div id=\"g3\">3<span>-</span></div>\
			<div id=\"g2\">2<span>-</span></div>\
			<div id=\"g1\">1<span>-</span></div>\
			<div id=\"g0\">0<span>-</span></div>\
		</div>\
		<div id=\"graph"></div>\
		<div id=\"avglabel\"></div>\
		<div id=\"youlabel\"></div>\
		';
	 } 
	if (w == 9) { 	var graph = document.getElementById('graph'); graph.innerHTML = graph.innerHTML + '<div id=\"avgscore"></div>';
				  	var avgheight = 10*avg; if (avgheight == 0) { avgheight = 3; } var avgstart = 300 - avgheight; var avgs = document.getElementById('avgscore'); avgs.style.height = avgheight+'px'; avgs.style.top = avgstart+'px';	}
	if (w == 8) { 	var graph = document.getElementById('graph'); graph.innerHTML = graph.innerHTML + '<div id=\"avgscore"></div>';
				  	var avgheight = 20*avg; if (avgheight == 0) { avgheight = 3; } var avgstart = 300 - avgheight; var avgs = document.getElementById('avgscore'); avgs.style.height = avgheight+'px'; avgs.style.top = avgstart+'px';	}
	if (w == 7) { 	var graph = document.getElementById('graph'); graph.innerHTML = graph.innerHTML + '<div id=\"avgscore"></div>';
				  	var avgheight = 30*avg; if (avgheight == 0) { avgheight = 3; } var avgstart = 300 - avgheight; var avgs = document.getElementById('avgscore'); avgs.style.height = avgheight+'px'; avgs.style.top = avgstart+'px';	}
	if (w == 6) { 	var avglabel = document.getElementById('avglabel'); avglabel.innerHTML ='Average<br>score';}
							
	if (w == 4) { 	var graph = document.getElementById('graph'); graph.innerHTML = graph.innerHTML + '<div id=\"youscore"></div>'; 
					document.getElementById('youscore').style.backgroundColor=rcolor;
					var youheight = 10*score; if (youheight == 0) { youheight = 3; } var youstart = 300 - youheight; var yous = document.getElementById('youscore'); yous.style.height = youheight+'px'; yous.style.top = youstart+'px';}
	if (w == 3) { 	var graph = document.getElementById('graph'); graph.innerHTML = graph.innerHTML + '<div id=\"youscore"></div>';
					var youheight = 20*score; if (youheight == 0) { youheight = 3; } var youstart = 300 - youheight; var yous = document.getElementById('youscore'); yous.style.height = youheight+'px'; yous.style.top = youstart+'px';}
	if (w == 2) { 	var graph = document.getElementById('graph'); graph.innerHTML = graph.innerHTML + '<div id=\"youscore"></div>'; 
					var youheight = 30*score; if (youheight == 0) { youheight = 3; } var youstart = 300 - youheight; var yous = document.getElementById('youscore'); yous.style.height = youheight+'px'; yous.style.top = youstart+'px';}
	if (w == 1) { 	var youlabel = document.getElementById('youlabel'); youlabel.innerHTML ='Your<br>score'; youlabel.style.color=rcolor;}
	w--;
	setTimeout(function(){ShowGraph(w,avg,score, rcolor);},50);
	}	
}

//GATC tracking for virtual JS pageviews
function gatc(nr) {
	var gaquest = 'quiz/question' + nr;	
	if(typeof ga == 'function')
 	{ ga('send', 'pageview', gaquest); }
}

//GATC tracking for events
function gaev(score) {
	if(typeof ga == 'function')
 	{ ga('send', 'event', 'Scores', topcat, actcat, score); }
}

function QuestionSizer(word) {
	var leng = word.length;
	if 		(leng < 20) 	{ classy = "Size1"}
	else if (leng < 30)  	{ classy = "Size2"}
	else if (leng < 40)  	{ classy = "Size3"}
	else if (leng < 50)  	{ classy = "Size4"}
	else if (leng < 60)  	{ classy = "Size5"}
	else if (leng < 70)  	{ classy = "Size6"}	
	else if (leng < 80)  	{ classy = "Size7"}	
	else if (leng < 90) 	{ classy = "Size8"}	
	else  					{ classy = "Size9"}	
	var wordy = '<span class=\"'+classy+'\">'+word+'</span>';
	return wordy;
}	

function AtribSizer(word) {
	var leng = word.length;
	if 		(leng < 30) 	{ classy = "Size3"}
	else if (leng < 60)  	{ classy = "Size4"}
	else if (leng < 90)		{ classy = "Size5"}
	else if (leng < 120)	{ classy = "Size6"}
	else if (leng < 150)  	{ classy = "Size7"}	
	else if (leng < 180)  	{ classy = "Size8"}			
	else  					{ classy = "Size9"}	
	var wordy = '<span class=\"'+classy+'\">'+word+'</span>';
	return wordy;
}	

function PreLoadImages() {
	img1 = new Image(); img2 = new Image();
	img1.src = 'https://www.triviaplaza.com/g/qincorrectbig.png'; img2.src = 'https://www.triviaplaza.com/g/qcorrectbig.png';
	//var h = 1;
	for (h=1;h<11;h++) 	
	{
		if (decodeURIComponent(window.questions[h][11]) == -1) 
		{
			if (decodeURIComponent(window.questions[h][7]) == -1) { var imgextention = "gif"; } else { var imgextention = "jpg";}
			var img=new Image();
			var iurl = 'https://www.triviaplaza.com/' + decodeURIComponent(window.questions[h][9]) + '/' + decodeURIComponent(window.questions[h][1]) + '.' + imgextention;
			img.src= iurl;
		}
	}	
}
