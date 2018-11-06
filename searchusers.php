<?php

require "vendor/autoload.php";

use Abraham\TwitterOAuth\TwitterOAuth;

$connection = new TwitterOAuth('NCRsbohuk10DznHImq8UY9OOK', '6lDZEYjQtntV3XX65iqfk5WUk6HLOurPi88Ebt6lFwPDyjKWwk', '1059833903286910977-O0YedZohxiLVH2RpfP1qH6cGoFxKYm', 'LbDDM3WkXtD7buL2BFPGDW8f20zWAvBQhqzi7NAkv4XZb');
$content = $connection -> get("account/verify_credentials");
$users = $connection -> get("users/search", ["q" => $_POST['query'], "count" => 20]);

echo json_encode($users);
