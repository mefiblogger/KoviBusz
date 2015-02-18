# Kovibusz

A Kovibusz egy adott busz kovetkezo indulasi idejet mutatja.

Nagyon kezdetleges, jelenleg a 178-as busz Zsolt utca -> Keleti Palyaudvar menetrendjet mutatja.

A celja, hogy peldaul az irodaban egy monitoron meg lehet jeleniteni, hasonloan mint a Futar megalloiban lathato kijelzoket.

A menetrend adatokat a BKK Futar API segitsegevel kerdezi le.

Jelenleg buszhoz van ikon, de az API tud kezelni metrot, villamost stb.

## Telepites

```npm install```

## Futtatas

```node app.js```

Bongeszoben: http://localhost:3000/

## Jarat modositasa

A FutarRequest.js fajlban az URL-ben lathato, hogyan kerdezi ki az adatokat, ezt kell modositani masik jarathoz.

## Ecetera

A licensz MIT, a keszito [Mefi](http://mefi.be/), vidd es hasznald egeszseggel!
