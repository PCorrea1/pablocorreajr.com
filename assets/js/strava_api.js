

function getActivities(){

    const activities_link = "https://www.strava.com/api/v3/athlete/activities?access_token=d3e4d2f0362eba72523b6c693106bf6775d17dbb"
    fetch(activities_link)
        .then((res) => console.log(res.json()))

}

getActivities()