//<![CDATA[(function(e){var h="https://3.bp.blogspot.com/-I8GlZCcWUcs/WIeYvT74DmI/AAAAAAAAAIg/yKJsz7lnT3MW1SgAFbwlh3BPcwTvsEAWACLcB/s1600/loading-pos.gif";var i="";var b=null;var a="div.blog-posts";var d=false;var g=e(window);var k=e(document);var f=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;function c(m){e.getScript("http://"+m+".disqus.com/blogger_index.js")}function j(){if(d){return}d=true;if(!i){b.hide();return}b.find("a").hide();b.find("img").show();e.ajax(i,{dataType:"html"}).done(function(o){var m=e("<div></div>").append(o.replace(f,""));var n=m.find("a.blog-pager-older-link");if(n){i=n.attr("href")}else{i="";b.hide()}var p=m.find(a).children(".date-outer");e(a).append(p);if(window._gaq){window._gaq.push(["_trackPageview",i])}if(window.gapi&&window.gapi.plusone&&window.gapi.plusone.go){window.gapi.plusone.go()}if(window.disqus_shortname){c(window.disqus_shortname)}if(window.FB&&window.FB.XFBML&&window.FB.XFBML.parse){window.FB.XFBML.parse()}b.find("img").hide();b.find("a").show();d=false})}function l(){if(_WidgetManager._GetAllData().blog.pageType=="item"){return}i=e("a.blog-pager-older-link").attr("href");if(!i){return}var n=e('<a class="loadpost" href="javascript:;"><div class="loadmore-button">Load More</div></a>');n.click(j);var m=e('<img src="'+h+'" style="display: none;">');b=e('<div class="loadmore"></div>');b.append(n);b.append(m);b.insertBefore(e("#blog-pager"));e("#blog-pager").hide()}e(document).ready(l)})(jQuery);
//]]>$(document).ready(function(){$("#profile, #resume, #contact, #blog").hide();$(".menu-depan-atas li").click(function () {$(".active").removeClass("active");$(this).addClass("active");$(".tab-candellas, .tab-posting").slideUp();var content_show = $(this).attr("type");$("#"+content_show).slideDown();});});$(document).ready(function(){$(".header-depan").hide();$(".menu-depan-atas li").click(function(){$(".header-depan").show();});$(".menu-depan-atas li.active").click(function(){$(".header-depan").hide();});});$(function() { $(window).scroll(function() { if($(this).scrollTop()&gt;0) { $("#BounceToTop").fadeIn(); } else { $("#BounceToTop").fadeOut(); } });$("#BounceToTop").click(function() { $("body,html").animate({scrollTop:0},800) .animate({scrollTop:25},200) .animate({scrollTop:0},150) .animate({scrollTop:10},100) .animate({scrollTop:0},50); }); });
