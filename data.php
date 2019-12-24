<?php

$output = array();
for($i = 1; $i <= 10; $i++) {
  $data = array( "id" => $i, "value" => rand(0, 9) );
  array_push($output, $data);
}
echo json_encode($output);
?>