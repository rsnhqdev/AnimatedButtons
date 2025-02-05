var urlStruct = {
    'instagram' : '#',
    'x-twitter' : '#',
    'github' : '#',
    'youtube' : '#'
}

function buttonClick(value) {
    window.open(urlStruct[value], "_self")
}