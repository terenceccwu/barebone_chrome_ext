// this is the code which will be injected into a given page...

(function() {

	$('input, select').change(function(){
		tagName = $(this).prop('tagName').toLowerCase();
		name = $(this).prop('name');
		val = $(this).val();
		console.log(tagName+'[name='+name+']', val);
	})

	chrome.runtime.sendMessage(null,{
		msg: 'hello!'
	},null, function(response) {
		console.log(response); // will be printed in front end
	});

})();
