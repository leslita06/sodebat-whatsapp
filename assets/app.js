(function(){
"use strict";
var BOT='<span class="who-l bot">Assistant SODEBAT</span>';
var HUM=function(n,r){return '<span class="who-l hum">'+n+', '+r+'</span>';};
var URG='<span class="urg-m">Urgence : appelez aussi le <a href="tel:+2250708083626">+225 07 08 08 36 26</a></span>';
var DOC=function(t,s){return '<span class="doc"><span class="di">PDF</span><span class="dt"><b>'+t+'</b><small>'+s+'</small></span></span>';};
var VOICE=function(d,t){return '<span class="voice"><span class="vp">▶</span><span class="vw"></span><span class="vd">'+d+'</span></span><span class="vt">« '+t+' »</span>';};
var S=[
{ k:"bloquee", t:"Personne bloquée en cabine", d:"Consignes sûres et technicien en route",
  title:"Une personne bloquée : rassurer, alerter, suivre jusqu'à la sortie",
  pitch:"À 18 h 42, l'accueil d'un immeuble de bureaux signale une personne coincée. L'assistant rappelle le numéro d'urgence, reconnaît l'appareil, donne les consignes générales à transmettre et prévient le technicien d'astreinte dans la minute. Le client suit l'arrivée du technicien jusqu'à la libération.",
  steps:[["Personne bloquée signalée","c","Client"],["Appareil reconnu, consignes données","a","Assistant"],["Technicien d'astreinte prévenu","a","Assistant"],["Arrivée et libération suivies","h","Technicien"]],
  k1:"20 s", k2t:"Personne libérée", k2:"38 min", k2l:"après le premier message",
  dg:{cap:"Au même moment, le téléphone du technicien d'astreinte",nm:"Alertes SAV SODEBAT",st:"Moussa Koné, astreinte Abidjan nord",clock:"18:43"},
  m:[
   {d:"Mercredi 23 septembre"},
   {o:1,tm:"18:42",h:'Bonsoir, une personne est coincée dans l\'ascenseur 2 de la Tour Lagune, entre le 4e et le 5e',s:0},
   {o:0,tm:"18:42",h:BOT+'Nous nous en occupons tout de suite.<br>Tour Lagune, Plateau, <strong>ascenseur 2</strong> : c\'est bien celui-ci ?'+URG,s:1,badge:"Réponse en 20 s",btn:["Oui, ascenseur 2","Un autre appareil"]},
   {o:1,tm:"18:43",h:'Oui, ascenseur 2',s:1,pick:0},
   {o:0,tm:"18:43",h:BOT+'Dites à la personne :<br>1. Restez calme, l\'air circule dans la cabine.<br>2. Appuyez sur le bouton d\'alarme.<br>3. Ne forcez pas les portes, n\'essayez pas de sortir.<br>Malaise ou personne fragile : SAMU <strong>185</strong>, pompiers <strong>180</strong>.',s:1},
   {g:1,tm:"18:43",h:'<span class="who-l al">Personne bloquée</span><strong>Tour Lagune</strong>, Plateau<br>Ascenseur 2, SODIMAS 2009 (SB-151)<br>Entre le 4e et le 5e, signalé à 18 h 42<br>Contact : accueil de l\'immeuble<br>Dernière intervention : surchauffe moteur, 20/09',s:2,btn:["Je pars","Je ne suis pas disponible"]},
   {g:1,tm:"18:44",h:'Je pars',s:2,pick:0,o:1},
   {o:0,tm:"18:44",h:BOT+'<strong>Moussa Koné</strong>, technicien d\'astreinte, est en route.<br>Arrivée estimée : <strong>vers 19 h 15</strong>.',s:2,btn:["La personne est calme","Malaise, besoin d'aide"]},
   {o:1,tm:"18:46",h:'La personne est calme',s:2,pick:0},
   {o:0,tm:"19:05",h:BOT+'Moussa Koné est à 10 minutes. Gardez le contact avec la personne par l\'interphone ou à travers la porte.',s:3},
   {sys:"Technicien sur place à 19 h 13, 31 min après le signalement"},
   {g:1,tm:"19:20",h:'<span class="who-l ok">Personne libérée</span>19 h 20, saine et sauve. Ascenseur 2 laissé à l\'arrêt pour vérification.',s:3,o:1},
   {o:0,tm:"19:21",h:BOT+'La personne est sortie à <strong>19 h 20</strong>, saine et sauve.<br>L\'ascenseur 2 reste à l\'arrêt le temps de la vérification. Nous vous écrivons dès sa remise en service.',s:3},
   {d:"Jeudi 24 septembre"},
   {o:0,tm:"18:45",h:BOT+'Ascenseur 2 remis en service ce soir.<br>Le rapport d\'intervention suit dans ce fil.',s:3}
  ]},
{ k:"panne", t:"Panne signalée en photo et note vocale", d:"Le gestionnaire n'a rien à taper",
  title:"Une photo, une note vocale, et le technicien a déjà tout",
  pitch:"Une gestionnaire de résidence envoie une note vocale et une photo de la porte abîmée. L'assistant comprend la panne, reconnaît l'appareil, propose un passage du technicien du secteur et donne la consigne de sécurité. Le constat arrive dans le même fil.",
  steps:[["Note vocale et photo","c","Client"],["Panne comprise, appareil reconnu","a","Assistant"],["Passage proposé et choisi","c","Client"],["Constat du technicien","h","Technicien"]],
  k1:"25 s", k2t:"Question posée", k2:"0", k2l:"avant de proposer un passage",
  m:[
   {d:"Lundi 23 novembre"},
   {o:1,tm:"10:20",h:VOICE("0:09","L'ascenseur 1 ne marche plus. Un chariot a cogné la porte du rez-de-chaussée, elle est tordue."),s:0},
   {o:1,tm:"10:20",h:'<img class="photo" src="assets/img/porte-paliere.jpg?v=20261125a" alt="Photo de la porte palière envoyée par la cliente">',s:0},
   {o:0,tm:"10:20",h:BOT+'Bien reçu, Madame Kouamé.<br>Résidence Les Hibiscus, <strong>ascenseur 1</strong> : porte palière du rez-de-chaussée déformée.<br>Par sécurité, l\'ascenseur reste à l\'arrêt.',s:1,badge:"Réponse en 25 s"},
   {o:0,tm:"10:21",h:BOT+'Didier Assi, votre technicien, peut passer :',s:2,btn:["Ce matin, vers 11 h 15","Cet après-midi, avant 16 h","Un autre moment"]},
   {o:1,tm:"10:21",h:'Ce matin, vers 11 h 15',s:2,pick:0},
   {o:0,tm:"10:21",h:BOT+'C\'est noté. Ticket <strong>T-2611-122</strong>.<br>Didier Assi arrive vers 11 h 15.<br>D\'ici là, un panneau « hors service » à l\'entrée suffit.',s:2},
   {sys:"Technicien sur place à 11 h 15"},
   {o:0,tm:"12:05",h:HUM("Didier Assi","technicien SODEBAT")+'Constat : la porte est déformée, elle doit être remplacée. L\'ascenseur reste à l\'arrêt jusque-là.',s:3},
   {o:0,tm:"12:06",h:BOT+'Le devis de remplacement vous sera envoyé par l\'équipe commerciale, avec le délai de pose.',s:3,btn:["Recevoir le devis par e-mail","Être rappelée"]},
   {o:1,tm:"12:10",h:'Recevoir le devis par e-mail',s:3,pick:0}
  ]},
{ k:"visite", t:"Visite technique pour un devis", d:"Appareils et créneaux proposés",
  title:"Une demande de devis devient une visite planifiée",
  pitch:"Un syndic veut moderniser ses ascenseurs. L'assistant reconnaît l'immeuble et ses appareils, propose l'objectif et trois créneaux de visite. Aucun prix n'est donné : la demande part à l'équipe commerciale, qui confirme la visite le jour même.",
  steps:[["Demande de devis","c","Client"],["Appareils et objectif proposés","a","Assistant"],["Créneau de visite choisi","c","Client"],["Visite confirmée","h","Commercial"]],
  k1:"15 s", k2t:"Touches", k2:"3", k2l:"sans rien écrire après la demande",
  m:[
   {d:"Aujourd'hui"},
   {o:1,tm:"09:12",h:'Bonjour, nous voulons moderniser les ascenseurs de l\'immeuble. Vous pouvez faire un devis ?',s:0},
   {o:0,tm:"09:12",h:BOT+'Bonjour Monsieur Diallo.<br>Immeuble Al Baraka, Plateau : 2 ascenseurs Schindler de 1994 suivis par SODEBAT.<br>La visite porte sur :',s:1,badge:"Réponse en 15 s",btn:["Les deux ascenseurs","Ascenseur A","Ascenseur B"]},
   {o:1,tm:"09:13",h:'Les deux ascenseurs',s:1,pick:0},
   {o:0,tm:"09:13",h:BOT+'Votre objectif :',s:1,btn:["Modernisation complète","Mise en conformité","Portes et cabine seulement"]},
   {o:1,tm:"09:13",h:'Modernisation complète',s:2,pick:0},
   {o:0,tm:"09:13",h:BOT+'Créneaux de visite (lun. à ven., 8 h à 17 h) :',s:2,btn:["Jeudi 26 novembre, 10 h","Vendredi 27 novembre, 9 h","Lundi 30 novembre, 15 h","Autre date"]},
   {o:1,tm:"09:14",h:'Vendredi 27 novembre, 9 h',s:2,pick:1},
   {o:0,tm:"09:14",h:BOT+'Demande enregistrée :<br>Immeuble Al Baraka, 2 ascenseurs, modernisation complète.<br>Visite souhaitée <strong>vendredi 27 novembre, 9 h</strong>, confirmée par l\'équipe commerciale dans la journée.<br>Le devis suit la visite.',s:3},
   {sys:"Demande transmise à l'équipe commerciale"},
   {o:0,tm:"11:30",h:HUM("Serge","chargé d'affaires SODEBAT")+'Bonjour Monsieur Diallo, visite confirmée vendredi 27 à 9 h. Merci de prévoir l\'accès à la machinerie.',s:3}
  ]},
{ k:"rapport", t:"Rapport d'intervention demandé", d:"Le bon document, en une touche",
  title:"« Vous pouvez me renvoyer le rapport ? » : il arrive tout de suite",
  pitch:"Le responsable maintenance d'un hôtel cherche le rapport d'une intervention du début du mois. L'assistant propose les dernières interventions sur ses appareils, envoie le rapport en PDF, le résume et signale que la même cause est déjà revenue.",
  steps:[["Demande de rapport","c","Client"],["Dernières interventions proposées","a","Assistant"],["Rapport envoyé et résumé","a","Assistant"]],
  k1:"10 s", k2t:"Conseiller", k2:"0", k2l:"le rapport part sans attendre personne",
  m:[
   {d:"Aujourd'hui"},
   {o:1,tm:"08:31",h:'Bonjour, vous pouvez me renvoyer le rapport de l\'intervention du début du mois ?',s:0},
   {o:0,tm:"08:31",h:BOT+'Bonjour Monsieur Yapi.<br>Dernières interventions à l\'Hôtel Lagune Bleue :',s:1,badge:"Réponse en 10 s",btn:["2 novembre, ascenseur 2, cellule de porte","6 juillet, ascenseur 2, cellule de porte","12 mai, ascenseur 2, frein moteur"]},
   {o:1,tm:"08:32",h:'2 novembre, ascenseur 2, cellule de porte',s:1,pick:0},
   {o:0,tm:"08:32",h:DOC("Rapport T-2611-118","1 page, signé par le technicien"),s:2},
   {o:0,tm:"08:32",h:BOT+'En bref : signalé à 9 h 10, technicien sur place à 9 h 52, remis en service à 10 h 40.<br>Cause : cellule de porte encrassée, nettoyée et réglée.<br>Cette cause est revenue depuis juillet : elle sera vérifiée à la prochaine visite préventive.',s:2,btn:["Envoyer aussi par e-mail","Voir le carnet d'entretien"]},
   {o:1,tm:"08:33",h:'Envoyer aussi par e-mail',s:2,pick:0},
   {o:0,tm:"08:33",h:BOT+'C\'est envoyé à l\'adresse e-mail enregistrée au contrat de l\'hôtel.',s:2}
  ]},
{ k:"reclamation", t:"Réclamation pour pannes répétées", d:"Le responsable SAV rappelle",
  title:"Quatrième panne en deux mois : la réclamation monte dans la minute",
  pitch:"La directrice d'un hôtel écrit, excédée, après une nouvelle panne. L'assistant reconnaît la gêne, retrouve l'historique de l'appareil, ouvre une réclamation et prévient le responsable SAV avec tout le dossier. Le rappel est fixé ; aucune promesse n'est faite à sa place.",
  steps:[["Réclamation de la cliente","c","Client"],["Historique retrouvé, réclamation ouverte","a","Assistant"],["Responsable SAV alerté","a","Assistant"],["Cliente rappelée","h","Responsable SAV"]],
  k1:"30 s", k2t:"Cliente rappelée", k2:"1 h 38", k2l:"après son message, par le responsable SAV",
  dg:{cap:"Au même moment, le téléphone du responsable SAV",nm:"Alertes réclamations SODEBAT",st:"Responsable SAV",clock:"07:13"},
  m:[
   {d:"Mardi 24 novembre"},
   {o:1,tm:"07:12",h:'Encore en panne ce matin, l\'ascenseur clients 1. C\'est la 4e fois depuis octobre. Nos clients montent à pied, ce n\'est plus acceptable.',s:0},
   {o:0,tm:"07:12",h:BOT+'Bonjour Madame Ouattara. Je comprends la gêne pour vos clients.<br>Historique de l\'ascenseur clients 1 : pannes le 3 octobre, deux fois le 22 octobre, et ce matin.<br>Bakary Traoré, votre technicien, est déjà en route.',s:1,badge:"Réponse en 30 s"},
   {o:0,tm:"07:13",h:BOT+'Votre réclamation <strong>R-2611-07</strong> est ouverte. Le responsable SAV vous rappelle <strong>avant 9 h 30</strong>.',s:2,btn:["Sur ce numéro","Sur un autre numéro"]},
   {g:1,tm:"07:13",h:'<span class="who-l al">Nouvelle réclamation</span><strong>R-2611-07</strong>, Hôtel Les Aigrettes Yamoussoukro<br>Mme Ouattara, directrice<br>Ascenseur clients 1, Otis 1997 (SB-110)<br><strong>4 pannes depuis le 3 octobre</strong>, alerte pannes répétées levée le 22/10<br>Technicien : Bakary Traoré, en route<br>Rappel promis <strong>avant 9 h 30</strong>',s:2,btn:["Je prends le dossier"]},
   {o:1,tm:"07:14",h:'Sur ce numéro',s:2,pick:0},
   {g:1,tm:"07:20",h:'Je prends le dossier',s:2,pick:0,o:1},
   {sys:"Technicien sur place à 8 h 48"},
   {sys:"Appel du responsable SAV à 8 h 50"},
   {g:1,tm:"08:58",h:'<span class="who-l ok">Cliente rappelée</span><strong>R-2611-07</strong> : rappelée à 8 h 50. Moteur en réparation, essais prévus jeudi.',s:3,o:1},
   {o:0,tm:"08:58",h:HUM("Le responsable SAV","SODEBAT")+'Merci Madame Ouattara pour l\'échange. Comme dit au téléphone : moteur en réparation, essais prévus jeudi. Je vous écris jeudi avec le résultat.',s:3}
  ]}
];

var $=function(id){return document.getElementById(id);};
var chat=$("chat"),status=$("status"),clock=$("clock"),dchat=$("dg-chat"),dclock=$("dg-clock"),stage=$("stage");
var cur=0,timers=[],run=0,q=new URLSearchParams(location.search);
var ico=function(k){return window.ico?window.ico(k):"";};

document.querySelectorAll("i[data-i]").forEach(function(i){var c=i.getAttribute("class"),s=ico(i.getAttribute("data-i"));if(c)s=s.replace('class="i','class="i '+c);i.outerHTML=s;});

function nav(){
  var n=$("scen"),ns=$("nav-s");
  var IC=["users","camera","calendar-clock","file-check","shield-alert"];
  S.forEach(function(s,i){
    var b=document.createElement("button");b.type="button";
    b.innerHTML='<span class="n">'+(i+1)+'</span><span class="t">'+s.t+'<span class="d">'+s.d+'</span></span>';
    b.addEventListener("click",function(){go(i);});
    n.appendChild(b);
    var a=document.createElement("a");a.className="ni";a.href="#"+s.k;a.innerHTML=ico(IC[i])+'<span>'+s.t+'</span>';
    ns.appendChild(a);
  });
}
function go(i){if(location.hash!=="#"+S[i].k)history.replaceState(null,"","#"+S[i].k);play(i,true);}
function side(i){
  var s=S[i];
  $("s-num").textContent="Conversation "+(i+1)+" sur "+S.length;
  $("s-title").textContent=s.title;$("s-pitch").textContent=s.pitch;
  $("s-steps").innerHTML=s.steps.map(function(x){return '<li><b>'+x[0]+'<span class="who '+x[1]+'">'+x[2]+'</span></b></li>';}).join("");
  $("s-delai").textContent=s.k1;$("s-k2t").textContent=s.k2t;$("s-humain").textContent=s.k2;$("s-humain-l").textContent=s.k2l;
  $("crumb-v").textContent=s.t;
  [].forEach.call($("scen").children,function(b,j){b.setAttribute("aria-pressed",j===i?"true":"false");});
  [].forEach.call(document.querySelectorAll("#nav-s .ni"),function(a,j){a.classList.toggle("on",j===i);});
}
function mark(st){var li=$("s-steps").children;for(var j=0;j<li.length;j++)li[j].classList.toggle("done",j<=st);}
function el(m){
  if(m.d){var d=document.createElement("div");d.className="day";d.textContent=m.d;return d;}
  if(m.sys){var y=document.createElement("div");y.className="sys";y.textContent=m.sys;return y;}
  var w=document.createElement("div");w.className="m "+(m.o?"out":"in")+(m.g&&!m.o?" al":"");
  var b=document.createElement("div");b.className="b";
  var h=m.h;
  if(m.badge)h+='<br><span class="badge">'+m.badge+'</span>';
  h+='<span class="meta">'+m.tm+(m.o?'<span class="tk">✓✓</span>':'')+'</span>';
  if(m.btn)h+='<span class="btns">'+m.btn.map(function(x){return '<span>'+x+'</span>';}).join("")+'</span>';
  b.innerHTML=h;w.appendChild(b);return w;
}
function pickPrev(m,box){
  if(m.pick===undefined)return;
  var all=box.querySelectorAll(".btns");var last=all[all.length-1];
  if(last&&last.children[m.pick])last.children[m.pick].classList.add("on");
}
function scroll(){chat.scrollTop=chat.scrollHeight;dchat.scrollTop=dchat.scrollHeight;}
function put(m){
  if(m.g){pickPrev(m,dchat);dchat.appendChild(el(m));dclock.textContent=m.tm;return;}
  pickPrev(m,chat);chat.appendChild(el(m));if(m.tm)clock.textContent=m.tm;
  if((m.d||m.sys)&&S[cur].dg)dchat.appendChild(el(m));
}
function clear(){timers.forEach(clearTimeout);timers=[];}
function later(f,ms){timers.push(setTimeout(f,ms));}
function play(i,all){
  clear();run++;cur=i;chat.innerHTML="";dchat.innerHTML="";side(i);
  var s=S[i],dg=s.dg;
  stage.classList.toggle("duo",!!dg);$("phone-dg").hidden=!dg;$("dg-cap").hidden=!dg;
  if(dg){$("dg-cap-t").textContent=dg.cap;$("dg-nm").textContent=dg.nm;$("dg-st").textContent=dg.st;dclock.textContent=dg.clock;}
  mark(-1);status.textContent="compte professionnel";
  var t=500,me=run;
  if(all){s.m.forEach(put);mark(s.steps.length-1);chat.scrollTop=0;dchat.scrollTop=0;return;}
  s.m.forEach(function(m){
    if(m.d||m.sys){later(function(){if(me!==run)return;put(m);scroll();},t);t+=800;return;}
    if(m.g){later(function(){if(me!==run)return;put(m);mark(m.s);scroll();},t);t+=1400;return;}
    if(!m.o){
      later(function(){if(me!==run)return;status.textContent="en train d'écrire…";
        var ty=document.createElement("div");ty.className="m in typing";ty.innerHTML='<div class="b"><span class="dots"><i></i><i></i><i></i></span></div>';
        chat.appendChild(ty);scroll();
        later(function(){if(me!==run)return;ty.remove();put(m);status.textContent="en ligne";mark(m.s);scroll();},1200);
      },t);
      t+=1200+Math.min(2600,700+m.h.length*5);
    }else{
      later(function(){if(me!==run)return;put(m);mark(m.s);scroll();},t);
      t+=900+Math.min(1800,m.h.length*8);
    }
  });
}
nav();
$("replay").addEventListener("click",function(){play(cur,false);});
$("skip").addEventListener("click",function(){play(cur,true);});
function fromHash(){var h=location.hash.slice(1),i=0;S.forEach(function(s,j){if(s.k===h)i=j;});return i;}
window.addEventListener("hashchange",function(){play(fromHash(),true);});
play(fromHash(),q.get("anim")!=="1");
})();
