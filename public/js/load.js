function loadModule(moduleName, renderId) {
  const callbackTimer = setInterval(() => {
    let call = false;
    try {
      if (typeof window.modules !== 'undefined') call = true;
    } catch (e) {
      // Do Nothing!
    }

    if (call) {
      clearInterval(callbackTimer);
      ReactDOM.render(
        window.modules[moduleName],
        document.getElementById(renderId)
      );
    }
  }, 100);
}

//# sourceMappingURL=load.js.map
