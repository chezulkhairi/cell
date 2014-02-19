<script src='https://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js'></script>

<?php if($_SERVER['SERVER_NAME'] == 'cell.dev'): ?>
    <script src='/js/respond.min.js'></script>
<?php else: ?>
    <script src='/build/scripts.min.js'></script>
<?php endif; ?>

<?php if($isEnv): ?>
<script>
    var userId    = <?= $userId; ?>;
    var envId     = <?= $envId; ?>;
    var latitude  = <?= $env->latitude; ?>;
    var longitude = <?= $env->longitude; ?>;
</script>
<script src="/js/threejs.tweenjs.stats.loaders.controls.js"></script>
<script src="/js/env.js"></script>
<?php endif; ?>

<?php if($isNewEnv): ?>
    <script src='https://maps.googleapis.com/maps/api/js?key=AIzaSyCNlx7Q6EFJ2nlJfkAnMIsCm94fdSzaqf4&sensor=false'></script>
    <script src='/js/new-env.js'></script>
<?php endif; ?>