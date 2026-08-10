// LUXORA — accent 3D dans le hero (gemme facettée dorée en rotation lente)
// Se désactive proprement si Three.js ne charge pas, ou si prefers-reduced-motion est actif.

(function(){
  const mount = document.getElementById("hero-canvas");
  if(!mount) return;
  if(typeof THREE === "undefined") return; // échec de chargement CDN : on ne casse pas la page

  const REDUCED_MOTION = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const width = mount.clientWidth;
  const height = mount.clientHeight;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
  camera.position.set(0, 0, 6);

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
  renderer.setSize(width, height);
  renderer.setClearColor(0x000000, 0);
  mount.appendChild(renderer.domElement);

  // Lumières — tons dorés cohérents avec l'identité LUXORA
  scene.add(new THREE.AmbientLight(0x2a2416, 1.4));
  const key = new THREE.PointLight(0xe9cd7a, 2.2, 20);
  key.position.set(3, 3, 4);
  scene.add(key);
  const rim = new THREE.PointLight(0xc9a227, 1.2, 20);
  rim.position.set(-4, -2, -3);
  scene.add(rim);

  // Deux groupes imbriqués : l'un tourne en continu (auto-rotation),
  // l'autre s'incline doucement vers le curseur (parallax) — évite tout conflit entre les deux mouvements.
  const parallaxGroup = new THREE.Group();
  const spinGroup = new THREE.Group();
  parallaxGroup.add(spinGroup);
  scene.add(parallaxGroup);

  const geometry = new THREE.IcosahedronGeometry(1.7, 0);

  const material = new THREE.MeshStandardMaterial({
    color: 0xc9a227,
    metalness: 0.75,
    roughness: 0.25,
    flatShading: true
  });
  const gem = new THREE.Mesh(geometry, material);
  spinGroup.add(gem);

  const wireGeometry = new THREE.IcosahedronGeometry(1.86, 0);
  const wireMaterial = new THREE.MeshBasicMaterial({
    color: 0xe9cd7a,
    wireframe: true,
    transparent: true,
    opacity: 0.22
  });
  const wire = new THREE.Mesh(wireGeometry, wireMaterial);
  spinGroup.add(wire);

  // Parallax souris — cible douce suivie par lerp
  let targetX = 0, targetY = 0;
  window.addEventListener("mousemove", (e) => {
    targetX = (e.clientX / window.innerWidth - 0.5) * 0.6;
    targetY = (e.clientY / window.innerHeight - 0.5) * 0.4;
  }, { passive: true });

  function onResize(){
    const w = mount.clientWidth;
    const h = mount.clientHeight;
    if(w === 0 || h === 0) return;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
  }
  window.addEventListener("resize", onResize);

  let paused = document.hidden;
  document.addEventListener("visibilitychange", () => { paused = document.hidden; });

  if(REDUCED_MOTION){
    // Une seule image statique, légèrement inclinée, sans boucle d'animation
    spinGroup.rotation.set(0.3, -0.5, 0);
    renderer.render(scene, camera);
    return;
  }

  function animate(){
    requestAnimationFrame(animate);
    if(paused) return;

    // Rotation continue de la gemme
    spinGroup.rotation.y += 0.0028;
    spinGroup.rotation.x += 0.0010;
    wire.rotation.y -= 0.0018;

    // Inclinaison douce du groupe parent vers la position du curseur (lerp)
    parallaxGroup.rotation.y += (targetX - parallaxGroup.rotation.y) * 0.04;
    parallaxGroup.rotation.x += (targetY - parallaxGroup.rotation.x) * 0.04;

    renderer.render(scene, camera);
  }
  animate();
})();
