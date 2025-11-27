function BackgroundVideo() {
  return (
    <video
      className="videoFundo"
      autoPlay
      loop
      muted
      playsInline
      src="/video.mp4"
    >
      Seu navegador não suporta
    </video>
  );
}

export default BackgroundVideo;
