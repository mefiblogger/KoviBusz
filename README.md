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

## Oldalak mukodese

**/**

Cimlap, itt jelenik meg a terkep es itt valaszthato ki egy adott megallo.

**/stops/19.03128147125244,19.10874366760254,47.501750118882335,47.517693418192316**

A megadott befoglalo teglalapon belul talalhato megallokat adja vissza JSON formatumban.

**/select-route/009025**

A megalloban az aktualis menetrend szerint elerheto jaratokat adja vissza HTML formatumban.

**/stop/F01096/route/BKK_5100**

A megalloban az adott jarat legkorabbi indulasat mutatja.

## Ecetera

A licensz MIT, a keszito [Mefi](http://mefi.be/), vidd es hasznald egeszseggel!
