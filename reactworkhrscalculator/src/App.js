import React, { useState } from 'react';

function convertTimeToMinutes(timeInput) {
  // Split the time input into hours and minutes
  const [hours, minutes] = timeInput.split(':').map(Number);

  // Calculate the total time in minutes
  const totalMinutes = hours * 60 + minutes;

  return totalMinutes;
}


function App() {
  const [loginTime, setLoginTime] = useState();
  const [logoutTime, setLogoutTime] = useState();
  const [breakTime, setBreakTime] = useState();
  // const [loginAmPm, setLoginAmPm] = useState('AM'); // Initialize with 'AM'
  // const [logoutAmPm, setLogoutAmPm] = useState('AM'); // Initialize with 'AM'
  // const timeInput = "2:30"; // Replace with the time entered in your input field
  // const totalMinutes = convertTimeToMinutes(timeInput);
  // loginTime = convertTimeToMinutes(loginTime);
  // logoutTime = convertTimeToMinutes(logoutTime);
  setLoginTime(convertTimeToMinutes(loginTime));
  setLogoutTime(convertTimeToMinutes(logoutTime));
  // console.log(`Login minutes: ${login}`); 
  return (
    <div>
      <h2>Time Tracker</h2>
      <form>
        <div>
          <label htmlFor="loginTime">Login Time: </label>
          <input
            type="time"
            id="loginTime"
            value={loginTime}
            onChange={(e) => setLoginTime(e.target.value)}
          />
          {/* <select
            id="loginAmPm"
            value={loginAmPm}
            onChange={(e) => setLoginAmPm(e.target.value)}
          >
            <option value="AM">AM</option>
            <option value="PM">PM</option>
          </select> */}
        </div>
        <div>
          <label htmlFor="logoutTime">Logout Time: </label>
          <input
            type="time"
            id="logoutTime"
            value={logoutTime}
            onChange={(e) => setLogoutTime(e.target.value)}
          />
          {/* <select
            id="logoutAmPm"
            value={logoutAmPm}
            onChange={(e) => setLogoutAmPm(e.target.value)}
          >
            <option value="AM">AM</option>
            <option value="PM">PM</option>
          </select> */}
        </div>
        <div>
          <label htmlFor="breakTime">Break Time (In Minutes): </label>
          <input
            type="time"
            id="breakTime"
            value={breakTime}
            onChange={(e) => setBreakTime(e.target.value)}
          />
        </div>
      </form>
      <div>
      <p>Login Time: {loginTime}</p>
      <p>Logout Time: {logoutTime}</p>
      <p>Break Time: {breakTime}</p>
      </div>
    </div>
  );
}

export default App;
