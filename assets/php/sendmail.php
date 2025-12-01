<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . '/../../PHPMailer/src/Exception.php';
require __DIR__ . '/../../PHPMailer/src/PHPMailer.php';
require __DIR__ . '/../../PHPMailer/src/SMTP.php';

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->Encoding = 'base64';

try {

    $mail->isSMTP();
    $mail->Host       = 'smtp.gmail.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'jeansilvax1697@gmail.com'; // SEU GMAIL
    $mail->Password   = 'hkpd ywnu yzul ynfz';        // SENHA DE APP
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = 587;

    $mail->setFrom('jeansilvax1697@gmail.com', 'Portfólio - Contato');
    $mail->addAddress('jeansilvax1697@gmail.com');

    $mail->isHTML(false);
    
    $mail->Subject = "Nova mensagem do portfólio - " . $_POST['name'];
    $mail->Body    = "Nome: " . $_POST['name'] . "\n"
                   . "Email: " . $_POST['email'] . "\n\n"
                   . "Mensagem:\n" . $_POST['message'];

    $mail->send();

    echo json_encode(['status' => 'success', 'message' => 'Email enviado com sucesso!']);

} catch (Exception $e) {

    echo json_encode([
        'status' => 'error',
        'message' => 'Erro ao enviar: ' . $mail->ErrorInfo
    ]);
}
?>
