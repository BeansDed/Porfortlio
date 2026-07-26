/**
 * script.js — Ardre Malonzo Portfolio · Enhanced 3D Experience
 * Three.js + GSAP ScrollTrigger + Mouse Parallax
 * ============================================================
 * 8 Sections: Hero, Skills, Bimby, Skin Sense, Publico,
 *             More Projects, Career, Contact
 * ============================================================
 */

'use strict';

/* ============================================================
   0. CONFIG
   ============================================================ */
const CONFIG = {
  // Camera keyframes for 8 sections
  camera: [
    { x: 0,    y: 2,    z: 7   },  // 0 Hero — wide establishing shot
    { x: 3,    y: 1,    z: 4.5 },  // 1 Skills — orbit right, closer
    { x: -2.5, y: 0.5,  z: 3.5 },  // 2 Bimby — left side, close
    { x: 2.5,  y: -0.3, z: 4   },  // 3 Skin Sense — right side
    { x: -1.5, y: -0.8, z: 5   },  // 4 Publico — left, lower
    { x: 0,    y: -0.3, z: 5.5 },  // 5 More Projects — center wide
    { x: 1.5,  y: -1.2, z: 4.5 },  // 6 Career — right, low
    { x: 0,    y: -1.8, z: 8   },  // 7 Contact — wide pullback
  ],

  lookAtStartY:  0.5,
  lookAtEndY:   -1.5,

  idleRotationSpeed: 0.0012,
  bustDetail: 6,

  fogColor: 0x1a1510,

  // Mouse parallax intensity (camera offset)
  mouseParallax: 0.3,

  // Particle count
  particleCount: 400,
  particleSpread: 14,
};

/* ============================================================
   1. THREE.JS SCENE
   ============================================================ */
class ThreeScene {
  constructor() {
    this.canvas   = document.getElementById('three-canvas');
    this.scene    = null;
    this.camera   = null;
    this.renderer = null;
    this.bust     = null;
    this.pedestal = null;
    this.particles = null;
    this.clock    = new THREE.Clock();

    this.lookAtTarget = new THREE.Vector3(0, CONFIG.lookAtStartY, 0);

    // Mouse position normalized (-1 to 1)
    this.mouse = { x: 0, y: 0 };
    this.mouseSmooth = { x: 0, y: 0 };
  }

  init() {
    this._createRenderer();
    this._createCamera();
    this._createScene();
    this._addLights();
    this._addBust();
    this._addPedestal();
    this._addParticles();
    this._addFloor();
    this._setupMouse();
    window.addEventListener('resize', () => this._onResize());
  }

  _createRenderer() {
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      alpha: false,
      powerPreference: 'high-performance',
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 0.85;
    this.renderer.outputEncoding = THREE.sRGBEncoding;
    this.renderer.setClearColor(0x1a1510, 1);
  }

  _createCamera() {
    const start = CONFIG.camera[0];
    this.camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    this.camera.position.set(start.x, start.y, start.z);
    this.camera.lookAt(0, CONFIG.lookAtStartY, 0);
  }

  _createScene() {
    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.FogExp2(CONFIG.fogColor, 0.032);
  }

  _addLights() {
    // Ambient
    this.scene.add(new THREE.AmbientLight(0x7a5c40, 0.6));

    // Sun
    const sun = new THREE.DirectionalLight(0xf5c88a, 2.0);
    sun.position.set(-4, 6, 3);
    sun.castShadow = true;
    sun.shadow.mapSize.set(1024, 1024);
    sun.shadow.camera.near = 0.5;
    sun.shadow.camera.far = 20;
    sun.shadow.camera.left = -5;
    sun.shadow.camera.right = 5;
    sun.shadow.camera.top = 5;
    sun.shadow.camera.bottom = -5;
    sun.shadow.bias = -0.001;
    this.scene.add(sun);

    // Skylight fill
    const skylight = new THREE.DirectionalLight(0xa0b4c8, 0.5);
    skylight.position.set(2, 8, -2);
    this.scene.add(skylight);

    // Rim light
    const rim = new THREE.PointLight(0xc27a52, 1.2, 12);
    rim.position.set(4, 2, -3);
    this.scene.add(rim);

    // Subtle back fill
    const backFill = new THREE.PointLight(0x6a8aaa, 0.4, 10);
    backFill.position.set(-3, -1, -4);
    this.scene.add(backFill);
  }

