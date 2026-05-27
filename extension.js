const vscode = require('vscode');

function activate(context) {
	const provider = vscode.languages.registerDocumentSymbolProvider({ language: '1c77' }, {
		provideDocumentSymbols(document, token) {
			const symbols = [];
			const regex = /^\s*(?:Процедура|Функция)\s+([A-Za-zА-Яа-я0-9_]+)/i;

			for (let i = 0; i < document.lineCount; i++) {
				const line = document.lineAt(i);
				const match = regex.exec(line.text);
				if (match) {
					const name = match[1];
					const pos = new vscode.Position(i, line.text.indexOf(name));
					symbols.push(new vscode.DocumentSymbol(
						name,
						line.text.trim(),
						vscode.SymbolKind.Function,
						line.range,
						new vscode.Range(pos, pos.translate(0, name.length))
					));
				}
			}
			return symbols;
		}
	});
	context.subscriptions.push(provider);
}

function deactivate() {}

module.exports = { activate, deactivate };