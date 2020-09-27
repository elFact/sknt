<?php
  $json = file_get_contents("data.json");
  $tarifsJson = json_decode( $json, true);

  if ($_GET['view'] == 'groups') {
    getGroupsData();
  }
  function getGroupsData() {
    global $tarifsJson;
    $groupsData = [];
    $i = 0;
    foreach ($tarifsJson["tarifs"] as $tarif) {
      $groupsData[$i]["Group title"] = $tarif["title"];
      $groupsData[$i]["Group speed"] = $tarif["speed"];
      $prices = [];
      for ($j = 0; $j < count($tarif["tarifs"]); $j++) {
        $prices[] = $tarif["tarifs"][$j]["price"];
      }
      $minPerMonth = max($prices) / 12;
      $maxPerMonth = min($prices);
      $prices = [];
      $groupsData[$i]["Group price"] = $minPerMonth.' – '.$maxPerMonth;
      if (isset($tarif["free_options"])) {
        foreach ($tarif["free_options"] as $option) {
          $groupsData[$i]['Group free'][] = $option;
        }
      }
      $groupsData[$i]["Group link"] = $tarif["link"];
      $i++;
    }
    $data = json_encode($groupsData);
    print_r($data);
  };

  function getGroupData($groupNumber){
    
  };

  function getTarifData($tarif) {

  };
?>