  _addBust() {
    this.bust = new THREE.Group();
    const mat = this._createMarbleMaterial();

    // Head
    const headGeo = new THREE.IcosahedronGeometry(1.05, CONFIG.bustDetail);
    const head = new THREE.Mesh(headGeo, mat);
    head.position.set(0, 1.2, 0);
    head.castShadow = head.receiveShadow = true;
    this.bust.add(head);

    // Neck
    const neckGeo = new THREE.CylinderGeometry(0.38, 0.55, 0.6, 32);
    const neck = new THREE.Mesh(neckGeo, mat);
    neck.position.set(0, 0.6, 0);
    neck.castShadow = neck.receiveShadow = true;
    this.bust.add(neck);

    // Torso
    const torsoGeo = new THREE.CylinderGeometry(0.85, 1.1, 1.1, 32);
    const torso = new THREE.Mesh(torsoGeo, mat);
    torso.position.set(0, -0.05, 0);
    torso.castShadow = torso.receiveShadow = true;
    this.bust.add(torso);

    // Shoulder details
    const shoulderMatL = mat.clone();
    const shoulderGeoL = new THREE.SphereGeometry(0.35, 16, 16);
    const shoulderL = new THREE.Mesh(shoulderGeoL, shoulderMatL);
    shoulderL.position.set(-0.95, 0.25, 0);
    shoulderL.scale.set(1, 0.7, 0.8);
    shoulderL.castShadow = true;
    this.bust.add(shoulderL);

    const shoulderR = new THREE.Mesh(shoulderGeoL.clone(), shoulderMatL);
    shoulderR.position.set(0.95, 0.25, 0);
    shoulderR.scale.set(1, 0.7, 0.8);
    shoulderR.castShadow = true;
    this.bust.add(shoulderR);

    // Plinth
    const plinthGeo = new THREE.CylinderGeometry(1.15, 1.15, 0.12, 32);
    const plinth = new THREE.Mesh(plinthGeo, mat);
    plinth.position.set(0, -0.66, 0);
    plinth.castShadow = plinth.receiveShadow = true;
    this.bust.add(plinth);

    this.bust.position.set(0, 0, 0);
    this.scene.add(this.bust);
  }

  _createMarbleMaterial() {
    return new THREE.MeshPhongMaterial({
      color: 0xe8dcc8,
      specular: 0xffffff,
      shininess: 80,
      flatShading: false,
      emissive: 0x3a2e22,
      emissiveIntensity: 0.04,
    });
  }

  _addPedestal() {
    this.pedestal = new THREE.Group();
    const mat = new THREE.MeshPhongMaterial({
      color: 0xd4c4a8,
      specular: 0xaaaaaa,
      shininess: 20,
      emissive: 0x2a2018,
      emissiveIntensity: 0.05,
    });

    // Capital
    const capitalGeo = new THREE.BoxGeometry(1.6, 0.22, 1.6);
    const capital = new THREE.Mesh(capitalGeo, mat);
    capital.position.y = 0;
    capital.castShadow = capital.receiveShadow = true;
    this.pedestal.add(capital);

    // Shaft
    const shaftGeo = new THREE.CylinderGeometry(0.55, 0.7, 3.2, 24, 4);
    const shaft = new THREE.Mesh(shaftGeo, mat);
    shaft.position.y = -1.7;
    shaft.castShadow = shaft.receiveShadow = true;
    this.pedestal.add(shaft);

    // Flutes
    const fluteMat = new THREE.MeshPhongMaterial({ color: 0xb8a888, shininess: 10 });
    for (let i = 0; i < 20; i++) {
      const angle = (i / 20) * Math.PI * 2;
      const fluteGeo = new THREE.CylinderGeometry(0.06, 0.06, 3.0, 6);
      const flute = new THREE.Mesh(fluteGeo, fluteMat);
      flute.position.set(Math.cos(angle) * 0.6, -1.7, Math.sin(angle) * 0.6);
      this.pedestal.add(flute);
    }

    // Base
    const baseGeo = new THREE.BoxGeometry(2.2, 0.3, 2.2);
    const base = new THREE.Mesh(baseGeo, mat);
    base.position.y = -3.45;
    base.castShadow = base.receiveShadow = true;
    this.pedestal.add(base);

    this.pedestal.position.set(0, -0.72, 0);
    this.scene.add(this.pedestal);
  }

