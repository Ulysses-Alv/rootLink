var urls = [
    "https://open.spotify.com/embed/track/6OzUIp8KjuwxJnCWkXp1uL?utm_source=generator",
    "https://open.spotify.com/embed/track/5ildQOEKmJuWGl2vRkFdYc?utm_source=generator",
    "https://open.spotify.com/embed/track/4kXxEhuatrvwrTQycA7s9B?utm_source=generator",
    "https://open.spotify.com/embed/track/1V32pCGXZMgcmXd5MUMDL1?utm_source=generator",
    "https://open.spotify.com/embed/track/2Io2LJQRWDMfhhfqPu2KG1?utm_source=generator",
    "https://open.spotify.com/embed/track/6hH6QJ9ZAO0Z6m7PfvLoXW?utm_source=generator",
    "https://open.spotify.com/embed/track/422Avi2VjqZKCVzstKmqog?utm_source=generator",
    "https://open.spotify.com/embed/track/4YKP5UKFofcfW7EMjIsVvG?utm_source=generator",
    "https://open.spotify.com/embed/track/5v08rOeaJwVIpllUkIRCMI?utm_source=generator",
    "https://open.spotify.com/embed/track/1nZJhX71HCQuyaCIyojXNG?utm_source=generator",
    "https://open.spotify.com/embed/track/1xXQCSt0xkfeGhe18ey2p8?utm_source=generator",
    "https://open.spotify.com/embed/track/2wK7D7i9bfVt3uLjFsZSEU?utm_source=generator",
    "https://open.spotify.com/embed/track/2byu6eeLWaBq88ZtusqU4V?utm_source=generator",
    "https://open.spotify.com/embed/track/4Ol6lxivp7pR7voovl8vKI?utm_source=generator",
];

var randomIndex = Math.floor(Math.random() * urls.length);
var iframe = document.getElementById("miIframe");
iframe.src = urls[randomIndex];
