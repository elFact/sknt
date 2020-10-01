<?php
  $json = file_get_contents("data.json");
  $tarifsJson = json_decode( $json, true);

  if ($_GET["view"] == "groups") {
    getGroupsData();
  } elseif ($_GET["view"] == "group" && isset($_GET["group"])) {
    getGroupData($_GET["group"]);
  } elseif (isset($_GET["groupNum"]) && isset($_GET["tarifNum"])) {
    getTarifData($_GET["groupNum"], $_GET["tarifNum"]);
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
          $groupsData[$i]["Group free"][] = $option;
        }
      }
      $groupsData[$i]["Group link"] = $tarif["link"];
      $i++;
    }
    $data = json_encode($groupsData, JSON_UNESCAPED_UNICODE);
    print_r($data);
  };

  function getGroupData($groupNumber){
    global $tarifsJson;
    $groupData["Tarif title"] = $tarifsJson["tarifs"][$groupNumber]["title"];
    $prices = [];
    $j = 1;
    for ($i = 0; $i < count($tarifsJson["tarifs"][$groupNumber]["tarifs"]); $i++) {
      array_push($prices, $tarifsJson["tarifs"][$groupNumber]["tarifs"][$i]["price"]);
    }
    $maxPerMonth = min($prices);
    foreach($tarifsJson["tarifs"][$groupNumber]["tarifs"] as $tarif) {
      $pricePerMonth = $tarif["price"] / $tarif["pay_period"];
      $groupData[$j]["Tarif period"] = ($tarif["title"] == $tarifsJson["tarifs"][$groupNumber]["title"]) ? '1 месяц'
      : str_replace(['(',')', $tarifsJson["tarifs"][$groupNumber]["title"]],'',$tarif["title"]);
      $groupData[$j]["Tarif price"] = $pricePerMonth;
      $groupData[$j]["Full price"] = $tarif["price"];
      if ($pricePerMonth < $tarif["price"]) {
        $groupData[$j]["Tarif discount"] = ($maxPerMonth - $pricePerMonth) * $tarif["pay_period"];
      }
      $j++;
    }
    // $data = json_encode($tarifData);
    $data = json_encode($groupData, JSON_UNESCAPED_UNICODE);
    print_r($data);
  };

  function getTarifData($groupNumber, $tarifNum) {
    global $tarifsJson;
    $tarifData["Title"] = $tarifsJson["tarifs"][$groupNumber]["title"];
    $tarifData["Period"] = $tarifsJson["tarifs"][$groupNumber]["tarifs"][$tarifNum]["pay_period"];
    $tarifData["Price"] = $tarifsJson["tarifs"][$groupNumber]["tarifs"][$tarifNum]["price"];
    $tarifData["Price per month"] = $tarifData["Price"] / $tarifData["Period"];
    $data = json_encode($tarifData, JSON_UNESCAPED_UNICODE);
    print_r($data);
  };
?>