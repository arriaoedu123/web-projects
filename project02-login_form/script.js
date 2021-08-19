/*
# Creator: Arreaum
# GitHub: https://github.com/arriaoedu123/
# Creation date: 05/11/2020
# Update date: 19/08/2021
# Version: 1.2
*/

//coming back to sign in form when click on "Sign in" in recovery form
$(".options-04 a").click(function () {
  $('.signup-form').hide("slow");
  $('.recovery-form').hide("slow");
  $(".login-form").animate(
  {
    height: "toggle",
    opacity: "toggle",
  },
  "slow"
  );
});


//coming back to sign in form when click on "Sign in" in sign up form
$(".options-03 a").click(function () {
  $('.signup-form').hide("slow");
  $('.recovery-form').hide("slow");
  $(".login-form").animate(
  {
    height: "toggle",
    opacity: "toggle",
  },
  "slow"
  );
});

//going to sign up form when click on "Sign up" in sign in form
$(".options-02 a").click(function () {
  $('.login-form').hide("slow");
  $('.recovery-form').hide("slow");
  $(".signup-form").animate(
  {
    height: "toggle",
    opacity: "toggle",
  },
  "slow"
  );
});

//going to recovery form when click on "Forgot passowrd?" in sign in form
$(".options-01 a").click(function () {
  $('.login-form').hide("slow");
  $(".recovery-form").animate(
  {
    height: "toggle",
    opacity: "toggle",
  },
  "slow"
  );
});