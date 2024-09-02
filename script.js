document.getElementById('alarmButton').addEventListener('click', function() {
    // Ask for the user's location
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            // Send location to the server or notify nearby users
            triggerAlarm(latitude, longitude);
        }, error => {
            alert('Error getting location: ' + error.message);
        });
    } else {
        alert('Geolocation is not supported by this browser.');
    }
});

function triggerAlarm(latitude, longitude) {
    alert('Alarm triggered! Location: (' + latitude + ', ' + longitude + ')');
    
    // Example of sending data to the server
    /*
    fetch('/api/trigger-alarm', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ latitude, longitude })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
    */
}
