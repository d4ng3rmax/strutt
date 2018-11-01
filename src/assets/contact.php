<?php
$errors = '';

if( empty( $errors ) ) {

    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);
    $response_array = array();

    $from_email = $request->email;
    $message    = $request->message;
    $phone    = $request->phone;
    $from_name  = $request->name;

    $to_email = "contato@strutt.com.br";

    $contact = "<p><strong>Name: </strong> $from_name</p><p><strong>Email:</strong> $from_email</p><p><strong>Telefone:</strong> $phone</p>";
    $content = "<p>$message</p>";

    $website = "Strutturale";
    $email_subject = "Contato Strutturale - strutt.com.br";

    $email_body = "<html><body>";
    $email_body = "<div style='margin-top: 10px; margin-bottom: 40px'><a href='http://www.strutt.com.br'><img src='http://www.strutt.com.br/assets/images/logo-mail.png' /></a></div>";
    $email_body .= "$contact $content";
    $email_body .= "</body></html>";

    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
    $headers .= "From: $from_email\n";
    $headers .= "Reply-To: $from_email";

    mail( $to_email, $email_subject, $email_body, $headers );

    $response_array['status'] = 'success';
    $response_array['from'] = $request->email." - ".$request->name;
    echo json_encode( $response_array );

} else {

    $response_array['status'] = 'error';
    echo json_encode($response_array);
}
?>
