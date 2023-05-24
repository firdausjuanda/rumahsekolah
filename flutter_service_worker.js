'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "17fe44dfd86919bd34d24f2d7f33db91",
".git/config": "f8be7049bcbd2ab0a6114e3eb399fef1",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "d6628019dca291cf79c10adb10b6a597",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "85b5b8ad6d19d12e7c02fd03de2a78ec",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3f51ee3f4561bc72efd6384729205985",
".git/logs/refs/heads/web": "e3adf2c8fcf6cf5cc225987813eab479",
".git/logs/refs/remotes/origin/web": "b721987f24d61bb8481f64363311a3d3",
".git/objects/00/6ab5404ef43b7b4476f3cbd2cd55a48ab497fb": "f585cd560050cce050fb5072e4a9a0c9",
".git/objects/03/fdb966334c11082dde89e7a04a74b51096abf3": "f91d9fab19ddac5e970d1081304b0cee",
".git/objects/04/0b33d7208e5bffee961bac3e552a128fa7254d": "96b877ac9c0207022deda6e7268509a5",
".git/objects/05/28608b08a91ce77e1dacd916db97188ffc1926": "781067542dea5d262fa9129613100ad4",
".git/objects/05/917b1ee601f8dba26cf3e3d910d0e68ec50f05": "d14ac47cd95866728431cebe1e39b083",
".git/objects/06/a67f6804f53e56fef9d131b9dc22dc4579486d": "07b49dcb83c70080ac5e665860b58b79",
".git/objects/0c/77d7b7ea1971d31697303080d080001fc4a563": "a403ca607287ffbba54cf1ee0a1e3715",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/16/58ab70cc3dea888ce1a900551ee1e74ea5aec0": "d2d8132da923c6d54a055e773d34cf70",
".git/objects/19/bae343263651903910ec99fd2eca96f619972c": "643b4b1d3c75864e8c663080f49cbdc1",
".git/objects/1e/f046d6256efdf4283ab64cccff7a25443e9f37": "0154d516a9da9814b6a02cfcf47525fc",
".git/objects/23/ce664243f862f29615d4e84f164401173f677a": "3357e1b2f7e5df766b96f782b8093a39",
".git/objects/24/f506a83373e3cf22074502094095a7ec4f0f85": "2c773b1930f11c4f0ccb9620bc4ee97f",
".git/objects/25/0eea526dbfe01481d7d2ceac8a455b4aaf1e90": "825c9f5e2278e0ee05a03c6e54d191f0",
".git/objects/28/9ab307bde8cc177c9dd65faee032be3950ac33": "5c995c4842fc525d1a0ee5a8d595f382",
".git/objects/28/e271affe473e0d4e40e71a308252a3959a0f87": "6e7fd859ecde77eda6e10ca1a27cb96b",
".git/objects/2e/de47da3c1e981fc296ff1e5b15bc40d626468d": "42be175740e11eb9e4ecd1a8e00bc3e8",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/3c/240607476dfdfa321b7248f363e0d8f0f91071": "7f7b942174767b9bcbad0ec60b1211cc",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/58/0cadfbfc8f73f4db483d4e6a5236d12ddae8c7": "c272a921c2c81accfa3743ad31b8560f",
".git/objects/5c/d9fed2dacaa85744835d0b590be0af4430375f": "154c3bff3a1bdebf56d673af96e84dc1",
".git/objects/5f/20c070e101760a92e9145e19ace1d51e803278": "69980f75b4e96d214f07d5daec0e5bf0",
".git/objects/61/2e969298baea1951087ddbe6b94e108f142a69": "0f588710957ba7d1a0d2e820b1309bb5",
".git/objects/65/a05115ec87b3c1a2360b8b6c5b7ca9269112e3": "1788f3606a19492f08a00c85b2e234f8",
".git/objects/65/b109cf6418ddc72e3281cbdf8bd37f457b7668": "cdb29aec91f845f4605bf832608fe782",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/76/ba117a222014de200746960f78a5a79c6577fd": "ba758e1c5fc5c8e1e1c6065208307d72",
".git/objects/79/464647b917b1706919b91d08513232225b0146": "0e527c04071b158a63a377442336b881",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/82/16370d4b0e2abf79826144cee139c3f357608a": "dd89fac947424f4795447546f5ec3129",
".git/objects/85/5f2752e9c302d60ac1f89511de3cb445c31dc1": "ceb0d739c94fae4a42dd76b47996250f",
".git/objects/89/970f1417b8ee0521f3172355546e96695b2173": "0e832d2a1f837e3f512f12599a789286",
".git/objects/8b/a93f7f90af6150c3e3377a0ba9dfafbf557a3a": "dce79edabf90bbc4783a1feb476d9bf4",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8d/ade071e6341675f5736738a08d08150d9c3888": "4ea5891f33f18859c69c5efef090117f",
".git/objects/91/e21376966166f8d82305cd07ffc086f61df3d7": "6bb5c7463d715f3e0464cb410eeb3a8d",
".git/objects/9a/2b26cfc01f6af912fe8136f28c354ceacc50ac": "7ec6a292b80d89a12d40c0243e80250e",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ad/1177bfc65df4e2d25dee48479bbadba75115de": "94b6b0e94797406c325f701d821b708e",
".git/objects/ad/51d0f5f83da3cc8cf0d6b4aed4e21b29af71f8": "bc4098c63e572055ae57f9221fd18409",
".git/objects/b1/30eeb5569d3f0c16ffc9bb364410ff8f505d70": "5a3275d19c3f393166e4529694d5b130",
".git/objects/cd/0b56dc7b64d5dce4e12774362ed4f53aafcbbc": "0266f1b713484b2fdad77bbfa446eb16",
".git/objects/cd/ef3fa853b215460a5e8d3dd41253efb1d661e2": "2f5078a9ee71a8d9fc8f95df051d8d80",
".git/objects/d5/3564f8c229aa01d9a6a201010bc7342c7a6ab5": "631ec6e88c57a8480a0a929d6c871e75",
".git/objects/d9/8c2f7bc891bea01c39d0aaaebcb19e4d5d4b76": "2378fab2dae6b5085cdd98889b6769c7",
".git/objects/dd/93d77f8785ab835ecd9c54551e0bde4070c52e": "cf784cfa9674ade0a5eb783fca4c16c0",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/43347c3d5e0675a1b7f48c5d4c4ca5ff2f2d29": "b2e4edf7895116b6c556a0e543b316f8",
".git/objects/ee/fd330046b41a81354b9f66500ba4074228e6d8": "fe43a06cc8d888d794f49af28e685fb4",
".git/objects/fc/5ec7d1dd4d40b74e55725cc907c5376d202bc7": "80be5ffb13bd392538c67183f33cafcc",
".git/objects/fe/53fab79b468c161e711a6de677c059f13dc69a": "7662bb6626a459ac8dfb2a4acd3a4ee9",
".git/refs/heads/web": "c36ed94c85c320725818e5c11cdcd010",
".git/refs/remotes/origin/web": "c36ed94c85c320725818e5c11cdcd010",
"assets/AssetManifest.json": "e517293da8efb4647acdcc6b83899f16",
"assets/assets/img/rmsk_icon_full.png": "7d1bb4091c3b37fe9e3865c518ceee4e",
"assets/assets/img/rmsk_icon_full_trans.png": "4d404e5c7de5f0cd9c1ac924ac0a98f1",
"assets/assets/img/RMSK_icon_rev02.png": "6df5110b41ccb4af305c3e6c623e2c8e",
"assets/assets/img/RMSK_icon_rev02_trans.png": "ab72c4eebe44f9b58b9aaa8ae17a3d8b",
"assets/assets/img/RMSK_icon_rev02_v2_trans.png": "e3c8dd57cbc838916e4b848589693106",
"assets/assets/img/RMSK_icon_rev02_v3_trans.png": "7ddf5bca9cd3838083281480ae21d31b",
"assets/assets/img/RMSK_icon_rev02_v4.png": "5021cffc93f9a0852849bcf99517fc92",
"assets/assets/img/RMSK_icon_rev02_v4_trans.png": "fb0089726224909056e9f5a1a2ed9fb9",
"assets/assets/img/rmsk_logo1.png": "ce9d31105a0bd06f2dfd91d92b46a2c0",
"assets/assets/img/rmsk_logo1_trans.png": "f2dfb958c4cc7a8bba02f957a90ef712",
"assets/assets/img/rmsk_logo2.png": "a1f89fd7bd0305938532923be21533e3",
"assets/assets/img/rmsk_logo2_trans.png": "9a5bd30d1d9e63bf93976becaa101688",
"assets/assets/img/rmsk_logo3.png": "4c935dbb1c17477581ecd6bbd872d7c6",
"assets/assets/img/rmsk_logo3_trans.png": "0b2e62954212ea74ffcc5803d622e2f6",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "fb8390c205159b4a4f6e2a61795eb651",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "599101bffa1fdb1a6a0168e7d694ec11",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "d1aba953a192a56229a0dcf59552db4f",
"icons/Icon-512.png": "b938e882e8ab1992c383af2c7ac96523",
"icons/Icon-maskable-192.png": "d1aba953a192a56229a0dcf59552db4f",
"icons/Icon-maskable-512.png": "b938e882e8ab1992c383af2c7ac96523",
"index.html": "69f10287ee771b76651216740c813ed9",
"/": "69f10287ee771b76651216740c813ed9",
"main.dart.js": "4f9e9dcb9a196c45718da9f2f84ffed7",
"manifest.json": "13d3df386eee69ba2314887284b41a14",
"version.json": "e7a009ac0688dfbc122f037185ec46ff"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
