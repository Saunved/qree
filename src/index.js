function $(s){
    return document.querySelector(s);
}

function $$(s){
    return document.querySelectorAll(s);
}

try{
        module.exports = exports = { $: $, $$: $$}
}
catch(e){}