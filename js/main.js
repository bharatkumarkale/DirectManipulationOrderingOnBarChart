var App = App || {};

(function() {

	App.models = {};
	App.views = {};
	App.targetID = '#displayPane';

	App.init = function(id, descId, instructionsId) {
		var selectedEle = document.getElementById(id),
			descEle = document.getElementById(descId),
			instructionsEle = document.getElementById(instructionsId),
			descText = 'Possible tasks include:<br><ol>',
			instructionsText = '<ul>';

		descText += '<li>Order bars in any order of your preference.</li>'
		descText += '<li>Order all bars in ascending/descending order.</li>'
		descText += '<li>Make a selection of few neighbouring bars. Order all the selected bars in ascending/descending order.</li>'
		descText += '<li>Make a selection of few non-neighbouring bars. Order all the selected bars in ascending/descending order.</li>'
		
		instructionsText += '<li>Drag a bar directly to reposition it. </li>'
		instructionsText += '<li><B>Soritng:</B> Drag the tallest bar to right/left most boundary to sort in ascending/descending order.</li>';
		instructionsText += '<li><B>Selections:</B> Click a bar to select it. Click any where else to clear the selection. Use the tallest bar in the selection to reorder only the selected bars.</li>';
		
		descText += '</ol>';
		instructionsText += '</ul>';

		descEle.innerHTML = descText;
		instructionsEle.innerHTML = instructionsText;

		App.models.data = new DataModel();
		App.views.simpleBarChartView = new SimpleBarChartView(App.targetID)
		
		App.models.data.loadSimpleBarChartData().then(data => {
			App.views.simpleBarChartView.data(App.models.data.getSimpleBarChartData()).draw();
		})
	}

	function clearView() {
		if (App.views.simpleBarChartView) App.views.simpleBarChartView.clear();
	}

})();