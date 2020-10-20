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
      $groupsData[$i]["Group_title"] = $tarif["title"];
      $groupsData[$i]["Group_speed"] = $tarif["speed"];
      $prices = [];
      for ($j = 0; $j < count($tarif["tarifs"]); $j++) {
        $prices[] = $tarif["tarifs"][$j]["price"];
      }
      $minPerMonth = max($prices) / 12;
      $maxPerMonth = min($prices);
      $prices = [];
      $groupsData[$i]["Group_price"] = $minPerMonth.' – '.$maxPerMonth;
      if (isset($tarif["free_options"])) {
        foreach ($tarif["free_options"] as $option) {
          $groupsData[$i]["Group_free"][] = $option;
        }
      }
      $groupsData[$i]["Group_link"] = $tarif["link"];
      $i++;
    }
    $data = json_encode($groupsData, JSON_UNESCAPED_UNICODE);
    print($data);
  };

  function getGroupData($groupNumber){
    global $tarifsJson;
    $groupData["Tarif_title"] = $tarifsJson["tarifs"][$groupNumber]["title"];
    $prices = [];
    $j = 1;
    for ($i = 0; $i < count($tarifsJson["tarifs"][$groupNumber]["tarifs"]); $i++) {
      array_push($prices, $tarifsJson["tarifs"][$groupNumber]["tarifs"][$i]["price"]);
    }
    $maxPerMonth = min($prices);
    foreach($tarifsJson["tarifs"][$groupNumber]["tarifs"] as $tarif) {
      $pricePerMonth = $tarif["price"] / $tarif["pay_period"];
      $groupData[$j]["Tarif_period"] = $tarif["pay_period"];
      $groupData[$j]["Tarif_price"] = $pricePerMonth;
      $groupData[$j]["Full_price"] = $tarif["price"];
      $groupData[$j]["New_day"] = $tarif["new_payday"];
      if ($pricePerMonth < $tarif["price"]) {
        $groupData[$j]["Tarif_discount"] = ($maxPerMonth - $pricePerMonth) * $tarif["pay_period"];
      }
      $j++;
    }
    function sortArray($a, $b) {
      if(isset($a["Tarif_period"])) {
      return $a["Tarif_period"] - $b["Tarif_period"];
      }
    }
    usort($groupData, "sortArray");
    $data = json_encode($groupData, JSON_UNESCAPED_UNICODE);
    print($data);
  };
?>