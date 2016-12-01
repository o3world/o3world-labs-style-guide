
<!doctype html>
<!--[if IE 8]>    <html class="ie ie8 lte9 lte8" lang="en"><![endif]-->
<!--[if IE 9]>    <html class="ie ie9 lte9" lang="en"><![endif]-->
<!--[if gt IE 9]> <html lang="en"><![endif]-->
<!--[if !IE]><!--><html lang="en"><!--<![endif]-->

    <head>
        <meta charset="utf-8" />

        <!-- force IE to latest rendering engine for each version -->
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />

        <title>Style Guide | O3 Labs</title>

        <meta name="description" content="Style Guide reference for elements for O3 Labs Projects" />
        <meta name="author" content="O3 Labs" />

        <!-- mobile settings -->
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <!-- global site CSS -->
        <!-- <link href="/src/styles/style.css" rel="stylesheet"> -->

        <!-- style guide specific CSS -->
        <link href="css/styleguide.css" rel="stylesheet">

        <!-- Typography -->
        <link href="http://fonts.googleapis.com/css?family=Lato:400,700,900|Roboto+Slab:300,400" rel="stylesheet" type="text/css">
    </head>

    <body>

        <div class="container-patterns">
            <header>
                <h1>O3 Labs Style Guide</h1>
                <p>This Style Guide is living document of the elements and components that make up O3 Labs projects. Use it to enhance communication between team members and to assist with visual consistency and code maintainability.</p>
                <p><strong>CSS and JS updates are automatically added here when changes are made. HTML additions or updates will need to be added to the corresponding section manually.</strong></p>
            </header>
            <main>
                <?php include("includes/components.php"); ?>
            </main>
        </div>

        <?php include("includes/sidebar.php"); ?>

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
        <script src="js/xrayhtml.js"></script>
        <script src="js/prism.js"></script>
        <script src="js/waypoints.js"></script>
        <script src="js/styleguide.js"></script>

    </body>

</html>
