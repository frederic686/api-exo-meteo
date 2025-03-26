/*let url="https://api.open-meteo.com/v1/forecast?latitude=48.8534&longitude=2.3488&daily=weather_code&hourly=temperature_2m,precipitation,wind_speed_10m,wind_direction_10m&current=temperature_2m,is_day,precipitation,wind_direction_10m,wind_speed_10m,weather_code,rain&timezone=Europe%2FBerlin&start_date=2025-03-25&end_date=2025-04-01"*/
let url = "https://api.open-meteo.com/v1/forecast?latitude=48.8534&longitude=2.3488&daily=sunrise,sunset,weather_code,daylight_duration&hourly=temperature_2m,precipitation,wind_speed_10m,wind_direction_10m&current=is_day,temperature_2m,precipitation,wind_direction_10m,wind_speed_10m,weather_code&timezone=Europe%2FBerlin"

fetch(url)

.then(function(response) {
    return response.json();
})

.then(function(donnees) {
    console.log(donnees);

    let temperature = donnees.current.temperature_2m;
    let vitdirection = donnees.current.wind_direction_10m;
    let time = donnees.current.time;
    let weathercode = donnees.current.weather_code ;
    let vitvent = donnees.current.wind_speed_10m;

    let jour = donnees.daily.time;
    let codesem = donnees.daily.weather_code;
    let journuit = donnees.current.is_day
    ;


    document.getElementById("resultat").innerHTML =
    "temperature : " + temperature + " celsius" +
    "<br> direction du vent: " + vitdirection +"°"+
    "<br> l'heure " + time + ""+
    "<br> vitesse du vent " + vitvent + " km/h"+
    "<br> code climat maintenant " + weathercode+
    "<br> jours " + jour+
    "<br> les code semaine" + codesem;
    
    document.getElementById("date").innerHTML =
    "lheure " + time + "";

   
    backgroundclimat(weathercode);
    backgroundarrow();
    backgroundvent(vitdirection);
    soleilune(journuit);
    jour1(codesem, jour);
    jour2(codesem, jour);
    jour3(codesem, jour);
    jour4(codesem);
    jour5(codesem);
    jour6(codesem);
    jour7(codesem);

})

.catch (function (erreur) {
    console.log(erreur);
    document.getElementById("resultat").innerHTML = "erreur"

})


function backgroundarrow() {
    let compas = document.getElementById("compas")
    compas.style.backgroundImage ="url(./assets/img/compass.png)";
}

/* bousole un peut long
function backgroundvent(vitdirection) {
    let compasarrow = document.getElementById("compas");
    compasarrow.innerHTML = '<img id="arrow" src="./assets/img/compass-arrow.png">';

    let img = document.getElementById("arrow");

    if (img) {
        if (vitdirection === 0) {

            img.style.transform = "rotate(0deg)";
        } else if (vitdirection > 0 && vitdirection <= 90) {

            img.style.transform = "rotate(0deg)";
        } else if (vitdirection > 90 && vitdirection <= 180) {

            img.style.transform = "rotate(90deg)";
        } else if (vitdirection > 180 && vitdirection <= 270) {

            img.style.transform = "rotate(180deg)";
        } else if (vitdirection > 270 && vitdirection <= 360) {

            img.style.transform = "rotate(270deg)";
        }
    }
}
*/
function backgroundvent(vitdirection) {
    let compasarrow = document.getElementById("compas");
    compasarrow.innerHTML = '<img id="arrow" src="./assets/img/compass-arrow.png">';

    let img = document.getElementById("arrow");

    if (img) {
        img.style.transform = `rotate(${vitdirection}deg)`;
    }
}



