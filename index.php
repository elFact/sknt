<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="style.css">
  <title>Тарифы</title>
</head>
<body>
  <main class="content" id="tarifs">
    <template v-if="show === 'groups'">
      <?php
        require('json.php');
        renderGroups();
      ?>
    </template>
    <template v-if="show === 'group'">
      <div v-html="content"></div>
    </template>
  </main>
  <script src="vue.js"></script>
  <script src="axios.min.js"></script>
  <script src="script.js"></script>
</body>
</html>