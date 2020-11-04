window.onload = function () {
  if (window.innerWidth > 768) {
    //is not mobile
    //replace video source
    document.getElementById("mobile_video_src").remove();
    const vel = document.createElement("video", {});
    const src = document.createElement("source");
    src.src = "/media/medycall.mp4";
    src.type = "video/mp4";
    vel.autoplay = true;
    vel.muted = true;
    vel.loop = true;
    vel.className = "bg-video-full";
    vel.appendChild(src);
    document.body.appendChild(vel);
  }

  const menuEl = document.getElementById("hamburger_menu_toggle");
  const menuNavEl = document.getElementById("menu_nav");
  menuEl.onclick = function () {
    if (menuEl.className.includes("animate")) {
      menuEl.classList.remove("animate");
      menuNavEl.classList.remove("menu_open");
    } else {
      menuEl.classList.add("animate");
      menuNavEl.classList.add("menu_open");
    }
  };
};
