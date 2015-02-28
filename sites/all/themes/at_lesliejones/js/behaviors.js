(function ($) {






Drupal.behaviors.addGridClass = {
   attach: function (context) {
  
  $('.gridview .view-content', context)
    .addClass('grid_b');
    }
    
   
    
};



Drupal.behaviors.gridlistFunction = {
   attach: function (context) {

   
   $('#block-block-7 button').click(function() {
       if ($(this).hasClass('grid-b')) {
           $('.gridview .view-content').removeClass('grid_a grid_c').addClass('grid_b');
           $.cookie('GRIDSET','grid_b', { path: '/', expires: 100000 });
           return false;
       }
       if ($(this).hasClass('grid-c')) {
           $('.gridview .view-content').removeClass('grid_a grid_b').addClass('grid_c');
           $.cookie('GRIDSET','grid_c', { path: '/', expires: 100000 });
           return false;
       }
       else if($(this).hasClass('grid-a')) {
           $('.gridview .view-content').removeClass('grid_b grid_c').addClass('grid_a');
           $.cookie('GRIDSET','grid_a', { path: '/', expires: 100000 });
           return false;
       }
       
       
   });
   
   
}


};


Drupal.behaviors.slickNav = {
attach: function(context) {

		$('#block-system-main-menu ul.menu').slicknav(
		
		{
		label: '', //this changes the label
	    duration: 1000
	    /* http://slicknav.com/ */
	    
		}
		
		);

}

};


Drupal.behaviors.stick = {
attach: function(context, settings) {


$('#block-system-main-menu').stickySidebar({

    sidebarTopMargin: 20,
    footerThreshold: 100

});



}


};






}(jQuery));