  _addParticles() {
    const COUNT = CONFIG.particleCount;
    const SPREAD = CONFIG.particleSpread;
    const positions = new Float32Array(COUNT * 3);
    const speeds = new Float32Array(COUNT);

    for (let i = 0; i < COUNT; i++) {
      positions[i * 3] = (Math.random() - 0.5) * SPREAD;
      positions[i * 3 + 1] = (Math.random() - 0.5) * SPREAD;
      positions[i * 3 + 2] = (Math.random() - 0.5) * SPREAD;
      speeds[i] = Math.random() * 0.0006 + 0.0002;
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    // Store speeds for per-particle drift
    this._particleSpeeds = speeds;

    const mat = new THREE.PointsMaterial({
      color: 0xd4b88a,
      size: 0.035,
      transparent: true,
      opacity: 0.5,
      depthWrite: false,
      sizeAttenuation: true,
    });

    this.particles = new THREE.Points(geo, mat);
    this.scene.add(this.particles);
  }

  _addFloor() {
    const geo = new THREE.PlaneGeometry(30, 30);
    const mat = new THREE.MeshStandardMaterial({
      color: 0x1e1810,
      roughness: 0.95,
      metalness: 0.0,
    });
    const floor = new THREE.Mesh(geo, mat);
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = -4.2;
    floor.receiveShadow = true;
    this.scene.add(floor);
  }

  _setupMouse() {
    let ticking = false;
    window.addEventListener('mousemove', (e) => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        this.mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
        this.mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
        ticking = false;
      });
    }, { passive: true });
  }

  _onResize() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(w, h);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  }

  animate() {
    requestAnimationFrame(() => this.animate());

    const elapsed = this.clock.getElapsedTime();

    // Smooth mouse interpolation
    this.mouseSmooth.x += (this.mouse.x - this.mouseSmooth.x) * 0.04;
    this.mouseSmooth.y += (this.mouse.y - this.mouseSmooth.y) * 0.04;

    // Bust idle rotation + floating
    if (this.bust) {
      this.bust.rotation.y += CONFIG.idleRotationSpeed;
      this.bust.position.y = Math.sin(elapsed * 0.4) * 0.04;
    }

    // Particle drift
    if (this.particles) {
      const pos = this.particles.geometry.attributes.position.array;
      const speeds = this._particleSpeeds;
      for (let i = 0; i < pos.length / 3; i++) {
        const idx = i * 3;
        pos[idx + 1] += speeds[i]; // varying drift speed
        if (pos[idx + 1] > 7) pos[idx + 1] = -7;
        pos[idx] += Math.sin(elapsed * 0.3 + i) * 0.00015;
      }
      this.particles.geometry.attributes.position.needsUpdate = true;
      this.particles.rotation.y = elapsed * 0.012;
    }

    // Camera look-at (smoothly follows scroll + mouse offset)
    if (window._scrollRigLookAt) {
      this.lookAtTarget.lerp(window._scrollRigLookAt, 0.04);
    }

    // Apply mouse parallax to camera position offset
    const parallaxX = this.mouseSmooth.x * CONFIG.mouseParallax;
    const parallaxY = this.mouseSmooth.y * CONFIG.mouseParallax * 0.5;

    // Create a temporary look target with parallax applied
    const lookX = this.lookAtTarget.x + parallaxX * 0.3;
    const lookY = this.lookAtTarget.y + parallaxY * 0.3;
    this.camera.lookAt(lookX, lookY, this.lookAtTarget.z);

    this.renderer.render(this.scene, this.camera);
  }
}

