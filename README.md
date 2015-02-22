# KoviBusz 2.0.0

![Heroku](https://heroku-badge.herokuapp.com/?app=secret-journey-9548)

A KoviBusz egy adott busz kovetkezo indulasi idejet mutatja.

A celja, hogy peldaul irodakban, kozossegi helyeken egy monitoron meg lehet jeleniteni, hasonloan mint a Futar megalloiban lathato kijelzoket.

Minden menetrend adatot a BKK Futar API biztosit. Amennyiben elerheto, ugy a GPS szerinti erkezest mutatja, egyebkent a menetrend szerintit.

Habar a projekt neve KoviBusz, tamogatja az osszes BKK jarmuvet, igy a kisfoldalattit, metrot, HEV-et, villamost es trolibuszt is.

Nezd meg [Herokun](https://secret-journey-9548.herokuapp.com) vagy a [kovibusz.mefi.be](http://kovibusz.mefi.be) URL-en.

## Telepites

```npm install```

## Futtatas

```node app.js```

Bongeszoben: http://localhost:3000/

## Jarat modositasa

A FutarRequest.js fajlban az URL-ben lathato, hogyan kerdezi ki az adatokat, ezt kell modositani masik jarathoz.

## Ecetera

A licensz MIT, a keszito [Mefi](http://mefi.be/), vidd es hasznald egeszseggel!
