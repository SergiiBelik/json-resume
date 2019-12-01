
$.getJSON('resume.json', function(data) {
	render(data)
});


function render(jsonResume){
	$('.name').text(jsonResume.basics.name);
	$(".email i").text(jsonResume.basics.email);
	$(".phone-number i").text(jsonResume.basics.phone);
	$(".linkedIn i a").text(jsonResume.basics.profiles[0].username).attr({
		href: jsonResume.basics.profiles[0].url,
		target: '_blank'
	});;
	$(".gitHub i a").text(jsonResume.basics.profiles[1].username).attr({
		href: jsonResume.basics.profiles[1].url,
		target: "_blank"
	});
	$('<img>').attr({
		src: jsonResume.basics.picture,
		alt: 'photo',
	}).addClass('photo').appendTo('.photo');
	$('.summary').text(jsonResume.basics.summary);
	$.each(jsonResume.education, function(index, el) {
		$('.education').append(el.institution + " · " + el.startDate + " - " + el.endDate + "<br>" + el.studyType + " in " + el.area)
	});
	$(jsonResume.skills).each(function(index, value){
		$(".skills").append("<li>"+value.keywords.join(", ")+"</li>");
		}
	)
	$.each(jsonResume.publications, function(index, el) {
		$("<a>"+el.name+"</a> <span>" + el.summary + "<br>" + el.website+"</span><br><br>").attr({
			href: el.website,
			target: "_blank"
		}).appendTo('.projects')
	});
	$.each(jsonResume.courses, function(index, el) {
		$("<li>"+el.name+"</li>").css({
			"font-weight": 'normal'
		}).appendTo('.listOfCourses');
	});
	$.each(jsonResume.interests, function(index, el) {

		$("<div class='categoryOfActivities'></div>").text(el.name + ":").appendTo('.activities');
		$("<div class='listOfActivities'></div>").text(el.keywords.join(", ")).appendTo('.activities');
		$("<br>").appendTo('.activities')
	});
	$.each(jsonResume.work, function(index, value){
		$("<div class='dates'>"+value.startDate+ " - "+value.endDate+"</div>").appendTo(".employementWrapper");
		$("<div class='description'><b>"+value.company+"</b> · "+value.location+"<br><i><b><span class='title'>"+value.position+"</span></b></i><ul class='highlights'></ul></div>").appendTo(".employementWrapper");
		$.each(value.highlights, function(i, highlight){
			$("<li>"+highlight+"</li>").appendTo('.highlights:last');
		})
	});
}


// render(jsonResume);