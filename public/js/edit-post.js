
const post_id = window.location.toString().split("/")[
  window.location.toString().split("/").length - 1
];


const updatePostFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector("#title-update-post").value.trim();
  const content = document
    .querySelector("#content-update-post")
    .value.trim();

  if (title && content) {
    const response = await fetch(`/api/posts/${post_id}`, {
      method: "PUT",
      body: JSON.stringify({ title, content }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/dashboard"); 
    } else {
      alert("Failed to update a post.");
    }
  }
};


const deletePostFormHandler = async (event) => {
  event.preventDefault();

  const response = await fetch(`/api/posts/${post_id}`, {
    method: "DELETE",
  });

  if (response.ok) {
    document.location.replace("/dashboard"); 
  } else {
    alert("Failed to delete a post."); 
  }
};

document
  .querySelector("#update-post")
  .addEventListener("click", updatePostFormHandler);

document
  .querySelector("#delete-post")
  .addEventListener("click", deletePostFormHandler);

