<!DOCTYPE html>

MyWebsite/
  index.html
  styles.css
  script.js

<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Website</title>
  <link rel="stylesheet" href="styles.css"> 
</head>
<body>
  <header>
    <h1>Welcome to My Website</h1>
    <nav>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <section id="home">
      <h2>Home Section</h2>
      <p>This is the home section.</p>
    </section>
    
    <section id="about">
      <h2>About Section</h2>
      <p>This is the about section.</p>
    </section>

    <section id="contact">
      <h2>Contact Section</h2>
      <p>This is the contact section.</p>
    </section>
  </main>

  <footer>
    <p>© 2024 My Website</p>
  </footer>

  <script src="script.js"></script> <!-- Linking the JavaScript file -->
</body>
</html>
