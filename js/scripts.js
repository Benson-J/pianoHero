var noteCount = 0

$(function() {
    dropNote()
})

function dropNote() {
    var $note
    $('section').prepend('<div class="note" id="' + noteCount + '"></div>')
    $note = $('#' + noteCount)
    noteCount++
    $note.animate({
        top: 550
    }, 2000, 'linear', function() {
        $note.remove()
        dropNote()
    })
}