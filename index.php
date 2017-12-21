<?php require_once('shared/header.php'); ?>

<div ng-controller="ThoughtController" class="wrapper">
	<h1>Think<strong>!</strong></h1>
	<h2>An experiment in thoughts.</h2>
	<form name="add_thought_form" ng-submit="addThought()">
		<div class="border"><input type="text" id="new_thought" name="new_thought" ng-model="newThought" required placeholder="What are you thinking?..."></div>
		<button class="share-btn" ng-disabled="add_thought_form.$invalid">Think!</button>
	</form>

	<div id="thoughts">
		<ul class="thoughts-list">
			<li ng-repeat="thought in thoughts">
				{{thought.text}}
			</li>
		</ul>
		<div id="thoughts_overlay"></div>
	</div>
</div>

<?php require_once('shared/footer.php'); ?>
