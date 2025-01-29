const operatorSelector = document.getElementById("operatorSelector");
const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const output = document.getElementById("output");
const calculateButton = document.getElementById("calculateButton");

calculateButton.addEventListener("click", () => {
  /* Vi kan nå passe verdiene av våre inputs inn i calculateNumber on runtime, 
        husk at calculateNumber må også returnere en tallverdi som skal settes som textContent i output.
        så her må du også bruke return nøkkelordet for å returnere en verdi ut av funksjonen din.
        */
  output.textContent = calculateNumber(
    Number.parseFloat(num1Input.value),
    Number.parseFloat(num2Input.value),
    operatorSelector.value
  );
});

function calculateNumber(num1, num2, operator) {
  /* Lag ferdig funksjonen her, som tar inn to tall, num1 og num2 og en string som sier hva operasjon som skal gjøres
    de forskjellige verdiene operator kan ha, ser du i html filen, operator kan ha samme verdiene som
    hver option i select elementet,
    så den kan ha følgende verdi:
        "sum"
        "subtract"
        "multiply"
        "divide"
        "modulo"
    husk her at resultatet av operasjonen må returneres av metoden.
    Så her kan du bruke return nøkkelordet for å returnere en tallverdi ut av funskjonen.
    Du får kun lov å jobbe inni denne funksjonen, og du får ikke lage noen nye verdier på utsiden av denne funksjonen.
    Det kan få utforutsette problemer senere.
    */
  if (operator == "sum") {
    return num1 + num2;
  }
  if (operator== "subtract") {
    return num1 - num2;
  }
  if (operator== "multiply") {
    return num1 * num2;
  }
  if (operator == "divide") {
    return num1 / num2;
  }
  if (operator == "modulo") {
    return num1 % num2;
  }
}

/* Grunnen til at vi ofte koder på denne måten, er for å separere ut koden vår i blokker som kjører "uavhengig" av annen kode. 
alt som skjer i calculateNumber funksjonen vår, skal kun påvirke koden inni calculateNumber.
det eneste eventListeneren over vet, er at den får en verdi i return.
Vi bruker parameterer inn i calculateNumber for å gi den noen startverdier fra utsiden, som kan brukes inni funksjonen vår.

Da unngår vi å direkte manipulere globale verdier på utsiden av funksjonen vår, som ofte er en uting,
for hvis alle funksjoner jobber med globale verdier utenfor funksjonen vår, da er det vanskelig å ha oversikt
over hva de forskjellige verdiene faktisk er, og du kan få problemer med at en funksjon kanskje forventet at ene globale verdien vår
skulle ha en verdi, men hadde en annen.

Ved å bruke parametere inni en funksjon, og la funksjonen KUN jobbe med verdier og variabler deklarert i funksjonen, slipper vi dette problemet

Alt som skjer i funksjonen, blir i funksjonen (med unntak av det vi returnerer)*/