/* ============================================================
   2. GSAP SCROLL RIG
   ============================================================ */
class ScrollRig {
  constructor(threeScene) {
    this.scene = threeScene;
    this.camera = threeScene.camera;
    this.timeline = null;
  }

  init() {
    gsap.registerPlugin(ScrollTrigger);
    this._buildTimeline();
    this._buildSectionFades();
    this._buildNavDots();
    this._buildSectionCounter();
  }

  _buildTimeline() {
    const cam = this.camera;
    const keys = CONFIG.camera;

    this.timeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#scroll-container',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1.4,
        onUpdate: (self) => {
          this._updateLookAt(self.progress);
        },
      },
    });

    // 7 transitions between 8 sections
    for (let i = 0; i < keys.length - 1; i++) {
      this.timeline.to(cam.position, {
        x: keys[i + 1].x,
        y: keys[i + 1].y,
        z: keys[i + 1].z,
        ease: 'power2.inOut',
        duration: 1,
      }, i);
    }

    // Bust rotation across full scroll
    if (this.scene.bust) {
      this.timeline.to(this.scene.bust.rotation, {
        y: Math.PI * 2.5,
        ease: 'none',
        duration: keys.length - 1,
      }, 0);
    }
  }

  _updateLookAt(progress) {
    const lookAtY = THREE.MathUtils.lerp(CONFIG.lookAtStartY, CONFIG.lookAtEndY, progress);
    // Slight X sway based on progress for cinematic feel
    const lookAtX = Math.sin(progress * Math.PI * 2) * 0.3;

    if (!window._scrollRigLookAt) {
      window._scrollRigLookAt = new THREE.Vector3(lookAtX, lookAtY, 0);
    } else {
      window._scrollRigLookAt.set(lookAtX, lookAtY, 0);
    }
  }

  _buildSectionFades() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );

    document.querySelectorAll('.fade-in-up').forEach((el) => observer.observe(el));
  }

  _buildNavDots() {
    const dots = document.querySelectorAll('.nav-dot');
    const sections = [];

    dots.forEach((dot) => {
      const sectionId = dot.dataset.section;
      const section = document.getElementById(sectionId);
      if (section) sections.push({ dot, section });

      // Click to scroll to section
      dot.addEventListener('click', () => {
        const target = document.getElementById(sectionId);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });

    // Track active section
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const activeId = entry.target.id;
            dots.forEach((d) => {
              d.classList.toggle('active', d.dataset.section === activeId);
            });
          }
        });
      },
      { threshold: 0.4 }
    );

    sections.forEach(({ section }) => sectionObserver.observe(section));
  }

  _buildSectionCounter() {
    const counterEl = document.getElementById('counter-current');
    const sections = document.querySelectorAll('.scroll-section');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Array.from(sections).indexOf(entry.target);
            if (index >= 0 && counterEl) {
              counterEl.textContent = String(index + 1).padStart(2, '0');
            }
          }
        });
      },
      { threshold: 0.4 }
    );

    sections.forEach((s) => observer.observe(s));
  }
}

/* ============================================================
   3. LOADING SCREEN
   ============================================================ */
function hideLoadingScreen() {
  const screen = document.getElementById('loading-screen');
  if (!screen) return;

  setTimeout(() => {
    screen.classList.add('hidden');
    screen.addEventListener('transitionend', () => screen.remove(), { once: true });
  }, 1200);
}

/* ============================================================
   4. BOOTSTRAP
   ============================================================ */
(function main() {
  const threeScene = new ThreeScene();
  threeScene.init();
  threeScene.animate();

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      hideLoadingScreen();
    });
  });

  window.addEventListener('load', () => {
    const scrollRig = new ScrollRig(threeScene);
    scrollRig.init();
  });

  document.body.classList.remove('is-loading');
})();
