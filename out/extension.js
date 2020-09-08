'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = void 0;
const vscode = require("vscode");
/** gets user's text selection and returns it as an @see `ISelectionContext` interface */
function getSelectedText() {
    // Get the active text editor
    let editor = vscode.window.activeTextEditor;
    if (editor) {
        let document = editor.document;
        let selection = editor.selection;
        // Get the text within the selection
        let text = document.getText(selection);
        let selectionContext = {
            editor: editor,
            selection: selection,
            text: text
        };
        return selectionContext;
    }
    else {
        return undefined;
    }
}
/** performs the action of replacing user selected text (described with `selectionContext`) with text `text` */
function replaceSelectedText(selectionContext, text) {
    // Get the active text editor
    let editor = vscode.window.activeTextEditor;
    if (editor) {
        editor.edit(editBuilder => {
            editBuilder.replace(selectionContext.selection, text);
        });
    }
}
/** Function that annotates currently selected text */
function annotateDefinition() {
    let selectionContext = getSelectedText();
    if (selectionContext && selectionContext.text) {
        let prefix = "<span class='definition'>";
        let sufix = "</span>";
        let replacement = prefix + selectionContext.text + sufix;
        replaceSelectedText(selectionContext, replacement);
    }
}
function annotateImportant() {
    let selectionContext = getSelectedText();
    if (selectionContext && selectionContext.text) {
        let prefix = "<span class='important'>";
        let sufix = "</span>";
        let replacement = prefix + selectionContext.text + sufix;
        replaceSelectedText(selectionContext, replacement);
    }
}
function annotateError() {
    let selectionContext = getSelectedText();
    if (selectionContext && selectionContext.text) {
        let prefix = "<span class='error' data-replacement='' data-comment=''>";
        let sufix = "</span>";
        let replacement = prefix + selectionContext.text + sufix;
        replaceSelectedText(selectionContext, replacement);
    }
}
function annotateComment() {
    let selectionContext = getSelectedText();
    if (selectionContext) {
        let prefix = "<span class='comment' data-comment=''>";
        let sufix = "</span>";
        let replacement = prefix + selectionContext.text + sufix;
        replaceSelectedText(selectionContext, replacement);
    }
}
function annotateBold() {
    let selectionContext = getSelectedText();
    if (selectionContext && selectionContext.text) {
        let prefix = "<span class='bold'>";
        let sufix = "</span>";
        let replacement = prefix + selectionContext.text + sufix;
        replaceSelectedText(selectionContext, replacement);
    }
}
function annotateItalic() {
    let selectionContext = getSelectedText();
    if (selectionContext && selectionContext.text) {
        let prefix = "<span class='italic'>";
        let sufix = "</span>";
        let replacement = prefix + selectionContext.text + sufix;
        replaceSelectedText(selectionContext, replacement);
    }
}
function nativeBold() {
    let selectionContext = getSelectedText();
    if (selectionContext && selectionContext.text) {
        let prefix = "**";
        let sufix = "**";
        let replacement = prefix + selectionContext.text + sufix;
        replaceSelectedText(selectionContext, replacement);
    }
}
function nativeItalic() {
    let selectionContext = getSelectedText();
    if (selectionContext && selectionContext.text) {
        let prefix = "*";
        let sufix = "*";
        let replacement = prefix + selectionContext.text + sufix;
        replaceSelectedText(selectionContext, replacement);
    }
}
function activate(context) {
    let annotateDefinitionCommand = vscode.commands
        .registerCommand('extension.annotateDefinition', annotateDefinition);
    let annotateImportantCommand = vscode.commands
        .registerCommand('extension.annotateImportant', annotateImportant);
    let annotateErrorCommand = vscode.commands
        .registerCommand('extension.annotateError', annotateError);
    let annotateCommentCommand = vscode.commands
        .registerCommand('extension.annotateComment', annotateComment);
    let annotateBoldCommand = vscode.commands
        .registerCommand('extension.annotateBold', annotateBold);
    let annotateItalicCommand = vscode.commands
        .registerCommand('extension.annotateItalic', annotateItalic);
    let nativeBoldCommand = vscode.commands
        .registerCommand('extension.nativeBold', nativeBold);
    let nativeItalicCommand = vscode.commands
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
exports.activate = activate;
//# sourceMappingURL=extension.js.map