function backgroundclimat(weathercode) {
        
    let meteo = document.getElementById("meteo");

    
    if (weathercode ===0 ) {
        meteo.style.backgroundImage ="url(./assets/img/sun.jpg)";

    }else if (weathercode>0 && weathercode<=3 ){
        meteo.style.backgroundImage ="url(./assets/img/suncloud.jpg)";
    
     } else if (weathercode>3 && weathercode<=67 ){
        meteo.style.backgroundImage ="url(./assets/img/cloud.jpg)";

      } else if (weathercode>67 && weathercode<=80 ){
        meteo.style.backgroundImage ="url(./assets/img/snow.jpg)";

      } else if (weathercode>80 && weathercode<=95 ){
        meteo.style.backgroundImage ="url(./assets/img/rain.jpg)";

      } else if (weathercode>95) {
        meteo.style.backgroundImage ="url(./assets/img/thunder.jpg)";
} 
}

function soleilune(journuit) {
    let soleilune = document.getElementById("soleilune");

    if (journuit===1) {
        soleilune.style.backgroundImage ="url(./assets/img/Sunday.png)";
    } else {
        soleilune.style.backgroundImage ="url(./assets/img/moon.png)";
    }
}

function jour1(codesem, jour) {
        
    let jour1 = document.getElementById("jour1");
    let jour9 = jour[0];

    
    if (codesem[0] ===0) {
        jour1.innerHTML = '<img src="./assets/img/Property 1=sun.png">'+
         jour9;


    }else if (codesem[0]>0 && codesem[0]<=3 ){
        jour1.innerHTML = '<img src="./assets/img/Property 1=cloud.png">'+
         jour9;
    
     } else if (codesem[0]>3 && codesem[0]<=67 ){
        jour1.innerHTML = '<img src="./assets/img/Property 1=wind.png">'+
         jour9;

      } else if (codesem[0]>67 && codesem[0]<=80 ){
        jour1.innerHTML = '<img src="./assets/img/Property 1=rainy.png">'+
         jour9;

      } else if (codesem[0]>80 && codesem[0]<=95 ){
        jour1.innerHTML = '<img src="./assets/img/Property 1=snow.png">'+
         jour9;

      } else if (codesem[0]>95) {
        jour1.innerHTML = '<img src="./assets/img/Property 1=thunder.png">'+
         jour9;
} 
}

function jour2(codesem, jour) {
        
    let jour2 = document.getElementById("jour2");
    let jour9 = jour[1];
    
    if (codesem[1] ===0) {
        jour2.innerHTML = '<img src="./assets/img/Property 1=sun.png">'+
         jour9;

    }else if (codesem[1]>0 && codesem[1]<=3 ){
        jour2.innerHTML = '<img src="./assets/img/Property 1=cloud.png">'+
         jour9;
    
     } else if (codesem[1]>3 && codesem[1]<=67 ){
        jour2.innerHTML = '<img src="./assets/img/Property 1=wind.png">'+
         jour9;

      } else if (codesem[1]>67 && codesem[1]<=80 ){
        jour2.innerHTML = '<img src="./assets/img/Property 1=rainy.png">'+
         jour9;

      } else if (codesem[1]>80 && codesem[1]<=95 ){
        jour2.innerHTML = '<img src="./assets/img/Property 1=snow.png">'+
         jour9;

      } else if (codesem[1]>95) {
        jour2.innerHTML = '<img src="./assets/img/Property 1=thunder.png">'+
         jour9;
} 
}

function jour3(codesem, jour) {
        
    let jour3 = document.getElementById("jour3");
    let jour9 = jour[2];
    
    if (codesem[2] ===0) {
        jour3.innerHTML = '<img src="./assets/img/Property 1=sun.png">'+
         jour9;

    }else if (codesem[2]>0 && codesem[2]<=3 ){
        jour3.innerHTML = '<img src="./assets/img/Property 1=cloud.png">'+
         jour9;
    
     } else if (codesem[2]>3 && codesem[2]<=67 ){
        jour3.innerHTML = '<img src="./assets/img/Property 1=wind.png">'+
         jour9;

      } else if (codesem[2]>67 && codesem[2]<=80 ){
        jour3.innerHTML = '<img src="./assets/img/Property 1=rainy.png">'+
         jour9;

      } else if (codesem[2]>80 && codesem[2]<=95 ){
        jour3.innerHTML = '<img src="./assets/img/Property 1=snow.png">'+
         jour9;

      } else if (codesem[2]>95) {
        jour3.innerHTML = '<img src="./assets/img/Property 1=thunder.png">'+
         jour9;
} 
}

