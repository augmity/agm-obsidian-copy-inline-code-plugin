import { Notice, Plugin } from "obsidian";
import { copyPlugin as copyInlineCodePlugin } from "./copy-inline-code-view-plugin";
import { createClipboardIcon, createOpenLinkIcon } from "./common";

export default class CopyInlineCodePlugin extends Plugin {
	async onload() {
		this.registerEditorExtension([copyInlineCodePlugin]);
		this.registerMarkdownPostProcessor((element, context) => {
			const inlineCodes = element.querySelectorAll("*:not(pre) > code");

			inlineCodes.forEach((code) => {
				const text = code.textContent || "";

				// ** Copy to clipboard button **
				if (code.querySelector("span.copy-to-clipboard-icon")) {
					return;
				}

				const clipboardIcon = createClipboardIcon();

				clipboardIcon.onclick = (event) => {
					if (text) {
						event.stopPropagation();
						navigator.clipboard.writeText(text);
						new Notice(`Copied '${text}' to clipboard!`);
					}
				};

				code.appendChild(clipboardIcon);

				// ** Open link button **
				const windowsPathRegex =
					/^(?:[a-zA-Z]:)?(?:\\[^\\/:*?"<>|]+)+\\?$/;
				const isWindowsPath = windowsPathRegex.test(text);

				if (isWindowsPath) {
					if (code.querySelector("span.open-link-icon")) {
						return;
					}

					const openLinkIcon = createSpan({
						cls: "open-link-icon",
					});
					openLinkIcon.appendChild(createOpenLinkIcon());

					openLinkIcon.onclick = () => {
						window.open("file://" + text);
					};

					code.appendChild(openLinkIcon);
				}
			});
		});
	}
}
