<main>

    <header>
        <hgroup class="align-vertical">
            <a href="/user/<?= $username ?>">
                <img src="http://www.gravatar.com/avatar/<?= (isset($env->email) ? md5(strtolower(trim($env->email))) : 1); ?>?d=mm&amp;s=60" alt="<?= $username ?>"/>
            </a>
            <h1><?= $env->name; ?></h1>
            <h2><i class="ico-pin"></i><?= $env->latitude; ?>, <?= $env->longitude; ?></h2>
        </hgroup>
    </header>

    <section id="env-interface">
        <div id="model"><img src="/img/user/<?= $env->userId; ?>/capture-<?= $envId; ?>.jpg" alt="<?= $env->name; ?>"/></div>
        <div id="env-interface-elements">
            <div id="model-interaction" class="sdgrey">
                <h1>Interact</h1>
                <div id="default" class="btn btn--selected"><i class="ico-hand"></i></div>
                <div id="webcam" class="btn"><i class="ico-webcam"></i></div>
            </div>
        </div>
    </section>
    
    <img id="env-map" src="http://maps.googleapis.com/maps/api/staticmap?center=<?= $env->latitude; ?>,<?= $env->longitude; ?>&zoom=10&size=300x300&scale=1&maptype=hybrid&sensor=false&key=AIzaSyCNlx7Q6EFJ2nlJfkAnMIsCm94fdSzaqf4">

    <section id="env-data"></section>

<!--     <video id="video" autoplay></video>
    <canvas id="canvas"></canvas>
    <canvas id="comp"></canvas>

    <label for="sensitivity">more sensitive</label> <input type="radio" name="sensitivity">
    <label for="sensitivity">average</label> <input type="radio" name="sensitivity" checked>
    <label for="sensitivity">less sensitive</label> <input type="radio" name="sensitivity"> -->

    <!-- <div id="background"><img src="/img/user/<?= $env->userId; ?>/capture-<?= $envId; ?>.jpg" alt="<?= $env->name; ?>"/></div> -->
</main>

<div id="full-page-overlay" class="full-page-overlay full-page-overlay--loading"></div>

<div id="background-top"></div>
<div id="background"><img src="/img/user/<?= $env->userId; ?>/capture-<?= $envId; ?>.jpg" alt="<?= $env->name; ?>"/></div>