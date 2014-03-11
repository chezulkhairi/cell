<meta charset="utf-8">
<meta name="description" content=""/>
<meta name="author" content="Precise Pixels"/>
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"/>
<title>Cell</title>
<?php if($_SERVER['SERVER_NAME'] == 'cell.dev'): ?>
    <link rel="stylesheet" type="text/css" href="/css/styles.css"/>
<?php else: ?>
    <link rel="stylesheet" type="text/css" href="/build/styles.min.css"/>
<?php endif; ?>
<link href='http://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,900' rel='stylesheet' type='text/css'>
<link rel="shortcut icon" href="/img/favicon.ico"/>

<?php if($isEnv): ?>
    <meta property="og:title" content="I just cloned my piece of the planet. Clone your own at Cell Industries."/>
    <meta property="og:type" content="article"/>
    <meta property="og:url" content="http://<?= $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI']; ?>"/>
    <meta property="og:image" content="http://<?= $_SERVER['HTTP_HOST']; ?>/img/user/<?= $env->userId; ?>/capture-<?= $envId; ?>.jpg" />
    <meta property="og:site_name" content="Cell Industries"/>
    <meta property="og:description" content="Cell Industries presents Project Titan - preserving the planet"/>
    <meta property="article:published_time" content="<?= $env->timestamp; ?>">
<?php endif; ?>

<!--[if lt IE 9]>
<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
<script src="/js/respond.min.js"></script>
<![endif]-->