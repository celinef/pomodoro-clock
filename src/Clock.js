import React from 'react';
import './Clock.css';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sessionMins: 25,
      sessionSecs: 1500,
      breakMins: 5,
      breakSecs: 300,
      mode: "Session",
      started: false
    }
    this.changeSession = this.changeSession.bind(this);   
    this.changeBreak = this.changeBreak.bind(this);
    this.startStop = this.startStop.bind(this);
    this.reset = this.reset.bind(this);
    this.formatTimer = this.formatTimer.bind(this);
    this.rundownTimer = this.rundownTimer.bind(this);
    this.timer = null;
  }
    
  changeSession(e) {
    if (e.target.innerText === "+" && this.state.sessionMins < 60) {
      this.setState( {sessionMins: this.state.sessionMins+1, sessionSecs: this.state.sessionSecs+60});
    } 
    else if  (e.target.innerText === "-" && this.state.sessionMins > 1) {
      this.setState( {sessionMins: this.state.sessionMins-1, sessionSecs: this.state.sessionSecs-60});
    }
  } 
  changeBreak(e) {
    if (e.target.innerText === "+" && this.state.breakMins < 60) {
      this.setState( {breakMins: this.state.breakMins+1, breakSecs: this.state.breakSecs+60});
    } 
    else if  (e.target.innerText === "-" && this.state.breakMins > 1) {
      this.setState( {breakMins: this.state.breakMins-1, breakSecs: this.state.breakSecs-60});
    }
  }
  startStop() {
    if (!this.state.started) {
      this.setState( {started: true} );
      this.timer = setInterval( this.rundownTimer, 1000);
    } else {
      this.setState( {started: false} );
      clearInterval(this.timer);
      this.timer = null;
    }
  }
  rundownTimer() {
    if (this.state.mode==="Session") {
      this.setState({sessionSecs: this.state.sessionSecs-1});
      if (this.state.sessionSecs < 0) {
        clearInterval(this.timer);
        // beep, switch label and start countdown again
        document.getElementById("beep").play();
        this.setState( {mode: "Break", sessionSecs: this.state.sessionMins*60, started: false} );      
        this.formatTimer();
        this.startStop();
        return;
      }
    } else { // "Break"
      this.setState({breakSecs: this.state.breakSecs-1});
      if (this.state.breakSecs < 0) {
        clearInterval(this.timer);
        // beep, switch label and start countdown again
        document.getElementById("beep").play();
        this.setState( {mode: "Session", breakSecs: this.state.breakMins*60, started: false} );      
        this.formatTimer();
        this.startStop();
        return;
      }    
    }
  }
  reset() {
    this.setState({sessionMins: 25, sessionSecs: 1500, breakMins: 5, breakSecs: 300, mode: "Session", started: false});
    clearInterval(this.timer);
    this.timer = null;
    //pause and rewind the beep
    document.getElementById("beep").pause();
    document.getElementById("beep").currentTime = 0;
  }
  formatTimer() {
    let mySeconds;
    if (this.state.mode==="Session") mySeconds = this.state.sessionSecs;
    else  mySeconds = this.state.breakSecs;
    let minutes = Math.floor(mySeconds/ 60);
    let seconds = mySeconds % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    return minutes + ':' + seconds;
  }
  
  render () {
    return (
      <div id="container">
        <h1>Pomodoro Clock</h1>
        <div id="settings">
          <div id="session">
            <div id="session-label">Session Length</div><br/>
            <div id="session-control">     
              <button type="button" id="session-decrement" onClick={this.changeSession}>-</button>
              <div id="session-length"> {this.state.sessionMins} </div>  
              <button type="button" id="session-increment" onClick={this.changeSession}>+</button>
            </div>
          </div>
          <div id="break">       
            <div id="break-label">Break Length</div><br/>
            <div id="break-control">
              <button type="button" id="break-decrement" onClick={this.changeBreak}>-</button> 
              <div id="break-length"> {this.state.breakMins} </div>     
              <button type="button" id="break-increment" onClick={this.changeBreak}>+</button>              
            </div>
          </div>
        </div>
        <div id="timer">
          <div id="timer-label">{this.state.mode}</div><br/>
          <div id="time-left">{this.formatTimer()}</div><br/>
          <button id="start_stop" onClick={this.startStop}><i className="fas fa-play-circle"></i> / <i className="fas fa-pause"></i></button>
          <button id="reset" onClick={this.reset}><i className="fas fa-undo"></i></button>
        </div>
        <audio id="beep" src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"/>
        <div id="footer">by C.Fung</div>
   </div>
    )
  }
}

export default Clock;