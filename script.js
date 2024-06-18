let animationInterval;
let airResistance;
const scaleFactor = 5; // Scale factor to convert meters to pixels
let maxHeightY = null; // This will store the y-coordinate of the highest point reached

document
  .getElementById('simulation-form')
  .addEventListener('submit', function (event) {
    event.preventDefault();
    const initialHeight = parseFloat(
      document.getElementById('initial_height').value
    );
    const initialVelocity = parseFloat(
      document.getElementById('initial_velocity').value
    );
    const launchAngle = parseFloat(
      document.getElementById('launch_angle').value
    );
    airResistance = parseFloat(document.getElementById('air_resistance').value);
    if (animationInterval) clearInterval(animationInterval);
    startSimulation(initialHeight, initialVelocity, launchAngle, airResistance);
  });

function startSimulation(
  initialHeight,
  initialVelocity,
  launchAngle,
  airResistanceValue
) {
  const g = 9.81;
  const container = document.getElementById('simulation-container');
  const canvas = document.getElementById('simulation-canvas');
  const context = canvas.getContext('2d');
  canvas.width = container.clientWidth;
  canvas.height = container.clientHeight;
  const ball = document.getElementById('ball');
  const groundY = canvas.height;
  const ballRadius = 10;
  let t = 0;
  let logInterval = 0.2;
  let lastLogTime = 0;
  const dt = 0.02;
  const initialVelocityX =
    initialVelocity * Math.cos((launchAngle * Math.PI) / 180);
  const initialVelocityY =
    -initialVelocity * Math.sin((launchAngle * Math.PI) / 180);
  const initialX = canvas.width / 2;
  let x = initialX;
  let y = canvas.height - initialHeight * scaleFactor;
  let velocityX = initialVelocityX;
  let velocityY = initialVelocityY;
  let velocityHistoryList = document.getElementById('velocity-history');
  velocityHistoryList.innerHTML = '';
  let previousPositions = [];

  function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Draw height scale on the left
    context.beginPath();
    context.strokeStyle = 'black';
    context.fillStyle = 'black';
    context.font = '12px Arial';
    for (let i = 0; i <= 500; i += 10) {
      const yPos = canvas.height - i * scaleFactor;
      context.moveTo(0, yPos);
      context.lineTo(10, yPos);
      context.stroke();
      context.fillText(i.toString(), 15, yPos + 4);
    }

    // Draw trajectory
    context.beginPath();
    context.moveTo(initialX, canvas.height - initialHeight * scaleFactor);
    previousPositions.forEach(pos => {
      context.lineTo(pos.x, pos.y);
    });
    context.strokeStyle = 'blue';
    context.stroke();

    // Draw highest point marker
    if (maxHeightY !== null) {
      context.beginPath();
      context.moveTo(0, maxHeightY);
      context.lineTo(canvas.width, maxHeightY);
      context.strokeStyle = 'red';
      context.stroke();
    }

    // Draw ball
    context.beginPath();
    context.arc(x, y, ballRadius, 0, 2 * Math.PI);
    context.fillStyle = 'blue';
    context.fill();
    context.closePath();
  }

  function updateInfo() {
    const velocity = Math.sqrt(velocityX ** 2 + velocityY ** 2);
    const currentHeight = (canvas.height - y) / scaleFactor;
    if (maxHeightY === null || y < maxHeightY) {
      maxHeightY = y; // Update the highest y-coordinate
    }
    document.getElementById('time-info').innerText = `Time: ${t.toFixed(2)} s`;
    document.getElementById(
      'velocity-info'
    ).innerText = `Velocity: ${velocity.toFixed(2)} m/s`;
    document.getElementById('position-info').innerText = `Position: (${(
      x / scaleFactor
    ).toFixed(2)}, ${currentHeight.toFixed(2) * 0}) m`;

    if (t - lastLogTime >= logInterval) {
      lastLogTime = t;
      let li = document.createElement('li');
      li.textContent = `Time: ${t.toFixed(1)} s, Velocity: ${velocity.toFixed(
        2
      )} m/s, Height: ${currentHeight.toFixed(2)} m`;
      velocityHistoryList.appendChild(li);
    }
  }

  function update() {
    t += dt;
    velocityX -= airResistance * velocityX * dt;
    velocityY += g * dt - airResistance * velocityY * dt;
    x += velocityX * dt * scaleFactor;
    y += velocityY * dt * scaleFactor;

    if (y + ballRadius >= groundY) {
      y = groundY - ballRadius;
      clearInterval(animationInterval);
      // alert(`Simulation ended. Maximum height reached: ${((canvas.height - maxHeightY) / scaleFactor).toFixed(2)} m`);
    } else {
      previousPositions.push({ x: x, y: y });
    }

    draw();
    updateInfo();
  }

  draw();
  animationInterval = setInterval(update, dt * 1000);
}

const checkbox = document.getElementById('checkbox');
checkbox.addEventListener('change', () => {
  document.body.classList.toggle('dark');
});
