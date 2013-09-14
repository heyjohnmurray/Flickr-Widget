<!DOCTYPE html>
<html>
	<head>
		<title>Flickr Widget</title>
		<link href="css/complete.css" rel="stylesheet" type="text/css">
		<link href="http://fonts.googleapis.com/css?family=Asap:400,700,400italic,700italic" rel="stylesheet" type="text/css">
		<script type="text/javascript" src="http://code.jquery.com/jquery-latest.pack.js"></script>
		<script type="text/javascript" src="js/style.js"></script>
	</head>
	<body>
		<div class="container clearfix">
			<div class="box-16">
				<div class="row">
					<!-- <h1>Create Your Own Flickr&trade; widget</h1> -->
				</div>
				<!-- close row -->
			</div>
			<!-- close box-16 -->							
			<div class="box-8">
				<div class="row">
					<div class="settings">
						<h3 class="section-header">Design Your Widget</h3>						
						<div class="box-6">
							<div class="row with-spacing">
								<div class="widget-size">
									<h4>Widget Size</h4>
									
									<ul class="wRow clearfix">
										<li data-row="0" data-column="0">
											<a href="/" class="widget-box"></a>
										</li>
										<li data-row="0" data-column="1">
											<a href="/" class="widget-box"></a>
										</li>
										<li data-row="0" data-column="2">
											<a href="/" class="widget-box"></a>
										</li>
										<li data-row="0" data-column="3">
											<a href="/" class="widget-box"></a>
										</li>
									</ul>
									<ul class="wRow clearfix">
										<li data-row="1" data-column="0">
											<a href="/" class="widget-box"></a>
										</li>
										<li data-row="1" data-column="1">
											<a href="/" class="widget-box"></a>
										</li>
										<li data-row="1" data-column="2">
											<a href="/" class="widget-box"></a>
										</li>
										<li data-row="1" data-column="3">
											<a href="/" class="widget-box"></a>
										</li>
									</ul>
									<ul class="wRow clearfix">
										<li data-row="2" data-column="0">
											<a href="/" class="widget-box"></a>
										</li>
										<li data-row="2" data-column="1">
											<a href="/" class="widget-box"></a>
										</li>
										<li data-row="2" data-column="2">
											<a href="/" class="widget-box"></a>
										</li>
										<li data-row="2" data-column="3">
											<a href="/" class="widget-box"></a>
										</li>
									</ul>
								</div>
								<!-- close #widget-size -->
							</div>
							<!-- close row -->
						</div>
						<!-- close box-6 -->
						
						<div class="box-10">
							<div class="row with-spacing">
								<div class="image-size">
									<h4>Image Size</h4>									
									<ul class="clearfix">
										<li><a href="/" class="large" data-size="large"></a></li>
										<li><a href="/" class="medium" data-size="medium"></a></li>
										<li><a href="/" class="small" data-size="small"></a></li>						
									</ul>								
								</div>
								<!-- close #image-size -->
							</div>
							<!-- close .row -->
						</div>
						<!-- close .box-7 -->
						<div class="box-16">
							<div class="row with-spacing">
								<a href="/" class="button right js-get-code">Get Widget Code &raquo;</a>
							</div>
							<!-- close .row -->
						</div>
						<!-- close .box-16 -->
						
						<div class="box-16">
							<div class="row with-spacing">
								<div class="code-output">
									<h4>Here's Your Code</h4>
									<textarea name="" id=""></textarea>
								</div>
								<!-- close #code-output -->
							</div>
							<!-- close .row -->
						</div>
						<!-- close .box-16 -->
					</div>
					<!-- close #settings -->
				</div>
				<!-- close row -->
			</div>
			<!-- close box -->
			<div class="box-8">
				<div class="row">
					<div class="preview">
						<h3 class="section-header">Live Preview</h3>						
						<div class="images">					
							<div class="loading">
								<img src="images/loader.gif" width="" height="" alt="" />
							</div>
							<!-- flickr feed gets dynamically generated here via AJAX -->
						</div>
						<!-- close .images -->
					</div>
					<!-- close #preview -->
				</div>
				<!-- close .row -->
			</div>
			<!-- close .box-8 -->
		</div>
		<!-- close .container -->
	</body>
</html>