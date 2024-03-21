'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "038eeb21ccc77b35d6751844670f87d7",
"index.html": "577337fb7d7b6edacc07c42301cb05c4",
"/": "577337fb7d7b6edacc07c42301cb05c4",
"main.dart.js": "52b146109cb526a88b5368fc9cafce3c",
"404.html": "e8b78140a8421867c07ff45fc5732801",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "d8dd0f2e658432b5ff0c10721429758f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/favi.png": "d8dd0f2e658432b5ff0c10721429758f",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "5a89bb0a85b69f1fdee602fbcbecef00",
".git/config": "0b40a9778ca170e671baa09544a3bb75",
".git/objects/59/4e6db8b9fd4bbe247bc6cd82816998b23f747f": "1fcafd7245c1e4a253c5c9a2d477ab77",
".git/objects/0c/9cf5f9711d491c291d4cd9a21303fac381e3b0": "ffdb04b868cf92110364774cfffb2658",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/03/1222d0b0153a15204036c1f758829dccf54515": "d1d3f0dc752c57507626da61426f18f3",
".git/objects/04/1b1e4ad4f2c57f82fb7aa98a87fa5f4e04ae70": "f4cc608759673ceaa262cbffa7a2ba15",
".git/objects/32/ebf6d8cf166b5aed53248edf2bb622fb2896dc": "fb6b7a02db590ee558290bbb8b8f73f4",
".git/objects/69/7612b856b42c7df2f6b11a751697ce3fb59ba5": "eb2c167bd5d2090211aac5d103a33a2d",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/0e/9f983524e32738c4a56f8b229c74b606e32467": "937fa4e1eed81b73a2550478a149d681",
".git/objects/a3/6ba4e3325a532cd181f887a4c40a2d8b5dd218": "5a057b91b9f2a002d4a802d9c02c4723",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/be/8aacdbbf40aa56612d7fc65f3e32163d77b514": "f7e8e7ea93bce549d5b33baf3bef5859",
".git/objects/d6/5361e5b53ab9dcf87dd058c202e1d36c140753": "dd0631b79f129f69511696b6b669aa80",
".git/objects/d6/d1be1195aeef8d64374e961f29ac26b7da2c75": "6f58888399885605c63cae31e579b85a",
".git/objects/bc/bd285af0f6af381b576528ac3f0e16a32c95af": "3322e3075b8c5b4cbff2acea474c72cd",
".git/objects/bc/922c0cc9f3fc042b807956515a5d509352b511": "c53be7000697c65c2bcb83fcb42c6677",
".git/objects/ab/58a5ffa25e39daf05a0bd61d5feb31e4b8b01e": "292fdd4f9cded0dbff15aea39a515857",
".git/objects/ab/915743e29570ab74ab151b1b164866e937d982": "d7a5eebd6f1f84e93bdedc1ca224b0aa",
".git/objects/f3/130b7b768a71ce6b92d5b266fe05b014d56894": "2525140bc15f9402e5de94c5e5d61491",
".git/objects/c7/0b100a3e931a84b061489fea2779cfe28d73d3": "d5a961ea0cfdacc644ec611b7760e28e",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/c610bf938c77070b90cb188a44b8450ee1ffd8": "f67424e202ca27c2b1deed63fa5e383e",
".git/objects/cf/6caffab55de28a6ca61661c28ae8ff36ac0e37": "f835b842b4e65c45f71b7e5f6c746d39",
".git/objects/e4/f2fec8021bb11fd9ccaa957f274b9690732e5e": "20e6a2e45db197f9d65f321722c22a01",
".git/objects/c8/f7edc44dea074e48950c02a890a0122fd63a82": "5091725ba4621f3e51ffdf4cb1372c91",
".git/objects/c6/2681df35f4997090cfabfda9076a0e5358062b": "e4cceaee878beb8c927fca8745ad13c0",
".git/objects/4e/37821a2b9726e9f993fe27d46ea65ec2daf112": "ce189652ee7b4ac4f60cb64350cabd17",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/pack/pack-abb61352fb3bd7a30f99a6fe7f1ad277a19953d6.idx": "7bf7c48741cba366921dc8c75a2fddf0",
".git/objects/pack/pack-abb61352fb3bd7a30f99a6fe7f1ad277a19953d6.pack": "b4472062197f01dd2d9a463ade23be76",
".git/objects/11/1a5bb07e9592ccb0d3decf7914819685c5eccf": "129b3545cc30f2f958de4059c6533518",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/42/d6c31d496d81033ff6416968b098f90a6b13f1": "70bb1afb293ab36ef620153456190387",
".git/objects/7e/76d56c1e31c22cecd88f7e92c0445a4af04a0b": "adc75d3f69517df2d0a1b844fb1afa13",
".git/objects/26/ccc6c3827323520ef3c18e623183e30eeb139e": "639fd837ea1c200f22841210944c9120",
".git/objects/81/3f36e3afd6201b8c9853f29c8453879020042f": "32c782150fdefbd6774efd03df68bade",
".git/objects/72/80bdddbc17dfe709057953d0753e5ffd0f0f2e": "ba56b40d645a0f16807ab3de83ab0ea1",
".git/objects/72/ce80c92221c7ea97da086c5375fa2ca2072a5b": "fc992534796e5f76b4e1412adde95ff5",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/00/d2c272e6d94ac1de96622a8267bdd1022d5461": "3391f73e993df7d8ea3e1aab6001c5d4",
".git/objects/6e/45b51f2b8b7e24c908edf81af5460113e07974": "70ac706a93259d082ed3498280b9de1a",
".git/objects/5c/a017893b2927c9a549a678278c883a97ef2a0d": "ae6097befff3fad1d76396cd065264d6",
".git/objects/5c/41e7df813a393e06b50bd470b8c32af989d318": "356459da80e398b6a87108d0475664df",
".git/objects/53/fd3b35a486bba8a07c874d2aab169ac0577cb2": "748e00105b40152be139eb1238c5720f",
".git/objects/37/cca95214434f192dc6deea673b7ca39c47df46": "c63d06f55f947ab5dcca0a4866135589",
".git/objects/99/f8f8e3481c34ecfa7848456f1733994e00be7c": "1b4ddef00e07d16262bf27692e0dee71",
".git/objects/90/5ad744bbdef2d70650fc2e0af47ee167f454ed": "af22ddf93e1d24d2e119d0ab3614e060",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/c5cae5c64f4163f92dd9b9658daf8873701c65": "a05fb5f2aff7797f57af2a82a86bfacf",
".git/objects/b1/920f52eabec1786781aa9428c1bebbcc95214a": "d00f4cc4a2899a94df6b5d50c5b9bfad",
".git/objects/b1/e3aac88940942bac2762ad3af3c3234cd40af6": "ad3aa946439f0d1256e8101a357cc395",
".git/objects/b6/03b67c7742cd7ced31c4288ee354d948dec1de": "3c7f7280a10b53560ab149bf9908e31f",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/c02c966033b3c9053d0799740b5442580908ba": "c34856233ba0190f3a80990c5f3b9607",
".git/objects/ea/caa7ad2b6d12883c272c4dfd7bf756d30cab5c": "70f8b72d27e08b0f2d2b6d29e0b80f6e",
".git/objects/e1/8a40df3b1b0eb9a61edd992104cd07bcc43495": "5f88dba8827cc39c5a9edb0b0cbbfe32",
".git/objects/f0/e80f17141796d95d631924199f7c55b6bd1e08": "4badee954fd3707abfb7b3d0004b4e20",
".git/objects/f0/9724ee15803c60280996e9c8be4daffa18c4ea": "7a7615ceeaf21ca3c7fe3026105a54af",
".git/objects/f7/0c21ed8c7e43fccd696bca638bb3106a165774": "2d43e7eff37035e3fde406b94a6a2dba",
".git/objects/f7/eaf61e2d736d490bb4e8b6aa593e217fadb956": "7f0fdcb7eebfad2a793b4e49c88ed3d9",
".git/objects/e8/4ec0ea89cc9741b1a3bf0523dc5744845ba0c0": "c8a9349d8804a2550ecfbe4841e2c681",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/fa/d3295dd7dbbad28c6859f73a6dc0c129e83260": "16ae51347bca6745eb4136ca62e6cdba",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/f1/d78c4e433d3354f56b54d8f2ebb1639703eeeb": "2fce9030986de825b5f3a54073c97d50",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/77/c300038b3bc81871a862560d624ed0cdd10ac6": "87fbc9012f6a78e7bc9acabb18e4fa40",
".git/objects/48/5026b8f5c9fdb877033a9c1840105051b76623": "f6ac4c3261b4b257ef988e6131b1b9da",
".git/objects/4a/68c16bd50230b359786bfbdd16628fcc5860d9": "6cdb127138dbff2269937cc5d90dc4c3",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/8c/0e1b1810e2e22efd75fa43d444600ffe67f1ad": "91b4638bd322754cfe853a7f42579032",
".git/objects/8c/74f9a320d40423aa5c44e9ed35469fd82112ee": "8700754435361f32958e2fe03d4db76e",
".git/objects/1d/a66b9065e5de1fa569f6947183b6e3adae7e51": "24c167f17070d5efd65216b491e5ee8b",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/1c/47109a767e91e994f53fa228f018d7e0d7c4d4": "0c7535cf56b41cd3cd55e20518f316b3",
".git/objects/82/b349301039f348952b9cba7133da5f8b368ae3": "c4a163166f94ba4d0439667b9046811d",
".git/objects/2b/66261923ba13873389ee3612fe629583e7ae31": "f290b17fdec30481fe24d0c489a2f6c3",
".git/objects/22/1714dd347682bd67bc08b66e3b84e1a2815c29": "5797b635ff92943cadd04011f7e9bf99",
".git/objects/25/39b7c7ef83f0b0345bc8d9df8e3ce103e6de5e": "1b5f727bb42417f8e29680e342085019",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c348e97b138f0ed95ef274ab737622bc",
".git/logs/refs/heads/main": "c348e97b138f0ed95ef274ab737622bc",
".git/logs/refs/remotes/origin/main": "48b01807dbfd2d3084af72a08a5b51ad",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "12a237fd18230114136292b5d49d4060",
".git/refs/remotes/origin/main": "e1bfddaf798f39b1eed123463e434626",
".git/index": "dc972742eee8b8f6a083c1a55ddce85f",
".git/COMMIT_EDITMSG": "45c9eb7fa6e6a781268f8a3b8d62d8b9",
".git/FETCH_HEAD": "3818e76ee79d512d67dd3fe8300208c9",
"assets/AssetManifest.json": "3315df59978e2230679f16058b1026fc",
"assets/NOTICES": "df76fc078cf9f51069d8b3da94151ef2",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "6ed1d04886905dc68dffb5e7b1c934eb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e14d4247c0221552f79bf5629127cff4",
"assets/packages/youtube_player_iframe/assets/player.html": "ea69af402f26127fa4991b611d4f2596",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "ffd063c5ddbbe185f778e7e41fdceb31",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "defd0156baea896d412b4b4d937d98c6",
"assets/fonts/MaterialIcons-Regular.otf": "59f4e21b38f339b104aad53f6c400bad",
"assets/assets/RiveAssets/house.riv": "3ac77437a4c56b5143d6ceca83dd61d9",
"assets/assets/RiveAssets/confetti.riv": "ad0d13cbea799085305316f0e8118274",
"assets/assets/RiveAssets/check.riv": "14f9269423eabd7e2e10cafdc6ad4d41",
"assets/assets/RiveAssets/menu_button.riv": "f8fdfd9fd8dc7873dfac6f005f3233c1",
"assets/assets/RiveAssets/shapes.riv": "8839d67714d5e9c52b3e0dbb2b1e89c1",
"assets/assets/RiveAssets/button.riv": "c8ffe2900d31d8236247928cd7c2b5f3",
"assets/assets/RiveAssets/icons.riv": "3d29f9acebef13f01f371b59e84e664b",
"assets/assets/images/email.png": "775dfe7f630b37076c29d0e16e21ffcf",
"assets/assets/images/IMG_7344.jpg": "d516fa2b09ecda6fdee0b30597f0ed01",
"assets/assets/images/whatsapp.png": "774352deeaa60ebe04164a1e28489771",
"assets/assets/images/ux.png": "a5573d74210aee456a0a073e110b49d2",
"assets/assets/images/bg.jpg": "04c1b9f46f8baebd9155336ed6776f30",
"assets/assets/Backgrounds/Spline.png": "ff232f0cf3ebd732ca4383c381450714",
"assets/assets/icons/git.png": "cc8d90e1e4335d7a0a46134e5c40feee",
"assets/assets/icons/github.svg": "9226aa209923e38c0a6ddcb236e2bc68",
"assets/assets/icons/download.svg": "628700a3031424d215a441fab2da1731",
"assets/assets/icons/check.svg": "4220c82511cc1dfb40b8bba7d25c5f55",
"assets/assets/icons/playstore.png": "18fab95d924ef304111a8efd2620c0a6",
"assets/assets/icons/dribble.svg": "d392567c5678d42472d2c7b766268101",
"assets/assets/icons/linkedin.svg": "5b2195ddf9e879047dd8a163c4194920",
"assets/assets/icons/twitter.svg": "a4a0163fef48a4247a305528c07bc4fa",
"assets/assets/icons/behance.svg": "35ad2d47e647d0b168e7707b2984c6b5",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
