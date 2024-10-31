function sendStudentInfo() {
   // Get the values from the input fields
   const name = document.getElementById('الأسم').value;
   const address = document.getElementById('مكان السكن').value;
   const birthdate = document.getElementById('المواليد').value;
   const imageFile = document.getElementById('صورةالوجه').files[0];
 
   // Create an email body
   const mailBody = `
     الأسم: ${name}
     مكان السكن: ${address}
     المواليد: ${birthdate}
   `;
 
   // Create a mailto link with the email body and image attachment
   const mailtoLink = `mailto:xifo072@gmail.com?subject=معلومات الطالب&body=${encodeURIComponent(mailBody)}&attachments=${imageFile}`;
 
   // Open the mailto link
   window.location.href = mailtoLink;
 }