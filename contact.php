<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Validate reCAPTCHA response
  $recaptcha_response = $_POST['g-recaptcha-response'];
  $recaptcha_secret = '6Lclm1wmAAAAAM1Q2FaZTbvXAhr2mM_z54kog4mM'; // Replace with your reCAPTCHA v2 secret key

  $recaptcha_url = 'https://www.google.com/recaptcha/api/siteverify';
  $recaptcha_data = array(
    'secret' => $recaptcha_secret,
    'response' => $recaptcha_response
  );

  $recaptcha_options = array(
    'http' => array(
      'header' => "Content-type: application/x-www-form-urlencoded\r\n",
      'method' => 'POST',
      'content' => http_build_query($recaptcha_data)
    )
  );

  $recaptcha_context = stream_context_create($recaptcha_options);
  $recaptcha_result = file_get_contents($recaptcha_url, false, $recaptcha_context);
  $recaptcha_json = json_decode($recaptcha_result);

  if ($recaptcha_json->success) {
    // reCAPTCHA validation passed, proceed with sending the email
    $to = "keng.vang@tomakairos.com"; // Replace with your email address
    $subject = "Contact Form Submission";
    $email = $_POST["email"];
    $message = $_POST["message"];
    $headers = "From: $email\r\nReply-To: $email\r\n";

    if (mail($to, $subject, $message, $headers)) {
    header("Location: " . dirname($_SERVER['PHP_SELF']) . "./tk-recaptcha-success.html"); // Replace "error.html" with the desired HTML page URL
    exit();
    } else {
      // reCAPTCHA validation failed
    header("Location: " . dirname($_SERVER['PHP_SELF']) . "./tk-recaptcha-error2.html"); // Replace "error.html" with the desired HTML page URL
    exit();
    }
  } else {
    // reCAPTCHA validation failed
    header("Location: " . dirname($_SERVER['PHP_SELF']) . "./tk-recaptcha-error.html"); // Replace "error.html" with the desired HTML page URL
    exit();
  }
}
?>
