"use strict";$(document).ready(function(){var l=500,e=20,i=$("#wrap-sh-slider").width(),s=$(".sh-slider ul li").length,t=i-50-50,h=t/3*s*e-e;$(".sh-slider ul").css({width:h,marginLeft:-t/3});var r=$(".sh-slider ul li").height();function n(i){var l="0px 10px 20px #F1CDB3";$(i).css({"-webkit-box-shadow":l,"-moz-box-shadow":l,"box-shadow":l})}function d(i){$(i).css({"-webkit-box-shadow":"none","-moz-box-shadow":"none","box-shadow":"none"})}$(".sh-slider ul li").css({width:t/3,height:r,marginRight:e}),$(".sh-slider ul li:last-child").prependTo(".sh-slider ul"),$(".sh-slider").css({width:t+40,height:r,paddingTop:40,paddingBottom:40}),$(".sh-slider ul li:first-child").next().next().animate({height:r+40,marginTop:-20,marginLeft:-e,marginRight:0,zIndex:11},l),d($(".sh-slider ul li:first-child")),d($(".sh-slider ul li:first-child").next().next().next().next()),$("a.control_prev").click(function(i){n($(".sh-slider ul li")),$(".sh-slider ul li:first-child").next().animate({height:r+40,marginTop:-20,marginLeft:-e,marginRight:0,zIndex:11},l),$(".sh-slider ul li:first-child").next().next().animate({height:r,marginTop:0,marginLeft:0,marginRight:e,zIndex:1},l),$(".sh-slider ul").animate({left:+t/3},l,function(){$(".sh-slider ul li:last-child").prependTo(".sh-slider ul"),$(".sh-slider ul").css("left","")}),d($(".sh-slider ul li:last-child")),d($(".sh-slider ul li:first-child").next().next().next()),i.preventDefault()}),$("a.control_next").click(function(i){n($(".sh-slider ul li")),$(".sh-slider ul li:last-child").prev().prev().animate({height:r+40,marginTop:-20,marginLeft:-e,marginRight:0,zIndex:11},l),$(".sh-slider ul li:last-child").prev().prev().prev().animate({height:r,marginTop:0,marginLeft:0,marginRight:e,zIndex:1},l),$(".sh-slider ul").animate({left:-t/3},l,function(){$(".sh-slider ul li:first-child").appendTo(".sh-slider ul"),$(".sh-slider ul").css("left","")}),d($(".sh-slider ul li:last-child")),d($(".sh-slider ul li:last-child").prev().prev().prev().prev()),i.preventDefault()})});