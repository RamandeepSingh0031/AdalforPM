import { useEffect, useRef } from 'react';

export default function ShaderFlow({
  xScale = 1,
  yScale = 0.5,
  distortion = 0.05,
  speed = 0.01
}) {
  const canvasRef = useRef(null);
  const propsRef = useRef({ xScale, yScale, distortion, speed });
  const sceneRef = useRef({
    gl: null,
    program: null,
    uniforms: {
      resolution: null,
      time: null,
      xScale: null,
      yScale: null,
      distortion: null
    },
    animationId: null,
    timeValue: 0
  });

  useEffect(() => {
    propsRef.current = { xScale, yScale, distortion, speed };
  }, [xScale, yScale, distortion, speed]);

  useEffect(() => {
    if (typeof window === 'undefined' || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const { current: refs } = sceneRef;
    const gl = canvas.getContext('webgl', {
      alpha: true,
      antialias: false,
      preserveDrawingBuffer: false
    });

    if (!gl) return;
    refs.gl = gl;

    const vertexShaderSource = `
      attribute vec2 position;
      void main() {
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `;

    const fragmentShaderSource = `
      precision highp float;
      uniform vec2 resolution;
      uniform float time;
      uniform float xScale;
      uniform float yScale;
      uniform float distortion;

      void main() {
        vec2 p = (gl_FragCoord.xy * 2.0 - resolution) / min(resolution.x, resolution.y);

        float d = length(p) * distortion;

        float rx = p.x * (1.0 + d);
        float gx = p.x;
        float bx = p.x * (1.0 - d);

        float r = 0.05 / abs(p.y + sin((rx + time) * xScale) * yScale);
        float g = 0.05 / abs(p.y + sin((gx + time) * xScale) * yScale);
        float b = 0.05 / abs(p.y + sin((bx + time) * xScale) * yScale);

        gl_FragColor = vec4(r, g, b, 1.0);
      }
    `;

    const createShader = (type, source) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);

      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        gl.deleteShader(shader);
        return null;
      }

      return shader;
    };

    const vertexShader = createShader(gl.VERTEX_SHADER, vertexShaderSource);
    const fragmentShader = createShader(gl.FRAGMENT_SHADER, fragmentShaderSource);
    if (!vertexShader || !fragmentShader) return;

    const program = gl.createProgram();
    if (!program) return;

    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return;

    refs.program = program;
    gl.useProgram(program);

    const positions = new Float32Array([
      -1, -1,
      1, -1,
      -1, 1,
      1, -1,
      -1, 1,
      1, 1
    ]);

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);

    const positionLocation = gl.getAttribLocation(program, 'position');
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    refs.uniforms.resolution = gl.getUniformLocation(program, 'resolution');
    refs.uniforms.time = gl.getUniformLocation(program, 'time');
    refs.uniforms.xScale = gl.getUniformLocation(program, 'xScale');
    refs.uniforms.yScale = gl.getUniformLocation(program, 'yScale');
    refs.uniforms.distortion = gl.getUniformLocation(program, 'distortion');

    const handleResize = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;

      canvas.width = width * window.devicePixelRatio;
      canvas.height = height * window.devicePixelRatio;

      gl.viewport(0, 0, canvas.width, canvas.height);
      if (refs.uniforms.resolution) {
        gl.uniform2f(refs.uniforms.resolution, canvas.width, canvas.height);
      }
    };

    const animate = () => {
      refs.timeValue += propsRef.current.speed;

      if (refs.uniforms.time) gl.uniform1f(refs.uniforms.time, refs.timeValue);
      if (refs.uniforms.xScale) gl.uniform1f(refs.uniforms.xScale, propsRef.current.xScale);
      if (refs.uniforms.yScale) gl.uniform1f(refs.uniforms.yScale, propsRef.current.yScale);
      if (refs.uniforms.distortion) gl.uniform1f(refs.uniforms.distortion, propsRef.current.distortion);

      gl.drawArrays(gl.TRIANGLES, 0, 6);
      refs.animationId = requestAnimationFrame(animate);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    animate();

    return () => {
      if (refs.animationId) cancelAnimationFrame(refs.animationId);
      window.removeEventListener('resize', handleResize);

      if (gl && refs.program) gl.deleteProgram(refs.program);
      if (gl && vertexShader) gl.deleteShader(vertexShader);
      if (gl && fragmentShader) gl.deleteShader(fragmentShader);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ width: '100%', height: '100%', display: 'block', backgroundColor: '#050505' }} />;
}
