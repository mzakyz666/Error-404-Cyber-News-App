var admobid = {};

if( /(android)/i.test(navigator.userAgent) ) { 
  admobid = { // for Android
    interstitial: 'ca-app-pub-6869992474017983/1657046752'
  };
} else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
  admobid = { // for iOS
    interstitial: ''
  };
} else {
  admobid = { // for Windows Phone
    interstitial: ''
  };
}

function initApp() {
  if (! AdMob ) { alert( 'admob plugin not ready' ); return; }

  // this will load a full screen ad on startup
  AdMob.prepareInterstitial({
    adId: admobid.interstitial,
    autoShow: false
  });
}

if(( /(ipad|iphone|ipod|android|windows phone)/i.test(navigator.userAgent) )) {
    document.addEventListener('deviceready', initApp, false);
} else {
    initApp();
}
