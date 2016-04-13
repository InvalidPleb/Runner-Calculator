angular.module('templates-main', ['../app/404.html', '../app/index.html', '../app/views/agegrade.html', '../app/views/bmi.html', '../app/views/calcdir.html', '../app/views/calcoutputdir.html', '../app/views/calctitledir.html', '../app/views/pacecalc.html', '../app/views/resume.html', '../app/views/tabdir.html']);

angular.module("../app/404.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../app/404.html",
    "<!doctype html>\n" +
    "<html lang=\"en\">\n" +
    "  <head>\n" +
    "    <meta charset=\"utf-8\">\n" +
    "    <title>Page Not Found :(</title>\n" +
    "    <style>\n" +
    "      ::-moz-selection {\n" +
    "        background: #b3d4fc;\n" +
    "        text-shadow: none;\n" +
    "      }\n" +
    "\n" +
    "      ::selection {\n" +
    "        background: #b3d4fc;\n" +
    "        text-shadow: none;\n" +
    "      }\n" +
    "\n" +
    "      html {\n" +
    "        padding: 30px 10px;\n" +
    "        font-size: 20px;\n" +
    "        line-height: 1.4;\n" +
    "        color: #737373;\n" +
    "        background: #f0f0f0;\n" +
    "        -webkit-text-size-adjust: 100%;\n" +
    "        -ms-text-size-adjust: 100%;\n" +
    "      }\n" +
    "\n" +
    "      html,\n" +
    "      input {\n" +
    "        font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n" +
    "      }\n" +
    "\n" +
    "      body {\n" +
    "        max-width: 500px;\n" +
    "        padding: 30px 20px 50px;\n" +
    "        border: 1px solid #b3b3b3;\n" +
    "        border-radius: 4px;\n" +
    "        margin: 0 auto;\n" +
    "        box-shadow: 0 1px 10px #a7a7a7, inset 0 1px 0 #fff;\n" +
    "        background: #fcfcfc;\n" +
    "      }\n" +
    "\n" +
    "      h1 {\n" +
    "        margin: 0 10px;\n" +
    "        font-size: 50px;\n" +
    "        text-align: center;\n" +
    "      }\n" +
    "\n" +
    "      h1 span {\n" +
    "        color: #bbb;\n" +
    "      }\n" +
    "\n" +
    "      h3 {\n" +
    "        margin: 1.5em 0 0.5em;\n" +
    "      }\n" +
    "\n" +
    "      p {\n" +
    "        margin: 1em 0;\n" +
    "      }\n" +
    "\n" +
    "      ul {\n" +
    "        padding: 0 0 0 40px;\n" +
    "        margin: 1em 0;\n" +
    "      }\n" +
    "\n" +
    "      .container {\n" +
    "        max-width: 380px;\n" +
    "        margin: 0 auto;\n" +
    "      }\n" +
    "\n" +
    "      /* google search */\n" +
    "\n" +
    "      #goog-fixurl ul {\n" +
    "        list-style: none;\n" +
    "        padding: 0;\n" +
    "        margin: 0;\n" +
    "      }\n" +
    "\n" +
    "      #goog-fixurl form {\n" +
    "        margin: 0;\n" +
    "      }\n" +
    "\n" +
    "      #goog-wm-qt,\n" +
    "      #goog-wm-sb {\n" +
    "        border: 1px solid #bbb;\n" +
    "        font-size: 16px;\n" +
    "        line-height: normal;\n" +
    "        vertical-align: top;\n" +
    "        color: #444;\n" +
    "        border-radius: 2px;\n" +
    "      }\n" +
    "\n" +
    "      #goog-wm-qt {\n" +
    "        width: 220px;\n" +
    "        height: 20px;\n" +
    "        padding: 5px;\n" +
    "        margin: 5px 10px 0 0;\n" +
    "        box-shadow: inset 0 1px 1px #ccc;\n" +
    "      }\n" +
    "\n" +
    "      #goog-wm-sb {\n" +
    "        display: inline-block;\n" +
    "        height: 32px;\n" +
    "        padding: 0 10px;\n" +
    "        margin: 5px 0 0;\n" +
    "        white-space: nowrap;\n" +
    "        cursor: pointer;\n" +
    "        background-color: #f5f5f5;\n" +
    "        background-image: -webkit-linear-gradient(rgba(255,255,255,0), #f1f1f1);\n" +
    "        background-image: -moz-linear-gradient(rgba(255,255,255,0), #f1f1f1);\n" +
    "        background-image: -ms-linear-gradient(rgba(255,255,255,0), #f1f1f1);\n" +
    "        background-image: -o-linear-gradient(rgba(255,255,255,0), #f1f1f1);\n" +
    "        -webkit-appearance: none;\n" +
    "        -moz-appearance: none;\n" +
    "        appearance: none;\n" +
    "      }\n" +
    "\n" +
    "      #goog-wm-sb:hover,\n" +
    "      #goog-wm-sb:focus {\n" +
    "        border-color: #aaa;\n" +
    "        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);\n" +
    "        background-color: #f8f8f8;\n" +
    "      }\n" +
    "\n" +
    "      #goog-wm-qt:hover,\n" +
    "      #goog-wm-qt:focus {\n" +
    "        border-color: #105cb6;\n" +
    "        outline: 0;\n" +
    "        color: #222;\n" +
    "      }\n" +
    "\n" +
    "      input::-moz-focus-inner {\n" +
    "        padding: 0;\n" +
    "        border: 0;\n" +
    "      }\n" +
    "    </style>\n" +
    "  </head>\n" +
    "  <body>\n" +
    "    <div class=\"container\">\n" +
    "      <h1>Not found <span>:(</span></h1>\n" +
    "      <p>Sorry, but the page you were trying to view does not exist.</p>\n" +
    "      <p>It looks like this was the result of either:</p>\n" +
    "      <ul>\n" +
    "        <li>a mistyped address</li>\n" +
    "        <li>an out-of-date link</li>\n" +
    "      </ul>\n" +
    "      <script>\n" +
    "        var GOOG_FIXURL_LANG = (navigator.language || '').slice(0,2),GOOG_FIXURL_SITE = location.host;\n" +
    "      </script>\n" +
    "      <script src=\"//linkhelp.clients.google.com/tbproxy/lh/wm/fixurl.js\"></script>\n" +
    "    </div>\n" +
    "  </body>\n" +
    "</html>\n" +
    "");
}]);

