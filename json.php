<?php
  $json = file_get_contents("http://sknt.ru/job/frontend/data.json");
  $tarifsJson = json_decode( $json, true);
  if($_GET['view'] == 'tarifs') { 
    echo renderGroups();
  } elseif (($_GET['view'] == 'tarif') && isset($_GET['group'])) {
    echo renderGroup($_GET['group']);
  }
  function renderGroups()
  {
    global $tarifsJson;
    $groupNumber = 0;
    echo '<div class="wrapper">';
    foreach ($tarifsJson["tarifs"] as $tarif) {
      echo '<section class="tarif" ';
      echo 'v-on:click="showGroup('.$groupNumber++.')">';
      echo '<div class="tarif__wrapper">';
      echo '<h2 class="tarif__name">'.'Тариф '.'"'.$tarif["title"].'"'.'</h2>';
      echo '<p class="tarif__speed';
        if (strpos($tarif["title"],'Земля') !== false) {
          echo ' tarif__speed_earth';
        } elseif (strpos($tarif["title"],'Вода') !== false) {
          echo ' tarif__speed_water';
        } elseif (strpos($tarif["title"],'Огонь') !== false) {
          echo ' tarif__speed_fire';
        }
      echo '">'.$tarif["speed"].'</p>';
      echo '<p class="tarif__prices">';
        $prices = [];
        for ($i = 0; $i < count($tarif["tarifs"]); $i++) {
          array_push($prices, $tarif["tarifs"][$i]["price"]).'<br>';
        }
        $minPerMonth = max($prices) / 12;
        $maxPerMonth = min($prices);
        echo $minPerMonth.' - '.$maxPerMonth;
        $prices = [];
      echo '</p>';
      if (isset($tarif["free_options"])) {
        foreach ($tarif["free_options"] as $option) {
          echo '<p class="tarif__additional">'.$option.'</p>';
        }
      }
      echo '<p class="tarif__details"><a href="'.$tarif["link"].'">узнать подробнее на сайте www.sknt.ru</a></p>';
      echo '<svg class="arrow">
              <polyline points="12,0 25,12 12,25"/>
            </svg>';
      echo '</div>';
      echo '</section>';
      }
    echo '</div>';
  };

  function renderGroup($groupNumber){
    global $tarifsJson;
    $prices = [];
    for ($i = 0; $i < count($tarifsJson["tarifs"][$groupNumber]["tarifs"]); $i++) {
      array_push($prices, $tarifsJson["tarifs"][$groupNumber]["tarifs"][$i]["price"]).'<br>';
    }
    $maxPerMonth = min($prices);
    echo '<div class="group-wrapper">';
    echo '<h1 class="tarif-title">Тариф "'.$tarifsJson["tarifs"][$groupNumber]["title"].'"</h1>';
    foreach($tarifsJson["tarifs"][$groupNumber]["tarifs"] as $tarif){
      $pricePerMonth = $tarif["price"]/$tarif["pay_period"];
      echo '<section class="group">';
      echo '<h2 class="group__period">'.$tarif["title"].'</h2>';
      echo '<p class="group__monthly-price">'.$pricePerMonth.'</p>';
      echo '<p class="group__full-price">разовый платеж – '.$tarif["price"].'</p>';
      echo '<svg class="arrow arrow_tarif arrow_group arrow_back">
              <polyline points="12,0 25,12 12,25"/>
            </svg>';
      if ($pricePerMonth < $tarif["price"]){
        echo '<p class="group__discount">скидка – '.($maxPerMonth-$pricePerMonth)*$tarif["pay_period"].'</p>';
      }
      echo '</section>';
    }
    echo '</div>';
  };
?>