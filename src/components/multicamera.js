// Set a global alias for the camera and related elements.
ui.camera = {
	viewer: document.getElementById('camera'),
	id: 0,
	srcs: [ // Will default to first camera
        'http://frcvision.local:1181/stream.mjpg',
        'http://frcvision.local:1181/stream.mjpg',
        'http://frcvision.local:1181/stream.mjpg'
    ]
};

// Unlike most addons, this addon doesn't interact with NetworkTables. Therefore, we won't need to add any NT listeners.

// When camera is clicked on, change to the next source.
ui.camera.viewer.onclick = function() {
    ui.camera.id += 1;
	if (ui.camera.id === ui.camera.srcs.length) ui.camera.id = 0;
	ui.camera.viewer.style.backgroundImage = 'url(' + ui.camera.srcs[ui.camera.id] + ')';
};
// Set a global alias for the camera and related elements.
ui.camera2 = {
	viewer: document.getElementById('camera2'),
	id: 0,
	srcs: [ // Will default to first camera
        'http://frcvision.local:1184/stream.mjpg',
        'http://frcvision.local:1184/stream.mjpg',
        'http://frcvision.local:1184/stream.mjpg'
    ]
};

// Unlike most addons, this addon doesn't interact with NetworkTables. Therefore, we won't need to add any NT listeners.

// When camera is clicked on, change to the next source.
ui.camera2.viewer.onclick = function() {
    ui.camera2.id += 1;
	if (ui.camera2.id === ui.camera2.srcs.length) ui.camera2.id = 0;
	ui.camera2.viewer.style.backgroundImage = 'url(' + ui.camera2.srcs[ui.camera2.id] + ')';
};