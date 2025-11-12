/**
 * Vue 3 + Tailwind + Bootstrap Snippets Extension
 * 
 * This extension provides comprehensive snippets for:
 * - Vue 3 with Composition API and TypeScript
 * - Tailwind CSS 3 & 4
 * - Bootstrap 5 & 6
 * - Modern HTML5, Pug, and Razor
 */

const vscode = require('vscode');

/**
 * Extension activation
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	console.log('Vue 3 + Tailwind + Bootstrap Snippets extension is now active!');
	
	// Register any commands here if needed in the future
	const disposable = vscode.commands.registerCommand('vue-snippets.showInfo', () => {
		vscode.window.showInformationMessage(
			'Vue 3 + Tailwind + Bootstrap Snippets is active! Type snippet prefixes to use them.'
		);
	});
	
	context.subscriptions.push(disposable);
}

/**
 * Extension deactivation
 */
function deactivate() {
	console.log('Vue 3 + Tailwind + Bootstrap Snippets extension is deactivated.');
}

module.exports = {
	activate,
	deactivate
};
