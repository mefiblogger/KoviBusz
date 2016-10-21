<?php

if ($argc < 2) {
    echo "Hianyzo parameter: filenev\n";
    exit(1);
}

$filename = $argv[1];

if (!($f = fopen($filename, "r"))) {
    echo "Nem tudom megnyitni: {$filename}\n";
    exit(1);
}

$stops = [];
fgetcsv($f); //fejlec atugrasa

while ($stop = fgetcsv($f)) {
    $stops[] = [
        "id"    =>  $stop[0],
        "name"  =>  $stop[1],
        "lat"   =>  $stop[2],
        "lon"   =>  $stop[3],
    ];
}

echo json_encode($stops, JSON_PRETTY_PRINT + JSON_UNESCAPED_UNICODE);
