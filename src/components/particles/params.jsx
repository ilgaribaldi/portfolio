const particlesParams = {
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: '#000',
    },
    shape: {
      type: 'circle',
      stroke: {
        width: 0,
        color: '#000',
      },
      polygon: {
        nb_sides: 5,
      },
      image: {
        src: 'img/github.svg',
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 3,
      random: false,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: '#000',
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 3,
      direction: 'none',
      random: false,
      straight: false,
      out_mode: 'bounce',
      bounce: true,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: 'parent',
    events: {
      onhover: {
        enable: false,
        mode: 'repulse',
      },
      onclick: {
        enable: true,
        mode: 'push',
      },
      resize: false,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
  fullScreen: {
    enable: false, 
  },
};

const seaAnemoneParams = {
  particles: {
    number: {
      value: 200,
      density: {
        enable: true,
        value_area: 1000,
      },
    },
    color: {
      value: '#FF677C', // Sea anemone color, change to your desired color
    },
    shape: {
      type: 'square',
    },
    opacity: {
      value: 0.1,
      random: true,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 10, // Change to desired size
      random: false,
      anim: {
        enable: false,
        speed: 10, // Change to desired speed
        size_min: 5, // Change to desired minimum size
        sync: false,
      },
    },
    line_linked: {
      enable: false,
    },
    move: {
      enable: true,
      speed: 1,
      direction: 'top',
      random: false,
      straight: true,
      out_mode: 'out',
      attract: {
        enable: false,
        rotateX: 300,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: 'parent',
    events: {
      onhover: {
        enable: true,
        mode: 'bubble',
      },
      onclick: {
        enable: false,
      },
    },
    modes: {
      bubble: {
        distance: 100,
        size: 20,
        duration: 2,
        opacity: 1,
        speed: 3,
      },
    },
  },
  retina_detect: true,
  fullScreen: {
    enable: false,
  },
};

const hexagonParams = {
  autoPlay: true,
  background: {
    color: {
      value: "transparent"
    },
    image: "",
    position: "",
    repeat: "no-repeat",
    size: "cover",
    opacity: 1
  },
  backgroundMask: {
    composite: "destination-out",
    cover: {
      color: {
        value: "transparent"
      },
      opacity: 1
    },
    enable: false
  },
  defaultThemes: {},
  delay: 0,
  fullScreen: {
    enable: false,
    zIndex: 1,
  },
  detectRetina: true,
  duration: 0,
  fpsLimit: 120,
  interactivity: {
    detect_on: "parent",
    events: {
      onClick: {
        enable: false,
        mode: []
      },
      onDiv: {
        selectors: [],
        enable: false,
        mode: [],
        type: "circle"
      },
      onHover: {
        enable: false,
        mode: [],
        parallax: {
          enable: false,
          force: 2,
          smooth: 10
        }
      },
      resize: {
        delay: 0.5,
        enable: true
      }
    },
    modes: {
      attract: {
        distance: 200,
        duration: 0.4,
        easing: "ease-out-quad",
        factor: 1,
        maxSpeed: 50,
        speed: 1
      },
      bounce: {
        distance: 200
      },
      bubble: {
        distance: 200,
        duration: 0.4,
        mix: false,
        divs: {
          distance: 200,
          duration: 0.4,
          mix: false,
          selectors: []
        }
      },
      connect: {
        distance: 80,
        links: {
          opacity: 0.5
        },
        radius: 60
      },
      grab: {
        distance: 100,
        links: {
          blink: false,
          consent: false,
          opacity: 1
        }
      },
      push: {
        default: true,
        groups: [],
        quantity: 4
      },
      remove: {
        quantity: 2
      },
      repulse: {
        distance: 200,
        duration: 0.4,
        factor: 100,
        speed: 1,
        maxSpeed: 50,
        easing: "ease-out-quad",
        divs: {
          distance: 200,
          duration: 0.4,
          factor: 100,
          speed: 1,
          maxSpeed: 50,
          easing: "ease-out-quad",
          selectors: []
        }
      },
      slow: {
        factor: 3,
        radius: 200
      },
      trail: {
        delay: 1,
        pauseOnStop: false,
        quantity: 1
      },
      light: {
        area: {
          gradient: {
            start: {
              value: "transparent"
            },
            stop: {
              value: "transparent"
            }
          },
          radius: 1000
        },
        shadow: {
          color: {
            value: "transparent"
          },
          length: 2000
        }
      }
    }
  },
  manualParticles: [],
  particles: {
    bounce: {
      horizontal: {
        random: {
          enable: false,
          minimumValue: 0.1
        },
        value: 1
      },
      vertical: {
        random: {
          enable: false,
          minimumValue: 0.1
        },
        value: 1
      }
    },
    collisions: {
      absorb: {
        speed: 2
      },
      bounce: {
        horizontal: {
          random: {
            enable: false,
            minimumValue: 0.1
          },
          value: 1
        },
        vertical: {
          random: {
            enable: false,
            minimumValue: 0.1
          },
          value: 1
        }
      },
      enable: false,
      mode: "bounce",
      overlap: {
        enable: true,
        retries: 0
      }
    },
    color: {
      value: "#FF0000",
      animation: {
        h: {
          count: 0,
          enable: true,
          offset: 0,
          speed: 10,
          decay: 0,
          sync: true
        },
        s: {
          count: 0,
          enable: false,
          offset: 0,
          speed: 1,
          decay: 0,
          sync: true
        },
        l: {
          count: 0,
          enable: false,
          offset: 0,
          speed: 1,
          decay: 0,
          sync: true
        }
      }
    },
    groups: {},
    move: {
      angle: {
        offset: 0,
        value: 90
      },
      attract: {
        distance: 200,
        enable: true,
        rotate: {
          x: 2000,
          y: 2000
        }
      },
      center: {
        x: 50,
        y: 50,
        mode: "percent",
        radius: 0
      },
      decay: 0,
      distance: {},
      direction: "none",
      drift: 0,
      enable: true,
      gravity: {
        acceleration: 9.81,
        enable: false,
        inverse: false,
        maxSpeed: 50
      },
      path: {
        clamp: false,
        delay: {
          random: {
            enable: false,
            minimumValue: 0
          },
          value: 0
        },
        enable: true,
        options: {
          sides: 6,
          turnSteps: 30,
          angle: 30
        },
        generator: "polygonPathGenerator"
      },
      outModes: {
        default: "bounce",
        bottom: "bounce",
        left: "bounce",
        right: "bounce",
        top: "bounce"
      },
      random: false,
      size: false,
      speed: 3,
      spin: {
        acceleration: 0,
        enable: false
      },
      straight: false,
      trail: {
        enable: true,
        length: 20,
        fill: {
          color: {
            value: "#fff"
          }
        }
      },
      vibrate: false,
      warp: false
    },
    number: {
      density: {
        enable: true,
        width: 1920,
        height: 1080
      },
      limit: 10,
      value: 0
    },
    opacity: {
      random: {
        enable: false,
        minimumValue: 0.1
      },
      value: 1,
      animation: {
        count: 0,
        enable: false,
        speed: 2,
        decay: 0,
        sync: false,
        destroy: "none",
        startValue: "random"
      }
    },
    reduceDuplicates: false,
    shadow: {
      blur: 0,
      color: {
        value: "#000"
      },
      enable: false,
      offset: {
        x: 0,
        y: 0
      }
    },
    shape: {
      options: {},
      type: "circle"
    },
    size: {
      random: {
        enable: false,
        minimumValue: 1
      },
      value: 2,
      animation: {
        count: 0,
        enable: false,
        speed: 5,
        decay: 0,
        sync: false,
        destroy: "none",
        startValue: "random"
      }
    },
    stroke: {
      width: 0
    },
    zIndex: {
      random: {
        enable: false,
        minimumValue: 0
      },
      value: 0,
      opacityRate: 1,
      sizeRate: 1,
      velocityRate: 1
    },
    life: {
      count: 0,
      delay: {
        random: {
          enable: false,
          minimumValue: 0
        },
        value: 0,
        sync: false
      },
      duration: {
        random: {
          enable: false,
          minimumValue: 0.0001
        },
        value: 0,
        sync: false
      }
    },
    rotate: {
      random: {
        enable: false,
        minimumValue: 0
      },
      value: 0,
      animation: {
        enable: false,
        speed: 0,
        decay: 0,
        sync: false
      },
      direction: "clockwise",
      path: false
    },
    destroy: {
      bounds: {},
      mode: "none",
      split: {
        count: 1,
        factor: {
          random: {
            enable: false,
            minimumValue: 0
          },
          value: 3
        },
        rate: {
          random: {
            enable: false,
            minimumValue: 0
          },
          value: {
            min: 4,
            max: 9
          }
        },
        sizeOffset: true,
        particles: {}
      }
    },
    roll: {
      darken: {
        enable: false,
        value: 0
      },
      enable: false,
      enlighten: {
        enable: false,
        value: 0
      },
      mode: "vertical",
      speed: 25
    },
    tilt: {
      random: {
        enable: false,
        minimumValue: 0
      },
      value: 0,
      animation: {
        enable: false,
        speed: 0,
        decay: 0,
        sync: false
      },
      direction: "clockwise",
      enable: false
    },
    twinkle: {
      lines: {
        enable: false,
        frequency: 0.05,
        opacity: 1
      },
      particles: {
        enable: false,
        frequency: 0.05,
        opacity: 1
      }
    },
    wobble: {
      distance: 5,
      enable: false,
      speed: {
        angle: 50,
        move: 10
      }
    },
    orbit: {
      animation: {
        count: 0,
        enable: false,
        speed: 1,
        decay: 0,
        sync: false
      },
      enable: false,
      opacity: 1,
      rotation: {
        random: {
          enable: false,
          minimumValue: 0
        },
        value: 45
      },
      width: 1
    },
    links: {
      blink: false,
      color: {
        value: "#fff"
      },
      consent: false,
      distance: 100,
      enable: false,
      frequency: 1,
      opacity: 1,
      shadow: {
        blur: 5,
        color: {
          value: "#000"
        },
        enable: false
      },
      triangles: {
        enable: false,
        frequency: 1
      },
      width: 1,
      warp: false
    },
    repulse: {
      random: {
        enable: false,
        minimumValue: 0
      },
      value: 0,
      enabled: false,
      distance: 1,
      duration: 1,
      factor: 1,
      speed: 1
    }
  },
  pauseOnBlur: true,
  pauseOnOutsideViewport: true,
  responsive: [],
  smooth: false,
  style: {},
  themes: [],
  zLayers: 100,
  emitters: {
    autoPlay: true,
    fill: true,
    life: {
      wait: false
    },
    rate: {
      quantity: 4,
      delay: 0.25
    },
    shape: "square",
    startCount: 0,
    size: {
      mode: "percent",
      height: 0,
      width: 0
    },
    direction: "none",
    particles: {},
    position: {
      x: 50,
      y: 50
    }
  },
}

export { particlesParams, seaAnemoneParams, hexagonParams };
