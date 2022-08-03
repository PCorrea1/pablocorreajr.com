

function getActivities(){

    const activities_link = "https://www.strava.com/api/v3/athlete/activities?access_token=3ce13a7350ab004be138b57afa5a2e48841964ab"
    fetch(activities_link)
        .then((res) => console.log(res.json))

}

getActivities()