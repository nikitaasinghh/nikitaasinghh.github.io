// function sendMail(){
//     var params={
//         name:document.getElementById("name").value,
//         email:document.getElementById("email").value,
//         subject:document.getElementById("subject").value,
//         msg:document.getElementById("msg").value,
//     };

//     const serviceId ="service_q61llqf";
//     const templateId="template_89u4yyd";

//     emailjs.send(serviceId,templateId,params)
//     .then(
//         res=>{
//             document.getElementById("name").value="";
//             document.getElementById("email").value="";
//             document.getElementById("subject").value="";
//             document.getElementById("msg").value="";
//             console.log(res);
//             alert("Your message sent successfully");
//         }
//     )
//     .catch((err)=> console.log(err));

// }

// function sendEmail() {
//             name=document.getElementById("name").value,
//             email=document.getElementById("email").value,
//             subject=document.getElementById("subject").value,
//             msg=document.getElementById("msg").value,
        
//     Email.send({
//       Host: "smtp.gmail.com",
//       Username: "${name}",
//      // Password: "Enter your password",
//       To: 'nikitaa.singh1109@gmail.com',
//       From: "${email}",
//       Subject: "${subject}",
//       Body: "${msg}",
//     })
//       .then(function (message) {
//         alert("mail sent successfully")
//       });
//   }