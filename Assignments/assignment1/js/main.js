document.addEventListener("DOMContentLoaded", () => {
  const signInParagraph = document.querySelector(".auth-para");
  const signInForm = document.querySelector("#signin");
  const signUpForm = document.querySelector("#signup");
  const resetPasswordForm = document.querySelector("#reset-password");

  // Function to update the view based on route

  function updateView(route) {
    if (route === "#/signin") {
      signInParagraph.innerHTML =
        'Not an AltSchooler yet? <a href="#/signup" class="link" id="signup-link">Register Now!</a>';

      signInForm.classList.remove("content-hide");
      signUpForm.classList.add("content-hide");
      resetPasswordForm.classList.add("content-hide");
    } else if (route === "#/signup") {
      signInParagraph.innerHTML =
        'Already an AltScholar? <a href="#/signup" class="link" id="signin-link">Sign In!</a>';

      signInForm.classList.add("content-hide");
      signUpForm.classList.remove("content-hide");
      resetPasswordForm.classList.add("content-hide");
    } else if (route === "#/reset-password") {
      signInParagraph.innerHTML =
        'Not an AltSchooler yet? <a href="#/signup" class="link" id="signup-link">Register Now!</a>';

      signInForm.classList.add("content-hide");
      signUpForm.classList.add("content-hide");
      resetPasswordForm.classList.remove("content-hide");
    }
  }

  // Handle initial load
  const initialRoute = window.location.hash || "#/signup";
  updateView(initialRoute);

  // Handle navigation (links clicks)
  document.addEventListener("click", (e) => {
    if (e.target.id === "signin-link") {
      e.preventDefault();
      history.pushState(null, "", "#/signin");
      updateView("#/signin");
    } else if (e.target.id === "signup-link") {
      e.preventDefault();
      history.pushState(null, "", "#/signup");
      updateView("#/signup");
    } else if (e.target.id === "reset-link") {
      e.preventDefault();
      history.pushState(null, "", "#/reset-password");
      updateView("#/reset-password");
    }
  });

  //   Handle back/forward navigation
  window.addEventListener("popstate", () => {
    const currentRoute = window.location.hash;
    updateView(currentRoute);
  });
});
