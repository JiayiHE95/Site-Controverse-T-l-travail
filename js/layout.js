document.addEventListener("DOMContentLoaded", function() {
  var head = document.querySelector("head");
  head.insertAdjacentHTML('afterbegin', `
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-uWxY/CJNBR+1zjPWmfnSnVxwRheevXITnMqoEIeG1LJrdI0GlVs/9cVSyPYXdcSF" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">
    <link rel="stylesheet" type="text/css" href="css/styles.css">
    <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png">
  `);

  const inHead = `
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
  <script src="js/teletravail.js" type="text/javascript"></script>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  `
  const containHead = document.createRange().createContextualFragment(inHead);
  head.append(containHead);

  // var encoding = document.createElement("meta");
  // encoding.setAttribute('http-equiv', "Content-Type");
  // encoding.setAttribute('content', "text/html; charset=UTF-8");
  // head.appendChild(encoding);

  var navbox = document.querySelector("body");
  navbox.insertAdjacentHTML('afterbegin', `
  <div id="sujet"><strong>Télétravail : la digitalisation du travail est-elle pérenne pour les salariés ?</strong></div>
  <nav class="navbar navbar-expand-lg navbar-dark sticky-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="./index.html">Accueil</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle active" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            A propos
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="./presentation.html">Présentation du projet</a></li>
            <li><a class="dropdown-item" href="./team.html">Notre équipe</a></li>
            <li><a class="dropdown-item" href="./contact.html">Contacts</a></li>
            <li><a class="dropdown-item" href="./source.html">Sources</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="./pour.html">Arguments pour</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="./contre.html">Arguments contre</a>
        </li>
        
      </ul>
    </div>
  </div>
  </nav>
  `);
});