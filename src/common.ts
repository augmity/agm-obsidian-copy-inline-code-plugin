const createSVGElement = (shapeDef: string) => {
	const svgNS = "http://www.w3.org/2000/svg";
	const svg = document.createElementNS(svgNS, "svg");
	// svg.setAttribute("width", "16");
	// svg.setAttribute("height", "16");
	svg.setAttribute("viewBox", "0 -960 960 960");

	// Create an SVG path element
	const path = document.createElementNS(svgNS, "path");
	path.setAttribute("d", shapeDef);

	// Append the path to the SVG element
	svg.appendChild(path);

	return svg;
};

export const createClipboardIcon = () => {
	const svg = createSVGElement("M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z");
    const icon = createSpan({
        cls: "copy-to-clipboard-icon",
    });
    icon.appendChild(svg);
    return icon;
};

export const createOpenLinkIcon = () => {
    const svg = createSVGElement("M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z");
    const icon = createSpan({
        cls: "open-link-icon",
    });
    icon.appendChild(svg);
    return icon;
};

