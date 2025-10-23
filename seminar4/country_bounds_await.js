import fetch from "node-fetch"

async function getObjectFromUrl(url) {
    const response = await fetch(url)
    const text = await response.text()
    return JSON.parse(text)
}

async function getCountryBounds(country) {

    const object = await getObjectFromUrl(`https://nominatim.openstreetmap.org/search?country=${country}&format=json`)
    return {
        minLatitude: object[0].boundingbox[0],
        maxLatitude: object[0].boundingbox[1],
        minLongitude: object[0].boundingbox[2],
        maxLongitude: object[0].boundingbox[3]
    }

}

//getCountryBounds('Romania').then(bounds => console.log('Romania: ', bounds))
//getCountryBounds('France').then(bounds => console.log('France: ', bounds))


///ex 6 - functie care obtine lista avioanelor de deasupra Romaniei
async function getPlanesOverCountry(country){
    try{
        const bounds=await getCountryBounds(country);
        const object=await getObjectFromUrl(`https://opensky-network.org/api/states/all?lamin=${bounds.minLatitude}&lomin=${bounds.minLongitude}&lamax=${bounds.maxLatitude}&lomax=${bounds.maxLongitude}`);

        if(!object.states){
            console.log(`Nu s-au gasit avioane deasupra ${country}`);
            return [];
        }

        const planes=object.states.map( plane => ({
            callsign:plane[1]?.trim() || "N/A",
            origin_country:plane[2],
            longitude:plane[5],
            latitude:plane[6],
            altitude:plane[7]
        }));

        console.log(`Avioane deasupra tarii ${country} : ${planes.length}`);
        return planes;
    }catch(err){
        console.error("Eroare!",err.message);
    }
}


getPlanesOverCountry("Romania");
getPlanesOverCountry("Canada");