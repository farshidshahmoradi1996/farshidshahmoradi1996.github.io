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
};
