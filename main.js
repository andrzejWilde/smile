(() => {
  const random = limit => Math.floor(Math.random() * limit);
  const sample = arr => arr[random(arr.length)];

  const periodically = (handler, interval) => {
    let time = new Date();
    
    const worker = () => {
      const now = new Date();

      if(now - time >= interval){
        time = now;
        handler();
      }

      window.requestAnimationFrame(worker);
    };

    worker();
  };

  const setColor = (el, color) => el.style.color = color;

  const smile = () => {
    const letters = Array.from(document.querySelectorAll('.smile > span'));
    const colors = { base: 'rgb(0, 0, 0)', highlight: 'rgb(255, 255, 255)' };
    
    periodically(
      () => {
        letters.forEach(l => setColor(l, colors.base));
        setColor(sample(letters), colors.highlight);
      },
      2000
    );    
  };

  document.addEventListener('DOMContentLoaded', smile);
})();