can be used in VSC, set through settings: https://code.visualstudio.com/docs/languages/markdown#_using-your-own-css

Created github pages (a separate branch) and served:
+ https://litterra.github.io/vsc-annotata/styles/default/main.css

```json
{
	"markdown.styles": ["https://litterra.github.io/vsc-annotata/styles/default/main.css"],
}
```

+ https://raw.githubusercontent.com/LitTerra/vsc-annotata/master/src/styles/default/main.css
+ `curl -I https://raw.githubusercontent.com/LitTerra/vsc-annotata/master/src/styles/default/main.css`
  + this doesn't work
	+ [Error loading css styles from URLs #82924](https://github.com/microsoft/vscode/issues/82924)
	+ [Cannot load css style sheets in `markdown.styles` #538](https://github.com/yzhang-gh/vscode-markdown/issues/538)
	+ [GitHub raw file is MIME type text/plain and will not execute in new browsers #5](https://github.com/zaius/youtube_playlist/issues/5)


http://cdn.jsdelivr.net/gh/LitTerra/vsc-annotata/src/styles/default/main.css
+ `curl -I http://cdn.jsdelivr.net/gh/LitTerra/vsc-annotata/src/styles/default/main.css`
+ Doesn't work
+ https://stackoverflow.com/questions/17341122/link-and-execute-external-javascript-file-hosted-on-github

Solutions
+ https://rawgit.com/
+ https://unpkg.com/
  + unpkg is a fast, global content delivery network for everything on npm. Use it to quickly and easily load any file from any package using a URL like:
+ https://pages.github.com/