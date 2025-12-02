//! 1

function PassTest(grade, comment) {
    if (grade >= 50 || comment === 'Pass') {
      return true;  
    } else {
      return false;
    }
}

//! 2

function GoOutside(weatherGood, timeAvailable, ready) {
    if (weatherGood || (timeAvailable && ready)) {
    return true;  //  go out
    } else {
      return false; // stay inside
    }
}

//! 3

function TakeStep(noBarrier, spaceAvailable, signal) {
    if (noBarrier && spaceAvailable || signal === 'Go') {
      return true;  // Take a step if theres no barrier and space is available, or if the signal is Go
    } else {
      return false; // Stay still 
    }
}


//! 4

function TakeItem(item, allowed, otherDoesntWant) {
    if (item && (allowed || otherDoesntWant)) {
      return true;  // Take the item if it's available and either allowed or not wanted by someone else
    } else {
      return false; // Don't take the item otherwise
    }
}

//! 5
function RecallInformation(taskCurrent, infoNeeded, timeAvailable) {
    if (taskCurrent || (infoNeeded && timeAvailable)) {
      return true;  // Recall if the task is current, or if the info is needed and time is available
    } else {
      return false; // Don't recall otherwise
    }
}

//! 6
function Sleep(isLate, isTired, wakeUpEarly, lightOff) {
    if ((isLate && isTired) || (wakeUpEarly && lightOff)) {
      return true;  // Sleep if it's late and you're tired, or if you need to wake up early and the light is off
    } else {
      return false; // Don't sleep otherwise
    }
}


//! 7
function GoToParty(friendsAgree, noWorkTomorrow, partyNearby) {
    if (friendsAgree && (noWorkTomorrow || partyNearby)) {
      return true;  // Go to the party if friends agree and either no work tomorrow or the party is nearby
    } else {
      return false; // Don't go to the party otherwise
    }
}

//! 8
function StayHome(weatherBad, noPlans) {
    if ((weatherBad === 'rainy' || weatherBad === 'snowy') && noPlans) {
      return true;  // Stay at home if the weather is rainy or snowy and there are no plans to go outside
    } else {
      return false; // Go out otherwise
    }
}

//! 9

function GoForRun(weatherDry, hasRunningShoes, friendReady) {
    if ((weatherDry && hasRunningShoes) || friendReady) {
      return true;  // Go for a run if the weather is dry and we have running shoes, or if a friend is ready
    } else {
      return false; // Don't go for a run otherwise
    }
}

//! 10

function WatchFootball(isWeekend, noOtherPlans, favoriteTeamPlaying) {
    if ((isWeekend && noOtherPlans) || favoriteTeamPlaying) {
      return true;  // Watch football if it's the weekend and there are no other plans, or if your favorite team is playing
    } else {
      return false; // Don't watch football otherwise
    }
}