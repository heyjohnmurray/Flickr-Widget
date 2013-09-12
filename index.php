<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
	<head>
		<title>Flickr Widget</title>
		<link href="css/style.css" rel="stylesheet" type="text/css">
		<link href="http://fonts.googleapis.com/css?family=Asap:400,700,400italic,700italic" rel="stylesheet" type="text/css">
		<script type="text/javascript" src="http://code.jquery.com/jquery-latest.pack.js"></script>
		<script type="text/javascript" src="js/style.js"></script>
	</head>
	<body>
		<div class="container clearfix">
			<div class="box-16">
				<!-- <h1>Create Your Own Flickr&trade; widget</h1> -->
			</div>
			<!-- close .wrapper -->
			<div id="settings" class="box-8">
											
				<h3 class="section-header">Design Your Widget</h3>
				
				<div class="box-8 margin-none">				
					
					<div id="widget-size" class="box-4">
						<h4>Widget Size</h4>
						
						<ul class="wRow clearfix">
							<li data-row="1" data-column="1">
								<a href="/" class="widget-box"></a>
							</li>
							<li data-row="1" data-column="2">
								<a href="/" class="widget-box"></a>
							</li>
							<li data-row="1" data-column="3">
								<a href="/" class="widget-box"></a>
							</li>
							<li data-row="1" data-column="4">
								<a href="/" class="widget-box"></a>
							</li>
						</ul>
						<ul class="wRow clearfix">
							<li data-row="2" data-column="1">
								<a href="/" class="widget-box"></a>
							</li>
							<li data-row="2" data-column="2">
								<a href="/" class="widget-box"></a>
							</li>
							<li data-row="2" data-column="3">
								<a href="/" class="widget-box"></a>
							</li>
							<li data-row="2" data-column="4">
								<a href="/" class="widget-box"></a>
							</li>
						</ul>
						<ul class="wRow clearfix">
							<li data-row="3" data-column="1">
								<a href="/" class="widget-box"></a>
							</li>
							<li data-row="3" data-column="2">
								<a href="/" class="widget-box"></a>
							</li>
							<li data-row="3" data-column="3">
								<a href="/" class="widget-box"></a>
							</li>
							<li data-row="3" data-column="4">
								<a href="/" class="widget-box"></a>
							</li>
						</ul>
					</div>
					<!-- close #widget-size -->
					
					<div id="image-size" class="box-4">
						<h4>Image Size</h4>
						
						<ul class="clearfix">
							<li><a href="/" id="large"></a></li>
							<li><a href="/" id="medium"></a></li>
							<li><a href="/" id="small"></a></li>						
						</ul>
						
					</div>
					<!-- close #image-size -->
					<br class="clear" />
					
					<div id="scheme-chooser" class="box-4">
						<h4>Choose a Color Scheme</h4>
						
						<ul class="clearfix">
							<li><a href="/" class="scheme-1"></a></li>
							<li><a href="/" class="scheme-2"></a></li>
							<li><a href="/" class="scheme-3"></a></li>
							<li><a href="/" class="scheme-4"></a></li>
						</ul>																
						
						<div id="advanced-options">
							<a href="/" id="show-options">Advanced Options &raquo;</a>
							
							<div id="color-editor">
								<ul class="labels">
									<li>Background</li> 
									<li class="text-arrow">&#8627; Text</li> 
									<li>Header/Footer</li> 
									<li class="text-arrow">&#8627; Text</li>
								</ul>
								<ul>
									<li><input type="text" maxlength="7" name="background" class="background"/></li>
									<li><input type="text" maxlength="7" name="text" class="text"/></li>
									<li><input type="text" maxlength="7" name="header-footer" class="header-footer"/></li>
									<li><input type="text" maxlength="7" name="header-footer-text" class="header-footer-text"/></li>								 								
								</ul>
								
								<br class="clear" />						
								
								<a href="/" id="apply-colors">Apply Colors &raquo;</a>
							</div>
							
						</div>
						<!-- close #advanced-colors.box-4 -->
					</div>
					<!-- close #scheme-chooser -->	
					
				</div>
				<!-- close left side -->					
				
				<div class="box-8">
				
					<div id="code-output">
						<h4>Here's Your Code</h4>
						<textarea name="" id=""></textarea>
					</div>
					<!-- close #code-output -->					
					
				</div>
				<!-- close right side -->
							
			</div>
			<!-- close #settings.box-16 -->			
			
			<div id="preview" class="box-8">
			
				<h3 class="section-header">Live Preview</h3>
				
				<div class="widget clearfix">
					
					<div class="widget-header">
						
					</div>
					<!-- close .widget-header -->
					
					<div class="images box-8 margin-none clearfix">					
						<ul>
							<!-- flickr feed gets dynamically generated here via AJAX -->
						</ul>	
					</div>
					<!-- close .images -->
					
				</div>
				<!-- close .widget -->								
				
			</div>
			<!-- close #preview.box-16 -->
						
		</div>
		<!-- close .container -->
	</body>
</html>
