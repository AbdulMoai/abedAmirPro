const registerBtn = document.querySelector('.register .btn a');
const loginBtn = document.querySelector('.login .btn a');
const usernameInput = document.querySelector('.register .input_field:nth-of-type(1) input');
const emailInput = document.querySelector('.register .input_field:nth-of-type(2) input');
const passwordInput = document.querySelector('.register .input_field:nth-of-type(3) input');


$(document).ready(function(){
    $(".login").hide();
    $(".register_li").addClass("active");

    $(".login_li").click(function(){
      $(this).addClass("active");
      $(".register_li").removeClass("active");
      $(".login").show();
       $(".register").hide();
    })

    $(".register_li").click(function(){
      $(this).addClass("active");
      $(".login_li").removeClass("active");
      $(".register").show();
       $(".login").hide();
    })
});



    // Local data
    registerBtn.addEventListener('click', function(event) {
      event.preventDefault(); 
      var users = JSON.parse(localStorage.getItem('users') || '[]');
      var existingUser = users.find(function(user) {
        return user.email === emailInput.value;
      });

      if (existingUser) {
        alert('Email already used');
        return;
      }

      var user = { username: usernameInput.value, email: emailInput.value, password: passwordInput.value };
      users.push(user);
      localStorage.setItem('users', JSON.stringify(users));

     
      alert('Registration successful, please log in');
      window.location.href = 'login.html';
    });

    loginBtn.addEventListener('click', function(event) {
      event.preventDefault(); 
     
      const emailInput = document.querySelector('.login .input_field:nth-of-type(1) input');
      const passwordInput = document.querySelector('.login .input_field:nth-of-type(2) input');

      var users = JSON.parse(localStorage.getItem('users') || '[]');
      const user = users.find(function(user) {
        return user.email === emailInput.value && user.password === passwordInput.value;
      });

      if (user) {
        window.location.href = 'index.html';
      } else {
        alert('Invalid email or password');
      }
    });


