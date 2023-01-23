<?php
header('Content-Type: application/json');
include("dbcon.php");

        $query_sum = mysqli_query($con, "SELECT SUM(kiasi) as mapato, Sum(DISTINCT Bid) as matumizi, extract(MONTH FROM `tarehe`) as mwezi FROM mapato_tbl LEFT JOIN (select SUM(kiasiMatumizi) as Bid, extract(month FROM `dat`) as mon1 from matumizi_tbl WHERE extract(year FROM `dat`) = 2020 group by extract(month FROM `dat`)) as Bcount ON extract(month FROM `tarehe`) = Bcount.mon1 WHERE extract(year FROM `tarehe`) = 2020 GROUP BY extract(month FROM `tarehe`)
        ")or die(mysqli_error($con));
        while ($results = mysqli_fetch_array($query_sum)) {
        $amountMatumizi = $results['matumizi'];
        $mwezi = $results['mwezi'];
        $dateObj   = DateTime::createFromFormat('!m', $mwezi);
        $monthName = $dateObj->format('F');
        $amountMapato = $results['mapato'];
        $data[] = array("mapatoMwezi"=>$amountMapato,"matumiziMwezi"=>$amountMatumizi,"Mwezi"=>$monthName);
    }
  echo json_encode($data);
?>
