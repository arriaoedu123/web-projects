/*
# Creator: Arreaum
# GitHub: https://github.com/arriaoedu123/
# Creation date: 05/11/2020
# Update date: 11/05/2020
# Version: 1.1
*/

$(".options-04 a").click(function () {
        $('.registro-form').hide("slow");
        $('.recuperacao-form').hide("slow");
        $(".login-form").animate(
          {
            height: "toggle",
            opacity: "toggle",
          },
          "slow"
        );
      });

      $(".options-03 a").click(function () {
        $('.registro-form').hide("slow");
        $('.recuperacao-form').hide("slow");
        $(".login-form").animate(
          {
            height: "toggle",
            opacity: "toggle",
          },
          "slow"
        );
      });

      $(".options-02 a").click(function () {
        $('.login-form').hide("slow");
        $('.recuperacao-form').hide("slow");
        $(".registro-form").animate(
          {
            height: "toggle",
            opacity: "toggle",
          },
          "slow"
        );
      });

      $(".options-01 a").click(function () {
        $('.login-form').hide("slow");
        $(".recuperacao-form").animate(
          {
            height: "toggle",
            opacity: "toggle",
          },
          "slow"
        );
      });