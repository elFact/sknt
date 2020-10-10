<?php
  $json = file_get_contents("http://sknt.ru/job/frontend/data.json");
  $tarifsJson = json_decode( $json, true);

  if (isset($_GET["view"]) && $_GET["view"] == "groups") {
    getGroupsData();
  } elseif (isset($_GET["view"]) && $_GET["view"] == "group" && isset($_GET["group"])) {
    getGroupData($_GET["group"]);
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
      $groupData[$j]["Tarif period"] = $tarif["pay_period"];
      $groupData[$j]["Tarif price"] = $pricePerMonth;
      $groupData[$j]["Full price"] = $tarif["price"];
      $groupData[$j]["New day"] = $tarif["new_payday"];
      if ($pricePerMonth < $tarif["price"]) {
        $groupData[$j]["Tarif discount"] = ($maxPerMonth - $pricePerMonth) * $tarif["pay_period"];
      }
      $j++;
    }
    function sortArray($a, $b) {
      if(isset($a["Tarif period"])) {
      return $a["Tarif period"] - $b["Tarif period"];
      }
    }
    usort($groupData, "sortArray");
    $data = json_encode($groupData, JSON_UNESCAPED_UNICODE);
    print_r($data);
  };
?>