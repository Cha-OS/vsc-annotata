"use strict";

import * as vscode from "vscode";

/** context for selection */
interface ISelectionContext {
	editor: vscode.TextEditor;
	/** currently selected text (as an object) */
	selection: vscode.Selection;
	/** currently selected text (pure text) */
	text: string | undefined;
}

/** gets user's text selection and returns it as an @see `ISelectionContext` interface */
function getSelectedText(): ISelectionContext | undefined {
	// Get the active text editor
	const editor = vscode.window.activeTextEditor;

	if (editor) {
		const document = editor.document;
		const selection = editor.selection;

		// Get the text within the selection
		const text = document.getText(selection);

		const selectionContext: ISelectionContext = {
			editor: <vscode.TextEditor>editor,
			selection: selection,
			text: text,
		};
		return selectionContext;
	} else {
		return undefined;
	}
}

/** performs the action of replacing user selected text (described with `selectionContext`) with text `text` */
function replaceSelectedText(selectionContext: ISelectionContext, text: string) {
	// Get the active text editor
	const editor = vscode.window.activeTextEditor;

	if (editor) {
		editor.edit((editBuilder) => {
			editBuilder.replace(selectionContext.selection, text);
		});
	}
}

/** Function that annotates currently selected text */
function annotateDefinition(): void {
	const selectionContext: ISelectionContext | undefined = getSelectedText();
	if (selectionContext && selectionContext.text) {
		const prefix = "<span class='definition'>";
		const sufix = "</span>";
		const replacement: string = prefix + selectionContext.text + sufix;
		replaceSelectedText(selectionContext, replacement);
	}
}

function annotateImportant(): void {
	const selectionContext: ISelectionContext | undefined = getSelectedText();
	if (selectionContext && selectionContext.text) {
		const prefix = "<span class='important'>";
		const sufix = "</span>";
		const replacement: string = prefix + selectionContext.text + sufix;
		replaceSelectedText(selectionContext, replacement);
	}
}

function annotateError(): void {
	const selectionContext: ISelectionContext | undefined = getSelectedText();
	if (selectionContext && selectionContext.text) {
		const prefix = "<span class='error' data-replacement='' data-comment=''>";
		const sufix = "</span>";
		const replacement: string = prefix + selectionContext.text + sufix;
		replaceSelectedText(selectionContext, replacement);
	}
}

function annotateComment(): void {
	const selectionContext: ISelectionContext | undefined = getSelectedText();
	if (selectionContext) {
		const prefix = "<span class='comment' data-comment=''>";
		const sufix = "</span>";
		const replacement: string = prefix + selectionContext.text + sufix;
		replaceSelectedText(selectionContext, replacement);
	}
}

function annotateBold(): void {
	const selectionContext: ISelectionContext | undefined = getSelectedText();
	if (selectionContext && selectionContext.text) {
		const prefix = "<span class='bold'>";
		const sufix = "</span>";
		const replacement: string = prefix + selectionContext.text + sufix;
		replaceSelectedText(selectionContext, replacement);
	}
}

function annotateItalic(): void {
	const selectionContext: ISelectionContext | undefined = getSelectedText();
	if (selectionContext && selectionContext.text) {
		const prefix = "<span class='italic'>";
		const sufix = "</span>";
		const replacement: string = prefix + selectionContext.text + sufix;
		replaceSelectedText(selectionContext, replacement);
	}
}

function nativeBold(): void {
	const selectionContext: ISelectionContext | undefined = getSelectedText();
	if (selectionContext && selectionContext.text) {
		const prefix = "**";
		const sufix = "**";
		const replacement: string = prefix + selectionContext.text + sufix;
		replaceSelectedText(selectionContext, replacement);
	}
}

function nativeItalic(): void {
	const selectionContext: ISelectionContext | undefined = getSelectedText();
	if (selectionContext && selectionContext.text) {
		const prefix = "*";
		const sufix = "*";
		const replacement: string = prefix + selectionContext.text + sufix;
		replaceSelectedText(selectionContext, replacement);
	}
}

export function activate(context: vscode.ExtensionContext): void {
	const annotateDefinitionCommand: vscode.Disposable = vscode.commands.registerCommand("extension.annotateDefinition", annotateDefinition);
	const annotateImportantCommand: vscode.Disposable = vscode.commands.registerCommand("extension.annotateImportant", annotateImportant);
	const annotateErrorCommand: vscode.Disposable = vscode.commands.registerCommand("extension.annotateError", annotateError);
	const annotateCommentCommand: vscode.Disposable = vscode.commands.registerCommand("extension.annotateComment", annotateComment);
	const annotateBoldCommand: vscode.Disposable = vscode.commands.registerCommand("extension.annotateBold", annotateBold);
	const annotateItalicCommand: vscode.Disposable = vscode.commands.registerCommand("extension.annotateItalic", annotateItalic);
	const nativeBoldCommand: vscode.Disposable = vscode.commands.registerCommand("extension.nativeBold", nativeBold);
	const nativeItalicCommand: vscode.Disposable = vscode.commands.registerCommand("extension.nativeItalic", nativeItalic);

	context.subscriptions.push(annotateDefinitionCommand);
	context.subscriptions.push(annotateImportantCommand);
	context.subscriptions.push(annotateErrorCommand);
	context.subscriptions.push(annotateCommentCommand);
	context.subscriptions.push(annotateBoldCommand);
	context.subscriptions.push(annotateItalicCommand);
	context.subscriptions.push(nativeBoldCommand);
	context.subscriptions.push(nativeItalicCommand);
}
