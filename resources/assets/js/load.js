function loadModule(moduleName, renderId) {
  const callbackTimer = setInterval(() => {
    let call = false;
    try {
      if (typeof window[moduleName] !== 'undefined') call = true;
    } catch (e) {
      // Do Nothing!
    }

    if (call) {
      clearInterval(callbackTimer);
      ReactDOM.render(
        window[moduleName],
        document.getElementById(renderId)
      );
    }
  }, 100);
}
