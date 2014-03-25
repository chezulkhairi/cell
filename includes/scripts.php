<?php if($_SERVER['SERVER_NAME'] == 'cell.dev'):
// SANDBOX ?>

    <?php if($isHome): ?>
        <script src='https://maps.googleapis.com/maps/api/js?key=AIzaSyCNlx7Q6EFJ2nlJfkAnMIsCm94fdSzaqf4&sensor=false&libraries=places'></script>
        <script src='/js/page-home.js'></script>
    <?php endif; ?>

    <?php if($isAbout): ?>
        <script src='/js/timeline-scroll.js'></script>
    <?php endif; ?>

    <script src='/js/all.js'></script>

    <?php if($isUser && isset($_SESSION['userId'])): ?>
        <script src='/js/page-user-profile.js'></script>
    <?php endif; ?>

    <?php if($isEnv): ?>
        <script>
            var userId    = <?= $userId; ?>;
            var envId     = <?= $envId; ?>;
            var latitude  = <?= $env->latitude; ?>;
            var longitude = <?= $env->longitude; ?>;
        </script>
        <script src="/js/threejs-stats-loaders-controls-stackblur.js"></script>
        <script src="/js/page-environment.js"></script>
        <script src="/js/gesture.js"></script>
        <div id="fb-root"></div>
        <script>(function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(d.getElementById(id))return;js=d.createElement(s);js.id=id;js.src="//connect.facebook.net/en_GB/all.js#xfbml=1&appId=140539425969500";fjs.parentNode.insertBefore(js,fjs);}(document,'script','facebook-jssdk'));</script>
        <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document,'script','twitter-wjs');</script>
    <?php endif; ?>

    <?php if($isNewEnv): ?>
        <script src='https://maps.googleapis.com/maps/api/js?key=AIzaSyCNlx7Q6EFJ2nlJfkAnMIsCm94fdSzaqf4&sensor=false&libraries=places'></script>
        <script src='/js/page-new-environment.js'></script>
    <?php endif; ?>

    <?php if($isCapturing): ?>
        <script src="/js/threejs-stats-loaders-controls-stackblur.js"></script>
        <script src="/js/page-capturing-environment.js"></script>
    <?php endif; ?>

<?php else:
// LIVE ?>

    <?php if($isHome): ?>
        <script src='https://maps.googleapis.com/maps/api/js?key=AIzaSyCNlx7Q6EFJ2nlJfkAnMIsCm94fdSzaqf4&sensor=false&libraries=places'></script>
        <script src='/build/page-home.min.js'></script>
    <?php endif; ?>

    <?php if($isAbout): ?>
        <script src='/build/timeline-scroll.min.js'></script>
    <?php endif; ?>

    <script src='/build/all.min.js'></script>

    <?php if($isUser && isset($_SESSION['userId'])): ?>
        <script src='/build/page-user-profile.min.js'></script>
    <?php endif; ?>

    <?php if($isEnv): ?>
        <script>var userId=<?= $userId; ?>,envId=<?= $envId; ?>,latitude=<?= $env->latitude; ?>,longitude=<?= $env->longitude; ?>;</script>
        <script src="/build/threejs-stats-loaders-controls-stackblur.min.js"></script>
        <script src="/build/page-environment.min.js"></script>
        <script src="/build/gesture.min.js"></script>
        <div id="fb-root"></div>
        <script>(function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(d.getElementById(id))return;js=d.createElement(s);js.id=id;js.src="//connect.facebook.net/en_GB/all.js#xfbml=1&appId=140539425969500";fjs.parentNode.insertBefore(js,fjs);}(document,'script','facebook-jssdk'));</script>
        <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document,'script','twitter-wjs');</script>
    <?php endif; ?>

    <?php if($isNewEnv): ?>
        <script src='https://maps.googleapis.com/maps/api/js?key=AIzaSyCNlx7Q6EFJ2nlJfkAnMIsCm94fdSzaqf4&sensor=false&libraries=places'></script>
        <script src='/build/page-new-environment.min.js'></script>
    <?php endif; ?>

    <?php if($isCapturing): ?>
        <script src="/build/threejs-stats-loaders-controls-stackblur.min.js"></script>
        <script src="/build/page-capturing-environment.min.js"></script>
    <?php endif; ?>

<?php endif; ?>