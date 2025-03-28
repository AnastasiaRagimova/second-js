document.getElementById("loadPosts").addEventListener("click", function() {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
        .then(response => response.json())
        .then(posts => {
            const postContainer = document.getElementById("postContainer");
            postContainer.innerHTML = "";
            posts.forEach(post => {
                const postElement = document.createElement("div");
                postElement.classList.add("post");
                postElement.innerHTML = `<h3>${post.title}</h3><p>${post.body}</p>`;
                postContainer.appendChild(postElement);
            });
        })
        .catch(error => console.error("Error fetching posts:", error));
});
