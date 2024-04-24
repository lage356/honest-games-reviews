const newCommentFormHandler = async (event) => {
  event.preventDefault();

  const review_id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  const content = document.querySelector("#commentContent").value.trim();

  if (content) {
    const response = await fetch(`/api/comments`, {
      method: "POST",
      body: JSON.stringify({ content, review_id }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      console.log("Response status:", response.status);
      console.log("Response text:", await response.text());
      alert("Failed to create a comment.");
    }
  }
};

document
  .querySelector(".newcommentform")
  .addEventListener("submit", newCommentFormHandler);