function jour4(codesem) {
        
    let jour4 = document.getElementById("jour4");
    let jour9 = jour[2];
    
    if (codesem[3] ===0) {
        jour4.innerHTML = '<img src="./assets/img/Property 1=sun.png">';

    }else if (codesem[3]>0 && codesem[3]<=3 ){
        jour4.innerHTML = '<img src="./assets/img/Property 1=cloud.png">';
    
     } else if (codesem[3]>3 && codesem[3]<=67 ){
        jour4.innerHTML = '<img src="./assets/img/Property 1=wind.png">';

      } else if (codesem[3]>67 && codesem[3]<=80 ){
        jour4.innerHTML = '<img src="./assets/img/Property 1=rainy.png">';

      } else if (codesem[3]>80 && codesem[3]<=95 ){
        jour4.innerHTML = '<img src="./assets/img/Property 1=snow.png">';

      } else if (codesem[3]>95) {
        jour4.innerHTML = '<img src="./assets/img/Property 1=thunder.png">';
} 
}

function jour5(codesem) {
        
    let jour5 = document.getElementById("jour5");
    let jour9 = jour[2];
    
    if (codesem[4] ===0) {
        jour5.innerHTML = '<img src="./assets/img/Property 1=sun.png">';

    }else if (codesem[4]>0 && codesem[4]<=3 ){
        jour5.innerHTML = '<img src="./assets/img/Property 1=cloud.png">';
    
     } else if (codesem[4]>3 && codesem[4]<=67 ){
        jour5.innerHTML = '<img src="./assets/img/Property 1=wind.png">';

      } else if (codesem[4]>67 && codesem[4]<=80 ){
        jour5.innerHTML = '<img src="./assets/img/Property 1=rainy.png">';

      } else if (codesem[4]>80 && codesem[4]<=95 ){
        jour5.innerHTML = '<img src="./assets/img/Property 1=snow.png">';

      } else if (codesem[4]>95) {
        jour5.innerHTML = '<img src="./assets/img/Property 1=thunder.png">';
} 
}

function jour6(codesem) {
        
    let jour6 = document.getElementById("jour6");

    
    if (codesem[5] ===0) {
        jour6.innerHTML = '<img src="./assets/img/Property 1=sun.png">';

    }else if (codesem[5]>0 && codesem[5]<=3 ){
        jour6.innerHTML = '<img src="./assets/img/Property 1=cloud.png">';
    
     } else if (codesem[5]>3 && codesem[5]<=67 ){
        jour6.innerHTML = '<img src="./assets/img/Property 1=wind.png">';

      } else if (codesem[5]>67 && codesem[5]<=80 ){
        jour6.innerHTML = '<img src="./assets/img/Property 1=rainy.png">';

      } else if (codesem[5]>80 && codesem[5]<=95 ){
        jour6.innerHTML = '<img src="./assets/img/Property 1=snow.png">';

      } else if (codesem[5]>95) {
        jour6.innerHTML = '<img src="./assets/img/Property 1=thunder.png">';
} 
}

function jour7(codesem) {
        
    let jour7 = document.getElementById("jour7");

    
    if (codesem[6] ===0) {
        jour7.innerHTML = '<img src="./assets/img/Property 1=sun.png">';

    }else if (codesem[6]>0 && codesem[6]<=3 ){
        jour7.innerHTML = '<img src="./assets/img/Property 1=cloud.png">';
    
     } else if (codesem[6]>3 && codesem[6]<=67 ){
        jour7.innerHTML = '<img src="./assets/img/Property 1=wind.png">';

      } else if (codesem[6]>67 && codesem[6]<=80 ){
        jour7.innerHTML = '<img src="./assets/img/Property 1=rainy.png">';

      } else if (codesem[6]>80 && codesem[6]<=95 ){
        jour7.innerHTML = '<img src="./assets/img/Property 1=snow.png">';

      } else if (codesem[6]>95) {
        jour7.innerHTML = '<img src="./assets/img/Property 1=thunder.png">';
} 
}


