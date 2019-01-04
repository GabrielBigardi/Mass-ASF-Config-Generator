<?php
error_reporting(0);

extract($_GET);

function getStr($string, $start, $end) {
    $str = explode($start, $string);
    $str = explode($end, $str[1]);
    return $str[0];
}

function getStrExtra($string, $start, $end, $indice) {
    $str = explode($start, $string);
    $str = explode($end, $str[$indice]);
    return $str[0];
}

function deletarCookies() {
    if (file_exists("cookie.txt")) {
        unlink("cookie.txt");
    }
}



$lista = str_replace(" ", "", $lista);
$separa = explode(":", $lista);
$name = $separa[0];
$pass = $separa[1];

$filename = $name;



//echo "Username: $name<br>Password: $pass<br><br>Saving as: $filename";
	
	
	$fp = fopen('../contas/'.$filename.'.json', "a");
	fwrite($fp, '{
  "SteamLogin": "'.$name.'",
  "SteamPassword": "'.$pass.'",
  "Enabled": true
}');
	fclose($fp);
	echo "Saved as: $filename.json";

?>