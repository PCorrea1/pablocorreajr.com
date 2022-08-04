https://www.strava.com/oauth/token?client_id=91142&client_secret=217274bcb34de972f7037193069cd966293f56f0&refresh_token=a724bf6544b3865d659f8c16fce7f5cf3ae3ef5a&grant_type=refresh_token


const auth_link = "https://www.strava.com/oauth/token"
function getActivities(){

    const activities_link = "https://www.strava.com/api/v3/athlete/activities?access_token=d3e4d2f0362eba72523b6c693106bf6775d17dbb"
    fetch(activities_link)
        .then((res) => console.log(res.json()))

}

getActivities()

function reAuthorize(){
    fetch(auth_link,{
        method:'post',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },

        body: JSON.stringify({

            client_id: 'xxxx',
            client_secret: 'xxxx',
            refresh_token: 'xxxx',
            grant_type: 'refresh_token'
        })
    }).then(res => res.json())
        .then(res => getActivities(res))
}

reAuthorize()