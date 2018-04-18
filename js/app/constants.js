var brand = "teleup";

var config = {
  teleup:{
    cast: 'BD3A4F54'
  },
  ustvnow:{
    cast: 'BFFDB546'
  }
};

var constantsApp = {
    baseAPIUrl: "https://m." + brand + ".com/gtv/1",
    newBaseAPIUrl: "https://m." + brand + ".com/api/1",
    channelLogoUrl: "http://tvdata." + brand + ".com/inverse-logos/360/",
    channelColoredLogoUrl: "http://tvdata." + brand + ".com/logos/360/",
    channelSnapshotUrl: "http://tvdata." + brand + ".com/snapshots/medium/",
    streamUrl: "https://m." + brand + ".com/stream/1",
    posterUrl: "http://m.poster.static-" + brand + ".com/"
};

localStorage.setItem("brand", brand);
localStorage.setItem("baseAPIUrl", constantsApp.baseAPIUrl);
localStorage.setItem("newBaseAPIUrl", constantsApp.newBaseAPIUrl);
localStorage.setItem("channelLogoUrl", constantsApp.channelLogoUrl);
localStorage.setItem("channelColoredLogoUrl", constantsApp.channelColoredLogoUrl);
localStorage.setItem("channelSnapshotUrl", constantsApp.channelSnapshotUrl);
localStorage.setItem("streamUrl", constantsApp.streamUrl);
localStorage.setItem("posterUrl", constantsApp.posterUrl);
localStorage.setItem("brandConfig", JSON.stringify(config));
