<?php
  // if(isset( $_POST[ 'submit' ] )) {
    $msg = 'Nome: ' .$_POST[ 'name' ]. "\n"
      .'Email: ' .$_POST[ 'email' ]. "\n"
      .'Comment:' .$_POST[ 'comment' ];

    mail('dsilvermax@gmail.com', 'Sample Contact PHP Form', $msg);

  // } else {
    echo 'rodou';
  //   exit(0);
  // }
?>