angular.module("../app/index.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../app/index.html",
    "<!doctype html>\n" +
    "<html>\n" +
    "  <head>\n" +
    "    <meta charset=\"utf-8\">\n" +
    "    <title></title>\n" +
    "    <meta name=\"description\" content=\"\">\n" +
    "    <meta name=\"viewport\" content=\"width=device-width\">\n" +
    "    <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->\n" +
    "    <!-- build:css(.) styles/vendor.css -->\n" +
    "    <!-- bower:css -->\n" +
    "    <link rel=\"stylesheet\" href=\"bower_components/bootstrap/dist/css/bootstrap.css\" />\n" +
    "    <!-- endbower -->\n" +
    "    <!-- endbuild -->\n" +
    "    <!--\n" +
    "    <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css\"/>\n" +
    "    -->\n" +
    "    <!-- build:css(.tmp) styles/main.css -->\n" +
    "    <link rel=\"stylesheet\" href=\"styles/Main.css\">\n" +
    "    <!-- endbuild -->\n" +
    "    <!-- build:css(.tmp) styles/main992.css -->\n" +
    "    <link rel=\"stylesheet\" media=\"only screen and (min-width:992px) and (max-width:1199px)\" href=\"styles/main992.css\">\n" +
    "    <!-- endbuild -->\n" +
    "    <!-- build:css(.tmp) styles/main762.css -->\n" +
    "    <link rel=\"stylesheet\" media=\"only screen and (min-width:762px) and (max-width:991px)\" href=\"styles/main762.css\">\n" +
    "    <!-- endbuild -->\n" +
    "    <!-- build:css(.tmp) styles/main600.css -->\n" +
    "    <link rel=\"stylesheet\" media=\"only screen and (min-width:600px) and (max-width:761px)\" href=\"styles/main600.css\">\n" +
    "    <!-- endbuild -->\n" +
    "    <!-- build:css(.tmp) styles/main0.css -->\n" +
    "    <link rel=\"stylesheet\" media=\"only screen and (min-width:0px) and (max-width:599px)\" href=\"styles/main0.css\">\n" +
    "    <!-- endbuild -->\n" +
    "    \n" +
    "\n" +
    "  </head>\n" +
    "  <!-- Main body for the app --> \n" +
    "  <body ng-app=\"runnerCalcApp\">\n" +
    "    <!-- Title header --> \n" +
    "    <div class=\"mainHeader header col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n" +
    "      <a href=\"#/\" class=\"siteTitle\">Runner Calculator</a>\n" +
    "      <div class=\"container navbar-default\">\n" +
    "        <div class=\"navbar-header\">\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <!-- Logo container --> \n" +
    "    <div class=\"siteTitleContainer\">\n" +
    "      <div class=\"runnerLogo\"></div>\n" +
    "    </div>\n" +
    "    <!-- Main form that makes up the background image -->  \n" +
    "    <div class=\"container-fluid\">\n" +
    "      <div class=\"mainForm container\">\n" +
    "      <ul class=\"nav nav-tabs responsive\">\n" +
    "        <!-- Templated nav tabs on top of calc --> \n" +
    "        <div class=\"tabRow\" ng-controller=\"MainTabCtrl\">\n" +
    "          <main-tab info=\"ageGrade\" ng-click=\"updateMainTabOne()\" ng-model=\"mainTabs\" class=\"tabRowLi\" ng-class=\"{ageGrade: 'tabRowLiSelect', pace: 'tabRowLi', bmi: 'tabRowLi'}[mainTabs]\"></main-tab>\n" +
    "          <main-tab info=\"paceCalc\" ng-click=\"updateMainTabTwo()\" ng-model=\"mainTabs\" class=\"tabRowLi\" ng-class=\"{ageGrade: 'tabRowLi', pace: 'tabRowLiSelect', bmi: 'tabRowLi'}[mainTabs]\"></main-tab>\n" +
    "          <main-tab info=\"bmiCalc\" ng-click=\"updateMainTabThree()\" ng-model=\"mainTabs\" class=\"tabRowLi\" ng-class=\"{ageGrade: 'tabRowLi', pace: 'tabRowLi', bmi: 'tabRowLiSelect'}[mainTabs]\"></main-tab>\n" +
    "        </div>\n" +
    "      </ul>\n" +
    "      </div>\n" +
    "      <!-- Container for the calculator template injection --> \n" +
    "      <div class=\"container\">\n" +
    "      <div ng-view=\"\" class=\"viewSwitch\"></div>\n" +
    "      </div>\n" +
    "      <!-- Footer --> \n" +
    "      <div class=\"mainFooter\">\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <!-- Google Analytics: change UA-XXXXX-X to be your site's ID -->\n" +
    "     <script>\n" +
    "       !function(A,n,g,u,l,a,r){A.GoogleAnalyticsObject=l,A[l]=A[l]||function(){\n" +
    "       (A[l].q=A[l].q||[]).push(arguments)},A[l].l=+new Date,a=n.createElement(g),\n" +
    "       r=n.getElementsByTagName(g)[0],a.src=u,r.parentNode.insertBefore(a,r)\n" +
    "       }(window,document,'script','https://www.google-analytics.com/analytics.js','ga');\n" +
    "       ga('create', 'UA-XXXXX-X');\n" +
    "       ga('send', 'pageview');\n" +
    "    </script>\n" +
    "    <!--\n" +
    "    <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js\"></script>\n" +
    "    <script src=\"https://ajax.googleapis.com/ajax/libs/angularjs/1.4.5/angular.min.js\"></script>\n" +
    "    <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js\"></script>\n" +
    "    <script src=\"https://ajax.googleapis.com/ajax/libs/angularjs/1.4.5/angular-animate.js\"></script>\n" +
    "    <script src=\"https://ajax.googleapis.com/ajax/libs/angularjs/1.4.5/angular-cookies.js\"></script>\n" +
    "    <script src=\"https://ajax.googleapis.com/ajax/libs/angularjs/1.4.5/angular-resource.js\"></script>\n" +
    "    <script src=\"https://ajax.googleapis.com/ajax/libs/angularjs/1.4.5/angular-route.js\"></script>\n" +
    "    <script src=\"https://ajax.googleapis.com/ajax/libs/angularjs/1.4.5/angular-sanitize.js\"></script>\n" +
    "    <script src=\"https://ajax.googleapis.com/ajax/libs/angularjs/1.4.5/angular-touch.js\"></script>\n" +
    "    -->\n" +
    "\n" +
    "    <!-- build:js(.) scripts/vendor.js -->\n" +
    "    <!-- bower:js -->\n" +
    "    <script src=\"bower_components/jquery/dist/jquery.js\"></script>\n" +
    "    <script src=\"bower_components/angular/angular.js\"></script>\n" +
    "    <script src=\"bower_components/bootstrap/dist/js/bootstrap.js\"></script>\n" +
    "    <script src=\"bower_components/angular-animate/angular-animate.js\"></script>\n" +
    "    <script src=\"bower_components/angular-cookies/angular-cookies.js\"></script>\n" +
    "    <script src=\"bower_components/angular-resource/angular-resource.js\"></script>\n" +
    "    <script src=\"bower_components/angular-route/angular-route.js\"></script>\n" +
    "    <script src=\"bower_components/angular-sanitize/angular-sanitize.js\"></script>\n" +
    "    <script src=\"bower_components/angular-touch/angular-touch.js\"></script>\n" +
    "    <!-- endbower -->\n" +
    "    <!-- endbuild -->\n" +
    "\n" +
    "    <!-- build:js({.tmp,app}) scripts/scripts.js -->\n" +
    "    <script src=\"scripts/app.js\"></script>\n" +
    "    <script src=\"scripts/controllers/main.js\"></script>\n" +
    "    <script src=\"scripts/controllers/services.js\"></script>\n" +
    "    <script src=\"scripts/controllers/directives.js\"></script>\n" +
    "    <!-- endbuild -->\n" +
    " \n" +
    "</body>\n" +
    "</html>\n" +
    "");
}]);

