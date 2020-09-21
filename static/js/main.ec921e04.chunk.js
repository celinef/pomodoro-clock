(this["webpackJsonppomodoro-clock"]=this["webpackJsonppomodoro-clock"]||[]).push([[0],{13:function(e,t,s){},14:function(e,t,s){"use strict";s.r(t);var a=s(0),i=s.n(a),n=s(3),r=s.n(n),o=s(4),c=s(5),l=s(1),m=s(7),d=s(6),h=(s(13),function(e){Object(m.a)(s,e);var t=Object(d.a)(s);function s(e){var a;return Object(o.a)(this,s),(a=t.call(this,e)).state={sessionMins:25,sessionSecs:1500,breakMins:5,breakSecs:300,mode:"Session",started:!1},a.changeSession=a.changeSession.bind(Object(l.a)(a)),a.changeBreak=a.changeBreak.bind(Object(l.a)(a)),a.startStop=a.startStop.bind(Object(l.a)(a)),a.reset=a.reset.bind(Object(l.a)(a)),a.formatTimer=a.formatTimer.bind(Object(l.a)(a)),a.rundownTimer=a.rundownTimer.bind(Object(l.a)(a)),a.timer=null,a}return Object(c.a)(s,[{key:"changeSession",value:function(e){"+"===e.target.innerText&&this.state.sessionMins<60?this.setState({sessionMins:this.state.sessionMins+1,sessionSecs:this.state.sessionSecs+60}):"-"===e.target.innerText&&this.state.sessionMins>1&&this.setState({sessionMins:this.state.sessionMins-1,sessionSecs:this.state.sessionSecs-60})}},{key:"changeBreak",value:function(e){"+"===e.target.innerText&&this.state.breakMins<60?this.setState({breakMins:this.state.breakMins+1,breakSecs:this.state.breakSecs+60}):"-"===e.target.innerText&&this.state.breakMins>1&&this.setState({breakMins:this.state.breakMins-1,breakSecs:this.state.breakSecs-60})}},{key:"startStop",value:function(){this.state.started?(this.setState({started:!1}),clearInterval(this.timer),this.timer=null):(this.setState({started:!0}),this.timer=setInterval(this.rundownTimer,1e3))}},{key:"rundownTimer",value:function(){if("Session"===this.state.mode){if(this.setState({sessionSecs:this.state.sessionSecs-1}),this.state.sessionSecs<0)return clearInterval(this.timer),document.getElementById("beep").play(),this.setState({mode:"Break",sessionSecs:60*this.state.sessionMins,started:!1}),this.formatTimer(),void this.startStop()}else if(this.setState({breakSecs:this.state.breakSecs-1}),this.state.breakSecs<0)return clearInterval(this.timer),document.getElementById("beep").play(),this.setState({mode:"Session",breakSecs:60*this.state.breakMins,started:!1}),this.formatTimer(),void this.startStop()}},{key:"reset",value:function(){this.setState({sessionMins:25,sessionSecs:1500,breakMins:5,breakSecs:300,mode:"Session",started:!1}),clearInterval(this.timer),this.timer=null,document.getElementById("beep").pause(),document.getElementById("beep").currentTime=0}},{key:"formatTimer",value:function(){var e;e="Session"===this.state.mode?this.state.sessionSecs:this.state.breakSecs;var t=Math.floor(e/60),s=e%60;return(t=t<10?"0"+t:t)+":"+(s=s<10?"0"+s:s)}},{key:"render",value:function(){return i.a.createElement("div",{id:"container"},i.a.createElement("h1",null,"Pomodoro Clock"),i.a.createElement("div",{id:"settings"},i.a.createElement("div",{id:"session"},i.a.createElement("div",{id:"session-label"},"Session Length"),i.a.createElement("br",null),i.a.createElement("div",{id:"session-control"},i.a.createElement("button",{type:"button",id:"session-decrement",onClick:this.changeSession},"-"),i.a.createElement("div",{id:"session-length"}," ",this.state.sessionMins," "),i.a.createElement("button",{type:"button",id:"session-increment",onClick:this.changeSession},"+"))),i.a.createElement("div",{id:"break"},i.a.createElement("div",{id:"break-label"},"Break Length"),i.a.createElement("br",null),i.a.createElement("div",{id:"break-control"},i.a.createElement("button",{type:"button",id:"break-decrement",onClick:this.changeBreak},"-"),i.a.createElement("div",{id:"break-length"}," ",this.state.breakMins," "),i.a.createElement("button",{type:"button",id:"break-increment",onClick:this.changeBreak},"+")))),i.a.createElement("div",{id:"timer"},i.a.createElement("div",{id:"timer-label"},this.state.mode),i.a.createElement("br",null),i.a.createElement("div",{id:"time-left"},this.formatTimer()),i.a.createElement("br",null),i.a.createElement("button",{id:"start_stop",onClick:this.startStop},i.a.createElement("i",{className:"fas fa-play-circle"})," / ",i.a.createElement("i",{className:"fas fa-pause"})),i.a.createElement("button",{id:"reset",onClick:this.reset},i.a.createElement("i",{className:"fas fa-undo"}))),i.a.createElement("audio",{id:"beep",src:"https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"}),i.a.createElement("div",{id:"footer"},"by C.Fung"))}}]),s}(i.a.Component));r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(h,null)),document.getElementById("root"))},8:function(e,t,s){e.exports=s(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.ec921e04.chunk.js.map