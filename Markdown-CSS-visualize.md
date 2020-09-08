At the top of the Markdown annotated document, you can put the following style. Note, there are ways to do it in a general way for the whole VSC.

```html
<style>
.definition {
    color: red;
    background-color: #ffff00;
    border-radius: 3px;
    padding-left: 3px;
    padding-right: 3px;
    margin-left: 3px;
    margin-right: 3px;
    box-shadow: 2px 2px 2px 1px #aaaaaa88, inset 2px 2px 1px 2px rgba(254, 255, 255, 0.33);    
}
.important {
    color: red;
    background-color: #ffffaa88;
    border-radius: 5px;
    padding-left: 3px;
    padding-right: 3px;
    margin-left: 3px;
    margin-right: 3px;
    box-shadow: 2px 2px 2px 1px #ffff7788, inset 2px 2px 1px 2px rgba(254, 255, 255, 0.33);    
}

.comment {
    color: blue;
    background-color: #aaaaff88;
    border-radius: 5px;
    padding-left: 3px;
    padding-right: 3px;
    margin-left: 3px;
    margin-right: 3px;
    box-shadow: 2px 2px 2px 1px #aaaaff88, inset 2px 2px 1px 2px rgba(254, 255, 255, 0.33);    
}
</style>
```