angular.module("../app/views/agegrade.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../app/views/agegrade.html",
    "<calc-title-section></calc-title-section>\n" +
    "<section class=\"calcWithOutputAge col-lg-12 col-md-12\">\n" +
    "	<div class=\"calcInstructions fontForText col-lg-12 col-md-12\">\n" +
    "		<p>\n" +
    "			This calculator finds your age-graded running time and percent. To calculate, fill out the <strong>age</strong>, <strong>distance</strong>, running <strong>time</strong>, and <strong>gender</strong> forms below.\n" +
    "		</p>\n" +
    "		<p>\n" +
    "	      Press the <strong>Calculate</strong> button to get your result\n" +
    "	    </p>\n" +
    "	   \n" +
    "	</div>\n" +
    "	<calc-section></calc-section>\n" +
    "	<div class=\"outputMarginAge\">\n" +
    "		<calc-output-section></calc-output-section>\n" +
    "	</div>\n" +
    "</section>\n" +
    "<div class=\"calcInfoSection calcInfoAgeHeight outputColumn col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n" +
    "	<p class=\"calcInfoTitle calcInfoTitleAge\">What is Age-Grading?</p>\n" +
    "	<p class=\"calcInfoTxt\">Age-grading is a way to put all runners on an equal playing field when judging their time. When you fill in the forms above, the calculator takes your input time and compares it to a number <strong>close to</strong> the world record for your age, gender, and event. Your <strong>Age-Graded Time</strong> is your time multiplied by a number that represents the normal slowdown that runners experience as they age, giving you a result that estimates what time you might be running if you were between the ages of 20-28. For example, if you are age 35, your time will be multiplied by ~0.98 to put you on the same level as those between the ages of 20-28. Age-grading is useful for races and tournaments, where the times of runners of all different ages and genders can be compared.\n" +
    "	</p>\n" +
    "	<p class=\"calcInfoTxt\"> Your <strong>Age-Graded Percent</strong> shows you how close your time is to the world record estimate, reported in percentage. For example, if your age-graded percent is 50%, that means your time is about 50% as fast as the world record. In other words, you'd have to run about twice as fast to be in the world record range.\n" +
    "	</p>\n" +
    "\n" +
    "	<div class=\"calcInfoAd\">\n" +
    "		<p class=\"disableAdBlockTxt\">\n" +
    "			Please white list us from your ad blocker to support this site\n" +
    "		</p>\n" +
    "\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "");
}]);

