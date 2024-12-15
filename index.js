    	const profile = "https://en.gravatar.com/14106ea5e28c77719dc42ebd20273f9e.json";

		fetch(profile)
			.then(response => {
		    	if (!response.ok) {
		        	throw new Error("Network response was not ok");
		        }
		        return response.json();
		    })

		    .then(data => {
		    	const bio = data.entry[0].aboutMe || "No bio available.";
		    	const pfp = data.entry[0].thumbnailUrl || "No thumbnailUrl available.";
		        document.getElementById("bio").textContent = bio;
				document.getElementById("pfp").src = pfp + "?s=180";
		    })
		    .catch(error => {
		    	console.error("There was a problem with the fetch operation:", error);
		        document.getElementById("bio").textContent = "Yōkoso, watashi no Sōru Sosaeti e.";
				document.getElementById("pfp").src = "./images/profile.jpg";
		    });
		
    	
        document.addEventListener('click', function() {
            var audio = document.getElementById('myAudio');
    
            audio.play().then(() => {
            }).catch(function(error) {
                console.log('Playback prevented:', error);
            });
    
            document.removeEventListener('click', arguments.callee);
        });
