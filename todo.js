/*
todo list project

HTML
X div container
X div header
    x datum
    - evt. clear all
X div content
    x ul met todo items
        x check button
        x tekst
        x delete knop
    x div met add item
        x invulveld
        x add knop

Alles met classnames / ID's !!!

CSS
- zeer beperkt, alleen als er tijd is
- check/uncheck 
- linethrough
X thrashcan

JavaScript

// - ToDo functionaliteit

X getElements maken
X adjacentHTML gebruiken om ingevoerde taak in lijst te zetten
X tekstveld actief maken, eventListener enter / eventListener add-button



taak toevoegen
X inputveld lezen
X nieuwe rij
- signaal naar API dat taak toegevoegd moet worden

nav event in browser dom update, en signaal naar api


taak afstrepen 
X checkbox
- evt tekst doorstrepen
- bericht naar API wijziging status gedaan
taak verwijderen
X prullenbak
X taak uit lijst verdwijnen
- bericht naar API dat taak verwijderd wordt




// - API-functionaliteit

X Maak een API-request functie obv gebruikte basisversie 
    x gebruik Fetch
    x Juiste URL met endpoint (https://wincacademydatabase.firebaseio.com/jevoornaam/tasks.json)
    x HTTP functie GET
    x evt testen met Postman
    x data in json
    x hashes verwijderen
    x 'doorsturen' naar script.js Async await

 - wat staat er nog meer in documentatie?

**API requirements:** 

X GET: Verkrijg de (initiële) lijst met taken van de database.
X POST: Update de takenlijst met een nieuwe taak. 
Stuur alleen `{description: "blah", done: true}.`
Firebase genereert zelf een hash (een id) voor je todo.
- DELETE: Verwijder een taak uit de database. Gebruik de hash.
X Maak een file genaamd `api-client.js` zoals je hebt geleerd in de afgelopen week voor al je requests.

X Testen met Postman


*/