angular.module("../app/views/bmi.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../app/views/bmi.html",
    "<calc-title-section></calc-title-section>\n" +
    "<section class=\"calcWithOutputBMI col-lg-12 col-md-12\">\n" +
    "	<div class=\"calcInstructions fontForText col-lg-12 col-md-12\">\n" +
    "	    <p>\n" +
    "	      This calculator finds out your <strong>BMI</strong> when you fill in your <strong>weight</strong> and <strong>height</strong>. It can take use either US standard units (lb/in) or metric (kg/cm) for the input.\n" +
    "	    </p>\n" +
    "	    <p>\n" +
    "	      Press the <strong>Calculate</strong> button to get your result\n" +
    "	    </p>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"buttonCalc container col-lg-6 col-md-6 col-sm-12 col-xs-12\" ng-keypress=\"enterPress($event)\">\n" +
    "		<br>\n" +
    "		<!-- First row of input forms -->\n" +
    "		<div class=\"row\">\n" +
    "			<!-- Top left input form -->\n" +
    "		    <span class=\"fontForText\">{{calcInfo.inputFormTop}}:</span>\n" +
    "		    <span class=\"{{calcInfo.inputFormTopClass}}\">\n" +
    "		    	<!-- US / Metric radio btns -->\n" +
    "				<input type=\"text\" class=\"form-control inline inputFormTop\" ng-class=\"{true: 'form-control inline inputTime formErr', false: 'form-control inline inputTime'}[updateInputFormTop()]\" maxlength=\"3\" ng-model=\"inputFormTop\">\n" +
    "				<span class=\"fontForText txtPadding\">{{calcInfo.inputFormTopTxt}}</span>\n" +
    "				<span class=\"justGenBtns moveDist\">\n" +
    "		          	<label class=\"genLabel\" ng-class=\"{false: 'genLabel fontForText', US: 'genSelected fontForText animated bounceIn', Metric: 'genLabel fontForText'}[unitCheck]\">\n" +
    "			            <input type=\"radio\" class=\"inputGender\" ng-model=\"unitCheck\" value=\"US\" ng-change=\"updateUnitCheck()\">\n" +
    "			            <span class=\"genTxt\">US</span>\n" +
    "		          	</label>\n" +
    "		          	<label class=\"femaleLabel genLabel\" ng-class=\"{false: 'genLabel fontForText', US: 'genLabel fontForText', Metric: 'genSelected fontForText animated bounceIn'}[unitCheck]\">\n" +
    "			            <input type=\"radio\" class=\"inputGender\" ng-model=\"unitCheck\" value=\"Metric\" ng-change=\"updateUnitCheck()\">\n" +
    "			            <span class=\"genTxt\">Metric</span>\n" +
    "	          		</label>\n" +
    "				</span>\n" +
    "			</span>\n" +
    "		</div>\n" +
    "		<br>\n" +
    "		<!-- Second row of input forms --> \n" +
    "		<div class=\"row\">\n" +
    "			<!-- Height input forms-->\n" +
    "			<span class=\"fontForText\">{{calcInfo.inputFormBot}}:</span>\n" +
    "			<span class=\"moveHeight1\">\n" +
    "				<input type=\"text\" class=\"form-control inline inputFormTop\" ng-class=\"{true: 'form-control inline inputTime formErr', false: 'form-control inline inputTime'}[updateInputFormBot()]\" maxlength=\"3\" ng-model=\"inputFormBot\">\n" +
    "				<span class=\"fontForText txtPadding\">{{calcInfo.inputFormBotTxt}}</span>\n" +
    "			</span>\n" +
    "			\n" +
    "			<span class=\"moveHeight2\" ng-class=\"{US: 'moveHeight2', Metric: 'moveHeight2 hideElement'}[unitCheck]\">\n" +
    "				<input type=\"text\" class=\"form-control inline inputFormTop\" ng-class=\"{true: 'form-control inline inputTime formErr', false: 'form-control inline inputTime'}[updateInputFormBot2()]\" maxlength=\"3\" ng-model=\"inputFormBot2\">\n" +
    "				<span class=\"fontForText txtPadding\">inches</span>\n" +
    "			</span>\n" +
    "			<!-- Calculate & clear buttons --> \n" +
    "			<div class=\"allCalcBtns\">\n" +
    "			    <div class=\"calcBtnHoverSpan\" ng-mouseover=\"updateBtnDisabled()\">\n" +
    "			    </div>\n" +
    "			    <div class=\"row\">\n" +
    "			      <input ng-click=\"calcButton()\" type=\"button\" class=\"calcButton fontForText\" value=\"Calculate\" ng-disabled=\"calcBtnDisabled\">\n" +
    "			    </div>\n" +
    "			    <div class=\"row\">\n" +
    "			      <input ng-click=\"clearButton()\" type=\"button\" class=\"clearButton fontForText\" value=\"Clear\">\n" +
    "			    </div>\n" +
    "			</div>\n" +
    "			<!-- Error warning div that appears at bottom of calculator -->\n" +
    "			<div class=\"errWarning fontForText\" ng-class=\"{true: 'errWarning fontForText', false: 'errWarningInvis fontForText'}[errWarning]\" ng-model=\"errWarning\">\n" +
    "			    <div>{{calcInfo.errWarningTxt}}</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	</div>\n" +
    "	<div class=\"outputMarginPace\">\n" +
    "		<calc-output-section></calc-output-section>\n" +
    "	</div>\n" +
    "</section>\n" +
    "<div class=\"calcInfoSection calcInfoBMIHeight outputColumn col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n" +
    "	<p class=\"calcInfoTitle calcInfoTitleBMI\">What is your BMI?</p>\n" +
    "	<p class=\"calcInfoTxt\">Your <strong>BMI</strong> or <strong>Body Mass Index</strong> is a value intended to give you an idea of what a normal weight should be for your height, and whether you fall in that normal range or not. BMI is calculated by dividing your mass (weight) by your height squared. \n" +
    "	</p>\n" +
    "	<div class=\"calcInfoTxt BMItable\">\n" +
    "		<p></p>\n" +
    "		<p>\n" +
    "		<strong>Below 18.5</strong> = Underweight\n" +
    "		</p>\n" +
    "		<p>\n" +
    "		<strong>18.5 - 24.9</strong> = Normal\n" +
    "		</p>\n" +
    "		<p>\n" +
    "		<strong>25 - 29.9</strong> = Overweight\n" +
    "		</p>\n" +
    "		<p>\n" +
    "		<strong>30.0+</strong> = Obese\n" +
    "		</p>\n" +
    "	</div>\n" +
    "	<p class=\"calcInfoTxt\">\n" +
    "	</p>\n" +
    "\n" +
    "	<div class=\"calcInfoAd\">\n" +
    "		<p class=\"disableAdBlockTxt\">\n" +
    "			Please white list us from your ad blocker to support this site\n" +
    "		</p>\n" +
    "\n" +
    "	</div>\n" +
    "</div>");
}]);

