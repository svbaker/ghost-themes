/**
 * Main JS file for Casper behaviours
 */

// Techblog theme configuration
var config = {
  'highlightcode': true
};

$(document).ready(function() {
	// PRETTIFY PRE TAGS
	var prettify = false;
	$("pre code").parent().each(function() {
	  $(this).addClass('prettyprint');
	  prettify = true;
	});
	if(prettify && config.highlightcode == true){
	$.getScript("https://google-code-prettify.googlecode.com/svn/loader/run_prettify.js");
	}

});

/*globals jQuery, document */
(function ($) {
    "use strict";

    $(document).ready(function(){

        // On the home page, move the blog icon inside the header 
        // for better relative/absolute positioning.

        //$("#blog-logo").prependTo("#site-head-content");

    });

}(jQuery));


// DISQUS
/* * * CONFIGURATION VARIABLES: EDIT BEFORE PASTING INTO YOUR WEBPAGE * * */
var disqus_shortname = 'seanvbaker'; // required: replace example with your forum shortname

/* * * DON'T EDIT BELOW THIS LINE * * */
(function() {
    var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
    dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
})();


// GOOGLE ANALYTICS
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-36665120-4', 'seanvbaker.com');
ga('send', 'pageview');
