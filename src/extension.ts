'use strict';

import * as vscode from 'vscode';

/** context for selection */
interface ISelectionContext{
	editor: vscode.TextEditor,
	/** currently selected text (as an object) */
	selection: vscode.Selection,
	/** currently selected text (pure text) */
	text: string|undefined
}

/** gets user's text selection and returns it as an @see `ISelectionContext` interface */
function getSelectedText():ISelectionContext|undefined{
	// Get the active text editor
	let editor = vscode.window.activeTextEditor;

	if (editor) {
		let document = editor.document;
		let selection = editor.selection;

		// Get the text within the selection
		let text = document.getText(selection);

		let selectionContext:ISelectionContext = {
			editor: <vscode.TextEditor>editor,
			selection: selection,
			text: text
		}
		return selectionContext;
	}else{
		return undefined;
	}
}

/** performs the action of replacing user selected text (described with `selectionContext`) with text `text` */
function replaceSelectedText(selectionContext:ISelectionContext, text:string){
	// Get the active text editor
	let editor = vscode.window.activeTextEditor;

	if (editor) {
		editor.edit(editBuilder => {
			editBuilder.replace(selectionContext.selection, text);
		});
	}
}

/** Function that annotates currently selected text */
function annotateDefinition(){
	let selectionContext:ISelectionContext|undefined = getSelectedText();
	if(selectionContext && selectionContext.text){
		let prefix:string = "<span class='definition'>";
		let sufix:string = "</span>";
		let replacement:string = prefix+selectionContext.text+sufix;
		replaceSelectedText(selectionContext, replacement);

	}
}

function annotateImportant(){
	let selectionContext:ISelectionContext|undefined = getSelectedText();
	if(selectionContext && selectionContext.text){
		let prefix:string = "<span class='important'>";
		let sufix:string = "</span>";
		let replacement:string = prefix+selectionContext.text+sufix;
		replaceSelectedText(selectionContext, replacement);

	}
}

function annotateError(){
	let selectionContext:ISelectionContext|undefined = getSelectedText();
	if(selectionContext && selectionContext.text){
		let prefix:string = "<span class='error' data-replacement='' data-comment=''>";
		let sufix:string = "</span>";
		let replacement:string = prefix+selectionContext.text+sufix;
		replaceSelectedText(selectionContext, replacement);

	}
}

function annotateComment(){
	let selectionContext:ISelectionContext|undefined = getSelectedText();
	if(selectionContext){
		let prefix:string = "<span class='comment' data-comment=''>";
		let sufix:string = "</span>";
		let replacement:string = prefix+selectionContext.text+sufix;
		replaceSelectedText(selectionContext, replacement);

	}
}

function annotateBold(){
	let selectionContext:ISelectionContext|undefined = getSelectedText();
	if(selectionContext && selectionContext.text){
		let prefix:string = "<span class='bold'>";
		let sufix:string = "</span>";
		let replacement:string = prefix+selectionContext.text+sufix;
		replaceSelectedText(selectionContext, replacement);

	}
}

function annotateItalic(){
	let selectionContext:ISelectionContext|undefined = getSelectedText();
	if(selectionContext && selectionContext.text){
		let prefix:string = "<span class='italic'>";
		let sufix:string = "</span>";
		let replacement:string = prefix+selectionContext.text+sufix;
		replaceSelectedText(selectionContext, replacement);

	}
}

function nativeBold(){
	let selectionContext:ISelectionContext|undefined = getSelectedText();
	if(selectionContext && selectionContext.text){
		let prefix:string = "**";
		let sufix:string = "**";
		let replacement:string = prefix+selectionContext.text+sufix;
		replaceSelectedText(selectionContext, replacement);

	}
}

function nativeItalic(){
	let selectionContext:ISelectionContext|undefined = getSelectedText();
	if(selectionContext && selectionContext.text){
		let prefix:string = "*";
		let sufix:string = "*";
		let replacement:string = prefix+selectionContext.text+sufix;
		replaceSelectedText(selectionContext, replacement);

	}
}

export function activate(context: vscode.ExtensionContext) {
	let annotateDefinitionCommand:vscode.Disposable = vscode.commands
		.registerCommand('extension.annotateDefinition', annotateDefinition);
	let annotateImportantCommand:vscode.Disposable = vscode.commands
	.registerCommand('extension.annotateImportant', annotateImportant);
	let annotateErrorCommand:vscode.Disposable = vscode.commands
	.registerCommand('extension.annotateError', annotateError);
	let annotateCommentCommand:vscode.Disposable = vscode.commands
	.registerCommand('extension.annotateComment', annotateComment);
	let annotateBoldCommand:vscode.Disposable = vscode.commands
	.registerCommand('extension.annotateBold', annotateBold);
	let annotateItalicCommand:vscode.Disposable = vscode.commands
	.registerCommand('extension.annotateItalic', annotateItalic);
	let nativeBoldCommand:vscode.Disposable = vscode.commands
	.registerCommand('extension.nativeBold', nativeBold);
	let nativeItalicCommand:vscode.Disposable = vscode.commands
	.registerCommand('extension.nativeItalic', nativeItalic);

	context.subscriptions.push(annotateDefinitionCommand);
	context.subscriptions.push(annotateImportantCommand);
	context.subscriptions.push(annotateErrorCommand);
	context.subscriptions.push(annotateCommentCommand);
	context.subscriptions.push(annotateBoldCommand);
	context.subscriptions.push(annotateItalicCommand);
	context.subscriptions.push(nativeBoldCommand);
	context.subscriptions.push(nativeItalicCommand);
}