angular.module("../app/views/calcdir.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../app/views/calcdir.html",
    "<div class=\"buttonCalc container col-lg-6 col-md-6 col-sm-12 col-xs-12\" ng-keypress=\"enterPress($event)\">\n" +
    "  <br>\n" +
    "  <!-- First row of input forms -->\n" +
    "  <div class=\"row\">\n" +
    "    <span class=\"fontForText\">{{calcInfo.inputFormTop}}:</span>\n" +
    "    <span class=\"{{calcInfo.inputFormTopClass}}\">\n" +
    "      <!-- Top left input form. Hidden in pace calculator -->\n" +
    "      <input type=\"text\" class=\"form-control inline inputFormTop\" ng-class=\"{true: 'form-control inline inputTime formErr', false: 'form-control inline inputTime'}[updateInputFormTop()]\" maxlength=\"2\" ng-model=\"inputFormTop\" ng-hide=\"{{calcInfo.inputFormTopHide}}\">\n" +
    "      <!-- The three input forms at the top, currently only used by pace calc -->\n" +
    "      <span ng-hide=\"{{calcInfo.inputFormTrioHide}}\">\n" +
    "        <span class=\"inputFormTopErrInvis\" ng-class=\"{true: 'inputFormTopErr', false: 'inputFormTopErrInvis'}[inputFormTopErr]\" ng-model=\"inputFormTopErr\">\n" +
    "          <input type=\"text\" class=\"form-control inline inputFormTop\" ng-focus=\"inputFormTop1Focus()\" ng-blur=\"inputFormTop1Blur()\" maxlength=\"2\" ng-model=\"inputFormTop1\">\n" +
    "          <span class=\"betweenInputTxt\">:</span>\n" +
    "          <input type=\"text\" class=\"form-control inline inputFormTop\" ng-focus=\"inputFormTop2Focus()\" ng-blur=\"inputFormTop2Blur()\" maxlength=\"2\" ng-model=\"inputFormTop2\">\n" +
    "          <span class=\"betweenInputTxt\">:</span>\n" +
    "          <input type=\"text\" class=\"form-control inline inputFormTop\" ng-focus=\"inputFormTop3Focus()\" ng-blur=\"inputFormTop3Blur()\" maxlength=\"2\" ng-model=\"inputFormTop3\">\n" +
    "          <span class=\"fontForText timeInfoLabel\">hh:mm:ss</span>\n" +
    "        </span>\n" +
    "      </span>\n" +
    "    </span>\n" +
    "  </div>\n" +
    "  <p></p>\n" +
    "  <!-- Second row of input forms --> \n" +
    "  <div class=\"row\">\n" +
    "    <span class=\"fontForText\">Distance:</span>\n" +
    "    <span class=\"moveDist\">\n" +
    "      <!-- Distance form drop down --> \n" +
    "      <select class= \"form-control inline {{calcInfo.inputDistClass}}\" ng-class=\"{true: 'form-control inline formErr', false: 'form-control inline'}[updateInputDist()]\" ng-model=\"inputDist\" ng-options=\"run.distance as run.title for run in list\"></select>\n" +
    "      <span ng-hide=\"{{calcInfo.inputDistTypeHide}}\">\n" +
    "        <span class=\"betweenInputTxt orText\">or</span>\n" +
    "        <input class=\"form-control inline inputFormTop moveDistUnits\" ng-model=\"inputTypeDist\" maxlength=\"2\">\n" +
    "        <!-- Distance units (US / Metric) dropdown --> \n" +
    "        <select class=\"form-control inline distUnits\" ng-model=\"distUnits\" ng-options=\"unitMeasure.unit as unitMeasure.title for unitMeasure in unitSystems\"></select>\n" +
    "      </span>\n" +
    "    </span>\n" +
    "    <p></p>\n" +
    "  </div>\n" +
    "  <!-- Thrid row of input forms --> \n" +
    "  <div class=\"row\">\n" +
    "      <span class=\"fontForText\">Time:</span>\n" +
    "      <!-- Error div that appears over the three time inputs --> \n" +
    "      <span class=\"inputTimeErrInvis\" ng-class=\"{true: 'inputTimeErr', false: 'inputTimeErrInvis'}[inputTimeErr]\" ng-model=\"inputTimeErr\">\n" +
    "        <!-- The three time inputs --> \n" +
    "        <input ng-change=\"updateInputTime(inputTime1)\" ng-model=\"inputTime1\" ng-focus=\"timeInput1Focus()\" ng-blur=\"timeInput1Blur()\" class=\"form-control inline inputTime\" maxlength=\"2\">\n" +
    "        <span class=\"betweenInputTxt\">:</span>\n" +
    "        <input ng-change=\"updateInputTime(inputTime2)\" ng-model=\"inputTime2\" ng-focus=\"timeInput2Focus()\" ng-blur=\"timeInput2Blur()\" class=\"form-control inline inputTime\" maxlength=\"2\">\n" +
    "        <span class=\"betweenInputTxt\">:</span>\n" +
    "        <input ng-change=\"updateInputTime(inputTime3)\" ng-model=\"inputTime3\" ng-focus=\"timeInput3Focus()\" ng-blur=\"timeInput3Blur()\" class=\"form-control inline inputTime\" maxlength=\"2\"> \n" +
    "      </span>\n" +
    "      <span class=\"labelTimeFormat fontForText\">hh:mm:ss</span>\n" +
    "  </div>\n" +
    "  <!-- Fourth input row --> \n" +
    "  <div class=\"allGenInput row\" ng-hide=\"{{calcInfo.genderBtnHide}}\">\n" +
    "    <span class=\"fontForText\">Gender:</span>\n" +
    "    <span class=\"genCheckErr\" ng-model=\"genCheckErr\" ng-class=\"{true: 'genCheckErr fontForText', false: 'genCheckErrInvis fontForText'}[genCheckErr]\">\n" +
    "      <span class=\"justGenBtns\">\n" +
    "        <span>\n" +
    "          <!-- Male gender button --> \n" +
    "          <label class=\"genLabel\" ng-class=\"{false: 'genLabel fontForText', Male: 'genSelected fontForText animated bounceIn', Female: 'genLabel fontForText'}[genCheck]\">\n" +
    "            <input type=\"radio\" class=\"inputGender\" ng-change=\"updateGenCheck(maleCheck)\" ng-model=\"genCheck\" value=\"Male\" >\n" +
    "            <span class=\"genTxt\">Male</span>\n" +
    "          </label>\n" +
    "        </span>\n" +
    "        <span>\n" +
    "          <!-- Female gender button --> \n" +
    "          <label class=\"femaleLabel genLabel\" ng-class=\"{false: 'genLabel fontForText', Male: 'genLabel fontForText', Female: 'genSelected fontForText animated bounceIn'}[genCheck]\">\n" +
    "            <input type=\"radio\" class=\"inputGender\" ng-change=\"updateGenCheck(femaleCheck)\" ng-model=\"genCheck\" value=\"Female\">\n" +
    "            <span class=\"genTxt\">Female</span>\n" +
    "          </label>\n" +
    "        </span>\n" +
    "      </span>\n" +
    "    </span>\n" +
    "  </div>\n" +
    "  <!-- Calculate & clear buttons --> \n" +
    "  <div class=\"allCalcBtns\">\n" +
    "    <div class=\"calcBtnHoverSpan\" ng-mouseover=\"updateBtnDisabled()\">\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "      <input ng-click=\"calcButton()\" type=\"button\" class=\"calcButton fontForText\" value=\"Calculate\" ng-disabled=\"calcBtnDisabled\">\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "      <input ng-click=\"clearButton()\" type=\"button\" class=\"clearButton fontForText\" value=\"Clear\">\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <!-- Error warning div that appears at bottom of calculator --> \n" +
    "  <div class=\"errWarning fontForText\" ng-class=\"{true: 'errWarning fontForText', false: 'errWarningInvis fontForText'}[errWarning]\" ng-model=\"errWarning\">\n" +
    "    <div>{{calcInfo.errWarningTxt}}</div>\n" +
    "  </div>\n" +
    "</div>");
}]);

