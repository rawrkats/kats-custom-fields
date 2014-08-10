$ = jQuery;
$(document).on('ready',function(){

	var urlFields;
	var mediaButton = $(' <span class="wp-media-buttons-icon loadmediawindow button updatemeta button-small"> Choose Media</span>');
	mediaButton.insertAfter($('#metavalue'));

	function AddMediaButtons() {
		urlFields = $('input[value*="url"],input[value*="icon"],input[value*="file"],input[value*="pdf"]');
		$.each(urlFields,function(i,obj){
			var buttonGroup = $(this).parent().find('div.submit');
			if (buttonGroup.find('.loadmediawindow').length == 0) {
				mediaButton.clone().appendTo(buttonGroup);
			}
		});
	}
	AddMediaButtons();

	$( document ).ajaxComplete(function() {
	  	AddMediaButtons();
	});
	
	// credit: https://gist.github.com/halfempty/4771812
	var file_frame;
	var UrlField;

	$('body').on('click', '.loadmediawindow', function( event ){
		UrlField = $(this).parents('tr').find('textarea');
	  	event.preventDefault();

		if ( file_frame ) {
			file_frame.open();
			return;
		}

		file_frame = wp.media.frames.file_frame = wp.media({
			title: $( this ).data( 'uploader_title' ),
			button: {
				text: $( this ).data( 'uploader_button_text' ),
			},
			multiple: false  
		});

		file_frame.on( 'select', function() {
			attachment = file_frame.state().get('selection').first().toJSON();
			$(UrlField).val(attachment.url);
		});

		file_frame.open();

	});
});
