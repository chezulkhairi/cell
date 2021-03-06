<header id="top-bar">
    <label for="site-nav-toggle" id="site-nav-btn"><p id="menu-label">MENU</p></label>
    <input type="checkbox" id="site-nav-toggle" class="checkbox-hack" autocomplete="off"/>
    <nav id="site-nav" class="force-repaint dgrey">
        <ul>
            <li><a href="/"><i class="ico-home menu-icon"></i>HOME</a></li>
            <li><a href="/progress"><i class="ico-progress menu-icon"></i>PROGRESS</a></li>
            <li><a href="/the-cloning-process"><i class="ico-cloning-process menu-icon"></i>THE CLONING PROCESS</a></li>
            <li><a href="/technology"><i class="ico-atom menu-icon"></i>TECHNOLOGY</a></li>
            <li><a href="/about-cell-industries"><i class="ico-cell-logo menu-icon"></i>ABOUT CELL INDUSTRIES</a></li>
            <li><a href="/press"><i class="ico-press menu-icon"></i>PRESS</a></li>
        </ul>
    </nav>
    <i id="site-nav-btn-icon" class="ico- site-nav-btn-icon"></i>

    <?php if(isset($_SESSION['status']) && $_SESSION['status'] == 'signedin'): ?>
        <a href="/signout?r=<?= $_SERVER['REQUEST_URI']; ?>"><p class="signin-status">Sign out</p></i></a>
        <a href="/user/<?= $_SESSION['username']; ?>/env/new" title="Clone a new environment"><i class="new-environment ico-env-new"></i></a>
        <a href="/user/<?= $_SESSION['username']; ?>" title="Your profile"><i class="user-nav-profile ico-my-cell"></i></a>
    <?php else: ?>
        <a href="/signin"><p class="signin-status">Sign in / Register</p></i></a>
    <?php endif; ?>

    <div class="cell-logo">
        <a href="/" class="ico-project-titan"></a>
    </div>

    <div id="nav-overlay"></div>
</header>