angular.module("../app/views/calcoutputdir.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../app/views/calcoutputdir.html",
    "<section class=\"{{calcInfo.outputHeight}} outputColumn col-lg-6 col-md-6 col-sm-12 col-xs-12\">\n" +
    "  <div class=\"outputCalc\"> <!-- hidden w/ jquery not angular-->\n" +
    "    <div class=\"outputInfo\">\n" +
    "      <h4 class=\"outputText1 outputText\">{{calcInfo.outputLabelTxtTop}} {{calcInfo.outputLabelTxtTopRes}}</h4>\n" +
    "      <div class=\"outputContainer\">\n" +
    "        <span class=\"outputData\">{{outputDataTop}}</span>\n" +
    "        <span class=\"outputData\">{{calcInfo.outputDataTopUnit}}</span>\n" +
    "        <input type=\"text\" class=\"form-control fontForText ng-hide\" maxlength=\"2\" ng-model=\"outputDataTop\" readonly type=\"text\" >\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"outputInfo\" ng-hide=\"{{calcInfo.outputBottomHide}}\">\n" +
    "      <h4 class=\"outputText2 outputText\">Your age-graded percent</h4>\n" +
    "      <div class=\"outputContainer\">\n" +
    "        <span class=\"outputData\">{{outputAgePercent}}</span>\n" +
    "        <input type=\"text\" class=\"form-control fontForText ng-hide\" maxlength=\"2\" ng-model=\"outputAgePercent\" readonly type=\"text\" >\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</section>");
}]);

angular.module("../app/views/calctitledir.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../app/views/calctitledir.html",
    "<div class=\"calcTitle col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n" +
    "    <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-4\">\n" +
    "    </div>\n" +
    "    <div class=\"page-header col-lg-4 col-md-4 col-sm-4 col-xs-4 fontForText\">\n" +
    "      <span class=\"calcHeadTxt\">{{calcInfo.title}}</span>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("../app/views/pacecalc.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../app/views/pacecalc.html",
    "<calc-title-section></calc-title-section>\n" +
    "<section class=\"calcWithOutputPace col-lg-12 col-md-12\">\n" +
    "	<div class=\"calcInstructions fontForText col-lg-12 col-md-12\">\n" +
    "	    <p>\n" +
    "	      This calculator takes in two pieces of information and finds the third. For example, to calculate your <strong>pace</strong>, you would enter the <strong>distance</strong> you ran and the <strong>time</strong> it took you to run it, while leaving the pace field empty. You can calculate distance or time in the same way.\n" +
    "	    </p>\n" +
    "	    <p>\n" +
    "	      Press the <strong>Calculate</strong> button to get your result\n" +
    "	    </p>\n" +
    "	</div>\n" +
    "	<calc-section></calc-section>\n" +
    "	<div class=\"outputMarginPace\">\n" +
    "		<calc-output-section></calc-output-section>\n" +
    "	</div>\n" +
    "</section>\n" +
    "<div class=\"calcInfoSection calcInfoPaceHeight outputColumn col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n" +
    "	<p class=\"calcInfoTitle calcInfoTitlePace\">What is pace?</p>\n" +
    "	<p class=\"calcInfoTxt\">Running pace is the number of minutes that it takes to cover a mile or kilometer. Finding your pace is useful for completing a running event in a desired time frame. For example, if your pace is 10 minutes per mile, you'll know that your marathon time will be about 4.2 hours.\n" +
    "	</p>\n" +
    "	<p class=\"calcInfoTxt\">\n" +
    "		Pace is also useful for training purposes. Running at different paces can offer different forms of running exercise, from walking pace to sprinting pace.\n" +
    "	</p>\n" +
    "\n" +
    "	<div class=\"calcInfoAd\">\n" +
    "		<p class=\"disableAdBlockTxt\">\n" +
    "			Please white list us from your ad blocker to support this site\n" +
    "		</p>\n" +
    "\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("../app/views/resume.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../app/views/resume.html",
    "<html>\n" +
    "  <head>\n" +
    "    <title></title>\n" +
    "    <meta content=\"\">\n" +
    "    <style></style>\n" +
    "  </head>\n" +
    "  <body>\n" +
    "  	<div class=\"cookiePage\"></div>\n" +
    "  </body>\n" +
    "</html>");
}]);

angular.module("../app/views/tabdir.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../app/views/tabdir.html",
    "<a href=\"{{tabInfo.href}}\">\n" +
    "    <li>\n" +
    "        <span class=\"tabText\">{{tabInfo.title}}</span>\n" +
    "    </li>\n" +
    "</a>");
}]);
